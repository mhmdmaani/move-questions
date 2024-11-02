import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Insert Languages
  await prisma.languages.createMany({
    data: [
      {
        id: 1,
        name: 'Swedish',
        code: 'sv',
        voiceCode: 'sv-SE',
        voiceType: 'Standard',
        voiceName: 'sv-SE-Standard-A',
        voiceGender: 'FEMALE',
        voiceProfile: 'handset-class-device',
        enabled: true,
      },
      {
        id: 2,
        name: 'English',
        code: 'en',
        voiceCode: 'en-US',
        voiceType: 'Standard',
        voiceName: 'en-US-Standard-I',
        voiceGender: 'MALE',
        voiceProfile: 'handset-class-device',
        enabled: true,
      },
      {
        id: 3,
        name: 'Arabic',
        code: 'ar',
        voiceCode: 'ar-XA',
        voiceType: 'Standard',
        voiceName: 'ar-XA-Standard-C',
        voiceGender: 'FEMALE',
        voiceProfile: 'handset-class-device',
        enabled: true,
      },
    ],
  });

  // Insert Media
  await prisma.media.create({
    data: {
      id: 1,
      name: 'N/A',
      extension: '',
      url: '',
      uploadedName: '',
      enabled: true,
    },
  });

  // Insert Authorizations
  await prisma.authorizations.createMany({
    data: [
      { id: 1, name: 'app', enabled: true },
      { id: 2, name: 'licenses', enabled: true },
      { id: 3, name: 'groups', enabled: true },
      { id: 4, name: 'quizzes', enabled: true },
      { id: 5, name: 'questions', enabled: true },
      { id: 6, name: 'choices', enabled: true },
      { id: 7, name: 'relations', enabled: true },
      { id: 8, name: 'languages', enabled: true },
      { id: 9, name: 'media', enabled: true },
      { id: 10, name: 'audio', enabled: true },
      { id: 11, name: 'users', enabled: true },
      { id: 12, name: 'admins', enabled: true },
    ],
  });

  // Insert Locations
  await prisma.locations.createMany({
    data: [
      { id: 1, location: 'North' },
      { id: 2, location: 'South' },
    ],
  });

  // Insert Quizzes
  await prisma.quizzes.create({
    data: { id: 1, code: 'rand', duration: 100, level: 2, enabled: true },
  });

  // Insert Groups
  await prisma.groups.create({
    data: { id: 1, code: 'group1', level: 1, enabled: true },
  });

  // Insert Licenses
  await prisma.licenses.create({
    data: { id: 1, code: 'license1', enabled: true },
  });

  // Insert Users
  await prisma.users.create({
    data: {
      id: 1,
      personalNumber: '0987654321',
      name: 'admin',
      email: 'admin@dlqc.net',
      phone: '0798654321',
      location: 1,
      admin: true,
      enabled: true,
      activationDate: new Date('2024-11-01'),
    },
  });

  // Insert Users Auth
  await prisma.usersAuth.createMany({
    data: [
      { id: 1, usId: 1, auId: 2 },
      { id: 2, usId: 1, auId: 3 },
      { id: 3, usId: 1, auId: 4 },
      { id: 4, usId: 1, auId: 5 },
      { id: 5, usId: 1, auId: 6 },
      { id: 6, usId: 1, auId: 7 },
      { id: 7, usId: 1, auId: 8 },
      { id: 8, usId: 1, auId: 9 },
      { id: 9, usId: 1, auId: 10 },
      { id: 10, usId: 1, auId: 11 },
      { id: 11, usId: 1, auId: 12 },
    ],
  });

  // Insert Relations
  await prisma.relations.create({
    data: { id: 1, liId: 1, gpId: 1, qzId: 1, enabled: true },
  });

  // Insert Questions
  await prisma.questions.create({
    data: { id: 1, enabled: true },
  });

  // Insert Choices
  await prisma.choices.create({
    data: { id: 1, enabled: true },
  });

  // Insert RelationsQuestions
  await prisma.relationsQuestions.create({
    data: { id: 1, reId: 1, qsId: 1, ordering: 1 },
  });

  // Insert RelationsChoices
  await prisma.relationsChoices.create({
    data: { id: 1, rqId: 1, chId: 1, correct: true, ordering: 1 },
  });

  // Insert QuestionsLang
  await prisma.questionsLang.create({
    data: {
      id: 1,
      qsId: 1,
      lang: 2,
      text: 'What is the capital of Sweden?',
      hint: 'It is the largest city in Sweden.',
    },
  });

  // Insert ChoicesLang
  await prisma.choicesLang.createMany({
    data: [
      {
        id: 1,
        chId: 1,
        lang: 2,
        text: 'Stockholm',
        hint: 'The correct answer.',
      },
      {
        id: 2,
        chId: 1,
        lang: 2,
        text: 'Gothenburg',
        hint: 'Second largest city.',
      },
    ],
  });

  // Insert GroupsLang
  await prisma.groupsLang.create({
    data: {
      id: 1,
      gpId: 1,
      lang: 2,
      name: 'General Knowledge',
      desc: 'A general knowledge quiz',
    },
  });

  // Insert LicensesLang
  await prisma.licensesLang.create({
    data: {
      id: 1,
      liId: 1,
      lang: 2,
      name: 'Standard License',
      desc: 'Basic usage license',
    },
  });

  // Insert QuizzesLang
  await prisma.quizzesLang.create({
    data: {
      id: 1,
      qzId: 1,
      lang: 2,
      name: 'Random Quiz',
      desc: 'A quiz with random questions',
    },
  });

  console.log('Data seeded successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
