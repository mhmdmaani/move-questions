import { PrismaClient } from '../src/old-prisma-client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  // Clean up existing data if needed
  await cleanDatabase();

  // Create Languages
  const languages = await createLanguages();
  console.log('Created languages');

  // Create Locations
  const locations = await createLocations();
  console.log('Created locations');

  // Create Media
  const media = await createMedia();
  console.log('Created media');

  // Create Audio
  const audio = await createAudio();
  console.log('Created audio');

  // Create Groups
  const groups = await createGroups(media);
  console.log('Created groups');

  // Create GroupsLang
  await createGroupsLang(groups, languages, audio);
  console.log('Created groups language entries');

  // Create Licenses
  const licenses = await createLicenses(media);
  console.log('Created licenses');

  // Create LicensesLang
  await createLicensesLang(licenses, languages, audio);
  console.log('Created licenses language entries');

  // Create Quizzes
  const quizzes = await createQuizzes(media);
  console.log('Created quizzes');

  // Create QuizzesLang
  await createQuizzesLang(quizzes, languages, audio);
  console.log('Created quizzes language entries');

  // Create Relations
  const relations = await createRelations(licenses, groups, quizzes);
  console.log('Created relations');

  // Create Questions
  const questions = await createQuestions();
  console.log('Created questions');

  // Create QuestionsLang
  await createQuestionsLang(questions, languages, audio);
  console.log('Created questions language entries');

  // Create Choices
  const choices = await createChoices();
  console.log('Created choices');

  // Create ChoicesLang
  await createChoicesLang(choices, languages, audio);
  console.log('Created choices language entries');

  // Create RelationsQuestions
  const relationsQuestions = await createRelationsQuestions(relations, questions, media);
  console.log('Created relations questions');

  // Create RelationsChoices
  await createRelationsChoices(relationsQuestions, choices, media);
  console.log('Created relations choices');

  // Create Authorizations
  const authorizations = await createAuthorizations();
  console.log('Created authorizations');

  // Create Users
  const users = await createUsers(locations);
  console.log('Created users');

  // Create UsersAuth
  await createUsersAuth(users, authorizations);
  console.log('Created users authorizations');

  // Create UsersGroups
  await createUsersGroups(users, groups);
  console.log('Created users groups');
}

async function cleanDatabase() {
  // Add cleanup logic if needed
}

async function createLanguages() {
  const languages = [
    {
      name: 'English',
      code: 'en',
      voiceCode: 'en-US',
      voiceType: 'neural',
      voiceName: 'en-US-Neural2-F',
      voiceGender: 'FEMALE',
      voiceProfile: 'default',
    },
    {
      name: 'Spanish',
      code: 'es',
      voiceCode: 'es-ES',
      voiceType: 'neural',
      voiceName: 'es-ES-Neural2-F',
      voiceGender: 'FEMALE',
      voiceProfile: 'default',
    },
  ];

  return await Promise.all(
    languages.map((lang) =>
      prisma.languages.create({
        data: lang,
      })
    )
  );
}

async function createLocations() {
  const locations = ['New York', 'London', 'Tokyo', 'Paris', 'Sydney'].map((location) => ({
    location,
  }));

  return await Promise.all(
    locations.map((loc) =>
      prisma.locations.create({
        data: loc,
      })
    )
  );
}

async function createMedia() {
  const mediaEntries = Array(5).fill(null).map(() => ({
    name: faker.system.fileName(),
    extension: faker.system.fileExt(),
    url: faker.internet.url(),
    uploadedName: faker.system.fileName(),
  }));

  return await Promise.all(
    mediaEntries.map((media) =>
      prisma.media.create({
        data: media,
      })
    )
  );
}

async function createAudio() {
  const audioEntries = Array(5).fill(null).map(() => ({
    name: faker.system.fileName(),
    url: faker.internet.url(),
  }));

  return await Promise.all(
    audioEntries.map((audio) =>
      prisma.audio.create({
        data: audio,
      })
    )
  );
}

async function createGroups(media: any[]) {
  const groups = Array(3).fill(null).map((_, index) => ({
    code: `GRP${index + 1}`,
    level: faker.number.int({ min: 1, max: 5 }),
    randCount: faker.number.int({ min: 0, max: 10 }),
    media: media[0].id, // Using media ID directly
  }));

  return await Promise.all(
    groups.map((group) =>
      prisma.groups.create({
        data: group,
      })
    )
  );
}

async function createGroupsLang(groups: any[], languages: any[], audio: any[]) {
  const groupsLang = groups.flatMap((group) =>
    languages.map((lang) => ({
      gpId: group.id,
      lang: lang.id,
      name: faker.word.words(2),
      desc: faker.lorem.sentence(),
      audio: audio[0].id, // Using audio ID directly
    }))
  );

  return await Promise.all(
    groupsLang.map((groupLang) =>
      prisma.groupsLang.create({
        data: groupLang,
      })
    )
  );
}

async function createLicenses(media: any[]) {
  const licenses = Array(3).fill(null).map((_, index) => ({
    code: `LIC${index + 1}`,
    media: media[0].id, // Using media ID directly
  }));

  return await Promise.all(
    licenses.map((license) =>
      prisma.licenses.create({
        data: license,
      })
    )
  );
}

async function createLicensesLang(licenses: any[], languages: any[], audio: any[]) {
  const licensesLang = licenses.flatMap((license) =>
    languages.map((lang) => ({
      liId: license.id,
      lang: lang.id,
      name: faker.word.words(2),
      desc: faker.lorem.sentence(),
      audio: audio[0].id, // Using audio ID directly
    }))
  );

  return await Promise.all(
    licensesLang.map((licenseLang) =>
      prisma.licensesLang.create({
        data: licenseLang,
      })
    )
  );
}

async function createQuizzes(media: any[]) {
  const quizzes = Array(3).fill(null).map((_, index) => ({
    code: `QZ${index + 1}`,
    duration: faker.number.int({ min: 30, max: 120 }),
    level: faker.number.int({ min: 1, max: 5 }),
    media: media[0].id, // Using media ID directly
  }));

  return await Promise.all(
    quizzes.map((quiz) =>
      prisma.quizzes.create({
        data: quiz,
      })
    )
  );
}

async function createQuizzesLang(quizzes: any[], languages: any[], audio: any[]) {
  const quizzesLang = quizzes.flatMap((quiz) =>
    languages.map((lang) => ({
      qzId: quiz.id,
      lang: lang.id,
      name: faker.word.words(2),
      desc: faker.lorem.sentence(),
      audio: audio[0].id, // Using audio ID directly
    }))
  );

  return await Promise.all(
    quizzesLang.map((quizLang) =>
      prisma.quizzesLang.create({
        data: quizLang,
      })
    )
  );
}

async function createRelations(licenses: any[], groups: any[], quizzes: any[]) {
  const relations = licenses.flatMap((license) =>
    groups.flatMap((group) =>
      quizzes.map((quiz) => ({
        liId: license.id,
        gpId: group.id,
        qzId: quiz.id,
      }))
    )
  );

  return await Promise.all(
    relations.map((relation) =>
      prisma.relations.create({
        data: relation,
      })
    )
  );
}

async function createQuestions() {
  return await Promise.all(
    Array(10)
      .fill(null)
      .map(() =>
        prisma.questions.create({
          data: {},
        })
      )
  );
}

async function createQuestionsLang(questions: any[], languages: any[], audio: any[]) {
  const questionsLang = questions.flatMap((question) =>
    languages.map((lang) => ({
      qsId: question.id,
      lang: lang.id,
      text: faker.lorem.sentence(),
      hint: faker.lorem.words(3),
      audio: audio[0].id, // Using audio ID directly
    }))
  );

  return await Promise.all(
    questionsLang.map((questionLang) =>
      prisma.questionsLang.create({
        data: questionLang,
      })
    )
  );
}

async function createChoices() {
  return await Promise.all(
    Array(20)
      .fill(null)
      .map(() =>
        prisma.choices.create({
          data: {},
        })
      )
  );
}

async function createChoicesLang(choices: any[], languages: any[], audio: any[]) {
  const choicesLang = choices.flatMap((choice) =>
    languages.map((lang) => ({
      chId: choice.id,
      lang: lang.id,
      text: faker.lorem.words(3),
      hint: faker.lorem.words(2),
      audio: audio[0].id, // Using audio ID directly
    }))
  );

  return await Promise.all(
    choicesLang.map((choiceLang) =>
      prisma.choicesLang.create({
        data: choiceLang,
      })
    )
  );
}

async function createRelationsQuestions(relations: any[], questions: any[], media: any[]) {
  const relationsQuestions = relations.flatMap((relation, index) =>
    questions.slice(0, 3).map((question, qIndex) => ({
      reId: relation.id,
      qsId: question.id,
      mdId: media[0].id, // Using media ID directly
      ordering: qIndex + 1,
    }))
  );

  return await Promise.all(
    relationsQuestions.map((relationQuestion) =>
      prisma.relationsQuestions.create({
        data: relationQuestion,
      })
    )
  );
}

async function createRelationsChoices(relationsQuestions: any[], choices: any[], media: any[]) {
  const relationsChoices = relationsQuestions.flatMap((relationQuestion) =>
    choices.slice(0, 4).map((choice, index) => ({
      rqId: relationQuestion.id,
      chId: choice.id,
      mdId: media[0].id, // Using media ID directly
      correct: index === 0, // First choice is correct
      ordering: index + 1,
    }))
  );

  return await Promise.all(
    relationsChoices.map((relationChoice) =>
      prisma.relationsChoices.create({
        data: relationChoice,
      })
    )
  );
}

async function createAuthorizations() {
  const authTypes = ['admin', 'user', 'moderator'].map((name) => ({
    name,
  }));

  return await Promise.all(
    authTypes.map((auth) =>
      prisma.authorizations.create({
        data: auth,
      })
    )
  );
}

async function createUsers(locations: any[]) {
  const users = Array(5).fill(null).map(() => ({
    personalNumber: faker.string.alphanumeric(10),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    location: locations[0].id, // Using location ID directly
    admin: faker.datatype.boolean(),
    password: faker.internet.password(),
  }));

  return await Promise.all(
    users.map((user) =>
      prisma.users.create({
        data: user,
      })
    )
  );
}

async function createUsersAuth(users: any[], authorizations: any[]) {
  const usersAuth = users.map((user) => ({
    usId: user.id,
    auId: authorizations[0].id, // Using authorization ID directly
  }));

  return await Promise.all(
    usersAuth.map((userAuth) =>
      prisma.usersAuth.create({
        data: userAuth,
      })
    )
  );
}

async function createUsersGroups(users: any[], groups: any[]) {
  const usersGroups = users.flatMap((user) =>
    groups.slice(0, faker.number.int({ min: 1, max: groups.length })).map((group) => ({
      usId: user.id,
      gpId: group.id,
    }))
  );

  return await Promise.all(
    usersGroups.map((userGroup) =>
      prisma.usersGroups.create({
        data: userGroup,
      })
    )
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });