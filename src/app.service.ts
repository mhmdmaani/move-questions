import { Injectable } from '@nestjs/common';
import { PrismaClient as OldPrismaClient } from '../old-prisma-client';
import { PrismaClient as NewPrismaClient } from '../new-prisma-client';
import * as crypto from 'crypto';
import { Prisma } from '../new-prisma-client';

@Injectable()
export class AppService {
  private readonly oldPrisma = new OldPrismaClient();
  private readonly newPrisma = new NewPrismaClient();

  private async handleDuplicateCreate<T>(
    operation: () => Promise<T>,
    context: string
  ): Promise<T | null> {
    try {
      return await operation();
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          console.log(`Skipping duplicate ${context}`);
          return null;
        }
      }
      throw error;
    }
  }

  async moveData() {
    console.log('Starting migration process...');
    
    try {
      await this.resetDatabase();
      await this.migrateActiveUsersData();
      
      return { success: true, message: 'Migration completed successfully' };
    } catch (error) {
      console.error('Migration failed:', error);
      throw error;
    }
  }

  private generateSecurePassword(length = 32) {
    return crypto.randomBytes(length).toString('hex');
  }

  async resetDatabase() {
    console.log('Starting database reset...');

    try {
      await this.newPrisma.answeredQuestion.deleteMany({});
      await this.newPrisma.attemptQuestion.deleteMany({});
      await this.newPrisma.questionMedia.deleteMany({});
      await this.newPrisma.userAttempt.deleteMany({});
      await this.newPrisma.answer.deleteMany({});
      await this.newPrisma.text.deleteMany({});
      await this.newPrisma.media.deleteMany({});
      await this.newPrisma.question.deleteMany({});
      await this.newPrisma.course.deleteMany({});
      await this.newPrisma.category.deleteMany({});
      await this.newPrisma.user.deleteMany({});
      await this.newPrisma.admin.deleteMany({});
      await this.newPrisma.settings.deleteMany({});
      await this.newPrisma.language.deleteMany({});

      console.log('Database reset completed');
    } catch (error) {
      console.error('Error resetting database:', error);
      throw error;
    }
  }

  async migrateActiveUsersData() {
    const processedIds = new Set<string>();

    try {
      console.log('Starting migration of active users and their data...');

      // 1. Get active users
      const activeUsers = await this.oldPrisma.users.findMany({
        where: {
          deletedAt: null,
          enabled: true,
          activationDate: {
            gte: new Date(Date.now() - 180 * 24 * 60 * 60 * 1000)
          }
        },
        include: {
          UsersGroups: true,
          UsersRelations: true
        }
      });

      console.log(`Found ${activeUsers.length} active users to migrate`);

      // 2. Migrate Languages
      const languages = await this.oldPrisma.languages.findMany({
        where: { 
          deletedAt: null,
          enabled: true
        }
      });
    
      for (const lang of languages) {
        await this.handleDuplicateCreate(
          () => this.newPrisma.language.create({
            data: {
              id: lang.id.toString(),
              name: lang.name,
              code: lang.code,
              isActive: lang.enabled,
              isRTL: lang.code === 'ar' || lang.code === 'he'
            }
          }),
          'language'
        );
      }

      console.log(`Migrated ${languages.length} languages`);

      // 3. Create new models
      await this.createNewModels();

      // 4. Migrate users
      for (const user of activeUsers) {
        await this.handleDuplicateCreate(
          () => this.newPrisma.user.create({
            data: {
              id: user.id.toString(),
              firstName: user.name.split(' ')[0],
              lastName: user.name.split(' ').slice(1).join(' '),
              personnr: user.personalNumber,
              tel: user.phone || '',
              email: user.email,
              password: user.password || this.generateSecurePassword(),
              isActive: true,
              expiryDate: new Date(user.activationDate.getTime() + 180 * 24 * 60 * 60 * 1000)
            }
          }),
          'user'
        );
      }

      // 5. Get and migrate courses (groups)
      const activeUserGroupIds = [...new Set(
        activeUsers.flatMap(user => 
          user.UsersGroups.map(ug => ug.gpId)
        )
      )];

      const activeGroups = await this.oldPrisma.groups.findMany({
        where: {
          id: { in: activeUserGroupIds },
          deletedAt: null,
          enabled: true
        },
        include: {
          GroupsLang: {
            include: {
              Languages: true
            }
          },
          Media: true
        }
      });

      console.log(`Migrating ${activeGroups.length} courses`);

      for (const group of activeGroups) {
        if (group.Media) {
          await this.handleDuplicateCreate(
            () => this.newPrisma.media.create({
              data: {
                id: group.Media.id.toString(),
                url: group.Media.url,
                type: group.Media.extension.startsWith('image/') ? 'image' : 'video',
                description: group.Media.name
              }
            }),
            'media'
          );
        }

        await this.handleDuplicateCreate(
          () => this.newPrisma.course.create({
            data: {
              id: group.id.toString(),
              image: group.Media?.id.toString(),
              isActive: true,
              name: {
                create: group.GroupsLang.map(gl => ({
                  value: gl.name,
                  language: {
                    connect: {
                      id: gl.lang.toString()
                    }
                  }
                }))
              },
              description: {
                create: group.GroupsLang.map(gl => ({
                  value: gl.desc || '',
                  language: {
                    connect: {
                      id: gl.lang.toString()
                    }
                  }
                }))
              },
              users: {
                connect: activeUsers
                  .filter(user => 
                    user.UsersGroups.some(ug => ug.gpId === group.id)
                  )
                  .map(user => ({
                    id: user.id.toString()
                  }))
              }
            }
          }),
          'course'
        );
      }

      // 6. Migrate questions
      const activeQuestions = await this.oldPrisma.relationsQuestions.findMany({
        where: {
          Relations: {
            gpId: { in: activeUserGroupIds }
          },
          deletedAt: null
        },
        include: {
          Questions: {
            include: {
              QuestionsLang: {
                include: {
                  Languages: true
                }
              }
            }
          },
          Media: true,
          Relations: true
        }
      });

      console.log(`Migrating ${activeQuestions.length} questions`);

      for (const rq of activeQuestions) {
        const questionId = rq.Questions.id.toString();
        
        // Skip if already processed
        if (processedIds.has(questionId)) {
          console.log(`Skipping duplicate question ${questionId}`);
          continue;
        }
        processedIds.add(questionId);

        if (rq.Media) {
          await this.handleDuplicateCreate(
            () => this.newPrisma.media.create({
              data: {
                id: rq.Media.id.toString(),
                url: rq.Media.url,
                type: rq.Media.extension.startsWith('image/') ? 'image' : 'video',
                description: rq.Media.name
              }
            }),
            'media'
          );
        }

        await this.handleDuplicateCreate(
          () => this.newPrisma.question.create({
            data: {
              id: questionId,
              isActive: true,
              course: {
                connect: {
                  id: rq.Relations.gpId.toString()
                }
              },
              categories: {
                connect: [{
                  id: 'cat-theory'
                }]
              },
              text: {
                create: rq.Questions.QuestionsLang.map(ql => ({
                  value: ql.text,
                  language: {
                    connect: {
                      id: ql.lang.toString()
                    }
                  }
                }))
              },
              hint: {
                create: rq.Questions.QuestionsLang
                  .filter(ql => ql.hint)
                  .map(ql => ({
                    value: ql.hint!,
                    language: {
                      connect: {
                        id: ql.lang.toString()
                      }
                    }
                  }))
              }
            }
          }),
          'question'
        );

        if (rq.Media) {
          await this.handleDuplicateCreate(
            () => this.newPrisma.questionMedia.create({
              data: {
                id: `${rq.qsId}-${rq.mdId}`,
                questionId: questionId,
                mediaId: rq.mdId.toString(),
                order: rq.ordering
              }
            }),
            'question media'
          );
        }
      }

      // 7. Migrate answers
      // 7. Migrate answers
const activeChoices = await this.oldPrisma.relationsChoices.findMany({
  where: {
    RelationsQuestions:{
      deletedAt: null
    },
    deletedAt: null
  },
  include: {
    Choices: {
      include: {
        ChoicesLang: {
          include: {
            Languages: true
          }
        }
      }
    },
    Media: true,
    RelationsQuestions: true
  }
});

      console.log(`Migrating ${activeChoices.length} answers`);

      for (const rc of activeChoices) {
        if (rc.Media) {
          await this.handleDuplicateCreate(
            () => this.newPrisma.media.create({
              data: {
                id: rc.Media.id.toString(),
                url: rc.Media.url,
                type: rc.Media.extension.startsWith('image/') ? 'image' : 'video',
                description: rc.Media.name
              }
            }),
            'media'
          );
        }
        console.log("====relationQuestion=========")
        console.log(rc.RelationsQuestions)
        await this.handleDuplicateCreate(
          () => this.newPrisma.answer.create({
            data: {
              id: rc.Choices.id.toString(),
              isActive: true,
              text: {
                create: rc.Choices.ChoicesLang.map(cl => ({
                  value: cl.text,
                  language: {
                    connect: {
                      id: cl.lang.toString()
                    }
                  }
                }))
              },
              isCorrect: rc.correct,
              questionId: rc.RelationsQuestions.qsId.toString(),
              mediaId: rc.mdId?.toString()
            }
          }),
          'answer'
        );
      }

      
    

      console.log('Migration completed successfully');
    } catch (error) {
      console.error('Migration failed:', error);
      throw error;
    } finally {
      await this.oldPrisma.$disconnect();
      await this.newPrisma.$disconnect();
    }
  }

  async createNewModels() {
    console.log('Creating new required models...');
    
    try {
      const adminPassword = this.generateSecurePassword();
      await this.handleDuplicateCreate(
        () => this.newPrisma.admin.create({
          data: {
            id: 'default-admin',
            name: 'System Admin',
            email: 'admin@example.com',
            password: adminPassword
          }
        }),
        'admin'
      );
      console.log('Created admin account with password:', adminPassword);

      await this.handleDuplicateCreate(
        () => this.newPrisma.settings.create({
          data: {
            id: 'default-settings',
            userAvailability: 180,
            testTime: 60,
            questionsPerTest: 70
          }
        }),
        'settings'
      );
      console.log('Created default settings');

      // Create default categories
      const defaultCategories = [
        { id: 'cat-theory', name: 'Theory Questions' },
        { id: 'cat-practical', name: 'Practical Questions' },
        { id: 'cat-safety', name: 'Safety Questions' }
      ];

      for (const category of defaultCategories) {
        await this.handleDuplicateCreate(
          () => this.newPrisma.category.create({
            data: {
              id: category.id,
              name: {
                create: {
                  value: category.name,
                  language: {
                    connect: {
                      id: '1'
                    }
                  }
                }
              }
            }
          }),
          'category'
        );
      }
      console.log('Created default categories');
    } catch (error) {
      console.error('Error creating new models:', error);
      throw error;
    }
  }
}