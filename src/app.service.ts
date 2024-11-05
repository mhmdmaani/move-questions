import { Injectable } from '@nestjs/common';
import { PrismaClient as OldPrismaClient } from '../old-prisma-client';
import { PrismaClient as NewPrismaClient } from '../new-prisma-client';

@Injectable()
export class AppService {
  async moveData() {
    console.log('Starting data migration...');
    const oldDbClient = new OldPrismaClient();
    const newDbClient = new NewPrismaClient();

    try {
      // Migrate Languages
      console.log('Migrating language data...');
      const languages = await oldDbClient.languages.findMany();
      for (const lang of languages) {
        await newDbClient.language.create({
          data: {
            id: lang.id.toString(),
            name: lang.name,
            code: lang.code,
            isActive: lang.enabled,
            isRTL: lang.name === 'arabic',
          },
        });
      }

      // Migrate Categories
      console.log('Migrating category data...');
      await this.seedCategories();

      const savedCategories = await newDbClient.category.findMany();

      // Migrate Courses
      console.log('Migrating course data...');
      const groups = await oldDbClient.groups.findMany({
        include: { GroupsLang: true },
      });

      for (const group of groups) {
        const courseNames = group?.GroupsLang?.map(g => ({
          value: g?.name?.toString(),
          languageId: g?.lang?.toString(),
        })).filter(name => name.value); // Filter out null/undefined values

        const courseDescriptions = group?.GroupsLang?.map(g => ({
          value: g?.desc?.toString(),
          languageId: g?.lang?.toString(),
        })).filter(desc => desc.value);

        await newDbClient.course.create({
          data: {
            id: group?.id?.toString(),
            name: { createMany: { data: courseNames } },
            description: { createMany: { data: courseDescriptions } },
            isActive: group?.enabled,
          },
        });
      }

      // Migrate Questions
      console.log('Migrating question data...');
      const questions = await oldDbClient?.questions?.findMany({
        where: { enabled: true },
        include: {
          QuestionsLang: true,
          RelationsQuestions: {
            include: { Relations: true, Media: true },
          },
        },
      });

      for (const question of questions) {
        const questionTexts = question?.QuestionsLang?.map(q => ({
          value: q?.text?.toString(),
          languageId: q?.lang?.toString(),
        })).filter(text => text.value);

        const questionHints = question?.QuestionsLang?.map(q => ({
          value: q?.hint?.toString(),
          languageId: q?.lang?.toString(),
        })).filter(hint => hint.value);

        await newDbClient.question.create({
          data: {
            id: question?.id?.toString(),
            text: { createMany: { data: questionTexts } },
            hint: { createMany: { data: questionHints } },
            isActive: question?.enabled,
            createdAt: question?.createdAt||new Date (),
            updatedAt: question?.updatedAt||new Date (),
            categories: {
              connect: savedCategories.map(c => ({ id: c?.id })),
            },
            course: question?.RelationsQuestions.length > 0  &&
              question?.RelationsQuestions.length > 0 ? {
                connect: { id: question?.RelationsQuestions[0]?.Relations?.gpId?.toString() },
              }:{
                connect:{

                    id:"2"
                }
              },
          },
        });
      }

      // Migrate Answers
      console.log('Migrating answer data...');
      const choices = await oldDbClient.choices.findMany({
        where: { enabled: true },
        include: { ChoicesLang: true, RelationsChoices: { include: { RelationsQuestions: true } } },
      });

      for (const choice of choices.filter(c => c?.RelationsChoices?.length > 0)) {
        const choiceTexts = choice?.ChoicesLang?.map(c => ({
          value: c?.text?.toString(),
          languageId: c?.lang?.toString(),
        })).filter(text => text.value);

        await newDbClient.answer.create({
          data: {
            id: choice?.id?.toString(),
            text: { createMany: { data: choiceTexts } },
            isCorrect: !!choice?.RelationsChoices?.find(c => c?.correct === true),
            question: {
              connect: {
                id: choice?.RelationsChoices[0]?.RelationsQuestions?.qsId?.toString(),
              },
            },
          },
        });
      }

      // Additional migrations can be updated in a similar way...

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
      { id: 'category1', name: { en: 'Vehicle knowledge, maneuvering', ar: 'معرفة المركبات، المناورة' }},
      { id: 'category2', name: { en: 'Environment', ar: 'البيئة' }},
      // Add other categories here...
    ];

    const languages = await prisma.language.findMany();
    const languageCodeToId = Object.fromEntries(languages.map(lang => [lang.code, lang.id]));

    for (const category of categoriesData) {
      const existingCategory = await prisma.category.findUnique({ where: { id: category.id } });

      if (!existingCategory) {
        await prisma.category.create({
          data: {
            id: category.id,
            image: `${category.id}.jpg`,
            name: {
              create: Object.entries(category.name).map(([langCode, value]) => ({
                value,
                language: { connect: { id: languageCodeToId[langCode] } },
              })).filter(name => name.value), // Filter out null/undefined values
            },
          },
        });
        console.log(`Created category: ${category.id}`);
      } else {
        console.log(`Category ${category.id} already exists, updating names if necessary.`);
      }
    }

    console.log('Categories seeding completed.');
  }
}
