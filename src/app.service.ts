import { PrismaClient as OldPrismaClient } from '../src/old-prisma-client';
import { PrismaClient as NewPrismaClient } from '../src/new-prisma-client';

export class AppService {
  private oldPrisma: OldPrismaClient;
  private newPrisma: NewPrismaClient;

  constructor() {
    this.oldPrisma = new OldPrismaClient();
    this.newPrisma = new NewPrismaClient();
  }

  // Main migration function
  async migrateData() {
    try {
      console.log('Starting data migration...');
      await this.migrateLanguages();
      await this.migrateGroupsToCourses();
      await this.migrateQuestionsAndAnswers();
      console.log('Migration completed successfully');
    } catch (error) {
      console.error('Migration failed:', error);
      throw error;
    } finally {
      await this.oldPrisma.$disconnect();
      await this.newPrisma.$disconnect();
    }
  }

  // Step 1: Migrate Languages
  private async migrateLanguages() {
    console.log('Migrating languages...');
    const languages = await this.oldPrisma.languages.findMany({
      where: { deletedAt: null },
    });

    for (const lang of languages) {
      await this.newPrisma.language.create({
        data: {
          name: lang.name,
          code: lang.code,
          isActive: lang.enabled,
          isRTL: false, // Set based on your requirements
        },
      });
    }
  }

  // Step 2: Migrate Groups to Courses
  private async migrateGroupsToCourses() {
    console.log('Migrating groups to courses...');
    const groups = await this.oldPrisma.groups.findMany({
      where: { deletedAt: null },
      include: {
        GroupsLang: {
          include: {
            Languages: true,
          },
        },
        Media: true,
      },
    });

    for (const group of groups) {
      const courseNames = group.GroupsLang.map((gl) => ({
        value: gl.name,
        language: {
          connect: {
            code: gl.Languages.code,
          },
        },
      }));

      const courseDescriptions = group.GroupsLang.map((gl) => ({
        value: gl.desc || '',
        language: {
          connect: {
            code: gl.Languages.code,
          },
        },
      }));

      await this.newPrisma.course.create({
        data: {
          image: group.Media?.url,
          isActive: group.enabled,
          name: {
            create: courseNames,
          },
          description: {
            create: courseDescriptions,
          },
        },
      });
    }
  }

  // Step 3: Migrate Questions and Answers
  private async migrateQuestionsAndAnswers() {
    console.log('Migrating questions and answers...');
    const questions = await this.oldPrisma.questions.findMany({
      where: { deletedAt: null },
      include: {
        QuestionsLang: {
          include: {
            Languages: true,
          },
        },
        RelationsQuestions: {
          include: {
            Media: true,
            RelationsChoices: {
              include: {
                Choices: {
                  include: {
                    ChoicesLang: {
                      include: {
                        Languages: true,
                      },
                    },
                  },
                },
                Media: true,
              },
            },
          },
        },
      },
    });

    for (const question of questions) {
      const questionTexts = question.QuestionsLang.map((ql) => ({
        value: ql.text,
        language: {
          connect: {
            code: ql.Languages.code,
          },
        },
      }));

      const questionHints = question.QuestionsLang.map((ql) => ({
        value: ql.hint || '',
        language: {
          connect: {
            code: ql.Languages.code,
          },
        },
      }));

      for (const relation of question.RelationsQuestions) {
        const newQuestion = await this.newPrisma.question.create({
          data: {
            text: {
              create: questionTexts,
            },
            hint: {
              create: questionHints,
            },
            isActive: question.enabled,
            course: {
              connect: {
                id: 'default-course-id', // Replace with actual course ID
              },
            },
            questionMedia: relation.Media
              ? {
                  create: [
                    {
                      order: 1,
                      media: {
                        create: {
                          url: relation.Media.url,
                          type: 'image',
                        },
                      },
                    },
                  ],
                }
              : undefined,
          },
        });

        for (const choice of relation.RelationsChoices) {
          const answerTexts = choice.Choices.ChoicesLang.map((cl) => ({
            value: cl.text,
            language: {
              connect: {
                code: cl.Languages.code,
              },
            },
          }));

          await this.newPrisma.answer.create({
            data: {
              text: {
                create: answerTexts,
              },
              isActive: choice.Choices.enabled,
              isCorrect: choice.correct,
              question: {
                connect: {
                  id: newQuestion.id,
                },
              },
              media: choice.Media
                ? {
                    create: {
                      url: choice.Media.url,
                      type: 'image',
                    },
                  }
                : undefined,
            },
          });
        }
      }
    }
  }
}
