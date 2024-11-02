import { Injectable } from '@nestjs/common';
import { PrismaClient as OldPrismaClient } from '../old-prisma-client';
import { PrismaClient as NewPrismaClient } from '../new-prisma-client';

import { addMonths } from 'date-fns';
@Injectable()
export class AppService {
  async moveData() {
    // Initialize Prisma clients for both database
    console.log('Starting data migration...');
    const oldDbClient = new OldPrismaClient();

    const newDbClient = new NewPrismaClient();

    try {
      // Step 1: Migrate Audio
      /*    console.log('Migrating audio data...');
      const audios = await oldDbClient.audio.findMany();
      for (const audio of audios) {
        await newDbClient.media.create({
          data: {
            id: audio.id.toString(),
            url: audio.url,
            type: 'audio',
            createdAt: audio.createdAt,
            updatedAt: audio.updatedAt,
          },
        });
      }
*/
      // Step 1: Migrate Languages
      console.log('Migrating language data...');
      const languages = await oldDbClient.languages.findMany();
      for (const lang of languages) {
        await newDbClient.language.create({
          data: {
            id: lang.id.toString(),
            name: lang.name,
            code: lang.code,
            isActive: lang.enabled,
            isRTL: lang.name === 'arabic', // Modify this based on your logic
          },
        });
      }
      // Step 2: Migrate Categories
      console.log('Migrating category data...');
      await this.seedCategories();

      const savedCategories = await newDbClient.category.findMany();

      // Step 3: Migrate courses
      const grs = await oldDbClient.groups.findMany({
        include: {
          GroupsLang: true,
        },
      });

      for (const gr of grs) {
        await newDbClient.course.create({
          data: {
            id: gr.id.toString(),
            name: {
              createMany: {
                data: gr.GroupsLang.map((g) => ({
                  value: g.name.toString(),
                  languageId: g.lang.toString(),
                })),
              },
            },
            description: {
              createMany: {
                data: gr.GroupsLang.map((g) => ({
                  value: g.desc.toString(),
                  languageId: g.lang.toString(),
                })),
              },
            },

            isActive: gr.enabled,
          },
        });
      }

      // Step 4: Migrate Questions
      console.log('Migrating question data...');
      const quess = await oldDbClient.questions.findMany({
        where: {
          enabled: true,
        },
        include: {
          QuestionsLang: true,

          RelationsQuestions: {
            include: {
              Relations: true,
              Media: true,
            },
          },
        },
      });
      for (const question of quess) {
        await newDbClient.question.create({
          data: {
            id: question.id.toString(),
            text: {
              createMany: {
                data: question.QuestionsLang.map((q) => ({
                  value: q.text.toString(),
                  languageId: q.lang.toString(),
                })),
              },
            },
            hint: {
              createMany: {
                data: question.QuestionsLang.map((q) => ({
                  value: q.hint.toString(),
                  languageId: q.lang.toString(),
                })),
              },
            },
            isActive: question.enabled,
            createdAt: question.createdAt,
            updatedAt: question.updatedAt,
            categories: {
              connect: savedCategories.map((c) => ({
                id: c.id,
              })),
            },
            course: question.RelationsQuestions &&
              question.RelationsQuestions.length > 0 && {
                connect: {
                  id: question.RelationsQuestions[0].Relations.gpId.toString(),
                },
              },
          },
        });
      }
      // Step 5: Migrate Answers
      console.log('Migrating answer data...');
      const choices = await oldDbClient.choices.findMany({
        where: {
          enabled: true,
        },
        include: {
          ChoicesLang: true,
          RelationsChoices: {
            include: {
              RelationsQuestions: true,
            },
          },
        },
      });

      for (const choice of choices.filter(
        (c) => c.RelationsChoices.length > 0,
      )) {
        await newDbClient.answer.create({
          data: {
            id: choice.id.toString(),
            text: {
              createMany: {
                data: choice.ChoicesLang.map((c) => ({
                  value: c.text.toString(),
                  languageId: c.lang.toString(),
                })),
              },
            },
            isCorrect: !!choice.RelationsChoices.find(
              (c) => c.correct === true,
            ),
            question: {
              connect: {
                id: choice.RelationsChoices[0].RelationsQuestions.qsId.toString(),
              },
            },
          },
        });
      }
      // Step 6 : Migrate media
      console.log('Migrating media data...');
      const medias = await oldDbClient.media.findMany({
        where: {
          enabled: true,
        },
        include: {
          RelationsQuestions: true,
          RelationsChoices: true,
        },
      });

      for (const media of medias) {
        await newDbClient.media.create({
          data: {
            id: media.id.toString(),
            url: media.url,
            type: media.extension || 'image',
            description: media.name,
            questionMedia: media.RelationsQuestions &&
              media.RelationsQuestions.length > 0 && {
                connect: {
                  id: media.RelationsQuestions[0].qsId.toString(),
                },
              },
            answer: media.RelationsChoices &&
              media.RelationsChoices.length > 0 && {
                connect: {
                  id: media.RelationsChoices[0].chId.toString(),
                },
              },
          },
        });
      }
      // Step 7: Migrate Active users
      console.log('Migrating user data...');
      const users = await oldDbClient.users.findMany({
        where: {
          enabled: true,
          activationDate: {
            gte: addMonths(new Date(), -6),
          },
        },
        include: {
          UsersGroups: true,
        },
      });
      for (const user of users) {
        await newDbClient.user.create({
          data: {
            id: user.personalNumber,
            firstName: user.name.split(' ')[0], // Assuming first part is first name
            lastName: user.name.split(' ')[1] || '',
            email: user.email,
            tel: user.phone || '',
            isActive: user.enabled,
            expiryDate: addMonths(new Date(user.activationDate), 6),
            password: '',
            personnr: user.personalNumber,
            courses: {
              connect: user.UsersGroups.map((g) => ({
                id: g.gpId.toString(),
              })),
            },
            // Set this based on your logic
          },
        });
      }
      console.log('Data migration completed.');
    } catch (error) {
      console.error('Error migrating data:', error);
    } finally {
      await oldDbClient.$disconnect();
      await newDbClient.$disconnect();
    }
  }

  async seedCategories() {
    const prisma = new NewPrismaClient();

    console.log('Seeding categories...');
    const categoriesData = [
      {
        id: 'category1',
        name: {
          ar: 'معرفة المركبات، المناورة',
          sv: 'Fordonskunskap, manövrering',
          en: 'Vehicle knowledge, maneuvering',
          ru: 'Знание транспортных средств, маневрирование',
          tr: 'Araç bilgisi, manevra',
          so: 'Aqoonta gaadiidka, maaraynta',
        },
      },
      {
        id: 'category2',
        name: {
          ar: 'البيئة',
          sv: 'Miljö',
          en: 'Environment',
          ru: 'Окружающая среда',
          tr: 'Çevre',
          so: 'Deegaanka',
        },
      },
      {
        id: 'category3',
        name: {
          ar: 'السلامة المرورية',
          sv: 'Trafiksäkerhet',
          en: 'Traffic safety',
          ru: 'Безопасность дорожного движения',
          tr: 'Trafik güvenliği',
          so: 'Badbaadada taraafikada',
        },
      },
      {
        id: 'category4',
        name: {
          ar: 'قواعد حركة السير',
          sv: 'Trafikregler',
          en: 'Traffic rules',
          ru: 'Правила дорожного движения',
          tr: 'Trafik kuralları',
          so: 'Sharciyada taraafikada',
        },
      },
      {
        id: 'category5',
        name: {
          ar: 'المتطلبات الشخصية',
          sv: 'Personliga krav',
          en: 'Personal requirements',
          ru: 'Личные требования',
          tr: 'Kişisel gereksinimler',
          so: 'Shuruudaha shakhsiga',
        },
      },
      {
        id: 'category6',
        name: {
          ar: 'التعرف على الإشارات',
          sv: 'Igenkänning av skyltar',
          en: 'Sign recognition',
          ru: 'Распознавание знаков',
          tr: 'İşaret tanıma',
          so: 'Aqoonsiga calaamadaha',
        },
      },
    ];

    // First, fetch all languages to get their ids
    const languages = await prisma.language.findMany();
    console.log('Languages:', languages);
    const languageCodeToId = Object.fromEntries(
      languages.map((lang) => [lang.code, lang.id]),
    );

    for (const category of categoriesData) {
      const existingCategory = await prisma.category.findUnique({
        where: { id: category.id },
      });

      if (!existingCategory) {
        await prisma.category.create({
          data: {
            id: category.id,
            image: `${category.id}.jpg`,
            name: {
              create: Object.entries(category.name).map(
                ([langCode, value]) => ({
                  value,
                  language: {
                    connect: { id: languageCodeToId[langCode] },
                  },
                }),
              ),
            },
          },
        });
        console.log(`Created category: ${category.id}`);
      } else {
        console.log(
          `Category ${category.id} already exists, updating names if necessary.`,
        );

        // Update existing category names
        for (const [langCode, value] of Object.entries(category.name)) {
          const existingName = await prisma.text.findFirst({
            where: {
              categoryNameId: category.id,
              language: { code: langCode },
            },
          });

          if (existingName) {
            if (existingName.value !== value) {
              await prisma.text.update({
                where: { id: existingName.id },
                data: { value: value },
              });
              console.log(
                `Updated name for category ${category.id} in language ${langCode}`,
              );
            }
          } else {
            await prisma.text.create({
              data: {
                value: value,
                language: { connect: { id: languageCodeToId[langCode] } },
                CategoryName: { connect: { id: category.id } },
              },
            });
            console.log(
              `Added new name for category ${category.id} in language ${langCode}`,
            );
          }
        }
      }
    }

    console.log('Categories seeding completed.');
  }
}
