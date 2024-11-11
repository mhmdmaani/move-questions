
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AudioScalarFieldEnum = {
  id: 'id',
  name: 'name',
  url: 'url',
  enabled: 'enabled',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.AuthorizationsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  enabled: 'enabled',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ChoicesScalarFieldEnum = {
  id: 'id',
  enabled: 'enabled',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.ChoicesLangScalarFieldEnum = {
  id: 'id',
  chId: 'chId',
  lang: 'lang',
  text: 'text',
  hint: 'hint',
  audio: 'audio',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.FailedJobsScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  connection: 'connection',
  queue: 'queue',
  payload: 'payload',
  exception: 'exception',
  failedAt: 'failedAt'
};

exports.Prisma.GroupsScalarFieldEnum = {
  id: 'id',
  code: 'code',
  level: 'level',
  media: 'media',
  randCount: 'randCount',
  enabled: 'enabled',
  other: 'other',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.GroupsLangScalarFieldEnum = {
  id: 'id',
  gpId: 'gpId',
  lang: 'lang',
  name: 'name',
  desc: 'desc',
  audio: 'audio',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.LanguagesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  code: 'code',
  voiceCode: 'voiceCode',
  voiceType: 'voiceType',
  voiceName: 'voiceName',
  voiceGender: 'voiceGender',
  voiceProfile: 'voiceProfile',
  enabled: 'enabled',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.LicensesScalarFieldEnum = {
  id: 'id',
  code: 'code',
  media: 'media',
  enabled: 'enabled',
  other: 'other',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.LicensesLangScalarFieldEnum = {
  id: 'id',
  liId: 'liId',
  lang: 'lang',
  name: 'name',
  desc: 'desc',
  audio: 'audio',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.MediaScalarFieldEnum = {
  id: 'id',
  name: 'name',
  extension: 'extension',
  url: 'url',
  uploadedName: 'uploadedName',
  enabled: 'enabled',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.MigrationsScalarFieldEnum = {
  id: 'id',
  migration: 'migration',
  batch: 'batch'
};

exports.Prisma.PasswordResetsScalarFieldEnum = {
  email: 'email',
  token: 'token',
  createdAt: 'createdAt'
};

exports.Prisma.QuestionsScalarFieldEnum = {
  id: 'id',
  enabled: 'enabled',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.QuestionsLangScalarFieldEnum = {
  id: 'id',
  qsId: 'qsId',
  lang: 'lang',
  text: 'text',
  hint: 'hint',
  audio: 'audio',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.QuizzesScalarFieldEnum = {
  id: 'id',
  code: 'code',
  duration: 'duration',
  level: 'level',
  media: 'media',
  enabled: 'enabled',
  other: 'other',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.QuizzesLangScalarFieldEnum = {
  id: 'id',
  qzId: 'qzId',
  lang: 'lang',
  name: 'name',
  desc: 'desc',
  audio: 'audio',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.RelationsScalarFieldEnum = {
  id: 'id',
  liId: 'liId',
  gpId: 'gpId',
  qzId: 'qzId',
  enabled: 'enabled',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.RelationsChoicesScalarFieldEnum = {
  id: 'id',
  rqId: 'rqId',
  chId: 'chId',
  mdId: 'mdId',
  correct: 'correct',
  ordering: 'ordering',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt',
  relationsId: 'relationsId'
};

exports.Prisma.RelationsQuestionsScalarFieldEnum = {
  id: 'id',
  reId: 'reId',
  qsId: 'qsId',
  mdId: 'mdId',
  ordering: 'ordering',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.UsersScalarFieldEnum = {
  id: 'id',
  personalNumber: 'personalNumber',
  name: 'name',
  email: 'email',
  phone: 'phone',
  location: 'location',
  admin: 'admin',
  enabled: 'enabled',
  activationDate: 'activationDate',
  rememberToken: 'rememberToken',
  emailVerifiedAt: 'emailVerifiedAt',
  password: 'password',
  twoFactorSecret: 'twoFactorSecret',
  twoFactorRecoveryCodes: 'twoFactorRecoveryCodes',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.UsersAuthScalarFieldEnum = {
  id: 'id',
  usId: 'usId',
  auId: 'auId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.UsersGroupsScalarFieldEnum = {
  id: 'id',
  usId: 'usId',
  gpId: 'gpId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.UsersLoginScalarFieldEnum = {
  id: 'id',
  usId: 'usId',
  action: 'action',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.UsersRelationsScalarFieldEnum = {
  id: 'id',
  usId: 'usId',
  reId: 'reId',
  correct: 'correct',
  wrong: 'wrong',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.UsersRelationsDetailsScalarFieldEnum = {
  id: 'id',
  urId: 'urId',
  rqId: 'rqId',
  rcId: 'rcId',
  observed: 'observed',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.LocationsScalarFieldEnum = {
  id: 'id',
  location: 'location',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  Audio: 'Audio',
  Authorizations: 'Authorizations',
  Choices: 'Choices',
  ChoicesLang: 'ChoicesLang',
  FailedJobs: 'FailedJobs',
  Groups: 'Groups',
  GroupsLang: 'GroupsLang',
  Languages: 'Languages',
  Licenses: 'Licenses',
  LicensesLang: 'LicensesLang',
  Media: 'Media',
  Migrations: 'Migrations',
  PasswordResets: 'PasswordResets',
  Questions: 'Questions',
  QuestionsLang: 'QuestionsLang',
  Quizzes: 'Quizzes',
  QuizzesLang: 'QuizzesLang',
  Relations: 'Relations',
  RelationsChoices: 'RelationsChoices',
  RelationsQuestions: 'RelationsQuestions',
  Users: 'Users',
  UsersAuth: 'UsersAuth',
  UsersGroups: 'UsersGroups',
  UsersLogin: 'UsersLogin',
  UsersRelations: 'UsersRelations',
  UsersRelationsDetails: 'UsersRelationsDetails',
  Locations: 'Locations'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
