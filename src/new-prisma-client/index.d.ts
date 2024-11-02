
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Course
 * 
 */
export type Course = $Result.DefaultSelection<Prisma.$CoursePayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Question
 * 
 */
export type Question = $Result.DefaultSelection<Prisma.$QuestionPayload>
/**
 * Model Answer
 * 
 */
export type Answer = $Result.DefaultSelection<Prisma.$AnswerPayload>
/**
 * Model QuestionMedia
 * 
 */
export type QuestionMedia = $Result.DefaultSelection<Prisma.$QuestionMediaPayload>
/**
 * Model Media
 * 
 */
export type Media = $Result.DefaultSelection<Prisma.$MediaPayload>
/**
 * Model UserAttempt
 * 
 */
export type UserAttempt = $Result.DefaultSelection<Prisma.$UserAttemptPayload>
/**
 * Model AttemptQuestion
 * 
 */
export type AttemptQuestion = $Result.DefaultSelection<Prisma.$AttemptQuestionPayload>
/**
 * Model AnsweredQuestion
 * 
 */
export type AnsweredQuestion = $Result.DefaultSelection<Prisma.$AnsweredQuestionPayload>
/**
 * Model Text
 * 
 */
export type Text = $Result.DefaultSelection<Prisma.$TextPayload>
/**
 * Model Language
 * 
 */
export type Language = $Result.DefaultSelection<Prisma.$LanguagePayload>
/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Settings
 * 
 */
export type Settings = $Result.DefaultSelection<Prisma.$SettingsPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.CourseDelegate<ExtArgs>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<ExtArgs>;

  /**
   * `prisma.answer`: Exposes CRUD operations for the **Answer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Answers
    * const answers = await prisma.answer.findMany()
    * ```
    */
  get answer(): Prisma.AnswerDelegate<ExtArgs>;

  /**
   * `prisma.questionMedia`: Exposes CRUD operations for the **QuestionMedia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuestionMedias
    * const questionMedias = await prisma.questionMedia.findMany()
    * ```
    */
  get questionMedia(): Prisma.QuestionMediaDelegate<ExtArgs>;

  /**
   * `prisma.media`: Exposes CRUD operations for the **Media** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Media
    * const media = await prisma.media.findMany()
    * ```
    */
  get media(): Prisma.MediaDelegate<ExtArgs>;

  /**
   * `prisma.userAttempt`: Exposes CRUD operations for the **UserAttempt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserAttempts
    * const userAttempts = await prisma.userAttempt.findMany()
    * ```
    */
  get userAttempt(): Prisma.UserAttemptDelegate<ExtArgs>;

  /**
   * `prisma.attemptQuestion`: Exposes CRUD operations for the **AttemptQuestion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AttemptQuestions
    * const attemptQuestions = await prisma.attemptQuestion.findMany()
    * ```
    */
  get attemptQuestion(): Prisma.AttemptQuestionDelegate<ExtArgs>;

  /**
   * `prisma.answeredQuestion`: Exposes CRUD operations for the **AnsweredQuestion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AnsweredQuestions
    * const answeredQuestions = await prisma.answeredQuestion.findMany()
    * ```
    */
  get answeredQuestion(): Prisma.AnsweredQuestionDelegate<ExtArgs>;

  /**
   * `prisma.text`: Exposes CRUD operations for the **Text** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Texts
    * const texts = await prisma.text.findMany()
    * ```
    */
  get text(): Prisma.TextDelegate<ExtArgs>;

  /**
   * `prisma.language`: Exposes CRUD operations for the **Language** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Languages
    * const languages = await prisma.language.findMany()
    * ```
    */
  get language(): Prisma.LanguageDelegate<ExtArgs>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs>;

  /**
   * `prisma.settings`: Exposes CRUD operations for the **Settings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Settings
    * const settings = await prisma.settings.findMany()
    * ```
    */
  get settings(): Prisma.SettingsDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.21.1
   * Query Engine version: bf0e5e8a04cada8225617067eaa03d041e2bba36
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Course: 'Course',
    Category: 'Category',
    Question: 'Question',
    Answer: 'Answer',
    QuestionMedia: 'QuestionMedia',
    Media: 'Media',
    UserAttempt: 'UserAttempt',
    AttemptQuestion: 'AttemptQuestion',
    AnsweredQuestion: 'AnsweredQuestion',
    Text: 'Text',
    Language: 'Language',
    Admin: 'Admin',
    Settings: 'Settings'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "course" | "category" | "question" | "answer" | "questionMedia" | "media" | "userAttempt" | "attemptQuestion" | "answeredQuestion" | "text" | "language" | "admin" | "settings"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Course: {
        payload: Prisma.$CoursePayload<ExtArgs>
        fields: Prisma.CourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findFirst: {
            args: Prisma.CourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findMany: {
            args: Prisma.CourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          create: {
            args: Prisma.CourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          createMany: {
            args: Prisma.CourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          delete: {
            args: Prisma.CourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          update: {
            args: Prisma.CourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          deleteMany: {
            args: Prisma.CourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.CourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Question: {
        payload: Prisma.$QuestionPayload<ExtArgs>
        fields: Prisma.QuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findFirst: {
            args: Prisma.QuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findMany: {
            args: Prisma.QuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          create: {
            args: Prisma.QuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          createMany: {
            args: Prisma.QuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          delete: {
            args: Prisma.QuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          update: {
            args: Prisma.QuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion>
          }
          groupBy: {
            args: Prisma.QuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number
          }
        }
      }
      Answer: {
        payload: Prisma.$AnswerPayload<ExtArgs>
        fields: Prisma.AnswerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnswerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnswerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          findFirst: {
            args: Prisma.AnswerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnswerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          findMany: {
            args: Prisma.AnswerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          create: {
            args: Prisma.AnswerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          createMany: {
            args: Prisma.AnswerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnswerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          delete: {
            args: Prisma.AnswerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          update: {
            args: Prisma.AnswerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          deleteMany: {
            args: Prisma.AnswerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnswerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AnswerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          aggregate: {
            args: Prisma.AnswerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnswer>
          }
          groupBy: {
            args: Prisma.AnswerGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnswerGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnswerCountArgs<ExtArgs>
            result: $Utils.Optional<AnswerCountAggregateOutputType> | number
          }
        }
      }
      QuestionMedia: {
        payload: Prisma.$QuestionMediaPayload<ExtArgs>
        fields: Prisma.QuestionMediaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionMediaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionMediaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionMediaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionMediaPayload>
          }
          findFirst: {
            args: Prisma.QuestionMediaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionMediaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionMediaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionMediaPayload>
          }
          findMany: {
            args: Prisma.QuestionMediaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionMediaPayload>[]
          }
          create: {
            args: Prisma.QuestionMediaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionMediaPayload>
          }
          createMany: {
            args: Prisma.QuestionMediaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionMediaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionMediaPayload>[]
          }
          delete: {
            args: Prisma.QuestionMediaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionMediaPayload>
          }
          update: {
            args: Prisma.QuestionMediaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionMediaPayload>
          }
          deleteMany: {
            args: Prisma.QuestionMediaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionMediaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuestionMediaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionMediaPayload>
          }
          aggregate: {
            args: Prisma.QuestionMediaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestionMedia>
          }
          groupBy: {
            args: Prisma.QuestionMediaGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionMediaGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionMediaCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionMediaCountAggregateOutputType> | number
          }
        }
      }
      Media: {
        payload: Prisma.$MediaPayload<ExtArgs>
        fields: Prisma.MediaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MediaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MediaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          findFirst: {
            args: Prisma.MediaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MediaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          findMany: {
            args: Prisma.MediaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>[]
          }
          create: {
            args: Prisma.MediaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          createMany: {
            args: Prisma.MediaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MediaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>[]
          }
          delete: {
            args: Prisma.MediaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          update: {
            args: Prisma.MediaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          deleteMany: {
            args: Prisma.MediaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MediaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MediaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          aggregate: {
            args: Prisma.MediaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedia>
          }
          groupBy: {
            args: Prisma.MediaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MediaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MediaCountArgs<ExtArgs>
            result: $Utils.Optional<MediaCountAggregateOutputType> | number
          }
        }
      }
      UserAttempt: {
        payload: Prisma.$UserAttemptPayload<ExtArgs>
        fields: Prisma.UserAttemptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserAttemptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAttemptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserAttemptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAttemptPayload>
          }
          findFirst: {
            args: Prisma.UserAttemptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAttemptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserAttemptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAttemptPayload>
          }
          findMany: {
            args: Prisma.UserAttemptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAttemptPayload>[]
          }
          create: {
            args: Prisma.UserAttemptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAttemptPayload>
          }
          createMany: {
            args: Prisma.UserAttemptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserAttemptCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAttemptPayload>[]
          }
          delete: {
            args: Prisma.UserAttemptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAttemptPayload>
          }
          update: {
            args: Prisma.UserAttemptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAttemptPayload>
          }
          deleteMany: {
            args: Prisma.UserAttemptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserAttemptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserAttemptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAttemptPayload>
          }
          aggregate: {
            args: Prisma.UserAttemptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserAttempt>
          }
          groupBy: {
            args: Prisma.UserAttemptGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserAttemptGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserAttemptCountArgs<ExtArgs>
            result: $Utils.Optional<UserAttemptCountAggregateOutputType> | number
          }
        }
      }
      AttemptQuestion: {
        payload: Prisma.$AttemptQuestionPayload<ExtArgs>
        fields: Prisma.AttemptQuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttemptQuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptQuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttemptQuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptQuestionPayload>
          }
          findFirst: {
            args: Prisma.AttemptQuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptQuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttemptQuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptQuestionPayload>
          }
          findMany: {
            args: Prisma.AttemptQuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptQuestionPayload>[]
          }
          create: {
            args: Prisma.AttemptQuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptQuestionPayload>
          }
          createMany: {
            args: Prisma.AttemptQuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttemptQuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptQuestionPayload>[]
          }
          delete: {
            args: Prisma.AttemptQuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptQuestionPayload>
          }
          update: {
            args: Prisma.AttemptQuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptQuestionPayload>
          }
          deleteMany: {
            args: Prisma.AttemptQuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttemptQuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AttemptQuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptQuestionPayload>
          }
          aggregate: {
            args: Prisma.AttemptQuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttemptQuestion>
          }
          groupBy: {
            args: Prisma.AttemptQuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttemptQuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttemptQuestionCountArgs<ExtArgs>
            result: $Utils.Optional<AttemptQuestionCountAggregateOutputType> | number
          }
        }
      }
      AnsweredQuestion: {
        payload: Prisma.$AnsweredQuestionPayload<ExtArgs>
        fields: Prisma.AnsweredQuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnsweredQuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnsweredQuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnsweredQuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnsweredQuestionPayload>
          }
          findFirst: {
            args: Prisma.AnsweredQuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnsweredQuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnsweredQuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnsweredQuestionPayload>
          }
          findMany: {
            args: Prisma.AnsweredQuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnsweredQuestionPayload>[]
          }
          create: {
            args: Prisma.AnsweredQuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnsweredQuestionPayload>
          }
          createMany: {
            args: Prisma.AnsweredQuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnsweredQuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnsweredQuestionPayload>[]
          }
          delete: {
            args: Prisma.AnsweredQuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnsweredQuestionPayload>
          }
          update: {
            args: Prisma.AnsweredQuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnsweredQuestionPayload>
          }
          deleteMany: {
            args: Prisma.AnsweredQuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnsweredQuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AnsweredQuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnsweredQuestionPayload>
          }
          aggregate: {
            args: Prisma.AnsweredQuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnsweredQuestion>
          }
          groupBy: {
            args: Prisma.AnsweredQuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnsweredQuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnsweredQuestionCountArgs<ExtArgs>
            result: $Utils.Optional<AnsweredQuestionCountAggregateOutputType> | number
          }
        }
      }
      Text: {
        payload: Prisma.$TextPayload<ExtArgs>
        fields: Prisma.TextFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TextFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TextFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextPayload>
          }
          findFirst: {
            args: Prisma.TextFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TextFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextPayload>
          }
          findMany: {
            args: Prisma.TextFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextPayload>[]
          }
          create: {
            args: Prisma.TextCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextPayload>
          }
          createMany: {
            args: Prisma.TextCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TextCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextPayload>[]
          }
          delete: {
            args: Prisma.TextDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextPayload>
          }
          update: {
            args: Prisma.TextUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextPayload>
          }
          deleteMany: {
            args: Prisma.TextDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TextUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TextUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextPayload>
          }
          aggregate: {
            args: Prisma.TextAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateText>
          }
          groupBy: {
            args: Prisma.TextGroupByArgs<ExtArgs>
            result: $Utils.Optional<TextGroupByOutputType>[]
          }
          count: {
            args: Prisma.TextCountArgs<ExtArgs>
            result: $Utils.Optional<TextCountAggregateOutputType> | number
          }
        }
      }
      Language: {
        payload: Prisma.$LanguagePayload<ExtArgs>
        fields: Prisma.LanguageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LanguageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LanguageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          findFirst: {
            args: Prisma.LanguageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LanguageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          findMany: {
            args: Prisma.LanguageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>[]
          }
          create: {
            args: Prisma.LanguageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          createMany: {
            args: Prisma.LanguageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LanguageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>[]
          }
          delete: {
            args: Prisma.LanguageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          update: {
            args: Prisma.LanguageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          deleteMany: {
            args: Prisma.LanguageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LanguageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LanguageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          aggregate: {
            args: Prisma.LanguageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLanguage>
          }
          groupBy: {
            args: Prisma.LanguageGroupByArgs<ExtArgs>
            result: $Utils.Optional<LanguageGroupByOutputType>[]
          }
          count: {
            args: Prisma.LanguageCountArgs<ExtArgs>
            result: $Utils.Optional<LanguageCountAggregateOutputType> | number
          }
        }
      }
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Settings: {
        payload: Prisma.$SettingsPayload<ExtArgs>
        fields: Prisma.SettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          findFirst: {
            args: Prisma.SettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          findMany: {
            args: Prisma.SettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>[]
          }
          create: {
            args: Prisma.SettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          createMany: {
            args: Prisma.SettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>[]
          }
          delete: {
            args: Prisma.SettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          update: {
            args: Prisma.SettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          deleteMany: {
            args: Prisma.SettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          aggregate: {
            args: Prisma.SettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSettings>
          }
          groupBy: {
            args: Prisma.SettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SettingsCountArgs<ExtArgs>
            result: $Utils.Optional<SettingsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    courses: number
    userAttempts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | UserCountOutputTypeCountCoursesArgs
    userAttempts?: boolean | UserCountOutputTypeCountUserAttemptsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserAttemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAttemptWhereInput
  }


  /**
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    name: number
    description: number
    users: number
    questions: number
    UserAttempt: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name?: boolean | CourseCountOutputTypeCountNameArgs
    description?: boolean | CourseCountOutputTypeCountDescriptionArgs
    users?: boolean | CourseCountOutputTypeCountUsersArgs
    questions?: boolean | CourseCountOutputTypeCountQuestionsArgs
    UserAttempt?: boolean | CourseCountOutputTypeCountUserAttemptArgs
  }

  // Custom InputTypes
  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountNameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TextWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountDescriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TextWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountUserAttemptArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAttemptWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    questions: number
    name: number
    UserAttempt: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | CategoryCountOutputTypeCountQuestionsArgs
    name?: boolean | CategoryCountOutputTypeCountNameArgs
    UserAttempt?: boolean | CategoryCountOutputTypeCountUserAttemptArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountNameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TextWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountUserAttemptArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAttemptWhereInput
  }


  /**
   * Count Type QuestionCountOutputType
   */

  export type QuestionCountOutputType = {
    text: number
    categories: number
    answers: number
    questionMedia: number
    AttemptQuestion: number
    hint: number
  }

  export type QuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    text?: boolean | QuestionCountOutputTypeCountTextArgs
    categories?: boolean | QuestionCountOutputTypeCountCategoriesArgs
    answers?: boolean | QuestionCountOutputTypeCountAnswersArgs
    questionMedia?: boolean | QuestionCountOutputTypeCountQuestionMediaArgs
    AttemptQuestion?: boolean | QuestionCountOutputTypeCountAttemptQuestionArgs
    hint?: boolean | QuestionCountOutputTypeCountHintArgs
  }

  // Custom InputTypes
  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionCountOutputType
     */
    select?: QuestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountTextArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TextWhereInput
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountQuestionMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionMediaWhereInput
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountAttemptQuestionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttemptQuestionWhereInput
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountHintArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TextWhereInput
  }


  /**
   * Count Type AnswerCountOutputType
   */

  export type AnswerCountOutputType = {
    text: number
    answeredQuestions: number
  }

  export type AnswerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    text?: boolean | AnswerCountOutputTypeCountTextArgs
    answeredQuestions?: boolean | AnswerCountOutputTypeCountAnsweredQuestionsArgs
  }

  // Custom InputTypes
  /**
   * AnswerCountOutputType without action
   */
  export type AnswerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnswerCountOutputType
     */
    select?: AnswerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AnswerCountOutputType without action
   */
  export type AnswerCountOutputTypeCountTextArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TextWhereInput
  }

  /**
   * AnswerCountOutputType without action
   */
  export type AnswerCountOutputTypeCountAnsweredQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnsweredQuestionWhereInput
  }


  /**
   * Count Type MediaCountOutputType
   */

  export type MediaCountOutputType = {
    questionMedia: number
    answer: number
  }

  export type MediaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questionMedia?: boolean | MediaCountOutputTypeCountQuestionMediaArgs
    answer?: boolean | MediaCountOutputTypeCountAnswerArgs
  }

  // Custom InputTypes
  /**
   * MediaCountOutputType without action
   */
  export type MediaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaCountOutputType
     */
    select?: MediaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MediaCountOutputType without action
   */
  export type MediaCountOutputTypeCountQuestionMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionMediaWhereInput
  }

  /**
   * MediaCountOutputType without action
   */
  export type MediaCountOutputTypeCountAnswerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
  }


  /**
   * Count Type UserAttemptCountOutputType
   */

  export type UserAttemptCountOutputType = {
    answeredQuestions: number
    categories: number
    questions: number
  }

  export type UserAttemptCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answeredQuestions?: boolean | UserAttemptCountOutputTypeCountAnsweredQuestionsArgs
    categories?: boolean | UserAttemptCountOutputTypeCountCategoriesArgs
    questions?: boolean | UserAttemptCountOutputTypeCountQuestionsArgs
  }

  // Custom InputTypes
  /**
   * UserAttemptCountOutputType without action
   */
  export type UserAttemptCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAttemptCountOutputType
     */
    select?: UserAttemptCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserAttemptCountOutputType without action
   */
  export type UserAttemptCountOutputTypeCountAnsweredQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnsweredQuestionWhereInput
  }

  /**
   * UserAttemptCountOutputType without action
   */
  export type UserAttemptCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }

  /**
   * UserAttemptCountOutputType without action
   */
  export type UserAttemptCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttemptQuestionWhereInput
  }


  /**
   * Count Type LanguageCountOutputType
   */

  export type LanguageCountOutputType = {
    strings: number
  }

  export type LanguageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    strings?: boolean | LanguageCountOutputTypeCountStringsArgs
  }

  // Custom InputTypes
  /**
   * LanguageCountOutputType without action
   */
  export type LanguageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageCountOutputType
     */
    select?: LanguageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LanguageCountOutputType without action
   */
  export type LanguageCountOutputTypeCountStringsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TextWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    personnr: string | null
    tel: string | null
    email: string | null
    password: string | null
    isActive: boolean | null
    expiryDate: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    personnr: string | null
    tel: string | null
    email: string | null
    password: string | null
    isActive: boolean | null
    expiryDate: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    personnr: number
    tel: number
    email: number
    password: number
    isActive: number
    expiryDate: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    personnr?: true
    tel?: true
    email?: true
    password?: true
    isActive?: true
    expiryDate?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    personnr?: true
    tel?: true
    email?: true
    password?: true
    isActive?: true
    expiryDate?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    personnr?: true
    tel?: true
    email?: true
    password?: true
    isActive?: true
    expiryDate?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    personnr: string
    tel: string
    email: string
    password: string
    isActive: boolean
    expiryDate: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    personnr?: boolean
    tel?: boolean
    email?: boolean
    password?: boolean
    isActive?: boolean
    expiryDate?: boolean
    courses?: boolean | User$coursesArgs<ExtArgs>
    userAttempts?: boolean | User$userAttemptsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    personnr?: boolean
    tel?: boolean
    email?: boolean
    password?: boolean
    isActive?: boolean
    expiryDate?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    personnr?: boolean
    tel?: boolean
    email?: boolean
    password?: boolean
    isActive?: boolean
    expiryDate?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | User$coursesArgs<ExtArgs>
    userAttempts?: boolean | User$userAttemptsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      courses: Prisma.$CoursePayload<ExtArgs>[]
      userAttempts: Prisma.$UserAttemptPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      personnr: string
      tel: string
      email: string
      password: string
      isActive: boolean
      expiryDate: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    courses<T extends User$coursesArgs<ExtArgs> = {}>(args?: Subset<T, User$coursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany"> | Null>
    userAttempts<T extends User$userAttemptsArgs<ExtArgs> = {}>(args?: Subset<T, User$userAttemptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAttemptPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly personnr: FieldRef<"User", 'String'>
    readonly tel: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly expiryDate: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.courses
   */
  export type User$coursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    cursor?: CourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * User.userAttempts
   */
  export type User$userAttemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAttempt
     */
    select?: UserAttemptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAttemptInclude<ExtArgs> | null
    where?: UserAttemptWhereInput
    orderBy?: UserAttemptOrderByWithRelationInput | UserAttemptOrderByWithRelationInput[]
    cursor?: UserAttemptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserAttemptScalarFieldEnum | UserAttemptScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseMinAggregateOutputType = {
    id: string | null
    image: string | null
    isActive: boolean | null
  }

  export type CourseMaxAggregateOutputType = {
    id: string | null
    image: string | null
    isActive: boolean | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    image: number
    isActive: number
    _all: number
  }


  export type CourseMinAggregateInputType = {
    id?: true
    image?: true
    isActive?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    image?: true
    isActive?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    image?: true
    isActive?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Course to aggregate.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type CourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithAggregationInput | CourseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: CourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id: string
    image: string | null
    isActive: boolean
    _count: CourseCountAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type CourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    isActive?: boolean
    name?: boolean | Course$nameArgs<ExtArgs>
    description?: boolean | Course$descriptionArgs<ExtArgs>
    users?: boolean | Course$usersArgs<ExtArgs>
    questions?: boolean | Course$questionsArgs<ExtArgs>
    UserAttempt?: boolean | Course$UserAttemptArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["course"]>

  export type CourseSelectScalar = {
    id?: boolean
    image?: boolean
    isActive?: boolean
  }

  export type CourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name?: boolean | Course$nameArgs<ExtArgs>
    description?: boolean | Course$descriptionArgs<ExtArgs>
    users?: boolean | Course$usersArgs<ExtArgs>
    questions?: boolean | Course$questionsArgs<ExtArgs>
    UserAttempt?: boolean | Course$UserAttemptArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Course"
    objects: {
      name: Prisma.$TextPayload<ExtArgs>[]
      description: Prisma.$TextPayload<ExtArgs>[]
      users: Prisma.$UserPayload<ExtArgs>[]
      questions: Prisma.$QuestionPayload<ExtArgs>[]
      UserAttempt: Prisma.$UserAttemptPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      image: string | null
      isActive: boolean
    }, ExtArgs["result"]["course"]>
    composites: {}
  }

  type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = $Result.GetResult<Prisma.$CoursePayload, S>

  type CourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface CourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Course'], meta: { name: 'Course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseFindUniqueArgs>(args: SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseFindFirstArgs>(args?: SelectSubset<T, CourseFindFirstArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseFindManyArgs>(args?: SelectSubset<T, CourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
     */
    create<T extends CourseCreateArgs>(args: SelectSubset<T, CourseCreateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Courses.
     * @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseCreateManyArgs>(args?: SelectSubset<T, CourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courses and returns the data saved in the database.
     * @param {CourseCreateManyAndReturnArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
     */
    delete<T extends CourseDeleteArgs>(args: SelectSubset<T, CourseDeleteArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseUpdateArgs>(args: SelectSubset<T, CourseUpdateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseDeleteManyArgs>(args?: SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseUpdateManyArgs>(args: SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends CourseUpsertArgs>(args: SelectSubset<T, CourseUpsertArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Course model
   */
  readonly fields: CourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    name<T extends Course$nameArgs<ExtArgs> = {}>(args?: Subset<T, Course$nameArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TextPayload<ExtArgs>, T, "findMany"> | Null>
    description<T extends Course$descriptionArgs<ExtArgs> = {}>(args?: Subset<T, Course$descriptionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TextPayload<ExtArgs>, T, "findMany"> | Null>
    users<T extends Course$usersArgs<ExtArgs> = {}>(args?: Subset<T, Course$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null>
    questions<T extends Course$questionsArgs<ExtArgs> = {}>(args?: Subset<T, Course$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany"> | Null>
    UserAttempt<T extends Course$UserAttemptArgs<ExtArgs> = {}>(args?: Subset<T, Course$UserAttemptArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAttemptPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Course model
   */ 
  interface CourseFieldRefs {
    readonly id: FieldRef<"Course", 'String'>
    readonly image: FieldRef<"Course", 'String'>
    readonly isActive: FieldRef<"Course", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Course findUnique
   */
  export type CourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findFirst
   */
  export type CourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findMany
   */
  export type CourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course create
   */
  export type CourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to create a Course.
     */
    data?: XOR<CourseCreateInput, CourseUncheckedCreateInput>
  }

  /**
   * Course createMany
   */
  export type CourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Course createManyAndReturn
   */
  export type CourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Course update
   */
  export type CourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to update a Course.
     */
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
    /**
     * Choose, which Course to update.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
  }

  /**
   * Course upsert
   */
  export type CourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: CourseWhereUniqueInput
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
  }

  /**
   * Course delete
   */
  export type CourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter which Course to delete.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CourseWhereInput
  }

  /**
   * Course.name
   */
  export type Course$nameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Text
     */
    select?: TextSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextInclude<ExtArgs> | null
    where?: TextWhereInput
    orderBy?: TextOrderByWithRelationInput | TextOrderByWithRelationInput[]
    cursor?: TextWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TextScalarFieldEnum | TextScalarFieldEnum[]
  }

  /**
   * Course.description
   */
  export type Course$descriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Text
     */
    select?: TextSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextInclude<ExtArgs> | null
    where?: TextWhereInput
    orderBy?: TextOrderByWithRelationInput | TextOrderByWithRelationInput[]
    cursor?: TextWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TextScalarFieldEnum | TextScalarFieldEnum[]
  }

  /**
   * Course.users
   */
  export type Course$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Course.questions
   */
  export type Course$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Course.UserAttempt
   */
  export type Course$UserAttemptArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAttempt
     */
    select?: UserAttemptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAttemptInclude<ExtArgs> | null
    where?: UserAttemptWhereInput
    orderBy?: UserAttemptOrderByWithRelationInput | UserAttemptOrderByWithRelationInput[]
    cursor?: UserAttemptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserAttemptScalarFieldEnum | UserAttemptScalarFieldEnum[]
  }

  /**
   * Course without action
   */
  export type CourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    image: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    image: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    image: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    image?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    image?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    image?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    image: string | null
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    questions?: boolean | Category$questionsArgs<ExtArgs>
    name?: boolean | Category$nameArgs<ExtArgs>
    UserAttempt?: boolean | Category$UserAttemptArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    image?: boolean
  }

  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | Category$questionsArgs<ExtArgs>
    name?: boolean | Category$nameArgs<ExtArgs>
    UserAttempt?: boolean | Category$UserAttemptArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      questions: Prisma.$QuestionPayload<ExtArgs>[]
      name: Prisma.$TextPayload<ExtArgs>[]
      UserAttempt: Prisma.$UserAttemptPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      image: string | null
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    questions<T extends Category$questionsArgs<ExtArgs> = {}>(args?: Subset<T, Category$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany"> | Null>
    name<T extends Category$nameArgs<ExtArgs> = {}>(args?: Subset<T, Category$nameArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TextPayload<ExtArgs>, T, "findMany"> | Null>
    UserAttempt<T extends Category$UserAttemptArgs<ExtArgs> = {}>(args?: Subset<T, Category$UserAttemptArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAttemptPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */ 
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly image: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data?: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
  }

  /**
   * Category.questions
   */
  export type Category$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Category.name
   */
  export type Category$nameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Text
     */
    select?: TextSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextInclude<ExtArgs> | null
    where?: TextWhereInput
    orderBy?: TextOrderByWithRelationInput | TextOrderByWithRelationInput[]
    cursor?: TextWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TextScalarFieldEnum | TextScalarFieldEnum[]
  }

  /**
   * Category.UserAttempt
   */
  export type Category$UserAttemptArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAttempt
     */
    select?: UserAttemptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAttemptInclude<ExtArgs> | null
    where?: UserAttemptWhereInput
    orderBy?: UserAttemptOrderByWithRelationInput | UserAttemptOrderByWithRelationInput[]
    cursor?: UserAttemptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserAttemptScalarFieldEnum | UserAttemptScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionMinAggregateOutputType = {
    id: string | null
    courseId: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: string | null
    courseId: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    courseId: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type QuestionMinAggregateInputType = {
    id?: true
    courseId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    courseId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    courseId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type QuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithAggregationInput | QuestionOrderByWithAggregationInput[]
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }

  export type QuestionGroupByOutputType = {
    id: string
    courseId: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: QuestionCountAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    text?: boolean | Question$textArgs<ExtArgs>
    categories?: boolean | Question$categoriesArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
    answers?: boolean | Question$answersArgs<ExtArgs>
    questionMedia?: boolean | Question$questionMediaArgs<ExtArgs>
    AttemptQuestion?: boolean | Question$AttemptQuestionArgs<ExtArgs>
    hint?: boolean | Question$hintArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectScalar = {
    id?: boolean
    courseId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type QuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    text?: boolean | Question$textArgs<ExtArgs>
    categories?: boolean | Question$categoriesArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
    answers?: boolean | Question$answersArgs<ExtArgs>
    questionMedia?: boolean | Question$questionMediaArgs<ExtArgs>
    AttemptQuestion?: boolean | Question$AttemptQuestionArgs<ExtArgs>
    hint?: boolean | Question$hintArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $QuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Question"
    objects: {
      text: Prisma.$TextPayload<ExtArgs>[]
      categories: Prisma.$CategoryPayload<ExtArgs>[]
      course: Prisma.$CoursePayload<ExtArgs>
      answers: Prisma.$AnswerPayload<ExtArgs>[]
      questionMedia: Prisma.$QuestionMediaPayload<ExtArgs>[]
      AttemptQuestion: Prisma.$AttemptQuestionPayload<ExtArgs>[]
      hint: Prisma.$TextPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      courseId: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["question"]>
    composites: {}
  }

  type QuestionGetPayload<S extends boolean | null | undefined | QuestionDefaultArgs> = $Result.GetResult<Prisma.$QuestionPayload, S>

  type QuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<QuestionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface QuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Question'], meta: { name: 'Question' } }
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionFindUniqueArgs>(args: SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Question that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionFindFirstArgs>(args?: SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionFindManyArgs>(args?: SelectSubset<T, QuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
     */
    create<T extends QuestionCreateArgs>(args: SelectSubset<T, QuestionCreateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Questions.
     * @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionCreateManyArgs>(args?: SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Questions and returns the data saved in the database.
     * @param {QuestionCreateManyAndReturnArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
     */
    delete<T extends QuestionDeleteArgs>(args: SelectSubset<T, QuestionDeleteArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionUpdateArgs>(args: SelectSubset<T, QuestionUpdateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionDeleteManyArgs>(args?: SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionUpdateManyArgs>(args: SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
     */
    upsert<T extends QuestionUpsertArgs>(args: SelectSubset<T, QuestionUpsertArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Question model
   */
  readonly fields: QuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    text<T extends Question$textArgs<ExtArgs> = {}>(args?: Subset<T, Question$textArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TextPayload<ExtArgs>, T, "findMany"> | Null>
    categories<T extends Question$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Question$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany"> | Null>
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    answers<T extends Question$answersArgs<ExtArgs> = {}>(args?: Subset<T, Question$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany"> | Null>
    questionMedia<T extends Question$questionMediaArgs<ExtArgs> = {}>(args?: Subset<T, Question$questionMediaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionMediaPayload<ExtArgs>, T, "findMany"> | Null>
    AttemptQuestion<T extends Question$AttemptQuestionArgs<ExtArgs> = {}>(args?: Subset<T, Question$AttemptQuestionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttemptQuestionPayload<ExtArgs>, T, "findMany"> | Null>
    hint<T extends Question$hintArgs<ExtArgs> = {}>(args?: Subset<T, Question$hintArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TextPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Question model
   */ 
  interface QuestionFieldRefs {
    readonly id: FieldRef<"Question", 'String'>
    readonly courseId: FieldRef<"Question", 'String'>
    readonly isActive: FieldRef<"Question", 'Boolean'>
    readonly createdAt: FieldRef<"Question", 'DateTime'>
    readonly updatedAt: FieldRef<"Question", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Question findUnique
   */
  export type QuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findFirst
   */
  export type QuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findMany
   */
  export type QuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question create
   */
  export type QuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }

  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Question createManyAndReturn
   */
  export type QuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question update
   */
  export type QuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
  }

  /**
   * Question upsert
   */
  export type QuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }

  /**
   * Question delete
   */
  export type QuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput
  }

  /**
   * Question.text
   */
  export type Question$textArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Text
     */
    select?: TextSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextInclude<ExtArgs> | null
    where?: TextWhereInput
    orderBy?: TextOrderByWithRelationInput | TextOrderByWithRelationInput[]
    cursor?: TextWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TextScalarFieldEnum | TextScalarFieldEnum[]
  }

  /**
   * Question.categories
   */
  export type Question$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Question.answers
   */
  export type Question$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    cursor?: AnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Question.questionMedia
   */
  export type Question$questionMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionMedia
     */
    select?: QuestionMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionMediaInclude<ExtArgs> | null
    where?: QuestionMediaWhereInput
    orderBy?: QuestionMediaOrderByWithRelationInput | QuestionMediaOrderByWithRelationInput[]
    cursor?: QuestionMediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionMediaScalarFieldEnum | QuestionMediaScalarFieldEnum[]
  }

  /**
   * Question.AttemptQuestion
   */
  export type Question$AttemptQuestionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttemptQuestion
     */
    select?: AttemptQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptQuestionInclude<ExtArgs> | null
    where?: AttemptQuestionWhereInput
    orderBy?: AttemptQuestionOrderByWithRelationInput | AttemptQuestionOrderByWithRelationInput[]
    cursor?: AttemptQuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttemptQuestionScalarFieldEnum | AttemptQuestionScalarFieldEnum[]
  }

  /**
   * Question.hint
   */
  export type Question$hintArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Text
     */
    select?: TextSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextInclude<ExtArgs> | null
    where?: TextWhereInput
    orderBy?: TextOrderByWithRelationInput | TextOrderByWithRelationInput[]
    cursor?: TextWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TextScalarFieldEnum | TextScalarFieldEnum[]
  }

  /**
   * Question without action
   */
  export type QuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
  }


  /**
   * Model Answer
   */

  export type AggregateAnswer = {
    _count: AnswerCountAggregateOutputType | null
    _min: AnswerMinAggregateOutputType | null
    _max: AnswerMaxAggregateOutputType | null
  }

  export type AnswerMinAggregateOutputType = {
    id: string | null
    mediaId: string | null
    isActive: boolean | null
    questionId: string | null
    isCorrect: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnswerMaxAggregateOutputType = {
    id: string | null
    mediaId: string | null
    isActive: boolean | null
    questionId: string | null
    isCorrect: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnswerCountAggregateOutputType = {
    id: number
    mediaId: number
    isActive: number
    questionId: number
    isCorrect: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AnswerMinAggregateInputType = {
    id?: true
    mediaId?: true
    isActive?: true
    questionId?: true
    isCorrect?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnswerMaxAggregateInputType = {
    id?: true
    mediaId?: true
    isActive?: true
    questionId?: true
    isCorrect?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnswerCountAggregateInputType = {
    id?: true
    mediaId?: true
    isActive?: true
    questionId?: true
    isCorrect?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AnswerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Answer to aggregate.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Answers
    **/
    _count?: true | AnswerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnswerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnswerMaxAggregateInputType
  }

  export type GetAnswerAggregateType<T extends AnswerAggregateArgs> = {
        [P in keyof T & keyof AggregateAnswer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnswer[P]>
      : GetScalarType<T[P], AggregateAnswer[P]>
  }




  export type AnswerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithAggregationInput | AnswerOrderByWithAggregationInput[]
    by: AnswerScalarFieldEnum[] | AnswerScalarFieldEnum
    having?: AnswerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnswerCountAggregateInputType | true
    _min?: AnswerMinAggregateInputType
    _max?: AnswerMaxAggregateInputType
  }

  export type AnswerGroupByOutputType = {
    id: string
    mediaId: string | null
    isActive: boolean
    questionId: string
    isCorrect: boolean
    createdAt: Date
    updatedAt: Date
    _count: AnswerCountAggregateOutputType | null
    _min: AnswerMinAggregateOutputType | null
    _max: AnswerMaxAggregateOutputType | null
  }

  type GetAnswerGroupByPayload<T extends AnswerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnswerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnswerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnswerGroupByOutputType[P]>
            : GetScalarType<T[P], AnswerGroupByOutputType[P]>
        }
      >
    >


  export type AnswerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mediaId?: boolean
    isActive?: boolean
    questionId?: boolean
    isCorrect?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    text?: boolean | Answer$textArgs<ExtArgs>
    media?: boolean | Answer$mediaArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    answeredQuestions?: boolean | Answer$answeredQuestionsArgs<ExtArgs>
    _count?: boolean | AnswerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mediaId?: boolean
    isActive?: boolean
    questionId?: boolean
    isCorrect?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    media?: boolean | Answer$mediaArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectScalar = {
    id?: boolean
    mediaId?: boolean
    isActive?: boolean
    questionId?: boolean
    isCorrect?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AnswerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    text?: boolean | Answer$textArgs<ExtArgs>
    media?: boolean | Answer$mediaArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    answeredQuestions?: boolean | Answer$answeredQuestionsArgs<ExtArgs>
    _count?: boolean | AnswerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AnswerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    media?: boolean | Answer$mediaArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }

  export type $AnswerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Answer"
    objects: {
      text: Prisma.$TextPayload<ExtArgs>[]
      media: Prisma.$MediaPayload<ExtArgs> | null
      question: Prisma.$QuestionPayload<ExtArgs>
      answeredQuestions: Prisma.$AnsweredQuestionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      mediaId: string | null
      isActive: boolean
      questionId: string
      isCorrect: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["answer"]>
    composites: {}
  }

  type AnswerGetPayload<S extends boolean | null | undefined | AnswerDefaultArgs> = $Result.GetResult<Prisma.$AnswerPayload, S>

  type AnswerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AnswerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AnswerCountAggregateInputType | true
    }

  export interface AnswerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Answer'], meta: { name: 'Answer' } }
    /**
     * Find zero or one Answer that matches the filter.
     * @param {AnswerFindUniqueArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnswerFindUniqueArgs>(args: SelectSubset<T, AnswerFindUniqueArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Answer that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AnswerFindUniqueOrThrowArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnswerFindUniqueOrThrowArgs>(args: SelectSubset<T, AnswerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Answer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindFirstArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnswerFindFirstArgs>(args?: SelectSubset<T, AnswerFindFirstArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Answer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindFirstOrThrowArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnswerFindFirstOrThrowArgs>(args?: SelectSubset<T, AnswerFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Answers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Answers
     * const answers = await prisma.answer.findMany()
     * 
     * // Get first 10 Answers
     * const answers = await prisma.answer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const answerWithIdOnly = await prisma.answer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnswerFindManyArgs>(args?: SelectSubset<T, AnswerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Answer.
     * @param {AnswerCreateArgs} args - Arguments to create a Answer.
     * @example
     * // Create one Answer
     * const Answer = await prisma.answer.create({
     *   data: {
     *     // ... data to create a Answer
     *   }
     * })
     * 
     */
    create<T extends AnswerCreateArgs>(args: SelectSubset<T, AnswerCreateArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Answers.
     * @param {AnswerCreateManyArgs} args - Arguments to create many Answers.
     * @example
     * // Create many Answers
     * const answer = await prisma.answer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnswerCreateManyArgs>(args?: SelectSubset<T, AnswerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Answers and returns the data saved in the database.
     * @param {AnswerCreateManyAndReturnArgs} args - Arguments to create many Answers.
     * @example
     * // Create many Answers
     * const answer = await prisma.answer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Answers and only return the `id`
     * const answerWithIdOnly = await prisma.answer.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnswerCreateManyAndReturnArgs>(args?: SelectSubset<T, AnswerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Answer.
     * @param {AnswerDeleteArgs} args - Arguments to delete one Answer.
     * @example
     * // Delete one Answer
     * const Answer = await prisma.answer.delete({
     *   where: {
     *     // ... filter to delete one Answer
     *   }
     * })
     * 
     */
    delete<T extends AnswerDeleteArgs>(args: SelectSubset<T, AnswerDeleteArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Answer.
     * @param {AnswerUpdateArgs} args - Arguments to update one Answer.
     * @example
     * // Update one Answer
     * const answer = await prisma.answer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnswerUpdateArgs>(args: SelectSubset<T, AnswerUpdateArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Answers.
     * @param {AnswerDeleteManyArgs} args - Arguments to filter Answers to delete.
     * @example
     * // Delete a few Answers
     * const { count } = await prisma.answer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnswerDeleteManyArgs>(args?: SelectSubset<T, AnswerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Answers
     * const answer = await prisma.answer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnswerUpdateManyArgs>(args: SelectSubset<T, AnswerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Answer.
     * @param {AnswerUpsertArgs} args - Arguments to update or create a Answer.
     * @example
     * // Update or create a Answer
     * const answer = await prisma.answer.upsert({
     *   create: {
     *     // ... data to create a Answer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Answer we want to update
     *   }
     * })
     */
    upsert<T extends AnswerUpsertArgs>(args: SelectSubset<T, AnswerUpsertArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerCountArgs} args - Arguments to filter Answers to count.
     * @example
     * // Count the number of Answers
     * const count = await prisma.answer.count({
     *   where: {
     *     // ... the filter for the Answers we want to count
     *   }
     * })
    **/
    count<T extends AnswerCountArgs>(
      args?: Subset<T, AnswerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnswerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Answer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnswerAggregateArgs>(args: Subset<T, AnswerAggregateArgs>): Prisma.PrismaPromise<GetAnswerAggregateType<T>>

    /**
     * Group by Answer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnswerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnswerGroupByArgs['orderBy'] }
        : { orderBy?: AnswerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Answer model
   */
  readonly fields: AnswerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Answer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnswerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    text<T extends Answer$textArgs<ExtArgs> = {}>(args?: Subset<T, Answer$textArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TextPayload<ExtArgs>, T, "findMany"> | Null>
    media<T extends Answer$mediaArgs<ExtArgs> = {}>(args?: Subset<T, Answer$mediaArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    answeredQuestions<T extends Answer$answeredQuestionsArgs<ExtArgs> = {}>(args?: Subset<T, Answer$answeredQuestionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnsweredQuestionPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Answer model
   */ 
  interface AnswerFieldRefs {
    readonly id: FieldRef<"Answer", 'String'>
    readonly mediaId: FieldRef<"Answer", 'String'>
    readonly isActive: FieldRef<"Answer", 'Boolean'>
    readonly questionId: FieldRef<"Answer", 'String'>
    readonly isCorrect: FieldRef<"Answer", 'Boolean'>
    readonly createdAt: FieldRef<"Answer", 'DateTime'>
    readonly updatedAt: FieldRef<"Answer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Answer findUnique
   */
  export type AnswerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer findUniqueOrThrow
   */
  export type AnswerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer findFirst
   */
  export type AnswerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Answers.
     */
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer findFirstOrThrow
   */
  export type AnswerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Answers.
     */
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer findMany
   */
  export type AnswerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answers to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer create
   */
  export type AnswerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The data needed to create a Answer.
     */
    data: XOR<AnswerCreateInput, AnswerUncheckedCreateInput>
  }

  /**
   * Answer createMany
   */
  export type AnswerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Answers.
     */
    data: AnswerCreateManyInput | AnswerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Answer createManyAndReturn
   */
  export type AnswerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Answers.
     */
    data: AnswerCreateManyInput | AnswerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Answer update
   */
  export type AnswerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The data needed to update a Answer.
     */
    data: XOR<AnswerUpdateInput, AnswerUncheckedUpdateInput>
    /**
     * Choose, which Answer to update.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer updateMany
   */
  export type AnswerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Answers.
     */
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyInput>
    /**
     * Filter which Answers to update
     */
    where?: AnswerWhereInput
  }

  /**
   * Answer upsert
   */
  export type AnswerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The filter to search for the Answer to update in case it exists.
     */
    where: AnswerWhereUniqueInput
    /**
     * In case the Answer found by the `where` argument doesn't exist, create a new Answer with this data.
     */
    create: XOR<AnswerCreateInput, AnswerUncheckedCreateInput>
    /**
     * In case the Answer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnswerUpdateInput, AnswerUncheckedUpdateInput>
  }

  /**
   * Answer delete
   */
  export type AnswerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter which Answer to delete.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer deleteMany
   */
  export type AnswerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Answers to delete
     */
    where?: AnswerWhereInput
  }

  /**
   * Answer.text
   */
  export type Answer$textArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Text
     */
    select?: TextSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextInclude<ExtArgs> | null
    where?: TextWhereInput
    orderBy?: TextOrderByWithRelationInput | TextOrderByWithRelationInput[]
    cursor?: TextWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TextScalarFieldEnum | TextScalarFieldEnum[]
  }

  /**
   * Answer.media
   */
  export type Answer$mediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    where?: MediaWhereInput
  }

  /**
   * Answer.answeredQuestions
   */
  export type Answer$answeredQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnsweredQuestion
     */
    select?: AnsweredQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnsweredQuestionInclude<ExtArgs> | null
    where?: AnsweredQuestionWhereInput
    orderBy?: AnsweredQuestionOrderByWithRelationInput | AnsweredQuestionOrderByWithRelationInput[]
    cursor?: AnsweredQuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnsweredQuestionScalarFieldEnum | AnsweredQuestionScalarFieldEnum[]
  }

  /**
   * Answer without action
   */
  export type AnswerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
  }


  /**
   * Model QuestionMedia
   */

  export type AggregateQuestionMedia = {
    _count: QuestionMediaCountAggregateOutputType | null
    _avg: QuestionMediaAvgAggregateOutputType | null
    _sum: QuestionMediaSumAggregateOutputType | null
    _min: QuestionMediaMinAggregateOutputType | null
    _max: QuestionMediaMaxAggregateOutputType | null
  }

  export type QuestionMediaAvgAggregateOutputType = {
    order: number | null
  }

  export type QuestionMediaSumAggregateOutputType = {
    order: number | null
  }

  export type QuestionMediaMinAggregateOutputType = {
    id: string | null
    questionId: string | null
    mediaId: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuestionMediaMaxAggregateOutputType = {
    id: string | null
    questionId: string | null
    mediaId: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuestionMediaCountAggregateOutputType = {
    id: number
    questionId: number
    mediaId: number
    order: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type QuestionMediaAvgAggregateInputType = {
    order?: true
  }

  export type QuestionMediaSumAggregateInputType = {
    order?: true
  }

  export type QuestionMediaMinAggregateInputType = {
    id?: true
    questionId?: true
    mediaId?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuestionMediaMaxAggregateInputType = {
    id?: true
    questionId?: true
    mediaId?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuestionMediaCountAggregateInputType = {
    id?: true
    questionId?: true
    mediaId?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type QuestionMediaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuestionMedia to aggregate.
     */
    where?: QuestionMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionMedias to fetch.
     */
    orderBy?: QuestionMediaOrderByWithRelationInput | QuestionMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuestionMedias
    **/
    _count?: true | QuestionMediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionMediaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionMediaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMediaMaxAggregateInputType
  }

  export type GetQuestionMediaAggregateType<T extends QuestionMediaAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestionMedia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestionMedia[P]>
      : GetScalarType<T[P], AggregateQuestionMedia[P]>
  }




  export type QuestionMediaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionMediaWhereInput
    orderBy?: QuestionMediaOrderByWithAggregationInput | QuestionMediaOrderByWithAggregationInput[]
    by: QuestionMediaScalarFieldEnum[] | QuestionMediaScalarFieldEnum
    having?: QuestionMediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionMediaCountAggregateInputType | true
    _avg?: QuestionMediaAvgAggregateInputType
    _sum?: QuestionMediaSumAggregateInputType
    _min?: QuestionMediaMinAggregateInputType
    _max?: QuestionMediaMaxAggregateInputType
  }

  export type QuestionMediaGroupByOutputType = {
    id: string
    questionId: string
    mediaId: string
    order: number
    createdAt: Date
    updatedAt: Date
    _count: QuestionMediaCountAggregateOutputType | null
    _avg: QuestionMediaAvgAggregateOutputType | null
    _sum: QuestionMediaSumAggregateOutputType | null
    _min: QuestionMediaMinAggregateOutputType | null
    _max: QuestionMediaMaxAggregateOutputType | null
  }

  type GetQuestionMediaGroupByPayload<T extends QuestionMediaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionMediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionMediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionMediaGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionMediaGroupByOutputType[P]>
        }
      >
    >


  export type QuestionMediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    mediaId?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    media?: boolean | MediaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questionMedia"]>

  export type QuestionMediaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    mediaId?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    media?: boolean | MediaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questionMedia"]>

  export type QuestionMediaSelectScalar = {
    id?: boolean
    questionId?: boolean
    mediaId?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type QuestionMediaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    media?: boolean | MediaDefaultArgs<ExtArgs>
  }
  export type QuestionMediaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    media?: boolean | MediaDefaultArgs<ExtArgs>
  }

  export type $QuestionMediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuestionMedia"
    objects: {
      question: Prisma.$QuestionPayload<ExtArgs>
      media: Prisma.$MediaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      questionId: string
      mediaId: string
      order: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["questionMedia"]>
    composites: {}
  }

  type QuestionMediaGetPayload<S extends boolean | null | undefined | QuestionMediaDefaultArgs> = $Result.GetResult<Prisma.$QuestionMediaPayload, S>

  type QuestionMediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<QuestionMediaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: QuestionMediaCountAggregateInputType | true
    }

  export interface QuestionMediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuestionMedia'], meta: { name: 'QuestionMedia' } }
    /**
     * Find zero or one QuestionMedia that matches the filter.
     * @param {QuestionMediaFindUniqueArgs} args - Arguments to find a QuestionMedia
     * @example
     * // Get one QuestionMedia
     * const questionMedia = await prisma.questionMedia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionMediaFindUniqueArgs>(args: SelectSubset<T, QuestionMediaFindUniqueArgs<ExtArgs>>): Prisma__QuestionMediaClient<$Result.GetResult<Prisma.$QuestionMediaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one QuestionMedia that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {QuestionMediaFindUniqueOrThrowArgs} args - Arguments to find a QuestionMedia
     * @example
     * // Get one QuestionMedia
     * const questionMedia = await prisma.questionMedia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionMediaFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionMediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionMediaClient<$Result.GetResult<Prisma.$QuestionMediaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first QuestionMedia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionMediaFindFirstArgs} args - Arguments to find a QuestionMedia
     * @example
     * // Get one QuestionMedia
     * const questionMedia = await prisma.questionMedia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionMediaFindFirstArgs>(args?: SelectSubset<T, QuestionMediaFindFirstArgs<ExtArgs>>): Prisma__QuestionMediaClient<$Result.GetResult<Prisma.$QuestionMediaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first QuestionMedia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionMediaFindFirstOrThrowArgs} args - Arguments to find a QuestionMedia
     * @example
     * // Get one QuestionMedia
     * const questionMedia = await prisma.questionMedia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionMediaFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionMediaFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionMediaClient<$Result.GetResult<Prisma.$QuestionMediaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more QuestionMedias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionMediaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuestionMedias
     * const questionMedias = await prisma.questionMedia.findMany()
     * 
     * // Get first 10 QuestionMedias
     * const questionMedias = await prisma.questionMedia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionMediaWithIdOnly = await prisma.questionMedia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionMediaFindManyArgs>(args?: SelectSubset<T, QuestionMediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionMediaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a QuestionMedia.
     * @param {QuestionMediaCreateArgs} args - Arguments to create a QuestionMedia.
     * @example
     * // Create one QuestionMedia
     * const QuestionMedia = await prisma.questionMedia.create({
     *   data: {
     *     // ... data to create a QuestionMedia
     *   }
     * })
     * 
     */
    create<T extends QuestionMediaCreateArgs>(args: SelectSubset<T, QuestionMediaCreateArgs<ExtArgs>>): Prisma__QuestionMediaClient<$Result.GetResult<Prisma.$QuestionMediaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many QuestionMedias.
     * @param {QuestionMediaCreateManyArgs} args - Arguments to create many QuestionMedias.
     * @example
     * // Create many QuestionMedias
     * const questionMedia = await prisma.questionMedia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionMediaCreateManyArgs>(args?: SelectSubset<T, QuestionMediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuestionMedias and returns the data saved in the database.
     * @param {QuestionMediaCreateManyAndReturnArgs} args - Arguments to create many QuestionMedias.
     * @example
     * // Create many QuestionMedias
     * const questionMedia = await prisma.questionMedia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuestionMedias and only return the `id`
     * const questionMediaWithIdOnly = await prisma.questionMedia.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionMediaCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionMediaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionMediaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a QuestionMedia.
     * @param {QuestionMediaDeleteArgs} args - Arguments to delete one QuestionMedia.
     * @example
     * // Delete one QuestionMedia
     * const QuestionMedia = await prisma.questionMedia.delete({
     *   where: {
     *     // ... filter to delete one QuestionMedia
     *   }
     * })
     * 
     */
    delete<T extends QuestionMediaDeleteArgs>(args: SelectSubset<T, QuestionMediaDeleteArgs<ExtArgs>>): Prisma__QuestionMediaClient<$Result.GetResult<Prisma.$QuestionMediaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one QuestionMedia.
     * @param {QuestionMediaUpdateArgs} args - Arguments to update one QuestionMedia.
     * @example
     * // Update one QuestionMedia
     * const questionMedia = await prisma.questionMedia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionMediaUpdateArgs>(args: SelectSubset<T, QuestionMediaUpdateArgs<ExtArgs>>): Prisma__QuestionMediaClient<$Result.GetResult<Prisma.$QuestionMediaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more QuestionMedias.
     * @param {QuestionMediaDeleteManyArgs} args - Arguments to filter QuestionMedias to delete.
     * @example
     * // Delete a few QuestionMedias
     * const { count } = await prisma.questionMedia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionMediaDeleteManyArgs>(args?: SelectSubset<T, QuestionMediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuestionMedias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionMediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuestionMedias
     * const questionMedia = await prisma.questionMedia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionMediaUpdateManyArgs>(args: SelectSubset<T, QuestionMediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one QuestionMedia.
     * @param {QuestionMediaUpsertArgs} args - Arguments to update or create a QuestionMedia.
     * @example
     * // Update or create a QuestionMedia
     * const questionMedia = await prisma.questionMedia.upsert({
     *   create: {
     *     // ... data to create a QuestionMedia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuestionMedia we want to update
     *   }
     * })
     */
    upsert<T extends QuestionMediaUpsertArgs>(args: SelectSubset<T, QuestionMediaUpsertArgs<ExtArgs>>): Prisma__QuestionMediaClient<$Result.GetResult<Prisma.$QuestionMediaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of QuestionMedias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionMediaCountArgs} args - Arguments to filter QuestionMedias to count.
     * @example
     * // Count the number of QuestionMedias
     * const count = await prisma.questionMedia.count({
     *   where: {
     *     // ... the filter for the QuestionMedias we want to count
     *   }
     * })
    **/
    count<T extends QuestionMediaCountArgs>(
      args?: Subset<T, QuestionMediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionMediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuestionMedia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionMediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuestionMediaAggregateArgs>(args: Subset<T, QuestionMediaAggregateArgs>): Prisma.PrismaPromise<GetQuestionMediaAggregateType<T>>

    /**
     * Group by QuestionMedia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionMediaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuestionMediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionMediaGroupByArgs['orderBy'] }
        : { orderBy?: QuestionMediaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuestionMediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionMediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuestionMedia model
   */
  readonly fields: QuestionMediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuestionMedia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionMediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    media<T extends MediaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MediaDefaultArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the QuestionMedia model
   */ 
  interface QuestionMediaFieldRefs {
    readonly id: FieldRef<"QuestionMedia", 'String'>
    readonly questionId: FieldRef<"QuestionMedia", 'String'>
    readonly mediaId: FieldRef<"QuestionMedia", 'String'>
    readonly order: FieldRef<"QuestionMedia", 'Int'>
    readonly createdAt: FieldRef<"QuestionMedia", 'DateTime'>
    readonly updatedAt: FieldRef<"QuestionMedia", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * QuestionMedia findUnique
   */
  export type QuestionMediaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionMedia
     */
    select?: QuestionMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionMediaInclude<ExtArgs> | null
    /**
     * Filter, which QuestionMedia to fetch.
     */
    where: QuestionMediaWhereUniqueInput
  }

  /**
   * QuestionMedia findUniqueOrThrow
   */
  export type QuestionMediaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionMedia
     */
    select?: QuestionMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionMediaInclude<ExtArgs> | null
    /**
     * Filter, which QuestionMedia to fetch.
     */
    where: QuestionMediaWhereUniqueInput
  }

  /**
   * QuestionMedia findFirst
   */
  export type QuestionMediaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionMedia
     */
    select?: QuestionMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionMediaInclude<ExtArgs> | null
    /**
     * Filter, which QuestionMedia to fetch.
     */
    where?: QuestionMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionMedias to fetch.
     */
    orderBy?: QuestionMediaOrderByWithRelationInput | QuestionMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuestionMedias.
     */
    cursor?: QuestionMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuestionMedias.
     */
    distinct?: QuestionMediaScalarFieldEnum | QuestionMediaScalarFieldEnum[]
  }

  /**
   * QuestionMedia findFirstOrThrow
   */
  export type QuestionMediaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionMedia
     */
    select?: QuestionMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionMediaInclude<ExtArgs> | null
    /**
     * Filter, which QuestionMedia to fetch.
     */
    where?: QuestionMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionMedias to fetch.
     */
    orderBy?: QuestionMediaOrderByWithRelationInput | QuestionMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuestionMedias.
     */
    cursor?: QuestionMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuestionMedias.
     */
    distinct?: QuestionMediaScalarFieldEnum | QuestionMediaScalarFieldEnum[]
  }

  /**
   * QuestionMedia findMany
   */
  export type QuestionMediaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionMedia
     */
    select?: QuestionMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionMediaInclude<ExtArgs> | null
    /**
     * Filter, which QuestionMedias to fetch.
     */
    where?: QuestionMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionMedias to fetch.
     */
    orderBy?: QuestionMediaOrderByWithRelationInput | QuestionMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuestionMedias.
     */
    cursor?: QuestionMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionMedias.
     */
    skip?: number
    distinct?: QuestionMediaScalarFieldEnum | QuestionMediaScalarFieldEnum[]
  }

  /**
   * QuestionMedia create
   */
  export type QuestionMediaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionMedia
     */
    select?: QuestionMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionMediaInclude<ExtArgs> | null
    /**
     * The data needed to create a QuestionMedia.
     */
    data: XOR<QuestionMediaCreateInput, QuestionMediaUncheckedCreateInput>
  }

  /**
   * QuestionMedia createMany
   */
  export type QuestionMediaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuestionMedias.
     */
    data: QuestionMediaCreateManyInput | QuestionMediaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuestionMedia createManyAndReturn
   */
  export type QuestionMediaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionMedia
     */
    select?: QuestionMediaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many QuestionMedias.
     */
    data: QuestionMediaCreateManyInput | QuestionMediaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionMediaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuestionMedia update
   */
  export type QuestionMediaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionMedia
     */
    select?: QuestionMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionMediaInclude<ExtArgs> | null
    /**
     * The data needed to update a QuestionMedia.
     */
    data: XOR<QuestionMediaUpdateInput, QuestionMediaUncheckedUpdateInput>
    /**
     * Choose, which QuestionMedia to update.
     */
    where: QuestionMediaWhereUniqueInput
  }

  /**
   * QuestionMedia updateMany
   */
  export type QuestionMediaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuestionMedias.
     */
    data: XOR<QuestionMediaUpdateManyMutationInput, QuestionMediaUncheckedUpdateManyInput>
    /**
     * Filter which QuestionMedias to update
     */
    where?: QuestionMediaWhereInput
  }

  /**
   * QuestionMedia upsert
   */
  export type QuestionMediaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionMedia
     */
    select?: QuestionMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionMediaInclude<ExtArgs> | null
    /**
     * The filter to search for the QuestionMedia to update in case it exists.
     */
    where: QuestionMediaWhereUniqueInput
    /**
     * In case the QuestionMedia found by the `where` argument doesn't exist, create a new QuestionMedia with this data.
     */
    create: XOR<QuestionMediaCreateInput, QuestionMediaUncheckedCreateInput>
    /**
     * In case the QuestionMedia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionMediaUpdateInput, QuestionMediaUncheckedUpdateInput>
  }

  /**
   * QuestionMedia delete
   */
  export type QuestionMediaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionMedia
     */
    select?: QuestionMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionMediaInclude<ExtArgs> | null
    /**
     * Filter which QuestionMedia to delete.
     */
    where: QuestionMediaWhereUniqueInput
  }

  /**
   * QuestionMedia deleteMany
   */
  export type QuestionMediaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuestionMedias to delete
     */
    where?: QuestionMediaWhereInput
  }

  /**
   * QuestionMedia without action
   */
  export type QuestionMediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionMedia
     */
    select?: QuestionMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionMediaInclude<ExtArgs> | null
  }


  /**
   * Model Media
   */

  export type AggregateMedia = {
    _count: MediaCountAggregateOutputType | null
    _min: MediaMinAggregateOutputType | null
    _max: MediaMaxAggregateOutputType | null
  }

  export type MediaMinAggregateOutputType = {
    id: string | null
    url: string | null
    type: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MediaMaxAggregateOutputType = {
    id: string | null
    url: string | null
    type: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MediaCountAggregateOutputType = {
    id: number
    url: number
    type: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MediaMinAggregateInputType = {
    id?: true
    url?: true
    type?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MediaMaxAggregateInputType = {
    id?: true
    url?: true
    type?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MediaCountAggregateInputType = {
    id?: true
    url?: true
    type?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MediaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Media to aggregate.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Media
    **/
    _count?: true | MediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MediaMaxAggregateInputType
  }

  export type GetMediaAggregateType<T extends MediaAggregateArgs> = {
        [P in keyof T & keyof AggregateMedia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedia[P]>
      : GetScalarType<T[P], AggregateMedia[P]>
  }




  export type MediaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaWhereInput
    orderBy?: MediaOrderByWithAggregationInput | MediaOrderByWithAggregationInput[]
    by: MediaScalarFieldEnum[] | MediaScalarFieldEnum
    having?: MediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MediaCountAggregateInputType | true
    _min?: MediaMinAggregateInputType
    _max?: MediaMaxAggregateInputType
  }

  export type MediaGroupByOutputType = {
    id: string
    url: string
    type: string | null
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: MediaCountAggregateOutputType | null
    _min: MediaMinAggregateOutputType | null
    _max: MediaMaxAggregateOutputType | null
  }

  type GetMediaGroupByPayload<T extends MediaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MediaGroupByOutputType[P]>
            : GetScalarType<T[P], MediaGroupByOutputType[P]>
        }
      >
    >


  export type MediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    type?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    questionMedia?: boolean | Media$questionMediaArgs<ExtArgs>
    answer?: boolean | Media$answerArgs<ExtArgs>
    _count?: boolean | MediaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["media"]>

  export type MediaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    type?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["media"]>

  export type MediaSelectScalar = {
    id?: boolean
    url?: boolean
    type?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MediaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questionMedia?: boolean | Media$questionMediaArgs<ExtArgs>
    answer?: boolean | Media$answerArgs<ExtArgs>
    _count?: boolean | MediaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MediaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Media"
    objects: {
      questionMedia: Prisma.$QuestionMediaPayload<ExtArgs>[]
      answer: Prisma.$AnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      type: string | null
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["media"]>
    composites: {}
  }

  type MediaGetPayload<S extends boolean | null | undefined | MediaDefaultArgs> = $Result.GetResult<Prisma.$MediaPayload, S>

  type MediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MediaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MediaCountAggregateInputType | true
    }

  export interface MediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Media'], meta: { name: 'Media' } }
    /**
     * Find zero or one Media that matches the filter.
     * @param {MediaFindUniqueArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MediaFindUniqueArgs>(args: SelectSubset<T, MediaFindUniqueArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Media that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MediaFindUniqueOrThrowArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MediaFindUniqueOrThrowArgs>(args: SelectSubset<T, MediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindFirstArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MediaFindFirstArgs>(args?: SelectSubset<T, MediaFindFirstArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Media that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindFirstOrThrowArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MediaFindFirstOrThrowArgs>(args?: SelectSubset<T, MediaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Media
     * const media = await prisma.media.findMany()
     * 
     * // Get first 10 Media
     * const media = await prisma.media.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mediaWithIdOnly = await prisma.media.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MediaFindManyArgs>(args?: SelectSubset<T, MediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Media.
     * @param {MediaCreateArgs} args - Arguments to create a Media.
     * @example
     * // Create one Media
     * const Media = await prisma.media.create({
     *   data: {
     *     // ... data to create a Media
     *   }
     * })
     * 
     */
    create<T extends MediaCreateArgs>(args: SelectSubset<T, MediaCreateArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Media.
     * @param {MediaCreateManyArgs} args - Arguments to create many Media.
     * @example
     * // Create many Media
     * const media = await prisma.media.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MediaCreateManyArgs>(args?: SelectSubset<T, MediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Media and returns the data saved in the database.
     * @param {MediaCreateManyAndReturnArgs} args - Arguments to create many Media.
     * @example
     * // Create many Media
     * const media = await prisma.media.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Media and only return the `id`
     * const mediaWithIdOnly = await prisma.media.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MediaCreateManyAndReturnArgs>(args?: SelectSubset<T, MediaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Media.
     * @param {MediaDeleteArgs} args - Arguments to delete one Media.
     * @example
     * // Delete one Media
     * const Media = await prisma.media.delete({
     *   where: {
     *     // ... filter to delete one Media
     *   }
     * })
     * 
     */
    delete<T extends MediaDeleteArgs>(args: SelectSubset<T, MediaDeleteArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Media.
     * @param {MediaUpdateArgs} args - Arguments to update one Media.
     * @example
     * // Update one Media
     * const media = await prisma.media.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MediaUpdateArgs>(args: SelectSubset<T, MediaUpdateArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Media.
     * @param {MediaDeleteManyArgs} args - Arguments to filter Media to delete.
     * @example
     * // Delete a few Media
     * const { count } = await prisma.media.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MediaDeleteManyArgs>(args?: SelectSubset<T, MediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Media
     * const media = await prisma.media.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MediaUpdateManyArgs>(args: SelectSubset<T, MediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Media.
     * @param {MediaUpsertArgs} args - Arguments to update or create a Media.
     * @example
     * // Update or create a Media
     * const media = await prisma.media.upsert({
     *   create: {
     *     // ... data to create a Media
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Media we want to update
     *   }
     * })
     */
    upsert<T extends MediaUpsertArgs>(args: SelectSubset<T, MediaUpsertArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaCountArgs} args - Arguments to filter Media to count.
     * @example
     * // Count the number of Media
     * const count = await prisma.media.count({
     *   where: {
     *     // ... the filter for the Media we want to count
     *   }
     * })
    **/
    count<T extends MediaCountArgs>(
      args?: Subset<T, MediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MediaAggregateArgs>(args: Subset<T, MediaAggregateArgs>): Prisma.PrismaPromise<GetMediaAggregateType<T>>

    /**
     * Group by Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MediaGroupByArgs['orderBy'] }
        : { orderBy?: MediaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Media model
   */
  readonly fields: MediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Media.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    questionMedia<T extends Media$questionMediaArgs<ExtArgs> = {}>(args?: Subset<T, Media$questionMediaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionMediaPayload<ExtArgs>, T, "findMany"> | Null>
    answer<T extends Media$answerArgs<ExtArgs> = {}>(args?: Subset<T, Media$answerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Media model
   */ 
  interface MediaFieldRefs {
    readonly id: FieldRef<"Media", 'String'>
    readonly url: FieldRef<"Media", 'String'>
    readonly type: FieldRef<"Media", 'String'>
    readonly description: FieldRef<"Media", 'String'>
    readonly createdAt: FieldRef<"Media", 'DateTime'>
    readonly updatedAt: FieldRef<"Media", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Media findUnique
   */
  export type MediaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media findUniqueOrThrow
   */
  export type MediaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media findFirst
   */
  export type MediaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Media.
     */
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media findFirstOrThrow
   */
  export type MediaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Media.
     */
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media findMany
   */
  export type MediaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media create
   */
  export type MediaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The data needed to create a Media.
     */
    data: XOR<MediaCreateInput, MediaUncheckedCreateInput>
  }

  /**
   * Media createMany
   */
  export type MediaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Media.
     */
    data: MediaCreateManyInput | MediaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Media createManyAndReturn
   */
  export type MediaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Media.
     */
    data: MediaCreateManyInput | MediaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Media update
   */
  export type MediaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The data needed to update a Media.
     */
    data: XOR<MediaUpdateInput, MediaUncheckedUpdateInput>
    /**
     * Choose, which Media to update.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media updateMany
   */
  export type MediaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Media.
     */
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyInput>
    /**
     * Filter which Media to update
     */
    where?: MediaWhereInput
  }

  /**
   * Media upsert
   */
  export type MediaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The filter to search for the Media to update in case it exists.
     */
    where: MediaWhereUniqueInput
    /**
     * In case the Media found by the `where` argument doesn't exist, create a new Media with this data.
     */
    create: XOR<MediaCreateInput, MediaUncheckedCreateInput>
    /**
     * In case the Media was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MediaUpdateInput, MediaUncheckedUpdateInput>
  }

  /**
   * Media delete
   */
  export type MediaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter which Media to delete.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media deleteMany
   */
  export type MediaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Media to delete
     */
    where?: MediaWhereInput
  }

  /**
   * Media.questionMedia
   */
  export type Media$questionMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionMedia
     */
    select?: QuestionMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionMediaInclude<ExtArgs> | null
    where?: QuestionMediaWhereInput
    orderBy?: QuestionMediaOrderByWithRelationInput | QuestionMediaOrderByWithRelationInput[]
    cursor?: QuestionMediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionMediaScalarFieldEnum | QuestionMediaScalarFieldEnum[]
  }

  /**
   * Media.answer
   */
  export type Media$answerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    cursor?: AnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Media without action
   */
  export type MediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
  }


  /**
   * Model UserAttempt
   */

  export type AggregateUserAttempt = {
    _count: UserAttemptCountAggregateOutputType | null
    _avg: UserAttemptAvgAggregateOutputType | null
    _sum: UserAttemptSumAggregateOutputType | null
    _min: UserAttemptMinAggregateOutputType | null
    _max: UserAttemptMaxAggregateOutputType | null
  }

  export type UserAttemptAvgAggregateOutputType = {
    result: number | null
    currentQuestionIndex: number | null
  }

  export type UserAttemptSumAggregateOutputType = {
    result: number | null
    currentQuestionIndex: number | null
  }

  export type UserAttemptMinAggregateOutputType = {
    id: string | null
    userId: string | null
    date: Date | null
    result: number | null
    courseId: string | null
    isTimed: boolean | null
    isInstantResult: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    currentQuestionIndex: number | null
    endTime: Date | null
  }

  export type UserAttemptMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    date: Date | null
    result: number | null
    courseId: string | null
    isTimed: boolean | null
    isInstantResult: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    currentQuestionIndex: number | null
    endTime: Date | null
  }

  export type UserAttemptCountAggregateOutputType = {
    id: number
    userId: number
    date: number
    result: number
    courseId: number
    isTimed: number
    isInstantResult: number
    createdAt: number
    updatedAt: number
    currentQuestionIndex: number
    endTime: number
    _all: number
  }


  export type UserAttemptAvgAggregateInputType = {
    result?: true
    currentQuestionIndex?: true
  }

  export type UserAttemptSumAggregateInputType = {
    result?: true
    currentQuestionIndex?: true
  }

  export type UserAttemptMinAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    result?: true
    courseId?: true
    isTimed?: true
    isInstantResult?: true
    createdAt?: true
    updatedAt?: true
    currentQuestionIndex?: true
    endTime?: true
  }

  export type UserAttemptMaxAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    result?: true
    courseId?: true
    isTimed?: true
    isInstantResult?: true
    createdAt?: true
    updatedAt?: true
    currentQuestionIndex?: true
    endTime?: true
  }

  export type UserAttemptCountAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    result?: true
    courseId?: true
    isTimed?: true
    isInstantResult?: true
    createdAt?: true
    updatedAt?: true
    currentQuestionIndex?: true
    endTime?: true
    _all?: true
  }

  export type UserAttemptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAttempt to aggregate.
     */
    where?: UserAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAttempts to fetch.
     */
    orderBy?: UserAttemptOrderByWithRelationInput | UserAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserAttempts
    **/
    _count?: true | UserAttemptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAttemptAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserAttemptSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserAttemptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserAttemptMaxAggregateInputType
  }

  export type GetUserAttemptAggregateType<T extends UserAttemptAggregateArgs> = {
        [P in keyof T & keyof AggregateUserAttempt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserAttempt[P]>
      : GetScalarType<T[P], AggregateUserAttempt[P]>
  }




  export type UserAttemptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAttemptWhereInput
    orderBy?: UserAttemptOrderByWithAggregationInput | UserAttemptOrderByWithAggregationInput[]
    by: UserAttemptScalarFieldEnum[] | UserAttemptScalarFieldEnum
    having?: UserAttemptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserAttemptCountAggregateInputType | true
    _avg?: UserAttemptAvgAggregateInputType
    _sum?: UserAttemptSumAggregateInputType
    _min?: UserAttemptMinAggregateInputType
    _max?: UserAttemptMaxAggregateInputType
  }

  export type UserAttemptGroupByOutputType = {
    id: string
    userId: string
    date: Date
    result: number
    courseId: string | null
    isTimed: boolean
    isInstantResult: boolean
    createdAt: Date
    updatedAt: Date
    currentQuestionIndex: number
    endTime: Date | null
    _count: UserAttemptCountAggregateOutputType | null
    _avg: UserAttemptAvgAggregateOutputType | null
    _sum: UserAttemptSumAggregateOutputType | null
    _min: UserAttemptMinAggregateOutputType | null
    _max: UserAttemptMaxAggregateOutputType | null
  }

  type GetUserAttemptGroupByPayload<T extends UserAttemptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserAttemptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserAttemptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserAttemptGroupByOutputType[P]>
            : GetScalarType<T[P], UserAttemptGroupByOutputType[P]>
        }
      >
    >


  export type UserAttemptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    result?: boolean
    courseId?: boolean
    isTimed?: boolean
    isInstantResult?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    currentQuestionIndex?: boolean
    endTime?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | UserAttempt$courseArgs<ExtArgs>
    answeredQuestions?: boolean | UserAttempt$answeredQuestionsArgs<ExtArgs>
    categories?: boolean | UserAttempt$categoriesArgs<ExtArgs>
    questions?: boolean | UserAttempt$questionsArgs<ExtArgs>
    _count?: boolean | UserAttemptCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAttempt"]>

  export type UserAttemptSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    result?: boolean
    courseId?: boolean
    isTimed?: boolean
    isInstantResult?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    currentQuestionIndex?: boolean
    endTime?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | UserAttempt$courseArgs<ExtArgs>
  }, ExtArgs["result"]["userAttempt"]>

  export type UserAttemptSelectScalar = {
    id?: boolean
    userId?: boolean
    date?: boolean
    result?: boolean
    courseId?: boolean
    isTimed?: boolean
    isInstantResult?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    currentQuestionIndex?: boolean
    endTime?: boolean
  }

  export type UserAttemptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | UserAttempt$courseArgs<ExtArgs>
    answeredQuestions?: boolean | UserAttempt$answeredQuestionsArgs<ExtArgs>
    categories?: boolean | UserAttempt$categoriesArgs<ExtArgs>
    questions?: boolean | UserAttempt$questionsArgs<ExtArgs>
    _count?: boolean | UserAttemptCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserAttemptIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | UserAttempt$courseArgs<ExtArgs>
  }

  export type $UserAttemptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserAttempt"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      course: Prisma.$CoursePayload<ExtArgs> | null
      answeredQuestions: Prisma.$AnsweredQuestionPayload<ExtArgs>[]
      categories: Prisma.$CategoryPayload<ExtArgs>[]
      questions: Prisma.$AttemptQuestionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      date: Date
      result: number
      courseId: string | null
      isTimed: boolean
      isInstantResult: boolean
      createdAt: Date
      updatedAt: Date
      currentQuestionIndex: number
      endTime: Date | null
    }, ExtArgs["result"]["userAttempt"]>
    composites: {}
  }

  type UserAttemptGetPayload<S extends boolean | null | undefined | UserAttemptDefaultArgs> = $Result.GetResult<Prisma.$UserAttemptPayload, S>

  type UserAttemptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserAttemptFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserAttemptCountAggregateInputType | true
    }

  export interface UserAttemptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserAttempt'], meta: { name: 'UserAttempt' } }
    /**
     * Find zero or one UserAttempt that matches the filter.
     * @param {UserAttemptFindUniqueArgs} args - Arguments to find a UserAttempt
     * @example
     * // Get one UserAttempt
     * const userAttempt = await prisma.userAttempt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserAttemptFindUniqueArgs>(args: SelectSubset<T, UserAttemptFindUniqueArgs<ExtArgs>>): Prisma__UserAttemptClient<$Result.GetResult<Prisma.$UserAttemptPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserAttempt that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserAttemptFindUniqueOrThrowArgs} args - Arguments to find a UserAttempt
     * @example
     * // Get one UserAttempt
     * const userAttempt = await prisma.userAttempt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserAttemptFindUniqueOrThrowArgs>(args: SelectSubset<T, UserAttemptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserAttemptClient<$Result.GetResult<Prisma.$UserAttemptPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserAttempt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAttemptFindFirstArgs} args - Arguments to find a UserAttempt
     * @example
     * // Get one UserAttempt
     * const userAttempt = await prisma.userAttempt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserAttemptFindFirstArgs>(args?: SelectSubset<T, UserAttemptFindFirstArgs<ExtArgs>>): Prisma__UserAttemptClient<$Result.GetResult<Prisma.$UserAttemptPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserAttempt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAttemptFindFirstOrThrowArgs} args - Arguments to find a UserAttempt
     * @example
     * // Get one UserAttempt
     * const userAttempt = await prisma.userAttempt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserAttemptFindFirstOrThrowArgs>(args?: SelectSubset<T, UserAttemptFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserAttemptClient<$Result.GetResult<Prisma.$UserAttemptPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserAttempts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAttemptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserAttempts
     * const userAttempts = await prisma.userAttempt.findMany()
     * 
     * // Get first 10 UserAttempts
     * const userAttempts = await prisma.userAttempt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userAttemptWithIdOnly = await prisma.userAttempt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserAttemptFindManyArgs>(args?: SelectSubset<T, UserAttemptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAttemptPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserAttempt.
     * @param {UserAttemptCreateArgs} args - Arguments to create a UserAttempt.
     * @example
     * // Create one UserAttempt
     * const UserAttempt = await prisma.userAttempt.create({
     *   data: {
     *     // ... data to create a UserAttempt
     *   }
     * })
     * 
     */
    create<T extends UserAttemptCreateArgs>(args: SelectSubset<T, UserAttemptCreateArgs<ExtArgs>>): Prisma__UserAttemptClient<$Result.GetResult<Prisma.$UserAttemptPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserAttempts.
     * @param {UserAttemptCreateManyArgs} args - Arguments to create many UserAttempts.
     * @example
     * // Create many UserAttempts
     * const userAttempt = await prisma.userAttempt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserAttemptCreateManyArgs>(args?: SelectSubset<T, UserAttemptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserAttempts and returns the data saved in the database.
     * @param {UserAttemptCreateManyAndReturnArgs} args - Arguments to create many UserAttempts.
     * @example
     * // Create many UserAttempts
     * const userAttempt = await prisma.userAttempt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserAttempts and only return the `id`
     * const userAttemptWithIdOnly = await prisma.userAttempt.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserAttemptCreateManyAndReturnArgs>(args?: SelectSubset<T, UserAttemptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAttemptPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserAttempt.
     * @param {UserAttemptDeleteArgs} args - Arguments to delete one UserAttempt.
     * @example
     * // Delete one UserAttempt
     * const UserAttempt = await prisma.userAttempt.delete({
     *   where: {
     *     // ... filter to delete one UserAttempt
     *   }
     * })
     * 
     */
    delete<T extends UserAttemptDeleteArgs>(args: SelectSubset<T, UserAttemptDeleteArgs<ExtArgs>>): Prisma__UserAttemptClient<$Result.GetResult<Prisma.$UserAttemptPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserAttempt.
     * @param {UserAttemptUpdateArgs} args - Arguments to update one UserAttempt.
     * @example
     * // Update one UserAttempt
     * const userAttempt = await prisma.userAttempt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserAttemptUpdateArgs>(args: SelectSubset<T, UserAttemptUpdateArgs<ExtArgs>>): Prisma__UserAttemptClient<$Result.GetResult<Prisma.$UserAttemptPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserAttempts.
     * @param {UserAttemptDeleteManyArgs} args - Arguments to filter UserAttempts to delete.
     * @example
     * // Delete a few UserAttempts
     * const { count } = await prisma.userAttempt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserAttemptDeleteManyArgs>(args?: SelectSubset<T, UserAttemptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAttempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAttemptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserAttempts
     * const userAttempt = await prisma.userAttempt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserAttemptUpdateManyArgs>(args: SelectSubset<T, UserAttemptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserAttempt.
     * @param {UserAttemptUpsertArgs} args - Arguments to update or create a UserAttempt.
     * @example
     * // Update or create a UserAttempt
     * const userAttempt = await prisma.userAttempt.upsert({
     *   create: {
     *     // ... data to create a UserAttempt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserAttempt we want to update
     *   }
     * })
     */
    upsert<T extends UserAttemptUpsertArgs>(args: SelectSubset<T, UserAttemptUpsertArgs<ExtArgs>>): Prisma__UserAttemptClient<$Result.GetResult<Prisma.$UserAttemptPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserAttempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAttemptCountArgs} args - Arguments to filter UserAttempts to count.
     * @example
     * // Count the number of UserAttempts
     * const count = await prisma.userAttempt.count({
     *   where: {
     *     // ... the filter for the UserAttempts we want to count
     *   }
     * })
    **/
    count<T extends UserAttemptCountArgs>(
      args?: Subset<T, UserAttemptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserAttemptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserAttempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAttemptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAttemptAggregateArgs>(args: Subset<T, UserAttemptAggregateArgs>): Prisma.PrismaPromise<GetUserAttemptAggregateType<T>>

    /**
     * Group by UserAttempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAttemptGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserAttemptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserAttemptGroupByArgs['orderBy'] }
        : { orderBy?: UserAttemptGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserAttemptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserAttemptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserAttempt model
   */
  readonly fields: UserAttemptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserAttempt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserAttemptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    course<T extends UserAttempt$courseArgs<ExtArgs> = {}>(args?: Subset<T, UserAttempt$courseArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    answeredQuestions<T extends UserAttempt$answeredQuestionsArgs<ExtArgs> = {}>(args?: Subset<T, UserAttempt$answeredQuestionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnsweredQuestionPayload<ExtArgs>, T, "findMany"> | Null>
    categories<T extends UserAttempt$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, UserAttempt$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany"> | Null>
    questions<T extends UserAttempt$questionsArgs<ExtArgs> = {}>(args?: Subset<T, UserAttempt$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttemptQuestionPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserAttempt model
   */ 
  interface UserAttemptFieldRefs {
    readonly id: FieldRef<"UserAttempt", 'String'>
    readonly userId: FieldRef<"UserAttempt", 'String'>
    readonly date: FieldRef<"UserAttempt", 'DateTime'>
    readonly result: FieldRef<"UserAttempt", 'Float'>
    readonly courseId: FieldRef<"UserAttempt", 'String'>
    readonly isTimed: FieldRef<"UserAttempt", 'Boolean'>
    readonly isInstantResult: FieldRef<"UserAttempt", 'Boolean'>
    readonly createdAt: FieldRef<"UserAttempt", 'DateTime'>
    readonly updatedAt: FieldRef<"UserAttempt", 'DateTime'>
    readonly currentQuestionIndex: FieldRef<"UserAttempt", 'Int'>
    readonly endTime: FieldRef<"UserAttempt", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserAttempt findUnique
   */
  export type UserAttemptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAttempt
     */
    select?: UserAttemptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAttemptInclude<ExtArgs> | null
    /**
     * Filter, which UserAttempt to fetch.
     */
    where: UserAttemptWhereUniqueInput
  }

  /**
   * UserAttempt findUniqueOrThrow
   */
  export type UserAttemptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAttempt
     */
    select?: UserAttemptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAttemptInclude<ExtArgs> | null
    /**
     * Filter, which UserAttempt to fetch.
     */
    where: UserAttemptWhereUniqueInput
  }

  /**
   * UserAttempt findFirst
   */
  export type UserAttemptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAttempt
     */
    select?: UserAttemptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAttemptInclude<ExtArgs> | null
    /**
     * Filter, which UserAttempt to fetch.
     */
    where?: UserAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAttempts to fetch.
     */
    orderBy?: UserAttemptOrderByWithRelationInput | UserAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAttempts.
     */
    cursor?: UserAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAttempts.
     */
    distinct?: UserAttemptScalarFieldEnum | UserAttemptScalarFieldEnum[]
  }

  /**
   * UserAttempt findFirstOrThrow
   */
  export type UserAttemptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAttempt
     */
    select?: UserAttemptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAttemptInclude<ExtArgs> | null
    /**
     * Filter, which UserAttempt to fetch.
     */
    where?: UserAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAttempts to fetch.
     */
    orderBy?: UserAttemptOrderByWithRelationInput | UserAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAttempts.
     */
    cursor?: UserAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAttempts.
     */
    distinct?: UserAttemptScalarFieldEnum | UserAttemptScalarFieldEnum[]
  }

  /**
   * UserAttempt findMany
   */
  export type UserAttemptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAttempt
     */
    select?: UserAttemptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAttemptInclude<ExtArgs> | null
    /**
     * Filter, which UserAttempts to fetch.
     */
    where?: UserAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAttempts to fetch.
     */
    orderBy?: UserAttemptOrderByWithRelationInput | UserAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserAttempts.
     */
    cursor?: UserAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAttempts.
     */
    skip?: number
    distinct?: UserAttemptScalarFieldEnum | UserAttemptScalarFieldEnum[]
  }

  /**
   * UserAttempt create
   */
  export type UserAttemptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAttempt
     */
    select?: UserAttemptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAttemptInclude<ExtArgs> | null
    /**
     * The data needed to create a UserAttempt.
     */
    data: XOR<UserAttemptCreateInput, UserAttemptUncheckedCreateInput>
  }

  /**
   * UserAttempt createMany
   */
  export type UserAttemptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserAttempts.
     */
    data: UserAttemptCreateManyInput | UserAttemptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserAttempt createManyAndReturn
   */
  export type UserAttemptCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAttempt
     */
    select?: UserAttemptSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserAttempts.
     */
    data: UserAttemptCreateManyInput | UserAttemptCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAttemptIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserAttempt update
   */
  export type UserAttemptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAttempt
     */
    select?: UserAttemptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAttemptInclude<ExtArgs> | null
    /**
     * The data needed to update a UserAttempt.
     */
    data: XOR<UserAttemptUpdateInput, UserAttemptUncheckedUpdateInput>
    /**
     * Choose, which UserAttempt to update.
     */
    where: UserAttemptWhereUniqueInput
  }

  /**
   * UserAttempt updateMany
   */
  export type UserAttemptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserAttempts.
     */
    data: XOR<UserAttemptUpdateManyMutationInput, UserAttemptUncheckedUpdateManyInput>
    /**
     * Filter which UserAttempts to update
     */
    where?: UserAttemptWhereInput
  }

  /**
   * UserAttempt upsert
   */
  export type UserAttemptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAttempt
     */
    select?: UserAttemptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAttemptInclude<ExtArgs> | null
    /**
     * The filter to search for the UserAttempt to update in case it exists.
     */
    where: UserAttemptWhereUniqueInput
    /**
     * In case the UserAttempt found by the `where` argument doesn't exist, create a new UserAttempt with this data.
     */
    create: XOR<UserAttemptCreateInput, UserAttemptUncheckedCreateInput>
    /**
     * In case the UserAttempt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserAttemptUpdateInput, UserAttemptUncheckedUpdateInput>
  }

  /**
   * UserAttempt delete
   */
  export type UserAttemptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAttempt
     */
    select?: UserAttemptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAttemptInclude<ExtArgs> | null
    /**
     * Filter which UserAttempt to delete.
     */
    where: UserAttemptWhereUniqueInput
  }

  /**
   * UserAttempt deleteMany
   */
  export type UserAttemptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAttempts to delete
     */
    where?: UserAttemptWhereInput
  }

  /**
   * UserAttempt.course
   */
  export type UserAttempt$courseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
  }

  /**
   * UserAttempt.answeredQuestions
   */
  export type UserAttempt$answeredQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnsweredQuestion
     */
    select?: AnsweredQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnsweredQuestionInclude<ExtArgs> | null
    where?: AnsweredQuestionWhereInput
    orderBy?: AnsweredQuestionOrderByWithRelationInput | AnsweredQuestionOrderByWithRelationInput[]
    cursor?: AnsweredQuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnsweredQuestionScalarFieldEnum | AnsweredQuestionScalarFieldEnum[]
  }

  /**
   * UserAttempt.categories
   */
  export type UserAttempt$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * UserAttempt.questions
   */
  export type UserAttempt$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttemptQuestion
     */
    select?: AttemptQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptQuestionInclude<ExtArgs> | null
    where?: AttemptQuestionWhereInput
    orderBy?: AttemptQuestionOrderByWithRelationInput | AttemptQuestionOrderByWithRelationInput[]
    cursor?: AttemptQuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttemptQuestionScalarFieldEnum | AttemptQuestionScalarFieldEnum[]
  }

  /**
   * UserAttempt without action
   */
  export type UserAttemptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAttempt
     */
    select?: UserAttemptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAttemptInclude<ExtArgs> | null
  }


  /**
   * Model AttemptQuestion
   */

  export type AggregateAttemptQuestion = {
    _count: AttemptQuestionCountAggregateOutputType | null
    _avg: AttemptQuestionAvgAggregateOutputType | null
    _sum: AttemptQuestionSumAggregateOutputType | null
    _min: AttemptQuestionMinAggregateOutputType | null
    _max: AttemptQuestionMaxAggregateOutputType | null
  }

  export type AttemptQuestionAvgAggregateOutputType = {
    order: number | null
  }

  export type AttemptQuestionSumAggregateOutputType = {
    order: number | null
  }

  export type AttemptQuestionMinAggregateOutputType = {
    id: string | null
    userAttemptId: string | null
    questionId: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
    isMarked: boolean | null
    isAnswered: boolean | null
  }

  export type AttemptQuestionMaxAggregateOutputType = {
    id: string | null
    userAttemptId: string | null
    questionId: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
    isMarked: boolean | null
    isAnswered: boolean | null
  }

  export type AttemptQuestionCountAggregateOutputType = {
    id: number
    userAttemptId: number
    questionId: number
    order: number
    createdAt: number
    updatedAt: number
    isMarked: number
    isAnswered: number
    _all: number
  }


  export type AttemptQuestionAvgAggregateInputType = {
    order?: true
  }

  export type AttemptQuestionSumAggregateInputType = {
    order?: true
  }

  export type AttemptQuestionMinAggregateInputType = {
    id?: true
    userAttemptId?: true
    questionId?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    isMarked?: true
    isAnswered?: true
  }

  export type AttemptQuestionMaxAggregateInputType = {
    id?: true
    userAttemptId?: true
    questionId?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    isMarked?: true
    isAnswered?: true
  }

  export type AttemptQuestionCountAggregateInputType = {
    id?: true
    userAttemptId?: true
    questionId?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    isMarked?: true
    isAnswered?: true
    _all?: true
  }

  export type AttemptQuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AttemptQuestion to aggregate.
     */
    where?: AttemptQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttemptQuestions to fetch.
     */
    orderBy?: AttemptQuestionOrderByWithRelationInput | AttemptQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttemptQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttemptQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttemptQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AttemptQuestions
    **/
    _count?: true | AttemptQuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttemptQuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttemptQuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttemptQuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttemptQuestionMaxAggregateInputType
  }

  export type GetAttemptQuestionAggregateType<T extends AttemptQuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateAttemptQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttemptQuestion[P]>
      : GetScalarType<T[P], AggregateAttemptQuestion[P]>
  }




  export type AttemptQuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttemptQuestionWhereInput
    orderBy?: AttemptQuestionOrderByWithAggregationInput | AttemptQuestionOrderByWithAggregationInput[]
    by: AttemptQuestionScalarFieldEnum[] | AttemptQuestionScalarFieldEnum
    having?: AttemptQuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttemptQuestionCountAggregateInputType | true
    _avg?: AttemptQuestionAvgAggregateInputType
    _sum?: AttemptQuestionSumAggregateInputType
    _min?: AttemptQuestionMinAggregateInputType
    _max?: AttemptQuestionMaxAggregateInputType
  }

  export type AttemptQuestionGroupByOutputType = {
    id: string
    userAttemptId: string
    questionId: string
    order: number
    createdAt: Date
    updatedAt: Date
    isMarked: boolean
    isAnswered: boolean
    _count: AttemptQuestionCountAggregateOutputType | null
    _avg: AttemptQuestionAvgAggregateOutputType | null
    _sum: AttemptQuestionSumAggregateOutputType | null
    _min: AttemptQuestionMinAggregateOutputType | null
    _max: AttemptQuestionMaxAggregateOutputType | null
  }

  type GetAttemptQuestionGroupByPayload<T extends AttemptQuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttemptQuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttemptQuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttemptQuestionGroupByOutputType[P]>
            : GetScalarType<T[P], AttemptQuestionGroupByOutputType[P]>
        }
      >
    >


  export type AttemptQuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userAttemptId?: boolean
    questionId?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isMarked?: boolean
    isAnswered?: boolean
    userAttempt?: boolean | UserAttemptDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attemptQuestion"]>

  export type AttemptQuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userAttemptId?: boolean
    questionId?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isMarked?: boolean
    isAnswered?: boolean
    userAttempt?: boolean | UserAttemptDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attemptQuestion"]>

  export type AttemptQuestionSelectScalar = {
    id?: boolean
    userAttemptId?: boolean
    questionId?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isMarked?: boolean
    isAnswered?: boolean
  }

  export type AttemptQuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userAttempt?: boolean | UserAttemptDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }
  export type AttemptQuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userAttempt?: boolean | UserAttemptDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }

  export type $AttemptQuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AttemptQuestion"
    objects: {
      userAttempt: Prisma.$UserAttemptPayload<ExtArgs>
      question: Prisma.$QuestionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userAttemptId: string
      questionId: string
      order: number
      createdAt: Date
      updatedAt: Date
      isMarked: boolean
      isAnswered: boolean
    }, ExtArgs["result"]["attemptQuestion"]>
    composites: {}
  }

  type AttemptQuestionGetPayload<S extends boolean | null | undefined | AttemptQuestionDefaultArgs> = $Result.GetResult<Prisma.$AttemptQuestionPayload, S>

  type AttemptQuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AttemptQuestionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AttemptQuestionCountAggregateInputType | true
    }

  export interface AttemptQuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AttemptQuestion'], meta: { name: 'AttemptQuestion' } }
    /**
     * Find zero or one AttemptQuestion that matches the filter.
     * @param {AttemptQuestionFindUniqueArgs} args - Arguments to find a AttemptQuestion
     * @example
     * // Get one AttemptQuestion
     * const attemptQuestion = await prisma.attemptQuestion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttemptQuestionFindUniqueArgs>(args: SelectSubset<T, AttemptQuestionFindUniqueArgs<ExtArgs>>): Prisma__AttemptQuestionClient<$Result.GetResult<Prisma.$AttemptQuestionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AttemptQuestion that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AttemptQuestionFindUniqueOrThrowArgs} args - Arguments to find a AttemptQuestion
     * @example
     * // Get one AttemptQuestion
     * const attemptQuestion = await prisma.attemptQuestion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttemptQuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, AttemptQuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttemptQuestionClient<$Result.GetResult<Prisma.$AttemptQuestionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AttemptQuestion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttemptQuestionFindFirstArgs} args - Arguments to find a AttemptQuestion
     * @example
     * // Get one AttemptQuestion
     * const attemptQuestion = await prisma.attemptQuestion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttemptQuestionFindFirstArgs>(args?: SelectSubset<T, AttemptQuestionFindFirstArgs<ExtArgs>>): Prisma__AttemptQuestionClient<$Result.GetResult<Prisma.$AttemptQuestionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AttemptQuestion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttemptQuestionFindFirstOrThrowArgs} args - Arguments to find a AttemptQuestion
     * @example
     * // Get one AttemptQuestion
     * const attemptQuestion = await prisma.attemptQuestion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttemptQuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, AttemptQuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttemptQuestionClient<$Result.GetResult<Prisma.$AttemptQuestionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AttemptQuestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttemptQuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AttemptQuestions
     * const attemptQuestions = await prisma.attemptQuestion.findMany()
     * 
     * // Get first 10 AttemptQuestions
     * const attemptQuestions = await prisma.attemptQuestion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attemptQuestionWithIdOnly = await prisma.attemptQuestion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttemptQuestionFindManyArgs>(args?: SelectSubset<T, AttemptQuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttemptQuestionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AttemptQuestion.
     * @param {AttemptQuestionCreateArgs} args - Arguments to create a AttemptQuestion.
     * @example
     * // Create one AttemptQuestion
     * const AttemptQuestion = await prisma.attemptQuestion.create({
     *   data: {
     *     // ... data to create a AttemptQuestion
     *   }
     * })
     * 
     */
    create<T extends AttemptQuestionCreateArgs>(args: SelectSubset<T, AttemptQuestionCreateArgs<ExtArgs>>): Prisma__AttemptQuestionClient<$Result.GetResult<Prisma.$AttemptQuestionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AttemptQuestions.
     * @param {AttemptQuestionCreateManyArgs} args - Arguments to create many AttemptQuestions.
     * @example
     * // Create many AttemptQuestions
     * const attemptQuestion = await prisma.attemptQuestion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttemptQuestionCreateManyArgs>(args?: SelectSubset<T, AttemptQuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AttemptQuestions and returns the data saved in the database.
     * @param {AttemptQuestionCreateManyAndReturnArgs} args - Arguments to create many AttemptQuestions.
     * @example
     * // Create many AttemptQuestions
     * const attemptQuestion = await prisma.attemptQuestion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AttemptQuestions and only return the `id`
     * const attemptQuestionWithIdOnly = await prisma.attemptQuestion.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttemptQuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, AttemptQuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttemptQuestionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AttemptQuestion.
     * @param {AttemptQuestionDeleteArgs} args - Arguments to delete one AttemptQuestion.
     * @example
     * // Delete one AttemptQuestion
     * const AttemptQuestion = await prisma.attemptQuestion.delete({
     *   where: {
     *     // ... filter to delete one AttemptQuestion
     *   }
     * })
     * 
     */
    delete<T extends AttemptQuestionDeleteArgs>(args: SelectSubset<T, AttemptQuestionDeleteArgs<ExtArgs>>): Prisma__AttemptQuestionClient<$Result.GetResult<Prisma.$AttemptQuestionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AttemptQuestion.
     * @param {AttemptQuestionUpdateArgs} args - Arguments to update one AttemptQuestion.
     * @example
     * // Update one AttemptQuestion
     * const attemptQuestion = await prisma.attemptQuestion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttemptQuestionUpdateArgs>(args: SelectSubset<T, AttemptQuestionUpdateArgs<ExtArgs>>): Prisma__AttemptQuestionClient<$Result.GetResult<Prisma.$AttemptQuestionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AttemptQuestions.
     * @param {AttemptQuestionDeleteManyArgs} args - Arguments to filter AttemptQuestions to delete.
     * @example
     * // Delete a few AttemptQuestions
     * const { count } = await prisma.attemptQuestion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttemptQuestionDeleteManyArgs>(args?: SelectSubset<T, AttemptQuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AttemptQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttemptQuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AttemptQuestions
     * const attemptQuestion = await prisma.attemptQuestion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttemptQuestionUpdateManyArgs>(args: SelectSubset<T, AttemptQuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AttemptQuestion.
     * @param {AttemptQuestionUpsertArgs} args - Arguments to update or create a AttemptQuestion.
     * @example
     * // Update or create a AttemptQuestion
     * const attemptQuestion = await prisma.attemptQuestion.upsert({
     *   create: {
     *     // ... data to create a AttemptQuestion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AttemptQuestion we want to update
     *   }
     * })
     */
    upsert<T extends AttemptQuestionUpsertArgs>(args: SelectSubset<T, AttemptQuestionUpsertArgs<ExtArgs>>): Prisma__AttemptQuestionClient<$Result.GetResult<Prisma.$AttemptQuestionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AttemptQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttemptQuestionCountArgs} args - Arguments to filter AttemptQuestions to count.
     * @example
     * // Count the number of AttemptQuestions
     * const count = await prisma.attemptQuestion.count({
     *   where: {
     *     // ... the filter for the AttemptQuestions we want to count
     *   }
     * })
    **/
    count<T extends AttemptQuestionCountArgs>(
      args?: Subset<T, AttemptQuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttemptQuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AttemptQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttemptQuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AttemptQuestionAggregateArgs>(args: Subset<T, AttemptQuestionAggregateArgs>): Prisma.PrismaPromise<GetAttemptQuestionAggregateType<T>>

    /**
     * Group by AttemptQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttemptQuestionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AttemptQuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttemptQuestionGroupByArgs['orderBy'] }
        : { orderBy?: AttemptQuestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AttemptQuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttemptQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AttemptQuestion model
   */
  readonly fields: AttemptQuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AttemptQuestion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttemptQuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userAttempt<T extends UserAttemptDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserAttemptDefaultArgs<ExtArgs>>): Prisma__UserAttemptClient<$Result.GetResult<Prisma.$UserAttemptPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AttemptQuestion model
   */ 
  interface AttemptQuestionFieldRefs {
    readonly id: FieldRef<"AttemptQuestion", 'String'>
    readonly userAttemptId: FieldRef<"AttemptQuestion", 'String'>
    readonly questionId: FieldRef<"AttemptQuestion", 'String'>
    readonly order: FieldRef<"AttemptQuestion", 'Int'>
    readonly createdAt: FieldRef<"AttemptQuestion", 'DateTime'>
    readonly updatedAt: FieldRef<"AttemptQuestion", 'DateTime'>
    readonly isMarked: FieldRef<"AttemptQuestion", 'Boolean'>
    readonly isAnswered: FieldRef<"AttemptQuestion", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * AttemptQuestion findUnique
   */
  export type AttemptQuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttemptQuestion
     */
    select?: AttemptQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptQuestionInclude<ExtArgs> | null
    /**
     * Filter, which AttemptQuestion to fetch.
     */
    where: AttemptQuestionWhereUniqueInput
  }

  /**
   * AttemptQuestion findUniqueOrThrow
   */
  export type AttemptQuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttemptQuestion
     */
    select?: AttemptQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptQuestionInclude<ExtArgs> | null
    /**
     * Filter, which AttemptQuestion to fetch.
     */
    where: AttemptQuestionWhereUniqueInput
  }

  /**
   * AttemptQuestion findFirst
   */
  export type AttemptQuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttemptQuestion
     */
    select?: AttemptQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptQuestionInclude<ExtArgs> | null
    /**
     * Filter, which AttemptQuestion to fetch.
     */
    where?: AttemptQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttemptQuestions to fetch.
     */
    orderBy?: AttemptQuestionOrderByWithRelationInput | AttemptQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AttemptQuestions.
     */
    cursor?: AttemptQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttemptQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttemptQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttemptQuestions.
     */
    distinct?: AttemptQuestionScalarFieldEnum | AttemptQuestionScalarFieldEnum[]
  }

  /**
   * AttemptQuestion findFirstOrThrow
   */
  export type AttemptQuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttemptQuestion
     */
    select?: AttemptQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptQuestionInclude<ExtArgs> | null
    /**
     * Filter, which AttemptQuestion to fetch.
     */
    where?: AttemptQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttemptQuestions to fetch.
     */
    orderBy?: AttemptQuestionOrderByWithRelationInput | AttemptQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AttemptQuestions.
     */
    cursor?: AttemptQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttemptQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttemptQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttemptQuestions.
     */
    distinct?: AttemptQuestionScalarFieldEnum | AttemptQuestionScalarFieldEnum[]
  }

  /**
   * AttemptQuestion findMany
   */
  export type AttemptQuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttemptQuestion
     */
    select?: AttemptQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptQuestionInclude<ExtArgs> | null
    /**
     * Filter, which AttemptQuestions to fetch.
     */
    where?: AttemptQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttemptQuestions to fetch.
     */
    orderBy?: AttemptQuestionOrderByWithRelationInput | AttemptQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AttemptQuestions.
     */
    cursor?: AttemptQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttemptQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttemptQuestions.
     */
    skip?: number
    distinct?: AttemptQuestionScalarFieldEnum | AttemptQuestionScalarFieldEnum[]
  }

  /**
   * AttemptQuestion create
   */
  export type AttemptQuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttemptQuestion
     */
    select?: AttemptQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptQuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a AttemptQuestion.
     */
    data: XOR<AttemptQuestionCreateInput, AttemptQuestionUncheckedCreateInput>
  }

  /**
   * AttemptQuestion createMany
   */
  export type AttemptQuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AttemptQuestions.
     */
    data: AttemptQuestionCreateManyInput | AttemptQuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AttemptQuestion createManyAndReturn
   */
  export type AttemptQuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttemptQuestion
     */
    select?: AttemptQuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AttemptQuestions.
     */
    data: AttemptQuestionCreateManyInput | AttemptQuestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptQuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AttemptQuestion update
   */
  export type AttemptQuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttemptQuestion
     */
    select?: AttemptQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptQuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a AttemptQuestion.
     */
    data: XOR<AttemptQuestionUpdateInput, AttemptQuestionUncheckedUpdateInput>
    /**
     * Choose, which AttemptQuestion to update.
     */
    where: AttemptQuestionWhereUniqueInput
  }

  /**
   * AttemptQuestion updateMany
   */
  export type AttemptQuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AttemptQuestions.
     */
    data: XOR<AttemptQuestionUpdateManyMutationInput, AttemptQuestionUncheckedUpdateManyInput>
    /**
     * Filter which AttemptQuestions to update
     */
    where?: AttemptQuestionWhereInput
  }

  /**
   * AttemptQuestion upsert
   */
  export type AttemptQuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttemptQuestion
     */
    select?: AttemptQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptQuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the AttemptQuestion to update in case it exists.
     */
    where: AttemptQuestionWhereUniqueInput
    /**
     * In case the AttemptQuestion found by the `where` argument doesn't exist, create a new AttemptQuestion with this data.
     */
    create: XOR<AttemptQuestionCreateInput, AttemptQuestionUncheckedCreateInput>
    /**
     * In case the AttemptQuestion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttemptQuestionUpdateInput, AttemptQuestionUncheckedUpdateInput>
  }

  /**
   * AttemptQuestion delete
   */
  export type AttemptQuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttemptQuestion
     */
    select?: AttemptQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptQuestionInclude<ExtArgs> | null
    /**
     * Filter which AttemptQuestion to delete.
     */
    where: AttemptQuestionWhereUniqueInput
  }

  /**
   * AttemptQuestion deleteMany
   */
  export type AttemptQuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AttemptQuestions to delete
     */
    where?: AttemptQuestionWhereInput
  }

  /**
   * AttemptQuestion without action
   */
  export type AttemptQuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttemptQuestion
     */
    select?: AttemptQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptQuestionInclude<ExtArgs> | null
  }


  /**
   * Model AnsweredQuestion
   */

  export type AggregateAnsweredQuestion = {
    _count: AnsweredQuestionCountAggregateOutputType | null
    _min: AnsweredQuestionMinAggregateOutputType | null
    _max: AnsweredQuestionMaxAggregateOutputType | null
  }

  export type AnsweredQuestionMinAggregateOutputType = {
    id: string | null
    userAttemptId: string | null
    answerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnsweredQuestionMaxAggregateOutputType = {
    id: string | null
    userAttemptId: string | null
    answerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnsweredQuestionCountAggregateOutputType = {
    id: number
    userAttemptId: number
    answerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AnsweredQuestionMinAggregateInputType = {
    id?: true
    userAttemptId?: true
    answerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnsweredQuestionMaxAggregateInputType = {
    id?: true
    userAttemptId?: true
    answerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnsweredQuestionCountAggregateInputType = {
    id?: true
    userAttemptId?: true
    answerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AnsweredQuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnsweredQuestion to aggregate.
     */
    where?: AnsweredQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnsweredQuestions to fetch.
     */
    orderBy?: AnsweredQuestionOrderByWithRelationInput | AnsweredQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnsweredQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnsweredQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnsweredQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AnsweredQuestions
    **/
    _count?: true | AnsweredQuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnsweredQuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnsweredQuestionMaxAggregateInputType
  }

  export type GetAnsweredQuestionAggregateType<T extends AnsweredQuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateAnsweredQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnsweredQuestion[P]>
      : GetScalarType<T[P], AggregateAnsweredQuestion[P]>
  }




  export type AnsweredQuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnsweredQuestionWhereInput
    orderBy?: AnsweredQuestionOrderByWithAggregationInput | AnsweredQuestionOrderByWithAggregationInput[]
    by: AnsweredQuestionScalarFieldEnum[] | AnsweredQuestionScalarFieldEnum
    having?: AnsweredQuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnsweredQuestionCountAggregateInputType | true
    _min?: AnsweredQuestionMinAggregateInputType
    _max?: AnsweredQuestionMaxAggregateInputType
  }

  export type AnsweredQuestionGroupByOutputType = {
    id: string
    userAttemptId: string
    answerId: string
    createdAt: Date
    updatedAt: Date
    _count: AnsweredQuestionCountAggregateOutputType | null
    _min: AnsweredQuestionMinAggregateOutputType | null
    _max: AnsweredQuestionMaxAggregateOutputType | null
  }

  type GetAnsweredQuestionGroupByPayload<T extends AnsweredQuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnsweredQuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnsweredQuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnsweredQuestionGroupByOutputType[P]>
            : GetScalarType<T[P], AnsweredQuestionGroupByOutputType[P]>
        }
      >
    >


  export type AnsweredQuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userAttemptId?: boolean
    answerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userAttempt?: boolean | UserAttemptDefaultArgs<ExtArgs>
    answer?: boolean | AnswerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answeredQuestion"]>

  export type AnsweredQuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userAttemptId?: boolean
    answerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userAttempt?: boolean | UserAttemptDefaultArgs<ExtArgs>
    answer?: boolean | AnswerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answeredQuestion"]>

  export type AnsweredQuestionSelectScalar = {
    id?: boolean
    userAttemptId?: boolean
    answerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AnsweredQuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userAttempt?: boolean | UserAttemptDefaultArgs<ExtArgs>
    answer?: boolean | AnswerDefaultArgs<ExtArgs>
  }
  export type AnsweredQuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userAttempt?: boolean | UserAttemptDefaultArgs<ExtArgs>
    answer?: boolean | AnswerDefaultArgs<ExtArgs>
  }

  export type $AnsweredQuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AnsweredQuestion"
    objects: {
      userAttempt: Prisma.$UserAttemptPayload<ExtArgs>
      answer: Prisma.$AnswerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userAttemptId: string
      answerId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["answeredQuestion"]>
    composites: {}
  }

  type AnsweredQuestionGetPayload<S extends boolean | null | undefined | AnsweredQuestionDefaultArgs> = $Result.GetResult<Prisma.$AnsweredQuestionPayload, S>

  type AnsweredQuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AnsweredQuestionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AnsweredQuestionCountAggregateInputType | true
    }

  export interface AnsweredQuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AnsweredQuestion'], meta: { name: 'AnsweredQuestion' } }
    /**
     * Find zero or one AnsweredQuestion that matches the filter.
     * @param {AnsweredQuestionFindUniqueArgs} args - Arguments to find a AnsweredQuestion
     * @example
     * // Get one AnsweredQuestion
     * const answeredQuestion = await prisma.answeredQuestion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnsweredQuestionFindUniqueArgs>(args: SelectSubset<T, AnsweredQuestionFindUniqueArgs<ExtArgs>>): Prisma__AnsweredQuestionClient<$Result.GetResult<Prisma.$AnsweredQuestionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AnsweredQuestion that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AnsweredQuestionFindUniqueOrThrowArgs} args - Arguments to find a AnsweredQuestion
     * @example
     * // Get one AnsweredQuestion
     * const answeredQuestion = await prisma.answeredQuestion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnsweredQuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, AnsweredQuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnsweredQuestionClient<$Result.GetResult<Prisma.$AnsweredQuestionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AnsweredQuestion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnsweredQuestionFindFirstArgs} args - Arguments to find a AnsweredQuestion
     * @example
     * // Get one AnsweredQuestion
     * const answeredQuestion = await prisma.answeredQuestion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnsweredQuestionFindFirstArgs>(args?: SelectSubset<T, AnsweredQuestionFindFirstArgs<ExtArgs>>): Prisma__AnsweredQuestionClient<$Result.GetResult<Prisma.$AnsweredQuestionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AnsweredQuestion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnsweredQuestionFindFirstOrThrowArgs} args - Arguments to find a AnsweredQuestion
     * @example
     * // Get one AnsweredQuestion
     * const answeredQuestion = await prisma.answeredQuestion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnsweredQuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, AnsweredQuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnsweredQuestionClient<$Result.GetResult<Prisma.$AnsweredQuestionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AnsweredQuestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnsweredQuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AnsweredQuestions
     * const answeredQuestions = await prisma.answeredQuestion.findMany()
     * 
     * // Get first 10 AnsweredQuestions
     * const answeredQuestions = await prisma.answeredQuestion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const answeredQuestionWithIdOnly = await prisma.answeredQuestion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnsweredQuestionFindManyArgs>(args?: SelectSubset<T, AnsweredQuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnsweredQuestionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AnsweredQuestion.
     * @param {AnsweredQuestionCreateArgs} args - Arguments to create a AnsweredQuestion.
     * @example
     * // Create one AnsweredQuestion
     * const AnsweredQuestion = await prisma.answeredQuestion.create({
     *   data: {
     *     // ... data to create a AnsweredQuestion
     *   }
     * })
     * 
     */
    create<T extends AnsweredQuestionCreateArgs>(args: SelectSubset<T, AnsweredQuestionCreateArgs<ExtArgs>>): Prisma__AnsweredQuestionClient<$Result.GetResult<Prisma.$AnsweredQuestionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AnsweredQuestions.
     * @param {AnsweredQuestionCreateManyArgs} args - Arguments to create many AnsweredQuestions.
     * @example
     * // Create many AnsweredQuestions
     * const answeredQuestion = await prisma.answeredQuestion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnsweredQuestionCreateManyArgs>(args?: SelectSubset<T, AnsweredQuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AnsweredQuestions and returns the data saved in the database.
     * @param {AnsweredQuestionCreateManyAndReturnArgs} args - Arguments to create many AnsweredQuestions.
     * @example
     * // Create many AnsweredQuestions
     * const answeredQuestion = await prisma.answeredQuestion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AnsweredQuestions and only return the `id`
     * const answeredQuestionWithIdOnly = await prisma.answeredQuestion.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnsweredQuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, AnsweredQuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnsweredQuestionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AnsweredQuestion.
     * @param {AnsweredQuestionDeleteArgs} args - Arguments to delete one AnsweredQuestion.
     * @example
     * // Delete one AnsweredQuestion
     * const AnsweredQuestion = await prisma.answeredQuestion.delete({
     *   where: {
     *     // ... filter to delete one AnsweredQuestion
     *   }
     * })
     * 
     */
    delete<T extends AnsweredQuestionDeleteArgs>(args: SelectSubset<T, AnsweredQuestionDeleteArgs<ExtArgs>>): Prisma__AnsweredQuestionClient<$Result.GetResult<Prisma.$AnsweredQuestionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AnsweredQuestion.
     * @param {AnsweredQuestionUpdateArgs} args - Arguments to update one AnsweredQuestion.
     * @example
     * // Update one AnsweredQuestion
     * const answeredQuestion = await prisma.answeredQuestion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnsweredQuestionUpdateArgs>(args: SelectSubset<T, AnsweredQuestionUpdateArgs<ExtArgs>>): Prisma__AnsweredQuestionClient<$Result.GetResult<Prisma.$AnsweredQuestionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AnsweredQuestions.
     * @param {AnsweredQuestionDeleteManyArgs} args - Arguments to filter AnsweredQuestions to delete.
     * @example
     * // Delete a few AnsweredQuestions
     * const { count } = await prisma.answeredQuestion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnsweredQuestionDeleteManyArgs>(args?: SelectSubset<T, AnsweredQuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnsweredQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnsweredQuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AnsweredQuestions
     * const answeredQuestion = await prisma.answeredQuestion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnsweredQuestionUpdateManyArgs>(args: SelectSubset<T, AnsweredQuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AnsweredQuestion.
     * @param {AnsweredQuestionUpsertArgs} args - Arguments to update or create a AnsweredQuestion.
     * @example
     * // Update or create a AnsweredQuestion
     * const answeredQuestion = await prisma.answeredQuestion.upsert({
     *   create: {
     *     // ... data to create a AnsweredQuestion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AnsweredQuestion we want to update
     *   }
     * })
     */
    upsert<T extends AnsweredQuestionUpsertArgs>(args: SelectSubset<T, AnsweredQuestionUpsertArgs<ExtArgs>>): Prisma__AnsweredQuestionClient<$Result.GetResult<Prisma.$AnsweredQuestionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AnsweredQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnsweredQuestionCountArgs} args - Arguments to filter AnsweredQuestions to count.
     * @example
     * // Count the number of AnsweredQuestions
     * const count = await prisma.answeredQuestion.count({
     *   where: {
     *     // ... the filter for the AnsweredQuestions we want to count
     *   }
     * })
    **/
    count<T extends AnsweredQuestionCountArgs>(
      args?: Subset<T, AnsweredQuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnsweredQuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AnsweredQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnsweredQuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnsweredQuestionAggregateArgs>(args: Subset<T, AnsweredQuestionAggregateArgs>): Prisma.PrismaPromise<GetAnsweredQuestionAggregateType<T>>

    /**
     * Group by AnsweredQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnsweredQuestionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnsweredQuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnsweredQuestionGroupByArgs['orderBy'] }
        : { orderBy?: AnsweredQuestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnsweredQuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnsweredQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AnsweredQuestion model
   */
  readonly fields: AnsweredQuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AnsweredQuestion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnsweredQuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userAttempt<T extends UserAttemptDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserAttemptDefaultArgs<ExtArgs>>): Prisma__UserAttemptClient<$Result.GetResult<Prisma.$UserAttemptPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    answer<T extends AnswerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnswerDefaultArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AnsweredQuestion model
   */ 
  interface AnsweredQuestionFieldRefs {
    readonly id: FieldRef<"AnsweredQuestion", 'String'>
    readonly userAttemptId: FieldRef<"AnsweredQuestion", 'String'>
    readonly answerId: FieldRef<"AnsweredQuestion", 'String'>
    readonly createdAt: FieldRef<"AnsweredQuestion", 'DateTime'>
    readonly updatedAt: FieldRef<"AnsweredQuestion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AnsweredQuestion findUnique
   */
  export type AnsweredQuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnsweredQuestion
     */
    select?: AnsweredQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnsweredQuestionInclude<ExtArgs> | null
    /**
     * Filter, which AnsweredQuestion to fetch.
     */
    where: AnsweredQuestionWhereUniqueInput
  }

  /**
   * AnsweredQuestion findUniqueOrThrow
   */
  export type AnsweredQuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnsweredQuestion
     */
    select?: AnsweredQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnsweredQuestionInclude<ExtArgs> | null
    /**
     * Filter, which AnsweredQuestion to fetch.
     */
    where: AnsweredQuestionWhereUniqueInput
  }

  /**
   * AnsweredQuestion findFirst
   */
  export type AnsweredQuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnsweredQuestion
     */
    select?: AnsweredQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnsweredQuestionInclude<ExtArgs> | null
    /**
     * Filter, which AnsweredQuestion to fetch.
     */
    where?: AnsweredQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnsweredQuestions to fetch.
     */
    orderBy?: AnsweredQuestionOrderByWithRelationInput | AnsweredQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnsweredQuestions.
     */
    cursor?: AnsweredQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnsweredQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnsweredQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnsweredQuestions.
     */
    distinct?: AnsweredQuestionScalarFieldEnum | AnsweredQuestionScalarFieldEnum[]
  }

  /**
   * AnsweredQuestion findFirstOrThrow
   */
  export type AnsweredQuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnsweredQuestion
     */
    select?: AnsweredQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnsweredQuestionInclude<ExtArgs> | null
    /**
     * Filter, which AnsweredQuestion to fetch.
     */
    where?: AnsweredQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnsweredQuestions to fetch.
     */
    orderBy?: AnsweredQuestionOrderByWithRelationInput | AnsweredQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnsweredQuestions.
     */
    cursor?: AnsweredQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnsweredQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnsweredQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnsweredQuestions.
     */
    distinct?: AnsweredQuestionScalarFieldEnum | AnsweredQuestionScalarFieldEnum[]
  }

  /**
   * AnsweredQuestion findMany
   */
  export type AnsweredQuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnsweredQuestion
     */
    select?: AnsweredQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnsweredQuestionInclude<ExtArgs> | null
    /**
     * Filter, which AnsweredQuestions to fetch.
     */
    where?: AnsweredQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnsweredQuestions to fetch.
     */
    orderBy?: AnsweredQuestionOrderByWithRelationInput | AnsweredQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AnsweredQuestions.
     */
    cursor?: AnsweredQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnsweredQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnsweredQuestions.
     */
    skip?: number
    distinct?: AnsweredQuestionScalarFieldEnum | AnsweredQuestionScalarFieldEnum[]
  }

  /**
   * AnsweredQuestion create
   */
  export type AnsweredQuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnsweredQuestion
     */
    select?: AnsweredQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnsweredQuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a AnsweredQuestion.
     */
    data: XOR<AnsweredQuestionCreateInput, AnsweredQuestionUncheckedCreateInput>
  }

  /**
   * AnsweredQuestion createMany
   */
  export type AnsweredQuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AnsweredQuestions.
     */
    data: AnsweredQuestionCreateManyInput | AnsweredQuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnsweredQuestion createManyAndReturn
   */
  export type AnsweredQuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnsweredQuestion
     */
    select?: AnsweredQuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AnsweredQuestions.
     */
    data: AnsweredQuestionCreateManyInput | AnsweredQuestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnsweredQuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnsweredQuestion update
   */
  export type AnsweredQuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnsweredQuestion
     */
    select?: AnsweredQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnsweredQuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a AnsweredQuestion.
     */
    data: XOR<AnsweredQuestionUpdateInput, AnsweredQuestionUncheckedUpdateInput>
    /**
     * Choose, which AnsweredQuestion to update.
     */
    where: AnsweredQuestionWhereUniqueInput
  }

  /**
   * AnsweredQuestion updateMany
   */
  export type AnsweredQuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AnsweredQuestions.
     */
    data: XOR<AnsweredQuestionUpdateManyMutationInput, AnsweredQuestionUncheckedUpdateManyInput>
    /**
     * Filter which AnsweredQuestions to update
     */
    where?: AnsweredQuestionWhereInput
  }

  /**
   * AnsweredQuestion upsert
   */
  export type AnsweredQuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnsweredQuestion
     */
    select?: AnsweredQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnsweredQuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the AnsweredQuestion to update in case it exists.
     */
    where: AnsweredQuestionWhereUniqueInput
    /**
     * In case the AnsweredQuestion found by the `where` argument doesn't exist, create a new AnsweredQuestion with this data.
     */
    create: XOR<AnsweredQuestionCreateInput, AnsweredQuestionUncheckedCreateInput>
    /**
     * In case the AnsweredQuestion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnsweredQuestionUpdateInput, AnsweredQuestionUncheckedUpdateInput>
  }

  /**
   * AnsweredQuestion delete
   */
  export type AnsweredQuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnsweredQuestion
     */
    select?: AnsweredQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnsweredQuestionInclude<ExtArgs> | null
    /**
     * Filter which AnsweredQuestion to delete.
     */
    where: AnsweredQuestionWhereUniqueInput
  }

  /**
   * AnsweredQuestion deleteMany
   */
  export type AnsweredQuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnsweredQuestions to delete
     */
    where?: AnsweredQuestionWhereInput
  }

  /**
   * AnsweredQuestion without action
   */
  export type AnsweredQuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnsweredQuestion
     */
    select?: AnsweredQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnsweredQuestionInclude<ExtArgs> | null
  }


  /**
   * Model Text
   */

  export type AggregateText = {
    _count: TextCountAggregateOutputType | null
    _min: TextMinAggregateOutputType | null
    _max: TextMaxAggregateOutputType | null
  }

  export type TextMinAggregateOutputType = {
    id: string | null
    value: string | null
    languageId: string | null
    courseDescriptionId: string | null
    courseNameId: string | null
    categoryNameId: string | null
    questionId: string | null
    answerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    questionHintId: string | null
  }

  export type TextMaxAggregateOutputType = {
    id: string | null
    value: string | null
    languageId: string | null
    courseDescriptionId: string | null
    courseNameId: string | null
    categoryNameId: string | null
    questionId: string | null
    answerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    questionHintId: string | null
  }

  export type TextCountAggregateOutputType = {
    id: number
    value: number
    languageId: number
    courseDescriptionId: number
    courseNameId: number
    categoryNameId: number
    questionId: number
    answerId: number
    createdAt: number
    updatedAt: number
    questionHintId: number
    _all: number
  }


  export type TextMinAggregateInputType = {
    id?: true
    value?: true
    languageId?: true
    courseDescriptionId?: true
    courseNameId?: true
    categoryNameId?: true
    questionId?: true
    answerId?: true
    createdAt?: true
    updatedAt?: true
    questionHintId?: true
  }

  export type TextMaxAggregateInputType = {
    id?: true
    value?: true
    languageId?: true
    courseDescriptionId?: true
    courseNameId?: true
    categoryNameId?: true
    questionId?: true
    answerId?: true
    createdAt?: true
    updatedAt?: true
    questionHintId?: true
  }

  export type TextCountAggregateInputType = {
    id?: true
    value?: true
    languageId?: true
    courseDescriptionId?: true
    courseNameId?: true
    categoryNameId?: true
    questionId?: true
    answerId?: true
    createdAt?: true
    updatedAt?: true
    questionHintId?: true
    _all?: true
  }

  export type TextAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Text to aggregate.
     */
    where?: TextWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Texts to fetch.
     */
    orderBy?: TextOrderByWithRelationInput | TextOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TextWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Texts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Texts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Texts
    **/
    _count?: true | TextCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TextMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TextMaxAggregateInputType
  }

  export type GetTextAggregateType<T extends TextAggregateArgs> = {
        [P in keyof T & keyof AggregateText]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateText[P]>
      : GetScalarType<T[P], AggregateText[P]>
  }




  export type TextGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TextWhereInput
    orderBy?: TextOrderByWithAggregationInput | TextOrderByWithAggregationInput[]
    by: TextScalarFieldEnum[] | TextScalarFieldEnum
    having?: TextScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TextCountAggregateInputType | true
    _min?: TextMinAggregateInputType
    _max?: TextMaxAggregateInputType
  }

  export type TextGroupByOutputType = {
    id: string
    value: string
    languageId: string
    courseDescriptionId: string | null
    courseNameId: string | null
    categoryNameId: string | null
    questionId: string | null
    answerId: string | null
    createdAt: Date
    updatedAt: Date
    questionHintId: string | null
    _count: TextCountAggregateOutputType | null
    _min: TextMinAggregateOutputType | null
    _max: TextMaxAggregateOutputType | null
  }

  type GetTextGroupByPayload<T extends TextGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TextGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TextGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TextGroupByOutputType[P]>
            : GetScalarType<T[P], TextGroupByOutputType[P]>
        }
      >
    >


  export type TextSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    languageId?: boolean
    courseDescriptionId?: boolean
    courseNameId?: boolean
    categoryNameId?: boolean
    questionId?: boolean
    answerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    questionHintId?: boolean
    language?: boolean | LanguageDefaultArgs<ExtArgs>
    CourseDescription?: boolean | Text$CourseDescriptionArgs<ExtArgs>
    CourseName?: boolean | Text$CourseNameArgs<ExtArgs>
    CategoryName?: boolean | Text$CategoryNameArgs<ExtArgs>
    Question?: boolean | Text$QuestionArgs<ExtArgs>
    Answer?: boolean | Text$AnswerArgs<ExtArgs>
    questionHint?: boolean | Text$questionHintArgs<ExtArgs>
  }, ExtArgs["result"]["text"]>

  export type TextSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    languageId?: boolean
    courseDescriptionId?: boolean
    courseNameId?: boolean
    categoryNameId?: boolean
    questionId?: boolean
    answerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    questionHintId?: boolean
    language?: boolean | LanguageDefaultArgs<ExtArgs>
    CourseDescription?: boolean | Text$CourseDescriptionArgs<ExtArgs>
    CourseName?: boolean | Text$CourseNameArgs<ExtArgs>
    CategoryName?: boolean | Text$CategoryNameArgs<ExtArgs>
    Question?: boolean | Text$QuestionArgs<ExtArgs>
    Answer?: boolean | Text$AnswerArgs<ExtArgs>
    questionHint?: boolean | Text$questionHintArgs<ExtArgs>
  }, ExtArgs["result"]["text"]>

  export type TextSelectScalar = {
    id?: boolean
    value?: boolean
    languageId?: boolean
    courseDescriptionId?: boolean
    courseNameId?: boolean
    categoryNameId?: boolean
    questionId?: boolean
    answerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    questionHintId?: boolean
  }

  export type TextInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    language?: boolean | LanguageDefaultArgs<ExtArgs>
    CourseDescription?: boolean | Text$CourseDescriptionArgs<ExtArgs>
    CourseName?: boolean | Text$CourseNameArgs<ExtArgs>
    CategoryName?: boolean | Text$CategoryNameArgs<ExtArgs>
    Question?: boolean | Text$QuestionArgs<ExtArgs>
    Answer?: boolean | Text$AnswerArgs<ExtArgs>
    questionHint?: boolean | Text$questionHintArgs<ExtArgs>
  }
  export type TextIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    language?: boolean | LanguageDefaultArgs<ExtArgs>
    CourseDescription?: boolean | Text$CourseDescriptionArgs<ExtArgs>
    CourseName?: boolean | Text$CourseNameArgs<ExtArgs>
    CategoryName?: boolean | Text$CategoryNameArgs<ExtArgs>
    Question?: boolean | Text$QuestionArgs<ExtArgs>
    Answer?: boolean | Text$AnswerArgs<ExtArgs>
    questionHint?: boolean | Text$questionHintArgs<ExtArgs>
  }

  export type $TextPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Text"
    objects: {
      language: Prisma.$LanguagePayload<ExtArgs>
      CourseDescription: Prisma.$CoursePayload<ExtArgs> | null
      CourseName: Prisma.$CoursePayload<ExtArgs> | null
      CategoryName: Prisma.$CategoryPayload<ExtArgs> | null
      Question: Prisma.$QuestionPayload<ExtArgs> | null
      Answer: Prisma.$AnswerPayload<ExtArgs> | null
      questionHint: Prisma.$QuestionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      value: string
      languageId: string
      courseDescriptionId: string | null
      courseNameId: string | null
      categoryNameId: string | null
      questionId: string | null
      answerId: string | null
      createdAt: Date
      updatedAt: Date
      questionHintId: string | null
    }, ExtArgs["result"]["text"]>
    composites: {}
  }

  type TextGetPayload<S extends boolean | null | undefined | TextDefaultArgs> = $Result.GetResult<Prisma.$TextPayload, S>

  type TextCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TextFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TextCountAggregateInputType | true
    }

  export interface TextDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Text'], meta: { name: 'Text' } }
    /**
     * Find zero or one Text that matches the filter.
     * @param {TextFindUniqueArgs} args - Arguments to find a Text
     * @example
     * // Get one Text
     * const text = await prisma.text.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TextFindUniqueArgs>(args: SelectSubset<T, TextFindUniqueArgs<ExtArgs>>): Prisma__TextClient<$Result.GetResult<Prisma.$TextPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Text that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TextFindUniqueOrThrowArgs} args - Arguments to find a Text
     * @example
     * // Get one Text
     * const text = await prisma.text.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TextFindUniqueOrThrowArgs>(args: SelectSubset<T, TextFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TextClient<$Result.GetResult<Prisma.$TextPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Text that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextFindFirstArgs} args - Arguments to find a Text
     * @example
     * // Get one Text
     * const text = await prisma.text.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TextFindFirstArgs>(args?: SelectSubset<T, TextFindFirstArgs<ExtArgs>>): Prisma__TextClient<$Result.GetResult<Prisma.$TextPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Text that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextFindFirstOrThrowArgs} args - Arguments to find a Text
     * @example
     * // Get one Text
     * const text = await prisma.text.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TextFindFirstOrThrowArgs>(args?: SelectSubset<T, TextFindFirstOrThrowArgs<ExtArgs>>): Prisma__TextClient<$Result.GetResult<Prisma.$TextPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Texts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Texts
     * const texts = await prisma.text.findMany()
     * 
     * // Get first 10 Texts
     * const texts = await prisma.text.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const textWithIdOnly = await prisma.text.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TextFindManyArgs>(args?: SelectSubset<T, TextFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TextPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Text.
     * @param {TextCreateArgs} args - Arguments to create a Text.
     * @example
     * // Create one Text
     * const Text = await prisma.text.create({
     *   data: {
     *     // ... data to create a Text
     *   }
     * })
     * 
     */
    create<T extends TextCreateArgs>(args: SelectSubset<T, TextCreateArgs<ExtArgs>>): Prisma__TextClient<$Result.GetResult<Prisma.$TextPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Texts.
     * @param {TextCreateManyArgs} args - Arguments to create many Texts.
     * @example
     * // Create many Texts
     * const text = await prisma.text.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TextCreateManyArgs>(args?: SelectSubset<T, TextCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Texts and returns the data saved in the database.
     * @param {TextCreateManyAndReturnArgs} args - Arguments to create many Texts.
     * @example
     * // Create many Texts
     * const text = await prisma.text.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Texts and only return the `id`
     * const textWithIdOnly = await prisma.text.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TextCreateManyAndReturnArgs>(args?: SelectSubset<T, TextCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TextPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Text.
     * @param {TextDeleteArgs} args - Arguments to delete one Text.
     * @example
     * // Delete one Text
     * const Text = await prisma.text.delete({
     *   where: {
     *     // ... filter to delete one Text
     *   }
     * })
     * 
     */
    delete<T extends TextDeleteArgs>(args: SelectSubset<T, TextDeleteArgs<ExtArgs>>): Prisma__TextClient<$Result.GetResult<Prisma.$TextPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Text.
     * @param {TextUpdateArgs} args - Arguments to update one Text.
     * @example
     * // Update one Text
     * const text = await prisma.text.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TextUpdateArgs>(args: SelectSubset<T, TextUpdateArgs<ExtArgs>>): Prisma__TextClient<$Result.GetResult<Prisma.$TextPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Texts.
     * @param {TextDeleteManyArgs} args - Arguments to filter Texts to delete.
     * @example
     * // Delete a few Texts
     * const { count } = await prisma.text.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TextDeleteManyArgs>(args?: SelectSubset<T, TextDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Texts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Texts
     * const text = await prisma.text.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TextUpdateManyArgs>(args: SelectSubset<T, TextUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Text.
     * @param {TextUpsertArgs} args - Arguments to update or create a Text.
     * @example
     * // Update or create a Text
     * const text = await prisma.text.upsert({
     *   create: {
     *     // ... data to create a Text
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Text we want to update
     *   }
     * })
     */
    upsert<T extends TextUpsertArgs>(args: SelectSubset<T, TextUpsertArgs<ExtArgs>>): Prisma__TextClient<$Result.GetResult<Prisma.$TextPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Texts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextCountArgs} args - Arguments to filter Texts to count.
     * @example
     * // Count the number of Texts
     * const count = await prisma.text.count({
     *   where: {
     *     // ... the filter for the Texts we want to count
     *   }
     * })
    **/
    count<T extends TextCountArgs>(
      args?: Subset<T, TextCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TextCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Text.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TextAggregateArgs>(args: Subset<T, TextAggregateArgs>): Prisma.PrismaPromise<GetTextAggregateType<T>>

    /**
     * Group by Text.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TextGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TextGroupByArgs['orderBy'] }
        : { orderBy?: TextGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TextGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTextGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Text model
   */
  readonly fields: TextFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Text.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TextClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    language<T extends LanguageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LanguageDefaultArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    CourseDescription<T extends Text$CourseDescriptionArgs<ExtArgs> = {}>(args?: Subset<T, Text$CourseDescriptionArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    CourseName<T extends Text$CourseNameArgs<ExtArgs> = {}>(args?: Subset<T, Text$CourseNameArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    CategoryName<T extends Text$CategoryNameArgs<ExtArgs> = {}>(args?: Subset<T, Text$CategoryNameArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    Question<T extends Text$QuestionArgs<ExtArgs> = {}>(args?: Subset<T, Text$QuestionArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    Answer<T extends Text$AnswerArgs<ExtArgs> = {}>(args?: Subset<T, Text$AnswerArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    questionHint<T extends Text$questionHintArgs<ExtArgs> = {}>(args?: Subset<T, Text$questionHintArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Text model
   */ 
  interface TextFieldRefs {
    readonly id: FieldRef<"Text", 'String'>
    readonly value: FieldRef<"Text", 'String'>
    readonly languageId: FieldRef<"Text", 'String'>
    readonly courseDescriptionId: FieldRef<"Text", 'String'>
    readonly courseNameId: FieldRef<"Text", 'String'>
    readonly categoryNameId: FieldRef<"Text", 'String'>
    readonly questionId: FieldRef<"Text", 'String'>
    readonly answerId: FieldRef<"Text", 'String'>
    readonly createdAt: FieldRef<"Text", 'DateTime'>
    readonly updatedAt: FieldRef<"Text", 'DateTime'>
    readonly questionHintId: FieldRef<"Text", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Text findUnique
   */
  export type TextFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Text
     */
    select?: TextSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextInclude<ExtArgs> | null
    /**
     * Filter, which Text to fetch.
     */
    where: TextWhereUniqueInput
  }

  /**
   * Text findUniqueOrThrow
   */
  export type TextFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Text
     */
    select?: TextSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextInclude<ExtArgs> | null
    /**
     * Filter, which Text to fetch.
     */
    where: TextWhereUniqueInput
  }

  /**
   * Text findFirst
   */
  export type TextFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Text
     */
    select?: TextSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextInclude<ExtArgs> | null
    /**
     * Filter, which Text to fetch.
     */
    where?: TextWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Texts to fetch.
     */
    orderBy?: TextOrderByWithRelationInput | TextOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Texts.
     */
    cursor?: TextWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Texts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Texts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Texts.
     */
    distinct?: TextScalarFieldEnum | TextScalarFieldEnum[]
  }

  /**
   * Text findFirstOrThrow
   */
  export type TextFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Text
     */
    select?: TextSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextInclude<ExtArgs> | null
    /**
     * Filter, which Text to fetch.
     */
    where?: TextWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Texts to fetch.
     */
    orderBy?: TextOrderByWithRelationInput | TextOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Texts.
     */
    cursor?: TextWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Texts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Texts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Texts.
     */
    distinct?: TextScalarFieldEnum | TextScalarFieldEnum[]
  }

  /**
   * Text findMany
   */
  export type TextFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Text
     */
    select?: TextSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextInclude<ExtArgs> | null
    /**
     * Filter, which Texts to fetch.
     */
    where?: TextWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Texts to fetch.
     */
    orderBy?: TextOrderByWithRelationInput | TextOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Texts.
     */
    cursor?: TextWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Texts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Texts.
     */
    skip?: number
    distinct?: TextScalarFieldEnum | TextScalarFieldEnum[]
  }

  /**
   * Text create
   */
  export type TextCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Text
     */
    select?: TextSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextInclude<ExtArgs> | null
    /**
     * The data needed to create a Text.
     */
    data: XOR<TextCreateInput, TextUncheckedCreateInput>
  }

  /**
   * Text createMany
   */
  export type TextCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Texts.
     */
    data: TextCreateManyInput | TextCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Text createManyAndReturn
   */
  export type TextCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Text
     */
    select?: TextSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Texts.
     */
    data: TextCreateManyInput | TextCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Text update
   */
  export type TextUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Text
     */
    select?: TextSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextInclude<ExtArgs> | null
    /**
     * The data needed to update a Text.
     */
    data: XOR<TextUpdateInput, TextUncheckedUpdateInput>
    /**
     * Choose, which Text to update.
     */
    where: TextWhereUniqueInput
  }

  /**
   * Text updateMany
   */
  export type TextUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Texts.
     */
    data: XOR<TextUpdateManyMutationInput, TextUncheckedUpdateManyInput>
    /**
     * Filter which Texts to update
     */
    where?: TextWhereInput
  }

  /**
   * Text upsert
   */
  export type TextUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Text
     */
    select?: TextSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextInclude<ExtArgs> | null
    /**
     * The filter to search for the Text to update in case it exists.
     */
    where: TextWhereUniqueInput
    /**
     * In case the Text found by the `where` argument doesn't exist, create a new Text with this data.
     */
    create: XOR<TextCreateInput, TextUncheckedCreateInput>
    /**
     * In case the Text was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TextUpdateInput, TextUncheckedUpdateInput>
  }

  /**
   * Text delete
   */
  export type TextDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Text
     */
    select?: TextSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextInclude<ExtArgs> | null
    /**
     * Filter which Text to delete.
     */
    where: TextWhereUniqueInput
  }

  /**
   * Text deleteMany
   */
  export type TextDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Texts to delete
     */
    where?: TextWhereInput
  }

  /**
   * Text.CourseDescription
   */
  export type Text$CourseDescriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
  }

  /**
   * Text.CourseName
   */
  export type Text$CourseNameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
  }

  /**
   * Text.CategoryName
   */
  export type Text$CategoryNameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * Text.Question
   */
  export type Text$QuestionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
  }

  /**
   * Text.Answer
   */
  export type Text$AnswerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    where?: AnswerWhereInput
  }

  /**
   * Text.questionHint
   */
  export type Text$questionHintArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
  }

  /**
   * Text without action
   */
  export type TextDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Text
     */
    select?: TextSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextInclude<ExtArgs> | null
  }


  /**
   * Model Language
   */

  export type AggregateLanguage = {
    _count: LanguageCountAggregateOutputType | null
    _min: LanguageMinAggregateOutputType | null
    _max: LanguageMaxAggregateOutputType | null
  }

  export type LanguageMinAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    isActive: boolean | null
    isRTL: boolean | null
  }

  export type LanguageMaxAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    isActive: boolean | null
    isRTL: boolean | null
  }

  export type LanguageCountAggregateOutputType = {
    id: number
    name: number
    code: number
    isActive: number
    isRTL: number
    _all: number
  }


  export type LanguageMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
    isActive?: true
    isRTL?: true
  }

  export type LanguageMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
    isActive?: true
    isRTL?: true
  }

  export type LanguageCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    isActive?: true
    isRTL?: true
    _all?: true
  }

  export type LanguageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Language to aggregate.
     */
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Languages
    **/
    _count?: true | LanguageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LanguageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LanguageMaxAggregateInputType
  }

  export type GetLanguageAggregateType<T extends LanguageAggregateArgs> = {
        [P in keyof T & keyof AggregateLanguage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLanguage[P]>
      : GetScalarType<T[P], AggregateLanguage[P]>
  }




  export type LanguageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LanguageWhereInput
    orderBy?: LanguageOrderByWithAggregationInput | LanguageOrderByWithAggregationInput[]
    by: LanguageScalarFieldEnum[] | LanguageScalarFieldEnum
    having?: LanguageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LanguageCountAggregateInputType | true
    _min?: LanguageMinAggregateInputType
    _max?: LanguageMaxAggregateInputType
  }

  export type LanguageGroupByOutputType = {
    id: string
    name: string
    code: string
    isActive: boolean
    isRTL: boolean
    _count: LanguageCountAggregateOutputType | null
    _min: LanguageMinAggregateOutputType | null
    _max: LanguageMaxAggregateOutputType | null
  }

  type GetLanguageGroupByPayload<T extends LanguageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LanguageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LanguageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LanguageGroupByOutputType[P]>
            : GetScalarType<T[P], LanguageGroupByOutputType[P]>
        }
      >
    >


  export type LanguageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    isActive?: boolean
    isRTL?: boolean
    strings?: boolean | Language$stringsArgs<ExtArgs>
    _count?: boolean | LanguageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["language"]>

  export type LanguageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    isActive?: boolean
    isRTL?: boolean
  }, ExtArgs["result"]["language"]>

  export type LanguageSelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
    isActive?: boolean
    isRTL?: boolean
  }

  export type LanguageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    strings?: boolean | Language$stringsArgs<ExtArgs>
    _count?: boolean | LanguageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LanguageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LanguagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Language"
    objects: {
      strings: Prisma.$TextPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      code: string
      isActive: boolean
      isRTL: boolean
    }, ExtArgs["result"]["language"]>
    composites: {}
  }

  type LanguageGetPayload<S extends boolean | null | undefined | LanguageDefaultArgs> = $Result.GetResult<Prisma.$LanguagePayload, S>

  type LanguageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LanguageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LanguageCountAggregateInputType | true
    }

  export interface LanguageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Language'], meta: { name: 'Language' } }
    /**
     * Find zero or one Language that matches the filter.
     * @param {LanguageFindUniqueArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LanguageFindUniqueArgs>(args: SelectSubset<T, LanguageFindUniqueArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Language that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LanguageFindUniqueOrThrowArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LanguageFindUniqueOrThrowArgs>(args: SelectSubset<T, LanguageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Language that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageFindFirstArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LanguageFindFirstArgs>(args?: SelectSubset<T, LanguageFindFirstArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Language that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageFindFirstOrThrowArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LanguageFindFirstOrThrowArgs>(args?: SelectSubset<T, LanguageFindFirstOrThrowArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Languages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Languages
     * const languages = await prisma.language.findMany()
     * 
     * // Get first 10 Languages
     * const languages = await prisma.language.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const languageWithIdOnly = await prisma.language.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LanguageFindManyArgs>(args?: SelectSubset<T, LanguageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Language.
     * @param {LanguageCreateArgs} args - Arguments to create a Language.
     * @example
     * // Create one Language
     * const Language = await prisma.language.create({
     *   data: {
     *     // ... data to create a Language
     *   }
     * })
     * 
     */
    create<T extends LanguageCreateArgs>(args: SelectSubset<T, LanguageCreateArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Languages.
     * @param {LanguageCreateManyArgs} args - Arguments to create many Languages.
     * @example
     * // Create many Languages
     * const language = await prisma.language.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LanguageCreateManyArgs>(args?: SelectSubset<T, LanguageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Languages and returns the data saved in the database.
     * @param {LanguageCreateManyAndReturnArgs} args - Arguments to create many Languages.
     * @example
     * // Create many Languages
     * const language = await prisma.language.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Languages and only return the `id`
     * const languageWithIdOnly = await prisma.language.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LanguageCreateManyAndReturnArgs>(args?: SelectSubset<T, LanguageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Language.
     * @param {LanguageDeleteArgs} args - Arguments to delete one Language.
     * @example
     * // Delete one Language
     * const Language = await prisma.language.delete({
     *   where: {
     *     // ... filter to delete one Language
     *   }
     * })
     * 
     */
    delete<T extends LanguageDeleteArgs>(args: SelectSubset<T, LanguageDeleteArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Language.
     * @param {LanguageUpdateArgs} args - Arguments to update one Language.
     * @example
     * // Update one Language
     * const language = await prisma.language.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LanguageUpdateArgs>(args: SelectSubset<T, LanguageUpdateArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Languages.
     * @param {LanguageDeleteManyArgs} args - Arguments to filter Languages to delete.
     * @example
     * // Delete a few Languages
     * const { count } = await prisma.language.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LanguageDeleteManyArgs>(args?: SelectSubset<T, LanguageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Languages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Languages
     * const language = await prisma.language.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LanguageUpdateManyArgs>(args: SelectSubset<T, LanguageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Language.
     * @param {LanguageUpsertArgs} args - Arguments to update or create a Language.
     * @example
     * // Update or create a Language
     * const language = await prisma.language.upsert({
     *   create: {
     *     // ... data to create a Language
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Language we want to update
     *   }
     * })
     */
    upsert<T extends LanguageUpsertArgs>(args: SelectSubset<T, LanguageUpsertArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Languages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageCountArgs} args - Arguments to filter Languages to count.
     * @example
     * // Count the number of Languages
     * const count = await prisma.language.count({
     *   where: {
     *     // ... the filter for the Languages we want to count
     *   }
     * })
    **/
    count<T extends LanguageCountArgs>(
      args?: Subset<T, LanguageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LanguageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Language.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LanguageAggregateArgs>(args: Subset<T, LanguageAggregateArgs>): Prisma.PrismaPromise<GetLanguageAggregateType<T>>

    /**
     * Group by Language.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LanguageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LanguageGroupByArgs['orderBy'] }
        : { orderBy?: LanguageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LanguageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLanguageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Language model
   */
  readonly fields: LanguageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Language.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LanguageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    strings<T extends Language$stringsArgs<ExtArgs> = {}>(args?: Subset<T, Language$stringsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TextPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Language model
   */ 
  interface LanguageFieldRefs {
    readonly id: FieldRef<"Language", 'String'>
    readonly name: FieldRef<"Language", 'String'>
    readonly code: FieldRef<"Language", 'String'>
    readonly isActive: FieldRef<"Language", 'Boolean'>
    readonly isRTL: FieldRef<"Language", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Language findUnique
   */
  export type LanguageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Language to fetch.
     */
    where: LanguageWhereUniqueInput
  }

  /**
   * Language findUniqueOrThrow
   */
  export type LanguageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Language to fetch.
     */
    where: LanguageWhereUniqueInput
  }

  /**
   * Language findFirst
   */
  export type LanguageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Language to fetch.
     */
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Languages.
     */
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Languages.
     */
    distinct?: LanguageScalarFieldEnum | LanguageScalarFieldEnum[]
  }

  /**
   * Language findFirstOrThrow
   */
  export type LanguageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Language to fetch.
     */
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Languages.
     */
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Languages.
     */
    distinct?: LanguageScalarFieldEnum | LanguageScalarFieldEnum[]
  }

  /**
   * Language findMany
   */
  export type LanguageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Languages to fetch.
     */
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Languages.
     */
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    distinct?: LanguageScalarFieldEnum | LanguageScalarFieldEnum[]
  }

  /**
   * Language create
   */
  export type LanguageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * The data needed to create a Language.
     */
    data: XOR<LanguageCreateInput, LanguageUncheckedCreateInput>
  }

  /**
   * Language createMany
   */
  export type LanguageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Languages.
     */
    data: LanguageCreateManyInput | LanguageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Language createManyAndReturn
   */
  export type LanguageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Languages.
     */
    data: LanguageCreateManyInput | LanguageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Language update
   */
  export type LanguageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * The data needed to update a Language.
     */
    data: XOR<LanguageUpdateInput, LanguageUncheckedUpdateInput>
    /**
     * Choose, which Language to update.
     */
    where: LanguageWhereUniqueInput
  }

  /**
   * Language updateMany
   */
  export type LanguageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Languages.
     */
    data: XOR<LanguageUpdateManyMutationInput, LanguageUncheckedUpdateManyInput>
    /**
     * Filter which Languages to update
     */
    where?: LanguageWhereInput
  }

  /**
   * Language upsert
   */
  export type LanguageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * The filter to search for the Language to update in case it exists.
     */
    where: LanguageWhereUniqueInput
    /**
     * In case the Language found by the `where` argument doesn't exist, create a new Language with this data.
     */
    create: XOR<LanguageCreateInput, LanguageUncheckedCreateInput>
    /**
     * In case the Language was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LanguageUpdateInput, LanguageUncheckedUpdateInput>
  }

  /**
   * Language delete
   */
  export type LanguageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter which Language to delete.
     */
    where: LanguageWhereUniqueInput
  }

  /**
   * Language deleteMany
   */
  export type LanguageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Languages to delete
     */
    where?: LanguageWhereInput
  }

  /**
   * Language.strings
   */
  export type Language$stringsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Text
     */
    select?: TextSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextInclude<ExtArgs> | null
    where?: TextWhereInput
    orderBy?: TextOrderByWithRelationInput | TextOrderByWithRelationInput[]
    cursor?: TextWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TextScalarFieldEnum | TextScalarFieldEnum[]
  }

  /**
   * Language without action
   */
  export type LanguageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
  }


  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Admin model
   */ 
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'String'>
    readonly name: FieldRef<"Admin", 'String'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly password: FieldRef<"Admin", 'String'>
    readonly createdAt: FieldRef<"Admin", 'DateTime'>
    readonly updatedAt: FieldRef<"Admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
  }


  /**
   * Model Settings
   */

  export type AggregateSettings = {
    _count: SettingsCountAggregateOutputType | null
    _avg: SettingsAvgAggregateOutputType | null
    _sum: SettingsSumAggregateOutputType | null
    _min: SettingsMinAggregateOutputType | null
    _max: SettingsMaxAggregateOutputType | null
  }

  export type SettingsAvgAggregateOutputType = {
    userAvailability: number | null
    testTime: number | null
    questionsPerTest: number | null
  }

  export type SettingsSumAggregateOutputType = {
    userAvailability: number | null
    testTime: number | null
    questionsPerTest: number | null
  }

  export type SettingsMinAggregateOutputType = {
    id: string | null
    userAvailability: number | null
    testTime: number | null
    questionsPerTest: number | null
  }

  export type SettingsMaxAggregateOutputType = {
    id: string | null
    userAvailability: number | null
    testTime: number | null
    questionsPerTest: number | null
  }

  export type SettingsCountAggregateOutputType = {
    id: number
    userAvailability: number
    testTime: number
    questionsPerTest: number
    _all: number
  }


  export type SettingsAvgAggregateInputType = {
    userAvailability?: true
    testTime?: true
    questionsPerTest?: true
  }

  export type SettingsSumAggregateInputType = {
    userAvailability?: true
    testTime?: true
    questionsPerTest?: true
  }

  export type SettingsMinAggregateInputType = {
    id?: true
    userAvailability?: true
    testTime?: true
    questionsPerTest?: true
  }

  export type SettingsMaxAggregateInputType = {
    id?: true
    userAvailability?: true
    testTime?: true
    questionsPerTest?: true
  }

  export type SettingsCountAggregateInputType = {
    id?: true
    userAvailability?: true
    testTime?: true
    questionsPerTest?: true
    _all?: true
  }

  export type SettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settings to aggregate.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Settings
    **/
    _count?: true | SettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SettingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SettingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SettingsMaxAggregateInputType
  }

  export type GetSettingsAggregateType<T extends SettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSettings[P]>
      : GetScalarType<T[P], AggregateSettings[P]>
  }




  export type SettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettingsWhereInput
    orderBy?: SettingsOrderByWithAggregationInput | SettingsOrderByWithAggregationInput[]
    by: SettingsScalarFieldEnum[] | SettingsScalarFieldEnum
    having?: SettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SettingsCountAggregateInputType | true
    _avg?: SettingsAvgAggregateInputType
    _sum?: SettingsSumAggregateInputType
    _min?: SettingsMinAggregateInputType
    _max?: SettingsMaxAggregateInputType
  }

  export type SettingsGroupByOutputType = {
    id: string
    userAvailability: number
    testTime: number
    questionsPerTest: number
    _count: SettingsCountAggregateOutputType | null
    _avg: SettingsAvgAggregateOutputType | null
    _sum: SettingsSumAggregateOutputType | null
    _min: SettingsMinAggregateOutputType | null
    _max: SettingsMaxAggregateOutputType | null
  }

  type GetSettingsGroupByPayload<T extends SettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SettingsGroupByOutputType[P]>
            : GetScalarType<T[P], SettingsGroupByOutputType[P]>
        }
      >
    >


  export type SettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userAvailability?: boolean
    testTime?: boolean
    questionsPerTest?: boolean
  }, ExtArgs["result"]["settings"]>

  export type SettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userAvailability?: boolean
    testTime?: boolean
    questionsPerTest?: boolean
  }, ExtArgs["result"]["settings"]>

  export type SettingsSelectScalar = {
    id?: boolean
    userAvailability?: boolean
    testTime?: boolean
    questionsPerTest?: boolean
  }


  export type $SettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Settings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userAvailability: number
      testTime: number
      questionsPerTest: number
    }, ExtArgs["result"]["settings"]>
    composites: {}
  }

  type SettingsGetPayload<S extends boolean | null | undefined | SettingsDefaultArgs> = $Result.GetResult<Prisma.$SettingsPayload, S>

  type SettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SettingsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SettingsCountAggregateInputType | true
    }

  export interface SettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Settings'], meta: { name: 'Settings' } }
    /**
     * Find zero or one Settings that matches the filter.
     * @param {SettingsFindUniqueArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SettingsFindUniqueArgs>(args: SelectSubset<T, SettingsFindUniqueArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Settings that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SettingsFindUniqueOrThrowArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, SettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsFindFirstArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SettingsFindFirstArgs>(args?: SelectSubset<T, SettingsFindFirstArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Settings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsFindFirstOrThrowArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, SettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Settings
     * const settings = await prisma.settings.findMany()
     * 
     * // Get first 10 Settings
     * const settings = await prisma.settings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const settingsWithIdOnly = await prisma.settings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SettingsFindManyArgs>(args?: SelectSubset<T, SettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Settings.
     * @param {SettingsCreateArgs} args - Arguments to create a Settings.
     * @example
     * // Create one Settings
     * const Settings = await prisma.settings.create({
     *   data: {
     *     // ... data to create a Settings
     *   }
     * })
     * 
     */
    create<T extends SettingsCreateArgs>(args: SelectSubset<T, SettingsCreateArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Settings.
     * @param {SettingsCreateManyArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const settings = await prisma.settings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SettingsCreateManyArgs>(args?: SelectSubset<T, SettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Settings and returns the data saved in the database.
     * @param {SettingsCreateManyAndReturnArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const settings = await prisma.settings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Settings and only return the `id`
     * const settingsWithIdOnly = await prisma.settings.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, SettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Settings.
     * @param {SettingsDeleteArgs} args - Arguments to delete one Settings.
     * @example
     * // Delete one Settings
     * const Settings = await prisma.settings.delete({
     *   where: {
     *     // ... filter to delete one Settings
     *   }
     * })
     * 
     */
    delete<T extends SettingsDeleteArgs>(args: SelectSubset<T, SettingsDeleteArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Settings.
     * @param {SettingsUpdateArgs} args - Arguments to update one Settings.
     * @example
     * // Update one Settings
     * const settings = await prisma.settings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SettingsUpdateArgs>(args: SelectSubset<T, SettingsUpdateArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Settings.
     * @param {SettingsDeleteManyArgs} args - Arguments to filter Settings to delete.
     * @example
     * // Delete a few Settings
     * const { count } = await prisma.settings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SettingsDeleteManyArgs>(args?: SelectSubset<T, SettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Settings
     * const settings = await prisma.settings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SettingsUpdateManyArgs>(args: SelectSubset<T, SettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Settings.
     * @param {SettingsUpsertArgs} args - Arguments to update or create a Settings.
     * @example
     * // Update or create a Settings
     * const settings = await prisma.settings.upsert({
     *   create: {
     *     // ... data to create a Settings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Settings we want to update
     *   }
     * })
     */
    upsert<T extends SettingsUpsertArgs>(args: SelectSubset<T, SettingsUpsertArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsCountArgs} args - Arguments to filter Settings to count.
     * @example
     * // Count the number of Settings
     * const count = await prisma.settings.count({
     *   where: {
     *     // ... the filter for the Settings we want to count
     *   }
     * })
    **/
    count<T extends SettingsCountArgs>(
      args?: Subset<T, SettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SettingsAggregateArgs>(args: Subset<T, SettingsAggregateArgs>): Prisma.PrismaPromise<GetSettingsAggregateType<T>>

    /**
     * Group by Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SettingsGroupByArgs['orderBy'] }
        : { orderBy?: SettingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Settings model
   */
  readonly fields: SettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Settings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Settings model
   */ 
  interface SettingsFieldRefs {
    readonly id: FieldRef<"Settings", 'String'>
    readonly userAvailability: FieldRef<"Settings", 'Int'>
    readonly testTime: FieldRef<"Settings", 'Int'>
    readonly questionsPerTest: FieldRef<"Settings", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Settings findUnique
   */
  export type SettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings findUniqueOrThrow
   */
  export type SettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings findFirst
   */
  export type SettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * Settings findFirstOrThrow
   */
  export type SettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * Settings findMany
   */
  export type SettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Settings.
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * Settings create
   */
  export type SettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * The data needed to create a Settings.
     */
    data?: XOR<SettingsCreateInput, SettingsUncheckedCreateInput>
  }

  /**
   * Settings createMany
   */
  export type SettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Settings.
     */
    data: SettingsCreateManyInput | SettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Settings createManyAndReturn
   */
  export type SettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Settings.
     */
    data: SettingsCreateManyInput | SettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Settings update
   */
  export type SettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * The data needed to update a Settings.
     */
    data: XOR<SettingsUpdateInput, SettingsUncheckedUpdateInput>
    /**
     * Choose, which Settings to update.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings updateMany
   */
  export type SettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingsUpdateManyMutationInput, SettingsUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingsWhereInput
  }

  /**
   * Settings upsert
   */
  export type SettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * The filter to search for the Settings to update in case it exists.
     */
    where: SettingsWhereUniqueInput
    /**
     * In case the Settings found by the `where` argument doesn't exist, create a new Settings with this data.
     */
    create: XOR<SettingsCreateInput, SettingsUncheckedCreateInput>
    /**
     * In case the Settings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SettingsUpdateInput, SettingsUncheckedUpdateInput>
  }

  /**
   * Settings delete
   */
  export type SettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Filter which Settings to delete.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings deleteMany
   */
  export type SettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settings to delete
     */
    where?: SettingsWhereInput
  }

  /**
   * Settings without action
   */
  export type SettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    personnr: 'personnr',
    tel: 'tel',
    email: 'email',
    password: 'password',
    isActive: 'isActive',
    expiryDate: 'expiryDate'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CourseScalarFieldEnum: {
    id: 'id',
    image: 'image',
    isActive: 'isActive'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    image: 'image'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    courseId: 'courseId',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const AnswerScalarFieldEnum: {
    id: 'id',
    mediaId: 'mediaId',
    isActive: 'isActive',
    questionId: 'questionId',
    isCorrect: 'isCorrect',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AnswerScalarFieldEnum = (typeof AnswerScalarFieldEnum)[keyof typeof AnswerScalarFieldEnum]


  export const QuestionMediaScalarFieldEnum: {
    id: 'id',
    questionId: 'questionId',
    mediaId: 'mediaId',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type QuestionMediaScalarFieldEnum = (typeof QuestionMediaScalarFieldEnum)[keyof typeof QuestionMediaScalarFieldEnum]


  export const MediaScalarFieldEnum: {
    id: 'id',
    url: 'url',
    type: 'type',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MediaScalarFieldEnum = (typeof MediaScalarFieldEnum)[keyof typeof MediaScalarFieldEnum]


  export const UserAttemptScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    date: 'date',
    result: 'result',
    courseId: 'courseId',
    isTimed: 'isTimed',
    isInstantResult: 'isInstantResult',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    currentQuestionIndex: 'currentQuestionIndex',
    endTime: 'endTime'
  };

  export type UserAttemptScalarFieldEnum = (typeof UserAttemptScalarFieldEnum)[keyof typeof UserAttemptScalarFieldEnum]


  export const AttemptQuestionScalarFieldEnum: {
    id: 'id',
    userAttemptId: 'userAttemptId',
    questionId: 'questionId',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isMarked: 'isMarked',
    isAnswered: 'isAnswered'
  };

  export type AttemptQuestionScalarFieldEnum = (typeof AttemptQuestionScalarFieldEnum)[keyof typeof AttemptQuestionScalarFieldEnum]


  export const AnsweredQuestionScalarFieldEnum: {
    id: 'id',
    userAttemptId: 'userAttemptId',
    answerId: 'answerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AnsweredQuestionScalarFieldEnum = (typeof AnsweredQuestionScalarFieldEnum)[keyof typeof AnsweredQuestionScalarFieldEnum]


  export const TextScalarFieldEnum: {
    id: 'id',
    value: 'value',
    languageId: 'languageId',
    courseDescriptionId: 'courseDescriptionId',
    courseNameId: 'courseNameId',
    categoryNameId: 'categoryNameId',
    questionId: 'questionId',
    answerId: 'answerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    questionHintId: 'questionHintId'
  };

  export type TextScalarFieldEnum = (typeof TextScalarFieldEnum)[keyof typeof TextScalarFieldEnum]


  export const LanguageScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code',
    isActive: 'isActive',
    isRTL: 'isRTL'
  };

  export type LanguageScalarFieldEnum = (typeof LanguageScalarFieldEnum)[keyof typeof LanguageScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const SettingsScalarFieldEnum: {
    id: 'id',
    userAvailability: 'userAvailability',
    testTime: 'testTime',
    questionsPerTest: 'questionsPerTest'
  };

  export type SettingsScalarFieldEnum = (typeof SettingsScalarFieldEnum)[keyof typeof SettingsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    personnr?: StringFilter<"User"> | string
    tel?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    isActive?: BoolFilter<"User"> | boolean
    expiryDate?: DateTimeFilter<"User"> | Date | string
    courses?: CourseListRelationFilter
    userAttempts?: UserAttemptListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    personnr?: SortOrder
    tel?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    expiryDate?: SortOrder
    courses?: CourseOrderByRelationAggregateInput
    userAttempts?: UserAttemptOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    personnr?: StringFilter<"User"> | string
    tel?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    isActive?: BoolFilter<"User"> | boolean
    expiryDate?: DateTimeFilter<"User"> | Date | string
    courses?: CourseListRelationFilter
    userAttempts?: UserAttemptListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    personnr?: SortOrder
    tel?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    expiryDate?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    personnr?: StringWithAggregatesFilter<"User"> | string
    tel?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    expiryDate?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CourseWhereInput = {
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    id?: StringFilter<"Course"> | string
    image?: StringNullableFilter<"Course"> | string | null
    isActive?: BoolFilter<"Course"> | boolean
    name?: TextListRelationFilter
    description?: TextListRelationFilter
    users?: UserListRelationFilter
    questions?: QuestionListRelationFilter
    UserAttempt?: UserAttemptListRelationFilter
  }

  export type CourseOrderByWithRelationInput = {
    id?: SortOrder
    image?: SortOrderInput | SortOrder
    isActive?: SortOrder
    name?: TextOrderByRelationAggregateInput
    description?: TextOrderByRelationAggregateInput
    users?: UserOrderByRelationAggregateInput
    questions?: QuestionOrderByRelationAggregateInput
    UserAttempt?: UserAttemptOrderByRelationAggregateInput
  }

  export type CourseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    image?: StringNullableFilter<"Course"> | string | null
    isActive?: BoolFilter<"Course"> | boolean
    name?: TextListRelationFilter
    description?: TextListRelationFilter
    users?: UserListRelationFilter
    questions?: QuestionListRelationFilter
    UserAttempt?: UserAttemptListRelationFilter
  }, "id">

  export type CourseOrderByWithAggregationInput = {
    id?: SortOrder
    image?: SortOrderInput | SortOrder
    isActive?: SortOrder
    _count?: CourseCountOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    OR?: CourseScalarWhereWithAggregatesInput[]
    NOT?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Course"> | string
    image?: StringNullableWithAggregatesFilter<"Course"> | string | null
    isActive?: BoolWithAggregatesFilter<"Course"> | boolean
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    image?: StringNullableFilter<"Category"> | string | null
    questions?: QuestionListRelationFilter
    name?: TextListRelationFilter
    UserAttempt?: UserAttemptListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    image?: SortOrderInput | SortOrder
    questions?: QuestionOrderByRelationAggregateInput
    name?: TextOrderByRelationAggregateInput
    UserAttempt?: UserAttemptOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    image?: StringNullableFilter<"Category"> | string | null
    questions?: QuestionListRelationFilter
    name?: TextListRelationFilter
    UserAttempt?: UserAttemptListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    image?: SortOrderInput | SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    image?: StringNullableWithAggregatesFilter<"Category"> | string | null
  }

  export type QuestionWhereInput = {
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    id?: StringFilter<"Question"> | string
    courseId?: StringFilter<"Question"> | string
    isActive?: BoolFilter<"Question"> | boolean
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
    text?: TextListRelationFilter
    categories?: CategoryListRelationFilter
    course?: XOR<CourseRelationFilter, CourseWhereInput>
    answers?: AnswerListRelationFilter
    questionMedia?: QuestionMediaListRelationFilter
    AttemptQuestion?: AttemptQuestionListRelationFilter
    hint?: TextListRelationFilter
  }

  export type QuestionOrderByWithRelationInput = {
    id?: SortOrder
    courseId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    text?: TextOrderByRelationAggregateInput
    categories?: CategoryOrderByRelationAggregateInput
    course?: CourseOrderByWithRelationInput
    answers?: AnswerOrderByRelationAggregateInput
    questionMedia?: QuestionMediaOrderByRelationAggregateInput
    AttemptQuestion?: AttemptQuestionOrderByRelationAggregateInput
    hint?: TextOrderByRelationAggregateInput
  }

  export type QuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    courseId?: StringFilter<"Question"> | string
    isActive?: BoolFilter<"Question"> | boolean
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
    text?: TextListRelationFilter
    categories?: CategoryListRelationFilter
    course?: XOR<CourseRelationFilter, CourseWhereInput>
    answers?: AnswerListRelationFilter
    questionMedia?: QuestionMediaListRelationFilter
    AttemptQuestion?: AttemptQuestionListRelationFilter
    hint?: TextListRelationFilter
  }, "id">

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder
    courseId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    OR?: QuestionScalarWhereWithAggregatesInput[]
    NOT?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Question"> | string
    courseId?: StringWithAggregatesFilter<"Question"> | string
    isActive?: BoolWithAggregatesFilter<"Question"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string
  }

  export type AnswerWhereInput = {
    AND?: AnswerWhereInput | AnswerWhereInput[]
    OR?: AnswerWhereInput[]
    NOT?: AnswerWhereInput | AnswerWhereInput[]
    id?: StringFilter<"Answer"> | string
    mediaId?: StringNullableFilter<"Answer"> | string | null
    isActive?: BoolFilter<"Answer"> | boolean
    questionId?: StringFilter<"Answer"> | string
    isCorrect?: BoolFilter<"Answer"> | boolean
    createdAt?: DateTimeFilter<"Answer"> | Date | string
    updatedAt?: DateTimeFilter<"Answer"> | Date | string
    text?: TextListRelationFilter
    media?: XOR<MediaNullableRelationFilter, MediaWhereInput> | null
    question?: XOR<QuestionRelationFilter, QuestionWhereInput>
    answeredQuestions?: AnsweredQuestionListRelationFilter
  }

  export type AnswerOrderByWithRelationInput = {
    id?: SortOrder
    mediaId?: SortOrderInput | SortOrder
    isActive?: SortOrder
    questionId?: SortOrder
    isCorrect?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    text?: TextOrderByRelationAggregateInput
    media?: MediaOrderByWithRelationInput
    question?: QuestionOrderByWithRelationInput
    answeredQuestions?: AnsweredQuestionOrderByRelationAggregateInput
  }

  export type AnswerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AnswerWhereInput | AnswerWhereInput[]
    OR?: AnswerWhereInput[]
    NOT?: AnswerWhereInput | AnswerWhereInput[]
    mediaId?: StringNullableFilter<"Answer"> | string | null
    isActive?: BoolFilter<"Answer"> | boolean
    questionId?: StringFilter<"Answer"> | string
    isCorrect?: BoolFilter<"Answer"> | boolean
    createdAt?: DateTimeFilter<"Answer"> | Date | string
    updatedAt?: DateTimeFilter<"Answer"> | Date | string
    text?: TextListRelationFilter
    media?: XOR<MediaNullableRelationFilter, MediaWhereInput> | null
    question?: XOR<QuestionRelationFilter, QuestionWhereInput>
    answeredQuestions?: AnsweredQuestionListRelationFilter
  }, "id">

  export type AnswerOrderByWithAggregationInput = {
    id?: SortOrder
    mediaId?: SortOrderInput | SortOrder
    isActive?: SortOrder
    questionId?: SortOrder
    isCorrect?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AnswerCountOrderByAggregateInput
    _max?: AnswerMaxOrderByAggregateInput
    _min?: AnswerMinOrderByAggregateInput
  }

  export type AnswerScalarWhereWithAggregatesInput = {
    AND?: AnswerScalarWhereWithAggregatesInput | AnswerScalarWhereWithAggregatesInput[]
    OR?: AnswerScalarWhereWithAggregatesInput[]
    NOT?: AnswerScalarWhereWithAggregatesInput | AnswerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Answer"> | string
    mediaId?: StringNullableWithAggregatesFilter<"Answer"> | string | null
    isActive?: BoolWithAggregatesFilter<"Answer"> | boolean
    questionId?: StringWithAggregatesFilter<"Answer"> | string
    isCorrect?: BoolWithAggregatesFilter<"Answer"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Answer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Answer"> | Date | string
  }

  export type QuestionMediaWhereInput = {
    AND?: QuestionMediaWhereInput | QuestionMediaWhereInput[]
    OR?: QuestionMediaWhereInput[]
    NOT?: QuestionMediaWhereInput | QuestionMediaWhereInput[]
    id?: StringFilter<"QuestionMedia"> | string
    questionId?: StringFilter<"QuestionMedia"> | string
    mediaId?: StringFilter<"QuestionMedia"> | string
    order?: IntFilter<"QuestionMedia"> | number
    createdAt?: DateTimeFilter<"QuestionMedia"> | Date | string
    updatedAt?: DateTimeFilter<"QuestionMedia"> | Date | string
    question?: XOR<QuestionRelationFilter, QuestionWhereInput>
    media?: XOR<MediaRelationFilter, MediaWhereInput>
  }

  export type QuestionMediaOrderByWithRelationInput = {
    id?: SortOrder
    questionId?: SortOrder
    mediaId?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    question?: QuestionOrderByWithRelationInput
    media?: MediaOrderByWithRelationInput
  }

  export type QuestionMediaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuestionMediaWhereInput | QuestionMediaWhereInput[]
    OR?: QuestionMediaWhereInput[]
    NOT?: QuestionMediaWhereInput | QuestionMediaWhereInput[]
    questionId?: StringFilter<"QuestionMedia"> | string
    mediaId?: StringFilter<"QuestionMedia"> | string
    order?: IntFilter<"QuestionMedia"> | number
    createdAt?: DateTimeFilter<"QuestionMedia"> | Date | string
    updatedAt?: DateTimeFilter<"QuestionMedia"> | Date | string
    question?: XOR<QuestionRelationFilter, QuestionWhereInput>
    media?: XOR<MediaRelationFilter, MediaWhereInput>
  }, "id">

  export type QuestionMediaOrderByWithAggregationInput = {
    id?: SortOrder
    questionId?: SortOrder
    mediaId?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: QuestionMediaCountOrderByAggregateInput
    _avg?: QuestionMediaAvgOrderByAggregateInput
    _max?: QuestionMediaMaxOrderByAggregateInput
    _min?: QuestionMediaMinOrderByAggregateInput
    _sum?: QuestionMediaSumOrderByAggregateInput
  }

  export type QuestionMediaScalarWhereWithAggregatesInput = {
    AND?: QuestionMediaScalarWhereWithAggregatesInput | QuestionMediaScalarWhereWithAggregatesInput[]
    OR?: QuestionMediaScalarWhereWithAggregatesInput[]
    NOT?: QuestionMediaScalarWhereWithAggregatesInput | QuestionMediaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QuestionMedia"> | string
    questionId?: StringWithAggregatesFilter<"QuestionMedia"> | string
    mediaId?: StringWithAggregatesFilter<"QuestionMedia"> | string
    order?: IntWithAggregatesFilter<"QuestionMedia"> | number
    createdAt?: DateTimeWithAggregatesFilter<"QuestionMedia"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"QuestionMedia"> | Date | string
  }

  export type MediaWhereInput = {
    AND?: MediaWhereInput | MediaWhereInput[]
    OR?: MediaWhereInput[]
    NOT?: MediaWhereInput | MediaWhereInput[]
    id?: StringFilter<"Media"> | string
    url?: StringFilter<"Media"> | string
    type?: StringNullableFilter<"Media"> | string | null
    description?: StringNullableFilter<"Media"> | string | null
    createdAt?: DateTimeFilter<"Media"> | Date | string
    updatedAt?: DateTimeFilter<"Media"> | Date | string
    questionMedia?: QuestionMediaListRelationFilter
    answer?: AnswerListRelationFilter
  }

  export type MediaOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    type?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    questionMedia?: QuestionMediaOrderByRelationAggregateInput
    answer?: AnswerOrderByRelationAggregateInput
  }

  export type MediaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MediaWhereInput | MediaWhereInput[]
    OR?: MediaWhereInput[]
    NOT?: MediaWhereInput | MediaWhereInput[]
    url?: StringFilter<"Media"> | string
    type?: StringNullableFilter<"Media"> | string | null
    description?: StringNullableFilter<"Media"> | string | null
    createdAt?: DateTimeFilter<"Media"> | Date | string
    updatedAt?: DateTimeFilter<"Media"> | Date | string
    questionMedia?: QuestionMediaListRelationFilter
    answer?: AnswerListRelationFilter
  }, "id">

  export type MediaOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    type?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MediaCountOrderByAggregateInput
    _max?: MediaMaxOrderByAggregateInput
    _min?: MediaMinOrderByAggregateInput
  }

  export type MediaScalarWhereWithAggregatesInput = {
    AND?: MediaScalarWhereWithAggregatesInput | MediaScalarWhereWithAggregatesInput[]
    OR?: MediaScalarWhereWithAggregatesInput[]
    NOT?: MediaScalarWhereWithAggregatesInput | MediaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Media"> | string
    url?: StringWithAggregatesFilter<"Media"> | string
    type?: StringNullableWithAggregatesFilter<"Media"> | string | null
    description?: StringNullableWithAggregatesFilter<"Media"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Media"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Media"> | Date | string
  }

  export type UserAttemptWhereInput = {
    AND?: UserAttemptWhereInput | UserAttemptWhereInput[]
    OR?: UserAttemptWhereInput[]
    NOT?: UserAttemptWhereInput | UserAttemptWhereInput[]
    id?: StringFilter<"UserAttempt"> | string
    userId?: StringFilter<"UserAttempt"> | string
    date?: DateTimeFilter<"UserAttempt"> | Date | string
    result?: FloatFilter<"UserAttempt"> | number
    courseId?: StringNullableFilter<"UserAttempt"> | string | null
    isTimed?: BoolFilter<"UserAttempt"> | boolean
    isInstantResult?: BoolFilter<"UserAttempt"> | boolean
    createdAt?: DateTimeFilter<"UserAttempt"> | Date | string
    updatedAt?: DateTimeFilter<"UserAttempt"> | Date | string
    currentQuestionIndex?: IntFilter<"UserAttempt"> | number
    endTime?: DateTimeNullableFilter<"UserAttempt"> | Date | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
    course?: XOR<CourseNullableRelationFilter, CourseWhereInput> | null
    answeredQuestions?: AnsweredQuestionListRelationFilter
    categories?: CategoryListRelationFilter
    questions?: AttemptQuestionListRelationFilter
  }

  export type UserAttemptOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    result?: SortOrder
    courseId?: SortOrderInput | SortOrder
    isTimed?: SortOrder
    isInstantResult?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    currentQuestionIndex?: SortOrder
    endTime?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    course?: CourseOrderByWithRelationInput
    answeredQuestions?: AnsweredQuestionOrderByRelationAggregateInput
    categories?: CategoryOrderByRelationAggregateInput
    questions?: AttemptQuestionOrderByRelationAggregateInput
  }

  export type UserAttemptWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserAttemptWhereInput | UserAttemptWhereInput[]
    OR?: UserAttemptWhereInput[]
    NOT?: UserAttemptWhereInput | UserAttemptWhereInput[]
    userId?: StringFilter<"UserAttempt"> | string
    date?: DateTimeFilter<"UserAttempt"> | Date | string
    result?: FloatFilter<"UserAttempt"> | number
    courseId?: StringNullableFilter<"UserAttempt"> | string | null
    isTimed?: BoolFilter<"UserAttempt"> | boolean
    isInstantResult?: BoolFilter<"UserAttempt"> | boolean
    createdAt?: DateTimeFilter<"UserAttempt"> | Date | string
    updatedAt?: DateTimeFilter<"UserAttempt"> | Date | string
    currentQuestionIndex?: IntFilter<"UserAttempt"> | number
    endTime?: DateTimeNullableFilter<"UserAttempt"> | Date | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
    course?: XOR<CourseNullableRelationFilter, CourseWhereInput> | null
    answeredQuestions?: AnsweredQuestionListRelationFilter
    categories?: CategoryListRelationFilter
    questions?: AttemptQuestionListRelationFilter
  }, "id">

  export type UserAttemptOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    result?: SortOrder
    courseId?: SortOrderInput | SortOrder
    isTimed?: SortOrder
    isInstantResult?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    currentQuestionIndex?: SortOrder
    endTime?: SortOrderInput | SortOrder
    _count?: UserAttemptCountOrderByAggregateInput
    _avg?: UserAttemptAvgOrderByAggregateInput
    _max?: UserAttemptMaxOrderByAggregateInput
    _min?: UserAttemptMinOrderByAggregateInput
    _sum?: UserAttemptSumOrderByAggregateInput
  }

  export type UserAttemptScalarWhereWithAggregatesInput = {
    AND?: UserAttemptScalarWhereWithAggregatesInput | UserAttemptScalarWhereWithAggregatesInput[]
    OR?: UserAttemptScalarWhereWithAggregatesInput[]
    NOT?: UserAttemptScalarWhereWithAggregatesInput | UserAttemptScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserAttempt"> | string
    userId?: StringWithAggregatesFilter<"UserAttempt"> | string
    date?: DateTimeWithAggregatesFilter<"UserAttempt"> | Date | string
    result?: FloatWithAggregatesFilter<"UserAttempt"> | number
    courseId?: StringNullableWithAggregatesFilter<"UserAttempt"> | string | null
    isTimed?: BoolWithAggregatesFilter<"UserAttempt"> | boolean
    isInstantResult?: BoolWithAggregatesFilter<"UserAttempt"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"UserAttempt"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserAttempt"> | Date | string
    currentQuestionIndex?: IntWithAggregatesFilter<"UserAttempt"> | number
    endTime?: DateTimeNullableWithAggregatesFilter<"UserAttempt"> | Date | string | null
  }

  export type AttemptQuestionWhereInput = {
    AND?: AttemptQuestionWhereInput | AttemptQuestionWhereInput[]
    OR?: AttemptQuestionWhereInput[]
    NOT?: AttemptQuestionWhereInput | AttemptQuestionWhereInput[]
    id?: StringFilter<"AttemptQuestion"> | string
    userAttemptId?: StringFilter<"AttemptQuestion"> | string
    questionId?: StringFilter<"AttemptQuestion"> | string
    order?: IntFilter<"AttemptQuestion"> | number
    createdAt?: DateTimeFilter<"AttemptQuestion"> | Date | string
    updatedAt?: DateTimeFilter<"AttemptQuestion"> | Date | string
    isMarked?: BoolFilter<"AttemptQuestion"> | boolean
    isAnswered?: BoolFilter<"AttemptQuestion"> | boolean
    userAttempt?: XOR<UserAttemptRelationFilter, UserAttemptWhereInput>
    question?: XOR<QuestionRelationFilter, QuestionWhereInput>
  }

  export type AttemptQuestionOrderByWithRelationInput = {
    id?: SortOrder
    userAttemptId?: SortOrder
    questionId?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isMarked?: SortOrder
    isAnswered?: SortOrder
    userAttempt?: UserAttemptOrderByWithRelationInput
    question?: QuestionOrderByWithRelationInput
  }

  export type AttemptQuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AttemptQuestionWhereInput | AttemptQuestionWhereInput[]
    OR?: AttemptQuestionWhereInput[]
    NOT?: AttemptQuestionWhereInput | AttemptQuestionWhereInput[]
    userAttemptId?: StringFilter<"AttemptQuestion"> | string
    questionId?: StringFilter<"AttemptQuestion"> | string
    order?: IntFilter<"AttemptQuestion"> | number
    createdAt?: DateTimeFilter<"AttemptQuestion"> | Date | string
    updatedAt?: DateTimeFilter<"AttemptQuestion"> | Date | string
    isMarked?: BoolFilter<"AttemptQuestion"> | boolean
    isAnswered?: BoolFilter<"AttemptQuestion"> | boolean
    userAttempt?: XOR<UserAttemptRelationFilter, UserAttemptWhereInput>
    question?: XOR<QuestionRelationFilter, QuestionWhereInput>
  }, "id">

  export type AttemptQuestionOrderByWithAggregationInput = {
    id?: SortOrder
    userAttemptId?: SortOrder
    questionId?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isMarked?: SortOrder
    isAnswered?: SortOrder
    _count?: AttemptQuestionCountOrderByAggregateInput
    _avg?: AttemptQuestionAvgOrderByAggregateInput
    _max?: AttemptQuestionMaxOrderByAggregateInput
    _min?: AttemptQuestionMinOrderByAggregateInput
    _sum?: AttemptQuestionSumOrderByAggregateInput
  }

  export type AttemptQuestionScalarWhereWithAggregatesInput = {
    AND?: AttemptQuestionScalarWhereWithAggregatesInput | AttemptQuestionScalarWhereWithAggregatesInput[]
    OR?: AttemptQuestionScalarWhereWithAggregatesInput[]
    NOT?: AttemptQuestionScalarWhereWithAggregatesInput | AttemptQuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AttemptQuestion"> | string
    userAttemptId?: StringWithAggregatesFilter<"AttemptQuestion"> | string
    questionId?: StringWithAggregatesFilter<"AttemptQuestion"> | string
    order?: IntWithAggregatesFilter<"AttemptQuestion"> | number
    createdAt?: DateTimeWithAggregatesFilter<"AttemptQuestion"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AttemptQuestion"> | Date | string
    isMarked?: BoolWithAggregatesFilter<"AttemptQuestion"> | boolean
    isAnswered?: BoolWithAggregatesFilter<"AttemptQuestion"> | boolean
  }

  export type AnsweredQuestionWhereInput = {
    AND?: AnsweredQuestionWhereInput | AnsweredQuestionWhereInput[]
    OR?: AnsweredQuestionWhereInput[]
    NOT?: AnsweredQuestionWhereInput | AnsweredQuestionWhereInput[]
    id?: StringFilter<"AnsweredQuestion"> | string
    userAttemptId?: StringFilter<"AnsweredQuestion"> | string
    answerId?: StringFilter<"AnsweredQuestion"> | string
    createdAt?: DateTimeFilter<"AnsweredQuestion"> | Date | string
    updatedAt?: DateTimeFilter<"AnsweredQuestion"> | Date | string
    userAttempt?: XOR<UserAttemptRelationFilter, UserAttemptWhereInput>
    answer?: XOR<AnswerRelationFilter, AnswerWhereInput>
  }

  export type AnsweredQuestionOrderByWithRelationInput = {
    id?: SortOrder
    userAttemptId?: SortOrder
    answerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userAttempt?: UserAttemptOrderByWithRelationInput
    answer?: AnswerOrderByWithRelationInput
  }

  export type AnsweredQuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AnsweredQuestionWhereInput | AnsweredQuestionWhereInput[]
    OR?: AnsweredQuestionWhereInput[]
    NOT?: AnsweredQuestionWhereInput | AnsweredQuestionWhereInput[]
    userAttemptId?: StringFilter<"AnsweredQuestion"> | string
    answerId?: StringFilter<"AnsweredQuestion"> | string
    createdAt?: DateTimeFilter<"AnsweredQuestion"> | Date | string
    updatedAt?: DateTimeFilter<"AnsweredQuestion"> | Date | string
    userAttempt?: XOR<UserAttemptRelationFilter, UserAttemptWhereInput>
    answer?: XOR<AnswerRelationFilter, AnswerWhereInput>
  }, "id">

  export type AnsweredQuestionOrderByWithAggregationInput = {
    id?: SortOrder
    userAttemptId?: SortOrder
    answerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AnsweredQuestionCountOrderByAggregateInput
    _max?: AnsweredQuestionMaxOrderByAggregateInput
    _min?: AnsweredQuestionMinOrderByAggregateInput
  }

  export type AnsweredQuestionScalarWhereWithAggregatesInput = {
    AND?: AnsweredQuestionScalarWhereWithAggregatesInput | AnsweredQuestionScalarWhereWithAggregatesInput[]
    OR?: AnsweredQuestionScalarWhereWithAggregatesInput[]
    NOT?: AnsweredQuestionScalarWhereWithAggregatesInput | AnsweredQuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AnsweredQuestion"> | string
    userAttemptId?: StringWithAggregatesFilter<"AnsweredQuestion"> | string
    answerId?: StringWithAggregatesFilter<"AnsweredQuestion"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AnsweredQuestion"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AnsweredQuestion"> | Date | string
  }

  export type TextWhereInput = {
    AND?: TextWhereInput | TextWhereInput[]
    OR?: TextWhereInput[]
    NOT?: TextWhereInput | TextWhereInput[]
    id?: StringFilter<"Text"> | string
    value?: StringFilter<"Text"> | string
    languageId?: StringFilter<"Text"> | string
    courseDescriptionId?: StringNullableFilter<"Text"> | string | null
    courseNameId?: StringNullableFilter<"Text"> | string | null
    categoryNameId?: StringNullableFilter<"Text"> | string | null
    questionId?: StringNullableFilter<"Text"> | string | null
    answerId?: StringNullableFilter<"Text"> | string | null
    createdAt?: DateTimeFilter<"Text"> | Date | string
    updatedAt?: DateTimeFilter<"Text"> | Date | string
    questionHintId?: StringNullableFilter<"Text"> | string | null
    language?: XOR<LanguageRelationFilter, LanguageWhereInput>
    CourseDescription?: XOR<CourseNullableRelationFilter, CourseWhereInput> | null
    CourseName?: XOR<CourseNullableRelationFilter, CourseWhereInput> | null
    CategoryName?: XOR<CategoryNullableRelationFilter, CategoryWhereInput> | null
    Question?: XOR<QuestionNullableRelationFilter, QuestionWhereInput> | null
    Answer?: XOR<AnswerNullableRelationFilter, AnswerWhereInput> | null
    questionHint?: XOR<QuestionNullableRelationFilter, QuestionWhereInput> | null
  }

  export type TextOrderByWithRelationInput = {
    id?: SortOrder
    value?: SortOrder
    languageId?: SortOrder
    courseDescriptionId?: SortOrderInput | SortOrder
    courseNameId?: SortOrderInput | SortOrder
    categoryNameId?: SortOrderInput | SortOrder
    questionId?: SortOrderInput | SortOrder
    answerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    questionHintId?: SortOrderInput | SortOrder
    language?: LanguageOrderByWithRelationInput
    CourseDescription?: CourseOrderByWithRelationInput
    CourseName?: CourseOrderByWithRelationInput
    CategoryName?: CategoryOrderByWithRelationInput
    Question?: QuestionOrderByWithRelationInput
    Answer?: AnswerOrderByWithRelationInput
    questionHint?: QuestionOrderByWithRelationInput
  }

  export type TextWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TextWhereInput | TextWhereInput[]
    OR?: TextWhereInput[]
    NOT?: TextWhereInput | TextWhereInput[]
    value?: StringFilter<"Text"> | string
    languageId?: StringFilter<"Text"> | string
    courseDescriptionId?: StringNullableFilter<"Text"> | string | null
    courseNameId?: StringNullableFilter<"Text"> | string | null
    categoryNameId?: StringNullableFilter<"Text"> | string | null
    questionId?: StringNullableFilter<"Text"> | string | null
    answerId?: StringNullableFilter<"Text"> | string | null
    createdAt?: DateTimeFilter<"Text"> | Date | string
    updatedAt?: DateTimeFilter<"Text"> | Date | string
    questionHintId?: StringNullableFilter<"Text"> | string | null
    language?: XOR<LanguageRelationFilter, LanguageWhereInput>
    CourseDescription?: XOR<CourseNullableRelationFilter, CourseWhereInput> | null
    CourseName?: XOR<CourseNullableRelationFilter, CourseWhereInput> | null
    CategoryName?: XOR<CategoryNullableRelationFilter, CategoryWhereInput> | null
    Question?: XOR<QuestionNullableRelationFilter, QuestionWhereInput> | null
    Answer?: XOR<AnswerNullableRelationFilter, AnswerWhereInput> | null
    questionHint?: XOR<QuestionNullableRelationFilter, QuestionWhereInput> | null
  }, "id">

  export type TextOrderByWithAggregationInput = {
    id?: SortOrder
    value?: SortOrder
    languageId?: SortOrder
    courseDescriptionId?: SortOrderInput | SortOrder
    courseNameId?: SortOrderInput | SortOrder
    categoryNameId?: SortOrderInput | SortOrder
    questionId?: SortOrderInput | SortOrder
    answerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    questionHintId?: SortOrderInput | SortOrder
    _count?: TextCountOrderByAggregateInput
    _max?: TextMaxOrderByAggregateInput
    _min?: TextMinOrderByAggregateInput
  }

  export type TextScalarWhereWithAggregatesInput = {
    AND?: TextScalarWhereWithAggregatesInput | TextScalarWhereWithAggregatesInput[]
    OR?: TextScalarWhereWithAggregatesInput[]
    NOT?: TextScalarWhereWithAggregatesInput | TextScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Text"> | string
    value?: StringWithAggregatesFilter<"Text"> | string
    languageId?: StringWithAggregatesFilter<"Text"> | string
    courseDescriptionId?: StringNullableWithAggregatesFilter<"Text"> | string | null
    courseNameId?: StringNullableWithAggregatesFilter<"Text"> | string | null
    categoryNameId?: StringNullableWithAggregatesFilter<"Text"> | string | null
    questionId?: StringNullableWithAggregatesFilter<"Text"> | string | null
    answerId?: StringNullableWithAggregatesFilter<"Text"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Text"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Text"> | Date | string
    questionHintId?: StringNullableWithAggregatesFilter<"Text"> | string | null
  }

  export type LanguageWhereInput = {
    AND?: LanguageWhereInput | LanguageWhereInput[]
    OR?: LanguageWhereInput[]
    NOT?: LanguageWhereInput | LanguageWhereInput[]
    id?: StringFilter<"Language"> | string
    name?: StringFilter<"Language"> | string
    code?: StringFilter<"Language"> | string
    isActive?: BoolFilter<"Language"> | boolean
    isRTL?: BoolFilter<"Language"> | boolean
    strings?: TextListRelationFilter
  }

  export type LanguageOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    isActive?: SortOrder
    isRTL?: SortOrder
    strings?: TextOrderByRelationAggregateInput
  }

  export type LanguageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LanguageWhereInput | LanguageWhereInput[]
    OR?: LanguageWhereInput[]
    NOT?: LanguageWhereInput | LanguageWhereInput[]
    name?: StringFilter<"Language"> | string
    code?: StringFilter<"Language"> | string
    isActive?: BoolFilter<"Language"> | boolean
    isRTL?: BoolFilter<"Language"> | boolean
    strings?: TextListRelationFilter
  }, "id">

  export type LanguageOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    isActive?: SortOrder
    isRTL?: SortOrder
    _count?: LanguageCountOrderByAggregateInput
    _max?: LanguageMaxOrderByAggregateInput
    _min?: LanguageMinOrderByAggregateInput
  }

  export type LanguageScalarWhereWithAggregatesInput = {
    AND?: LanguageScalarWhereWithAggregatesInput | LanguageScalarWhereWithAggregatesInput[]
    OR?: LanguageScalarWhereWithAggregatesInput[]
    NOT?: LanguageScalarWhereWithAggregatesInput | LanguageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Language"> | string
    name?: StringWithAggregatesFilter<"Language"> | string
    code?: StringWithAggregatesFilter<"Language"> | string
    isActive?: BoolWithAggregatesFilter<"Language"> | boolean
    isRTL?: BoolWithAggregatesFilter<"Language"> | boolean
  }

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: StringFilter<"Admin"> | string
    name?: StringFilter<"Admin"> | string
    email?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    name?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
  }, "id" | "email">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Admin"> | string
    name?: StringWithAggregatesFilter<"Admin"> | string
    email?: StringWithAggregatesFilter<"Admin"> | string
    password?: StringWithAggregatesFilter<"Admin"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
  }

  export type SettingsWhereInput = {
    AND?: SettingsWhereInput | SettingsWhereInput[]
    OR?: SettingsWhereInput[]
    NOT?: SettingsWhereInput | SettingsWhereInput[]
    id?: StringFilter<"Settings"> | string
    userAvailability?: IntFilter<"Settings"> | number
    testTime?: IntFilter<"Settings"> | number
    questionsPerTest?: IntFilter<"Settings"> | number
  }

  export type SettingsOrderByWithRelationInput = {
    id?: SortOrder
    userAvailability?: SortOrder
    testTime?: SortOrder
    questionsPerTest?: SortOrder
  }

  export type SettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SettingsWhereInput | SettingsWhereInput[]
    OR?: SettingsWhereInput[]
    NOT?: SettingsWhereInput | SettingsWhereInput[]
    userAvailability?: IntFilter<"Settings"> | number
    testTime?: IntFilter<"Settings"> | number
    questionsPerTest?: IntFilter<"Settings"> | number
  }, "id">

  export type SettingsOrderByWithAggregationInput = {
    id?: SortOrder
    userAvailability?: SortOrder
    testTime?: SortOrder
    questionsPerTest?: SortOrder
    _count?: SettingsCountOrderByAggregateInput
    _avg?: SettingsAvgOrderByAggregateInput
    _max?: SettingsMaxOrderByAggregateInput
    _min?: SettingsMinOrderByAggregateInput
    _sum?: SettingsSumOrderByAggregateInput
  }

  export type SettingsScalarWhereWithAggregatesInput = {
    AND?: SettingsScalarWhereWithAggregatesInput | SettingsScalarWhereWithAggregatesInput[]
    OR?: SettingsScalarWhereWithAggregatesInput[]
    NOT?: SettingsScalarWhereWithAggregatesInput | SettingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Settings"> | string
    userAvailability?: IntWithAggregatesFilter<"Settings"> | number
    testTime?: IntWithAggregatesFilter<"Settings"> | number
    questionsPerTest?: IntWithAggregatesFilter<"Settings"> | number
  }

  export type UserCreateInput = {
    id?: string
    firstName: string
    lastName: string
    personnr: string
    tel: string
    email: string
    password: string
    isActive?: boolean
    expiryDate: Date | string
    courses?: CourseCreateNestedManyWithoutUsersInput
    userAttempts?: UserAttemptCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    personnr: string
    tel: string
    email: string
    password: string
    isActive?: boolean
    expiryDate: Date | string
    courses?: CourseUncheckedCreateNestedManyWithoutUsersInput
    userAttempts?: UserAttemptUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    personnr?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: CourseUpdateManyWithoutUsersNestedInput
    userAttempts?: UserAttemptUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    personnr?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: CourseUncheckedUpdateManyWithoutUsersNestedInput
    userAttempts?: UserAttemptUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    personnr: string
    tel: string
    email: string
    password: string
    isActive?: boolean
    expiryDate: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    personnr?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    personnr?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseCreateInput = {
    id?: string
    image?: string | null
    isActive?: boolean
    name?: TextCreateNestedManyWithoutCourseNameInput
    description?: TextCreateNestedManyWithoutCourseDescriptionInput
    users?: UserCreateNestedManyWithoutCoursesInput
    questions?: QuestionCreateNestedManyWithoutCourseInput
    UserAttempt?: UserAttemptCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateInput = {
    id?: string
    image?: string | null
    isActive?: boolean
    name?: TextUncheckedCreateNestedManyWithoutCourseNameInput
    description?: TextUncheckedCreateNestedManyWithoutCourseDescriptionInput
    users?: UserUncheckedCreateNestedManyWithoutCoursesInput
    questions?: QuestionUncheckedCreateNestedManyWithoutCourseInput
    UserAttempt?: UserAttemptUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    name?: TextUpdateManyWithoutCourseNameNestedInput
    description?: TextUpdateManyWithoutCourseDescriptionNestedInput
    users?: UserUpdateManyWithoutCoursesNestedInput
    questions?: QuestionUpdateManyWithoutCourseNestedInput
    UserAttempt?: UserAttemptUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    name?: TextUncheckedUpdateManyWithoutCourseNameNestedInput
    description?: TextUncheckedUpdateManyWithoutCourseDescriptionNestedInput
    users?: UserUncheckedUpdateManyWithoutCoursesNestedInput
    questions?: QuestionUncheckedUpdateManyWithoutCourseNestedInput
    UserAttempt?: UserAttemptUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateManyInput = {
    id?: string
    image?: string | null
    isActive?: boolean
  }

  export type CourseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CourseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CategoryCreateInput = {
    id?: string
    image?: string | null
    questions?: QuestionCreateNestedManyWithoutCategoriesInput
    name?: TextCreateNestedManyWithoutCategoryNameInput
    UserAttempt?: UserAttemptCreateNestedManyWithoutCategoriesInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    image?: string | null
    questions?: QuestionUncheckedCreateNestedManyWithoutCategoriesInput
    name?: TextUncheckedCreateNestedManyWithoutCategoryNameInput
    UserAttempt?: UserAttemptUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    questions?: QuestionUpdateManyWithoutCategoriesNestedInput
    name?: TextUpdateManyWithoutCategoryNameNestedInput
    UserAttempt?: UserAttemptUpdateManyWithoutCategoriesNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    questions?: QuestionUncheckedUpdateManyWithoutCategoriesNestedInput
    name?: TextUncheckedUpdateManyWithoutCategoryNameNestedInput
    UserAttempt?: UserAttemptUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    image?: string | null
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuestionCreateInput = {
    id?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    text?: TextCreateNestedManyWithoutQuestionInput
    categories?: CategoryCreateNestedManyWithoutQuestionsInput
    course: CourseCreateNestedOneWithoutQuestionsInput
    answers?: AnswerCreateNestedManyWithoutQuestionInput
    questionMedia?: QuestionMediaCreateNestedManyWithoutQuestionInput
    AttemptQuestion?: AttemptQuestionCreateNestedManyWithoutQuestionInput
    hint?: TextCreateNestedManyWithoutQuestionHintInput
  }

  export type QuestionUncheckedCreateInput = {
    id?: string
    courseId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    text?: TextUncheckedCreateNestedManyWithoutQuestionInput
    categories?: CategoryUncheckedCreateNestedManyWithoutQuestionsInput
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
    questionMedia?: QuestionMediaUncheckedCreateNestedManyWithoutQuestionInput
    AttemptQuestion?: AttemptQuestionUncheckedCreateNestedManyWithoutQuestionInput
    hint?: TextUncheckedCreateNestedManyWithoutQuestionHintInput
  }

  export type QuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: TextUpdateManyWithoutQuestionNestedInput
    categories?: CategoryUpdateManyWithoutQuestionsNestedInput
    course?: CourseUpdateOneRequiredWithoutQuestionsNestedInput
    answers?: AnswerUpdateManyWithoutQuestionNestedInput
    questionMedia?: QuestionMediaUpdateManyWithoutQuestionNestedInput
    AttemptQuestion?: AttemptQuestionUpdateManyWithoutQuestionNestedInput
    hint?: TextUpdateManyWithoutQuestionHintNestedInput
  }

  export type QuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: TextUncheckedUpdateManyWithoutQuestionNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutQuestionsNestedInput
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
    questionMedia?: QuestionMediaUncheckedUpdateManyWithoutQuestionNestedInput
    AttemptQuestion?: AttemptQuestionUncheckedUpdateManyWithoutQuestionNestedInput
    hint?: TextUncheckedUpdateManyWithoutQuestionHintNestedInput
  }

  export type QuestionCreateManyInput = {
    id?: string
    courseId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerCreateInput = {
    id?: string
    isActive?: boolean
    isCorrect: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    text?: TextCreateNestedManyWithoutAnswerInput
    media?: MediaCreateNestedOneWithoutAnswerInput
    question: QuestionCreateNestedOneWithoutAnswersInput
    answeredQuestions?: AnsweredQuestionCreateNestedManyWithoutAnswerInput
  }

  export type AnswerUncheckedCreateInput = {
    id?: string
    mediaId?: string | null
    isActive?: boolean
    questionId: string
    isCorrect: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    text?: TextUncheckedCreateNestedManyWithoutAnswerInput
    answeredQuestions?: AnsweredQuestionUncheckedCreateNestedManyWithoutAnswerInput
  }

  export type AnswerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: TextUpdateManyWithoutAnswerNestedInput
    media?: MediaUpdateOneWithoutAnswerNestedInput
    question?: QuestionUpdateOneRequiredWithoutAnswersNestedInput
    answeredQuestions?: AnsweredQuestionUpdateManyWithoutAnswerNestedInput
  }

  export type AnswerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mediaId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    questionId?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: TextUncheckedUpdateManyWithoutAnswerNestedInput
    answeredQuestions?: AnsweredQuestionUncheckedUpdateManyWithoutAnswerNestedInput
  }

  export type AnswerCreateManyInput = {
    id?: string
    mediaId?: string | null
    isActive?: boolean
    questionId: string
    isCorrect: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnswerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    mediaId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    questionId?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionMediaCreateInput = {
    id?: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    question: QuestionCreateNestedOneWithoutQuestionMediaInput
    media: MediaCreateNestedOneWithoutQuestionMediaInput
  }

  export type QuestionMediaUncheckedCreateInput = {
    id?: string
    questionId: string
    mediaId: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionMediaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: QuestionUpdateOneRequiredWithoutQuestionMediaNestedInput
    media?: MediaUpdateOneRequiredWithoutQuestionMediaNestedInput
  }

  export type QuestionMediaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    mediaId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionMediaCreateManyInput = {
    id?: string
    questionId: string
    mediaId: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionMediaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionMediaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    mediaId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaCreateInput = {
    id?: string
    url: string
    type?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    questionMedia?: QuestionMediaCreateNestedManyWithoutMediaInput
    answer?: AnswerCreateNestedManyWithoutMediaInput
  }

  export type MediaUncheckedCreateInput = {
    id?: string
    url: string
    type?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    questionMedia?: QuestionMediaUncheckedCreateNestedManyWithoutMediaInput
    answer?: AnswerUncheckedCreateNestedManyWithoutMediaInput
  }

  export type MediaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questionMedia?: QuestionMediaUpdateManyWithoutMediaNestedInput
    answer?: AnswerUpdateManyWithoutMediaNestedInput
  }

  export type MediaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questionMedia?: QuestionMediaUncheckedUpdateManyWithoutMediaNestedInput
    answer?: AnswerUncheckedUpdateManyWithoutMediaNestedInput
  }

  export type MediaCreateManyInput = {
    id?: string
    url: string
    type?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MediaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAttemptCreateInput = {
    id?: string
    date: Date | string
    result: number
    isTimed: boolean
    isInstantResult: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    currentQuestionIndex?: number
    endTime?: Date | string | null
    user: UserCreateNestedOneWithoutUserAttemptsInput
    course?: CourseCreateNestedOneWithoutUserAttemptInput
    answeredQuestions?: AnsweredQuestionCreateNestedManyWithoutUserAttemptInput
    categories?: CategoryCreateNestedManyWithoutUserAttemptInput
    questions?: AttemptQuestionCreateNestedManyWithoutUserAttemptInput
  }

  export type UserAttemptUncheckedCreateInput = {
    id?: string
    userId: string
    date: Date | string
    result: number
    courseId?: string | null
    isTimed: boolean
    isInstantResult: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    currentQuestionIndex?: number
    endTime?: Date | string | null
    answeredQuestions?: AnsweredQuestionUncheckedCreateNestedManyWithoutUserAttemptInput
    categories?: CategoryUncheckedCreateNestedManyWithoutUserAttemptInput
    questions?: AttemptQuestionUncheckedCreateNestedManyWithoutUserAttemptInput
  }

  export type UserAttemptUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: FloatFieldUpdateOperationsInput | number
    isTimed?: BoolFieldUpdateOperationsInput | boolean
    isInstantResult?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentQuestionIndex?: IntFieldUpdateOperationsInput | number
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutUserAttemptsNestedInput
    course?: CourseUpdateOneWithoutUserAttemptNestedInput
    answeredQuestions?: AnsweredQuestionUpdateManyWithoutUserAttemptNestedInput
    categories?: CategoryUpdateManyWithoutUserAttemptNestedInput
    questions?: AttemptQuestionUpdateManyWithoutUserAttemptNestedInput
  }

  export type UserAttemptUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: FloatFieldUpdateOperationsInput | number
    courseId?: NullableStringFieldUpdateOperationsInput | string | null
    isTimed?: BoolFieldUpdateOperationsInput | boolean
    isInstantResult?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentQuestionIndex?: IntFieldUpdateOperationsInput | number
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answeredQuestions?: AnsweredQuestionUncheckedUpdateManyWithoutUserAttemptNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutUserAttemptNestedInput
    questions?: AttemptQuestionUncheckedUpdateManyWithoutUserAttemptNestedInput
  }

  export type UserAttemptCreateManyInput = {
    id?: string
    userId: string
    date: Date | string
    result: number
    courseId?: string | null
    isTimed: boolean
    isInstantResult: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    currentQuestionIndex?: number
    endTime?: Date | string | null
  }

  export type UserAttemptUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: FloatFieldUpdateOperationsInput | number
    isTimed?: BoolFieldUpdateOperationsInput | boolean
    isInstantResult?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentQuestionIndex?: IntFieldUpdateOperationsInput | number
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserAttemptUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: FloatFieldUpdateOperationsInput | number
    courseId?: NullableStringFieldUpdateOperationsInput | string | null
    isTimed?: BoolFieldUpdateOperationsInput | boolean
    isInstantResult?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentQuestionIndex?: IntFieldUpdateOperationsInput | number
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AttemptQuestionCreateInput = {
    id?: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isMarked?: boolean
    isAnswered?: boolean
    userAttempt: UserAttemptCreateNestedOneWithoutQuestionsInput
    question: QuestionCreateNestedOneWithoutAttemptQuestionInput
  }

  export type AttemptQuestionUncheckedCreateInput = {
    id?: string
    userAttemptId: string
    questionId: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isMarked?: boolean
    isAnswered?: boolean
  }

  export type AttemptQuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isMarked?: BoolFieldUpdateOperationsInput | boolean
    isAnswered?: BoolFieldUpdateOperationsInput | boolean
    userAttempt?: UserAttemptUpdateOneRequiredWithoutQuestionsNestedInput
    question?: QuestionUpdateOneRequiredWithoutAttemptQuestionNestedInput
  }

  export type AttemptQuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userAttemptId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isMarked?: BoolFieldUpdateOperationsInput | boolean
    isAnswered?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AttemptQuestionCreateManyInput = {
    id?: string
    userAttemptId: string
    questionId: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isMarked?: boolean
    isAnswered?: boolean
  }

  export type AttemptQuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isMarked?: BoolFieldUpdateOperationsInput | boolean
    isAnswered?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AttemptQuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userAttemptId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isMarked?: BoolFieldUpdateOperationsInput | boolean
    isAnswered?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AnsweredQuestionCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userAttempt: UserAttemptCreateNestedOneWithoutAnsweredQuestionsInput
    answer: AnswerCreateNestedOneWithoutAnsweredQuestionsInput
  }

  export type AnsweredQuestionUncheckedCreateInput = {
    id?: string
    userAttemptId: string
    answerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnsweredQuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userAttempt?: UserAttemptUpdateOneRequiredWithoutAnsweredQuestionsNestedInput
    answer?: AnswerUpdateOneRequiredWithoutAnsweredQuestionsNestedInput
  }

  export type AnsweredQuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userAttemptId?: StringFieldUpdateOperationsInput | string
    answerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnsweredQuestionCreateManyInput = {
    id?: string
    userAttemptId: string
    answerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnsweredQuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnsweredQuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userAttemptId?: StringFieldUpdateOperationsInput | string
    answerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TextCreateInput = {
    id?: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
    language: LanguageCreateNestedOneWithoutStringsInput
    CourseDescription?: CourseCreateNestedOneWithoutDescriptionInput
    CourseName?: CourseCreateNestedOneWithoutNameInput
    CategoryName?: CategoryCreateNestedOneWithoutNameInput
    Question?: QuestionCreateNestedOneWithoutTextInput
    Answer?: AnswerCreateNestedOneWithoutTextInput
    questionHint?: QuestionCreateNestedOneWithoutHintInput
  }

  export type TextUncheckedCreateInput = {
    id?: string
    value: string
    languageId: string
    courseDescriptionId?: string | null
    courseNameId?: string | null
    categoryNameId?: string | null
    questionId?: string | null
    answerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    questionHintId?: string | null
  }

  export type TextUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    language?: LanguageUpdateOneRequiredWithoutStringsNestedInput
    CourseDescription?: CourseUpdateOneWithoutDescriptionNestedInput
    CourseName?: CourseUpdateOneWithoutNameNestedInput
    CategoryName?: CategoryUpdateOneWithoutNameNestedInput
    Question?: QuestionUpdateOneWithoutTextNestedInput
    Answer?: AnswerUpdateOneWithoutTextNestedInput
    questionHint?: QuestionUpdateOneWithoutHintNestedInput
  }

  export type TextUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    languageId?: StringFieldUpdateOperationsInput | string
    courseDescriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    courseNameId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryNameId?: NullableStringFieldUpdateOperationsInput | string | null
    questionId?: NullableStringFieldUpdateOperationsInput | string | null
    answerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questionHintId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TextCreateManyInput = {
    id?: string
    value: string
    languageId: string
    courseDescriptionId?: string | null
    courseNameId?: string | null
    categoryNameId?: string | null
    questionId?: string | null
    answerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    questionHintId?: string | null
  }

  export type TextUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TextUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    languageId?: StringFieldUpdateOperationsInput | string
    courseDescriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    courseNameId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryNameId?: NullableStringFieldUpdateOperationsInput | string | null
    questionId?: NullableStringFieldUpdateOperationsInput | string | null
    answerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questionHintId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LanguageCreateInput = {
    id?: string
    name: string
    code: string
    isActive?: boolean
    isRTL: boolean
    strings?: TextCreateNestedManyWithoutLanguageInput
  }

  export type LanguageUncheckedCreateInput = {
    id?: string
    name: string
    code: string
    isActive?: boolean
    isRTL: boolean
    strings?: TextUncheckedCreateNestedManyWithoutLanguageInput
  }

  export type LanguageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isRTL?: BoolFieldUpdateOperationsInput | boolean
    strings?: TextUpdateManyWithoutLanguageNestedInput
  }

  export type LanguageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isRTL?: BoolFieldUpdateOperationsInput | boolean
    strings?: TextUncheckedUpdateManyWithoutLanguageNestedInput
  }

  export type LanguageCreateManyInput = {
    id?: string
    name: string
    code: string
    isActive?: boolean
    isRTL: boolean
  }

  export type LanguageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isRTL?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LanguageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isRTL?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AdminCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingsCreateInput = {
    id?: string
    userAvailability?: number
    testTime?: number
    questionsPerTest?: number
  }

  export type SettingsUncheckedCreateInput = {
    id?: string
    userAvailability?: number
    testTime?: number
    questionsPerTest?: number
  }

  export type SettingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userAvailability?: IntFieldUpdateOperationsInput | number
    testTime?: IntFieldUpdateOperationsInput | number
    questionsPerTest?: IntFieldUpdateOperationsInput | number
  }

  export type SettingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userAvailability?: IntFieldUpdateOperationsInput | number
    testTime?: IntFieldUpdateOperationsInput | number
    questionsPerTest?: IntFieldUpdateOperationsInput | number
  }

  export type SettingsCreateManyInput = {
    id?: string
    userAvailability?: number
    testTime?: number
    questionsPerTest?: number
  }

  export type SettingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userAvailability?: IntFieldUpdateOperationsInput | number
    testTime?: IntFieldUpdateOperationsInput | number
    questionsPerTest?: IntFieldUpdateOperationsInput | number
  }

  export type SettingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userAvailability?: IntFieldUpdateOperationsInput | number
    testTime?: IntFieldUpdateOperationsInput | number
    questionsPerTest?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CourseListRelationFilter = {
    every?: CourseWhereInput
    some?: CourseWhereInput
    none?: CourseWhereInput
  }

  export type UserAttemptListRelationFilter = {
    every?: UserAttemptWhereInput
    some?: UserAttemptWhereInput
    none?: UserAttemptWhereInput
  }

  export type CourseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserAttemptOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    personnr?: SortOrder
    tel?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    expiryDate?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    personnr?: SortOrder
    tel?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    expiryDate?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    personnr?: SortOrder
    tel?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    expiryDate?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type TextListRelationFilter = {
    every?: TextWhereInput
    some?: TextWhereInput
    none?: TextWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type QuestionListRelationFilter = {
    every?: QuestionWhereInput
    some?: QuestionWhereInput
    none?: QuestionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TextOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseCountOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    isActive?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    isActive?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    isActive?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type CourseRelationFilter = {
    is?: CourseWhereInput
    isNot?: CourseWhereInput
  }

  export type AnswerListRelationFilter = {
    every?: AnswerWhereInput
    some?: AnswerWhereInput
    none?: AnswerWhereInput
  }

  export type QuestionMediaListRelationFilter = {
    every?: QuestionMediaWhereInput
    some?: QuestionMediaWhereInput
    none?: QuestionMediaWhereInput
  }

  export type AttemptQuestionListRelationFilter = {
    every?: AttemptQuestionWhereInput
    some?: AttemptQuestionWhereInput
    none?: AttemptQuestionWhereInput
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnswerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionMediaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AttemptQuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MediaNullableRelationFilter = {
    is?: MediaWhereInput | null
    isNot?: MediaWhereInput | null
  }

  export type QuestionRelationFilter = {
    is?: QuestionWhereInput
    isNot?: QuestionWhereInput
  }

  export type AnsweredQuestionListRelationFilter = {
    every?: AnsweredQuestionWhereInput
    some?: AnsweredQuestionWhereInput
    none?: AnsweredQuestionWhereInput
  }

  export type AnsweredQuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnswerCountOrderByAggregateInput = {
    id?: SortOrder
    mediaId?: SortOrder
    isActive?: SortOrder
    questionId?: SortOrder
    isCorrect?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnswerMaxOrderByAggregateInput = {
    id?: SortOrder
    mediaId?: SortOrder
    isActive?: SortOrder
    questionId?: SortOrder
    isCorrect?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnswerMinOrderByAggregateInput = {
    id?: SortOrder
    mediaId?: SortOrder
    isActive?: SortOrder
    questionId?: SortOrder
    isCorrect?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type MediaRelationFilter = {
    is?: MediaWhereInput
    isNot?: MediaWhereInput
  }

  export type QuestionMediaCountOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    mediaId?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionMediaAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type QuestionMediaMaxOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    mediaId?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionMediaMinOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    mediaId?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionMediaSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type MediaCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MediaMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MediaMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CourseNullableRelationFilter = {
    is?: CourseWhereInput | null
    isNot?: CourseWhereInput | null
  }

  export type UserAttemptCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    result?: SortOrder
    courseId?: SortOrder
    isTimed?: SortOrder
    isInstantResult?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    currentQuestionIndex?: SortOrder
    endTime?: SortOrder
  }

  export type UserAttemptAvgOrderByAggregateInput = {
    result?: SortOrder
    currentQuestionIndex?: SortOrder
  }

  export type UserAttemptMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    result?: SortOrder
    courseId?: SortOrder
    isTimed?: SortOrder
    isInstantResult?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    currentQuestionIndex?: SortOrder
    endTime?: SortOrder
  }

  export type UserAttemptMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    result?: SortOrder
    courseId?: SortOrder
    isTimed?: SortOrder
    isInstantResult?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    currentQuestionIndex?: SortOrder
    endTime?: SortOrder
  }

  export type UserAttemptSumOrderByAggregateInput = {
    result?: SortOrder
    currentQuestionIndex?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserAttemptRelationFilter = {
    is?: UserAttemptWhereInput
    isNot?: UserAttemptWhereInput
  }

  export type AttemptQuestionCountOrderByAggregateInput = {
    id?: SortOrder
    userAttemptId?: SortOrder
    questionId?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isMarked?: SortOrder
    isAnswered?: SortOrder
  }

  export type AttemptQuestionAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type AttemptQuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    userAttemptId?: SortOrder
    questionId?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isMarked?: SortOrder
    isAnswered?: SortOrder
  }

  export type AttemptQuestionMinOrderByAggregateInput = {
    id?: SortOrder
    userAttemptId?: SortOrder
    questionId?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isMarked?: SortOrder
    isAnswered?: SortOrder
  }

  export type AttemptQuestionSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type AnswerRelationFilter = {
    is?: AnswerWhereInput
    isNot?: AnswerWhereInput
  }

  export type AnsweredQuestionCountOrderByAggregateInput = {
    id?: SortOrder
    userAttemptId?: SortOrder
    answerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnsweredQuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    userAttemptId?: SortOrder
    answerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnsweredQuestionMinOrderByAggregateInput = {
    id?: SortOrder
    userAttemptId?: SortOrder
    answerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LanguageRelationFilter = {
    is?: LanguageWhereInput
    isNot?: LanguageWhereInput
  }

  export type CategoryNullableRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
  }

  export type QuestionNullableRelationFilter = {
    is?: QuestionWhereInput | null
    isNot?: QuestionWhereInput | null
  }

  export type AnswerNullableRelationFilter = {
    is?: AnswerWhereInput | null
    isNot?: AnswerWhereInput | null
  }

  export type TextCountOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    languageId?: SortOrder
    courseDescriptionId?: SortOrder
    courseNameId?: SortOrder
    categoryNameId?: SortOrder
    questionId?: SortOrder
    answerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    questionHintId?: SortOrder
  }

  export type TextMaxOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    languageId?: SortOrder
    courseDescriptionId?: SortOrder
    courseNameId?: SortOrder
    categoryNameId?: SortOrder
    questionId?: SortOrder
    answerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    questionHintId?: SortOrder
  }

  export type TextMinOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    languageId?: SortOrder
    courseDescriptionId?: SortOrder
    courseNameId?: SortOrder
    categoryNameId?: SortOrder
    questionId?: SortOrder
    answerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    questionHintId?: SortOrder
  }

  export type LanguageCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    isActive?: SortOrder
    isRTL?: SortOrder
  }

  export type LanguageMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    isActive?: SortOrder
    isRTL?: SortOrder
  }

  export type LanguageMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    isActive?: SortOrder
    isRTL?: SortOrder
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SettingsCountOrderByAggregateInput = {
    id?: SortOrder
    userAvailability?: SortOrder
    testTime?: SortOrder
    questionsPerTest?: SortOrder
  }

  export type SettingsAvgOrderByAggregateInput = {
    userAvailability?: SortOrder
    testTime?: SortOrder
    questionsPerTest?: SortOrder
  }

  export type SettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    userAvailability?: SortOrder
    testTime?: SortOrder
    questionsPerTest?: SortOrder
  }

  export type SettingsMinOrderByAggregateInput = {
    id?: SortOrder
    userAvailability?: SortOrder
    testTime?: SortOrder
    questionsPerTest?: SortOrder
  }

  export type SettingsSumOrderByAggregateInput = {
    userAvailability?: SortOrder
    testTime?: SortOrder
    questionsPerTest?: SortOrder
  }

  export type CourseCreateNestedManyWithoutUsersInput = {
    create?: XOR<CourseCreateWithoutUsersInput, CourseUncheckedCreateWithoutUsersInput> | CourseCreateWithoutUsersInput[] | CourseUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutUsersInput | CourseCreateOrConnectWithoutUsersInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type UserAttemptCreateNestedManyWithoutUserInput = {
    create?: XOR<UserAttemptCreateWithoutUserInput, UserAttemptUncheckedCreateWithoutUserInput> | UserAttemptCreateWithoutUserInput[] | UserAttemptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAttemptCreateOrConnectWithoutUserInput | UserAttemptCreateOrConnectWithoutUserInput[]
    createMany?: UserAttemptCreateManyUserInputEnvelope
    connect?: UserAttemptWhereUniqueInput | UserAttemptWhereUniqueInput[]
  }

  export type CourseUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<CourseCreateWithoutUsersInput, CourseUncheckedCreateWithoutUsersInput> | CourseCreateWithoutUsersInput[] | CourseUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutUsersInput | CourseCreateOrConnectWithoutUsersInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type UserAttemptUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserAttemptCreateWithoutUserInput, UserAttemptUncheckedCreateWithoutUserInput> | UserAttemptCreateWithoutUserInput[] | UserAttemptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAttemptCreateOrConnectWithoutUserInput | UserAttemptCreateOrConnectWithoutUserInput[]
    createMany?: UserAttemptCreateManyUserInputEnvelope
    connect?: UserAttemptWhereUniqueInput | UserAttemptWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CourseUpdateManyWithoutUsersNestedInput = {
    create?: XOR<CourseCreateWithoutUsersInput, CourseUncheckedCreateWithoutUsersInput> | CourseCreateWithoutUsersInput[] | CourseUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutUsersInput | CourseCreateOrConnectWithoutUsersInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutUsersInput | CourseUpsertWithWhereUniqueWithoutUsersInput[]
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutUsersInput | CourseUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutUsersInput | CourseUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type UserAttemptUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserAttemptCreateWithoutUserInput, UserAttemptUncheckedCreateWithoutUserInput> | UserAttemptCreateWithoutUserInput[] | UserAttemptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAttemptCreateOrConnectWithoutUserInput | UserAttemptCreateOrConnectWithoutUserInput[]
    upsert?: UserAttemptUpsertWithWhereUniqueWithoutUserInput | UserAttemptUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserAttemptCreateManyUserInputEnvelope
    set?: UserAttemptWhereUniqueInput | UserAttemptWhereUniqueInput[]
    disconnect?: UserAttemptWhereUniqueInput | UserAttemptWhereUniqueInput[]
    delete?: UserAttemptWhereUniqueInput | UserAttemptWhereUniqueInput[]
    connect?: UserAttemptWhereUniqueInput | UserAttemptWhereUniqueInput[]
    update?: UserAttemptUpdateWithWhereUniqueWithoutUserInput | UserAttemptUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserAttemptUpdateManyWithWhereWithoutUserInput | UserAttemptUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserAttemptScalarWhereInput | UserAttemptScalarWhereInput[]
  }

  export type CourseUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<CourseCreateWithoutUsersInput, CourseUncheckedCreateWithoutUsersInput> | CourseCreateWithoutUsersInput[] | CourseUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutUsersInput | CourseCreateOrConnectWithoutUsersInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutUsersInput | CourseUpsertWithWhereUniqueWithoutUsersInput[]
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutUsersInput | CourseUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutUsersInput | CourseUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type UserAttemptUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserAttemptCreateWithoutUserInput, UserAttemptUncheckedCreateWithoutUserInput> | UserAttemptCreateWithoutUserInput[] | UserAttemptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAttemptCreateOrConnectWithoutUserInput | UserAttemptCreateOrConnectWithoutUserInput[]
    upsert?: UserAttemptUpsertWithWhereUniqueWithoutUserInput | UserAttemptUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserAttemptCreateManyUserInputEnvelope
    set?: UserAttemptWhereUniqueInput | UserAttemptWhereUniqueInput[]
    disconnect?: UserAttemptWhereUniqueInput | UserAttemptWhereUniqueInput[]
    delete?: UserAttemptWhereUniqueInput | UserAttemptWhereUniqueInput[]
    connect?: UserAttemptWhereUniqueInput | UserAttemptWhereUniqueInput[]
    update?: UserAttemptUpdateWithWhereUniqueWithoutUserInput | UserAttemptUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserAttemptUpdateManyWithWhereWithoutUserInput | UserAttemptUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserAttemptScalarWhereInput | UserAttemptScalarWhereInput[]
  }

  export type TextCreateNestedManyWithoutCourseNameInput = {
    create?: XOR<TextCreateWithoutCourseNameInput, TextUncheckedCreateWithoutCourseNameInput> | TextCreateWithoutCourseNameInput[] | TextUncheckedCreateWithoutCourseNameInput[]
    connectOrCreate?: TextCreateOrConnectWithoutCourseNameInput | TextCreateOrConnectWithoutCourseNameInput[]
    createMany?: TextCreateManyCourseNameInputEnvelope
    connect?: TextWhereUniqueInput | TextWhereUniqueInput[]
  }

  export type TextCreateNestedManyWithoutCourseDescriptionInput = {
    create?: XOR<TextCreateWithoutCourseDescriptionInput, TextUncheckedCreateWithoutCourseDescriptionInput> | TextCreateWithoutCourseDescriptionInput[] | TextUncheckedCreateWithoutCourseDescriptionInput[]
    connectOrCreate?: TextCreateOrConnectWithoutCourseDescriptionInput | TextCreateOrConnectWithoutCourseDescriptionInput[]
    createMany?: TextCreateManyCourseDescriptionInputEnvelope
    connect?: TextWhereUniqueInput | TextWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutCoursesInput = {
    create?: XOR<UserCreateWithoutCoursesInput, UserUncheckedCreateWithoutCoursesInput> | UserCreateWithoutCoursesInput[] | UserUncheckedCreateWithoutCoursesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCoursesInput | UserCreateOrConnectWithoutCoursesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type QuestionCreateNestedManyWithoutCourseInput = {
    create?: XOR<QuestionCreateWithoutCourseInput, QuestionUncheckedCreateWithoutCourseInput> | QuestionCreateWithoutCourseInput[] | QuestionUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutCourseInput | QuestionCreateOrConnectWithoutCourseInput[]
    createMany?: QuestionCreateManyCourseInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type UserAttemptCreateNestedManyWithoutCourseInput = {
    create?: XOR<UserAttemptCreateWithoutCourseInput, UserAttemptUncheckedCreateWithoutCourseInput> | UserAttemptCreateWithoutCourseInput[] | UserAttemptUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: UserAttemptCreateOrConnectWithoutCourseInput | UserAttemptCreateOrConnectWithoutCourseInput[]
    createMany?: UserAttemptCreateManyCourseInputEnvelope
    connect?: UserAttemptWhereUniqueInput | UserAttemptWhereUniqueInput[]
  }

  export type TextUncheckedCreateNestedManyWithoutCourseNameInput = {
    create?: XOR<TextCreateWithoutCourseNameInput, TextUncheckedCreateWithoutCourseNameInput> | TextCreateWithoutCourseNameInput[] | TextUncheckedCreateWithoutCourseNameInput[]
    connectOrCreate?: TextCreateOrConnectWithoutCourseNameInput | TextCreateOrConnectWithoutCourseNameInput[]
    createMany?: TextCreateManyCourseNameInputEnvelope
    connect?: TextWhereUniqueInput | TextWhereUniqueInput[]
  }

  export type TextUncheckedCreateNestedManyWithoutCourseDescriptionInput = {
    create?: XOR<TextCreateWithoutCourseDescriptionInput, TextUncheckedCreateWithoutCourseDescriptionInput> | TextCreateWithoutCourseDescriptionInput[] | TextUncheckedCreateWithoutCourseDescriptionInput[]
    connectOrCreate?: TextCreateOrConnectWithoutCourseDescriptionInput | TextCreateOrConnectWithoutCourseDescriptionInput[]
    createMany?: TextCreateManyCourseDescriptionInputEnvelope
    connect?: TextWhereUniqueInput | TextWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutCoursesInput = {
    create?: XOR<UserCreateWithoutCoursesInput, UserUncheckedCreateWithoutCoursesInput> | UserCreateWithoutCoursesInput[] | UserUncheckedCreateWithoutCoursesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCoursesInput | UserCreateOrConnectWithoutCoursesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type QuestionUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<QuestionCreateWithoutCourseInput, QuestionUncheckedCreateWithoutCourseInput> | QuestionCreateWithoutCourseInput[] | QuestionUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutCourseInput | QuestionCreateOrConnectWithoutCourseInput[]
    createMany?: QuestionCreateManyCourseInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type UserAttemptUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<UserAttemptCreateWithoutCourseInput, UserAttemptUncheckedCreateWithoutCourseInput> | UserAttemptCreateWithoutCourseInput[] | UserAttemptUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: UserAttemptCreateOrConnectWithoutCourseInput | UserAttemptCreateOrConnectWithoutCourseInput[]
    createMany?: UserAttemptCreateManyCourseInputEnvelope
    connect?: UserAttemptWhereUniqueInput | UserAttemptWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type TextUpdateManyWithoutCourseNameNestedInput = {
    create?: XOR<TextCreateWithoutCourseNameInput, TextUncheckedCreateWithoutCourseNameInput> | TextCreateWithoutCourseNameInput[] | TextUncheckedCreateWithoutCourseNameInput[]
    connectOrCreate?: TextCreateOrConnectWithoutCourseNameInput | TextCreateOrConnectWithoutCourseNameInput[]
    upsert?: TextUpsertWithWhereUniqueWithoutCourseNameInput | TextUpsertWithWhereUniqueWithoutCourseNameInput[]
    createMany?: TextCreateManyCourseNameInputEnvelope
    set?: TextWhereUniqueInput | TextWhereUniqueInput[]
    disconnect?: TextWhereUniqueInput | TextWhereUniqueInput[]
    delete?: TextWhereUniqueInput | TextWhereUniqueInput[]
    connect?: TextWhereUniqueInput | TextWhereUniqueInput[]
    update?: TextUpdateWithWhereUniqueWithoutCourseNameInput | TextUpdateWithWhereUniqueWithoutCourseNameInput[]
    updateMany?: TextUpdateManyWithWhereWithoutCourseNameInput | TextUpdateManyWithWhereWithoutCourseNameInput[]
    deleteMany?: TextScalarWhereInput | TextScalarWhereInput[]
  }

  export type TextUpdateManyWithoutCourseDescriptionNestedInput = {
    create?: XOR<TextCreateWithoutCourseDescriptionInput, TextUncheckedCreateWithoutCourseDescriptionInput> | TextCreateWithoutCourseDescriptionInput[] | TextUncheckedCreateWithoutCourseDescriptionInput[]
    connectOrCreate?: TextCreateOrConnectWithoutCourseDescriptionInput | TextCreateOrConnectWithoutCourseDescriptionInput[]
    upsert?: TextUpsertWithWhereUniqueWithoutCourseDescriptionInput | TextUpsertWithWhereUniqueWithoutCourseDescriptionInput[]
    createMany?: TextCreateManyCourseDescriptionInputEnvelope
    set?: TextWhereUniqueInput | TextWhereUniqueInput[]
    disconnect?: TextWhereUniqueInput | TextWhereUniqueInput[]
    delete?: TextWhereUniqueInput | TextWhereUniqueInput[]
    connect?: TextWhereUniqueInput | TextWhereUniqueInput[]
    update?: TextUpdateWithWhereUniqueWithoutCourseDescriptionInput | TextUpdateWithWhereUniqueWithoutCourseDescriptionInput[]
    updateMany?: TextUpdateManyWithWhereWithoutCourseDescriptionInput | TextUpdateManyWithWhereWithoutCourseDescriptionInput[]
    deleteMany?: TextScalarWhereInput | TextScalarWhereInput[]
  }

  export type UserUpdateManyWithoutCoursesNestedInput = {
    create?: XOR<UserCreateWithoutCoursesInput, UserUncheckedCreateWithoutCoursesInput> | UserCreateWithoutCoursesInput[] | UserUncheckedCreateWithoutCoursesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCoursesInput | UserCreateOrConnectWithoutCoursesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCoursesInput | UserUpsertWithWhereUniqueWithoutCoursesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCoursesInput | UserUpdateWithWhereUniqueWithoutCoursesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCoursesInput | UserUpdateManyWithWhereWithoutCoursesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type QuestionUpdateManyWithoutCourseNestedInput = {
    create?: XOR<QuestionCreateWithoutCourseInput, QuestionUncheckedCreateWithoutCourseInput> | QuestionCreateWithoutCourseInput[] | QuestionUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutCourseInput | QuestionCreateOrConnectWithoutCourseInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutCourseInput | QuestionUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: QuestionCreateManyCourseInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutCourseInput | QuestionUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutCourseInput | QuestionUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type UserAttemptUpdateManyWithoutCourseNestedInput = {
    create?: XOR<UserAttemptCreateWithoutCourseInput, UserAttemptUncheckedCreateWithoutCourseInput> | UserAttemptCreateWithoutCourseInput[] | UserAttemptUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: UserAttemptCreateOrConnectWithoutCourseInput | UserAttemptCreateOrConnectWithoutCourseInput[]
    upsert?: UserAttemptUpsertWithWhereUniqueWithoutCourseInput | UserAttemptUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: UserAttemptCreateManyCourseInputEnvelope
    set?: UserAttemptWhereUniqueInput | UserAttemptWhereUniqueInput[]
    disconnect?: UserAttemptWhereUniqueInput | UserAttemptWhereUniqueInput[]
    delete?: UserAttemptWhereUniqueInput | UserAttemptWhereUniqueInput[]
    connect?: UserAttemptWhereUniqueInput | UserAttemptWhereUniqueInput[]
    update?: UserAttemptUpdateWithWhereUniqueWithoutCourseInput | UserAttemptUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: UserAttemptUpdateManyWithWhereWithoutCourseInput | UserAttemptUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: UserAttemptScalarWhereInput | UserAttemptScalarWhereInput[]
  }

  export type TextUncheckedUpdateManyWithoutCourseNameNestedInput = {
    create?: XOR<TextCreateWithoutCourseNameInput, TextUncheckedCreateWithoutCourseNameInput> | TextCreateWithoutCourseNameInput[] | TextUncheckedCreateWithoutCourseNameInput[]
    connectOrCreate?: TextCreateOrConnectWithoutCourseNameInput | TextCreateOrConnectWithoutCourseNameInput[]
    upsert?: TextUpsertWithWhereUniqueWithoutCourseNameInput | TextUpsertWithWhereUniqueWithoutCourseNameInput[]
    createMany?: TextCreateManyCourseNameInputEnvelope
    set?: TextWhereUniqueInput | TextWhereUniqueInput[]
    disconnect?: TextWhereUniqueInput | TextWhereUniqueInput[]
    delete?: TextWhereUniqueInput | TextWhereUniqueInput[]
    connect?: TextWhereUniqueInput | TextWhereUniqueInput[]
    update?: TextUpdateWithWhereUniqueWithoutCourseNameInput | TextUpdateWithWhereUniqueWithoutCourseNameInput[]
    updateMany?: TextUpdateManyWithWhereWithoutCourseNameInput | TextUpdateManyWithWhereWithoutCourseNameInput[]
    deleteMany?: TextScalarWhereInput | TextScalarWhereInput[]
  }

  export type TextUncheckedUpdateManyWithoutCourseDescriptionNestedInput = {
    create?: XOR<TextCreateWithoutCourseDescriptionInput, TextUncheckedCreateWithoutCourseDescriptionInput> | TextCreateWithoutCourseDescriptionInput[] | TextUncheckedCreateWithoutCourseDescriptionInput[]
    connectOrCreate?: TextCreateOrConnectWithoutCourseDescriptionInput | TextCreateOrConnectWithoutCourseDescriptionInput[]
    upsert?: TextUpsertWithWhereUniqueWithoutCourseDescriptionInput | TextUpsertWithWhereUniqueWithoutCourseDescriptionInput[]
    createMany?: TextCreateManyCourseDescriptionInputEnvelope
    set?: TextWhereUniqueInput | TextWhereUniqueInput[]
    disconnect?: TextWhereUniqueInput | TextWhereUniqueInput[]
    delete?: TextWhereUniqueInput | TextWhereUniqueInput[]
    connect?: TextWhereUniqueInput | TextWhereUniqueInput[]
    update?: TextUpdateWithWhereUniqueWithoutCourseDescriptionInput | TextUpdateWithWhereUniqueWithoutCourseDescriptionInput[]
    updateMany?: TextUpdateManyWithWhereWithoutCourseDescriptionInput | TextUpdateManyWithWhereWithoutCourseDescriptionInput[]
    deleteMany?: TextScalarWhereInput | TextScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutCoursesNestedInput = {
    create?: XOR<UserCreateWithoutCoursesInput, UserUncheckedCreateWithoutCoursesInput> | UserCreateWithoutCoursesInput[] | UserUncheckedCreateWithoutCoursesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCoursesInput | UserCreateOrConnectWithoutCoursesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCoursesInput | UserUpsertWithWhereUniqueWithoutCoursesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCoursesInput | UserUpdateWithWhereUniqueWithoutCoursesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCoursesInput | UserUpdateManyWithWhereWithoutCoursesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type QuestionUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<QuestionCreateWithoutCourseInput, QuestionUncheckedCreateWithoutCourseInput> | QuestionCreateWithoutCourseInput[] | QuestionUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutCourseInput | QuestionCreateOrConnectWithoutCourseInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutCourseInput | QuestionUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: QuestionCreateManyCourseInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutCourseInput | QuestionUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutCourseInput | QuestionUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type UserAttemptUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<UserAttemptCreateWithoutCourseInput, UserAttemptUncheckedCreateWithoutCourseInput> | UserAttemptCreateWithoutCourseInput[] | UserAttemptUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: UserAttemptCreateOrConnectWithoutCourseInput | UserAttemptCreateOrConnectWithoutCourseInput[]
    upsert?: UserAttemptUpsertWithWhereUniqueWithoutCourseInput | UserAttemptUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: UserAttemptCreateManyCourseInputEnvelope
    set?: UserAttemptWhereUniqueInput | UserAttemptWhereUniqueInput[]
    disconnect?: UserAttemptWhereUniqueInput | UserAttemptWhereUniqueInput[]
    delete?: UserAttemptWhereUniqueInput | UserAttemptWhereUniqueInput[]
    connect?: UserAttemptWhereUniqueInput | UserAttemptWhereUniqueInput[]
    update?: UserAttemptUpdateWithWhereUniqueWithoutCourseInput | UserAttemptUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: UserAttemptUpdateManyWithWhereWithoutCourseInput | UserAttemptUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: UserAttemptScalarWhereInput | UserAttemptScalarWhereInput[]
  }

  export type QuestionCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<QuestionCreateWithoutCategoriesInput, QuestionUncheckedCreateWithoutCategoriesInput> | QuestionCreateWithoutCategoriesInput[] | QuestionUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutCategoriesInput | QuestionCreateOrConnectWithoutCategoriesInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type TextCreateNestedManyWithoutCategoryNameInput = {
    create?: XOR<TextCreateWithoutCategoryNameInput, TextUncheckedCreateWithoutCategoryNameInput> | TextCreateWithoutCategoryNameInput[] | TextUncheckedCreateWithoutCategoryNameInput[]
    connectOrCreate?: TextCreateOrConnectWithoutCategoryNameInput | TextCreateOrConnectWithoutCategoryNameInput[]
    createMany?: TextCreateManyCategoryNameInputEnvelope
    connect?: TextWhereUniqueInput | TextWhereUniqueInput[]
  }

  export type UserAttemptCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<UserAttemptCreateWithoutCategoriesInput, UserAttemptUncheckedCreateWithoutCategoriesInput> | UserAttemptCreateWithoutCategoriesInput[] | UserAttemptUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: UserAttemptCreateOrConnectWithoutCategoriesInput | UserAttemptCreateOrConnectWithoutCategoriesInput[]
    connect?: UserAttemptWhereUniqueInput | UserAttemptWhereUniqueInput[]
  }

  export type QuestionUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<QuestionCreateWithoutCategoriesInput, QuestionUncheckedCreateWithoutCategoriesInput> | QuestionCreateWithoutCategoriesInput[] | QuestionUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutCategoriesInput | QuestionCreateOrConnectWithoutCategoriesInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type TextUncheckedCreateNestedManyWithoutCategoryNameInput = {
    create?: XOR<TextCreateWithoutCategoryNameInput, TextUncheckedCreateWithoutCategoryNameInput> | TextCreateWithoutCategoryNameInput[] | TextUncheckedCreateWithoutCategoryNameInput[]
    connectOrCreate?: TextCreateOrConnectWithoutCategoryNameInput | TextCreateOrConnectWithoutCategoryNameInput[]
    createMany?: TextCreateManyCategoryNameInputEnvelope
    connect?: TextWhereUniqueInput | TextWhereUniqueInput[]
  }

  export type UserAttemptUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<UserAttemptCreateWithoutCategoriesInput, UserAttemptUncheckedCreateWithoutCategoriesInput> | UserAttemptCreateWithoutCategoriesInput[] | UserAttemptUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: UserAttemptCreateOrConnectWithoutCategoriesInput | UserAttemptCreateOrConnectWithoutCategoriesInput[]
    connect?: UserAttemptWhereUniqueInput | UserAttemptWhereUniqueInput[]
  }

  export type QuestionUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<QuestionCreateWithoutCategoriesInput, QuestionUncheckedCreateWithoutCategoriesInput> | QuestionCreateWithoutCategoriesInput[] | QuestionUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutCategoriesInput | QuestionCreateOrConnectWithoutCategoriesInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutCategoriesInput | QuestionUpsertWithWhereUniqueWithoutCategoriesInput[]
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutCategoriesInput | QuestionUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutCategoriesInput | QuestionUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type TextUpdateManyWithoutCategoryNameNestedInput = {
    create?: XOR<TextCreateWithoutCategoryNameInput, TextUncheckedCreateWithoutCategoryNameInput> | TextCreateWithoutCategoryNameInput[] | TextUncheckedCreateWithoutCategoryNameInput[]
    connectOrCreate?: TextCreateOrConnectWithoutCategoryNameInput | TextCreateOrConnectWithoutCategoryNameInput[]
    upsert?: TextUpsertWithWhereUniqueWithoutCategoryNameInput | TextUpsertWithWhereUniqueWithoutCategoryNameInput[]
    createMany?: TextCreateManyCategoryNameInputEnvelope
    set?: TextWhereUniqueInput | TextWhereUniqueInput[]
    disconnect?: TextWhereUniqueInput | TextWhereUniqueInput[]
    delete?: TextWhereUniqueInput | TextWhereUniqueInput[]
    connect?: TextWhereUniqueInput | TextWhereUniqueInput[]
    update?: TextUpdateWithWhereUniqueWithoutCategoryNameInput | TextUpdateWithWhereUniqueWithoutCategoryNameInput[]
    updateMany?: TextUpdateManyWithWhereWithoutCategoryNameInput | TextUpdateManyWithWhereWithoutCategoryNameInput[]
    deleteMany?: TextScalarWhereInput | TextScalarWhereInput[]
  }

  export type UserAttemptUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<UserAttemptCreateWithoutCategoriesInput, UserAttemptUncheckedCreateWithoutCategoriesInput> | UserAttemptCreateWithoutCategoriesInput[] | UserAttemptUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: UserAttemptCreateOrConnectWithoutCategoriesInput | UserAttemptCreateOrConnectWithoutCategoriesInput[]
    upsert?: UserAttemptUpsertWithWhereUniqueWithoutCategoriesInput | UserAttemptUpsertWithWhereUniqueWithoutCategoriesInput[]
    set?: UserAttemptWhereUniqueInput | UserAttemptWhereUniqueInput[]
    disconnect?: UserAttemptWhereUniqueInput | UserAttemptWhereUniqueInput[]
    delete?: UserAttemptWhereUniqueInput | UserAttemptWhereUniqueInput[]
    connect?: UserAttemptWhereUniqueInput | UserAttemptWhereUniqueInput[]
    update?: UserAttemptUpdateWithWhereUniqueWithoutCategoriesInput | UserAttemptUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: UserAttemptUpdateManyWithWhereWithoutCategoriesInput | UserAttemptUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: UserAttemptScalarWhereInput | UserAttemptScalarWhereInput[]
  }

  export type QuestionUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<QuestionCreateWithoutCategoriesInput, QuestionUncheckedCreateWithoutCategoriesInput> | QuestionCreateWithoutCategoriesInput[] | QuestionUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutCategoriesInput | QuestionCreateOrConnectWithoutCategoriesInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutCategoriesInput | QuestionUpsertWithWhereUniqueWithoutCategoriesInput[]
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutCategoriesInput | QuestionUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutCategoriesInput | QuestionUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type TextUncheckedUpdateManyWithoutCategoryNameNestedInput = {
    create?: XOR<TextCreateWithoutCategoryNameInput, TextUncheckedCreateWithoutCategoryNameInput> | TextCreateWithoutCategoryNameInput[] | TextUncheckedCreateWithoutCategoryNameInput[]
    connectOrCreate?: TextCreateOrConnectWithoutCategoryNameInput | TextCreateOrConnectWithoutCategoryNameInput[]
    upsert?: TextUpsertWithWhereUniqueWithoutCategoryNameInput | TextUpsertWithWhereUniqueWithoutCategoryNameInput[]
    createMany?: TextCreateManyCategoryNameInputEnvelope
    set?: TextWhereUniqueInput | TextWhereUniqueInput[]
    disconnect?: TextWhereUniqueInput | TextWhereUniqueInput[]
    delete?: TextWhereUniqueInput | TextWhereUniqueInput[]
    connect?: TextWhereUniqueInput | TextWhereUniqueInput[]
    update?: TextUpdateWithWhereUniqueWithoutCategoryNameInput | TextUpdateWithWhereUniqueWithoutCategoryNameInput[]
    updateMany?: TextUpdateManyWithWhereWithoutCategoryNameInput | TextUpdateManyWithWhereWithoutCategoryNameInput[]
    deleteMany?: TextScalarWhereInput | TextScalarWhereInput[]
  }

  export type UserAttemptUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<UserAttemptCreateWithoutCategoriesInput, UserAttemptUncheckedCreateWithoutCategoriesInput> | UserAttemptCreateWithoutCategoriesInput[] | UserAttemptUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: UserAttemptCreateOrConnectWithoutCategoriesInput | UserAttemptCreateOrConnectWithoutCategoriesInput[]
    upsert?: UserAttemptUpsertWithWhereUniqueWithoutCategoriesInput | UserAttemptUpsertWithWhereUniqueWithoutCategoriesInput[]
    set?: UserAttemptWhereUniqueInput | UserAttemptWhereUniqueInput[]
    disconnect?: UserAttemptWhereUniqueInput | UserAttemptWhereUniqueInput[]
    delete?: UserAttemptWhereUniqueInput | UserAttemptWhereUniqueInput[]
    connect?: UserAttemptWhereUniqueInput | UserAttemptWhereUniqueInput[]
    update?: UserAttemptUpdateWithWhereUniqueWithoutCategoriesInput | UserAttemptUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: UserAttemptUpdateManyWithWhereWithoutCategoriesInput | UserAttemptUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: UserAttemptScalarWhereInput | UserAttemptScalarWhereInput[]
  }

  export type TextCreateNestedManyWithoutQuestionInput = {
    create?: XOR<TextCreateWithoutQuestionInput, TextUncheckedCreateWithoutQuestionInput> | TextCreateWithoutQuestionInput[] | TextUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: TextCreateOrConnectWithoutQuestionInput | TextCreateOrConnectWithoutQuestionInput[]
    createMany?: TextCreateManyQuestionInputEnvelope
    connect?: TextWhereUniqueInput | TextWhereUniqueInput[]
  }

  export type CategoryCreateNestedManyWithoutQuestionsInput = {
    create?: XOR<CategoryCreateWithoutQuestionsInput, CategoryUncheckedCreateWithoutQuestionsInput> | CategoryCreateWithoutQuestionsInput[] | CategoryUncheckedCreateWithoutQuestionsInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutQuestionsInput | CategoryCreateOrConnectWithoutQuestionsInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type CourseCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<CourseCreateWithoutQuestionsInput, CourseUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutQuestionsInput
    connect?: CourseWhereUniqueInput
  }

  export type AnswerCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type QuestionMediaCreateNestedManyWithoutQuestionInput = {
    create?: XOR<QuestionMediaCreateWithoutQuestionInput, QuestionMediaUncheckedCreateWithoutQuestionInput> | QuestionMediaCreateWithoutQuestionInput[] | QuestionMediaUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuestionMediaCreateOrConnectWithoutQuestionInput | QuestionMediaCreateOrConnectWithoutQuestionInput[]
    createMany?: QuestionMediaCreateManyQuestionInputEnvelope
    connect?: QuestionMediaWhereUniqueInput | QuestionMediaWhereUniqueInput[]
  }

  export type AttemptQuestionCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AttemptQuestionCreateWithoutQuestionInput, AttemptQuestionUncheckedCreateWithoutQuestionInput> | AttemptQuestionCreateWithoutQuestionInput[] | AttemptQuestionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AttemptQuestionCreateOrConnectWithoutQuestionInput | AttemptQuestionCreateOrConnectWithoutQuestionInput[]
    createMany?: AttemptQuestionCreateManyQuestionInputEnvelope
    connect?: AttemptQuestionWhereUniqueInput | AttemptQuestionWhereUniqueInput[]
  }

  export type TextCreateNestedManyWithoutQuestionHintInput = {
    create?: XOR<TextCreateWithoutQuestionHintInput, TextUncheckedCreateWithoutQuestionHintInput> | TextCreateWithoutQuestionHintInput[] | TextUncheckedCreateWithoutQuestionHintInput[]
    connectOrCreate?: TextCreateOrConnectWithoutQuestionHintInput | TextCreateOrConnectWithoutQuestionHintInput[]
    createMany?: TextCreateManyQuestionHintInputEnvelope
    connect?: TextWhereUniqueInput | TextWhereUniqueInput[]
  }

  export type TextUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<TextCreateWithoutQuestionInput, TextUncheckedCreateWithoutQuestionInput> | TextCreateWithoutQuestionInput[] | TextUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: TextCreateOrConnectWithoutQuestionInput | TextCreateOrConnectWithoutQuestionInput[]
    createMany?: TextCreateManyQuestionInputEnvelope
    connect?: TextWhereUniqueInput | TextWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutQuestionsInput = {
    create?: XOR<CategoryCreateWithoutQuestionsInput, CategoryUncheckedCreateWithoutQuestionsInput> | CategoryCreateWithoutQuestionsInput[] | CategoryUncheckedCreateWithoutQuestionsInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutQuestionsInput | CategoryCreateOrConnectWithoutQuestionsInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type AnswerUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type QuestionMediaUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<QuestionMediaCreateWithoutQuestionInput, QuestionMediaUncheckedCreateWithoutQuestionInput> | QuestionMediaCreateWithoutQuestionInput[] | QuestionMediaUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuestionMediaCreateOrConnectWithoutQuestionInput | QuestionMediaCreateOrConnectWithoutQuestionInput[]
    createMany?: QuestionMediaCreateManyQuestionInputEnvelope
    connect?: QuestionMediaWhereUniqueInput | QuestionMediaWhereUniqueInput[]
  }

  export type AttemptQuestionUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AttemptQuestionCreateWithoutQuestionInput, AttemptQuestionUncheckedCreateWithoutQuestionInput> | AttemptQuestionCreateWithoutQuestionInput[] | AttemptQuestionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AttemptQuestionCreateOrConnectWithoutQuestionInput | AttemptQuestionCreateOrConnectWithoutQuestionInput[]
    createMany?: AttemptQuestionCreateManyQuestionInputEnvelope
    connect?: AttemptQuestionWhereUniqueInput | AttemptQuestionWhereUniqueInput[]
  }

  export type TextUncheckedCreateNestedManyWithoutQuestionHintInput = {
    create?: XOR<TextCreateWithoutQuestionHintInput, TextUncheckedCreateWithoutQuestionHintInput> | TextCreateWithoutQuestionHintInput[] | TextUncheckedCreateWithoutQuestionHintInput[]
    connectOrCreate?: TextCreateOrConnectWithoutQuestionHintInput | TextCreateOrConnectWithoutQuestionHintInput[]
    createMany?: TextCreateManyQuestionHintInputEnvelope
    connect?: TextWhereUniqueInput | TextWhereUniqueInput[]
  }

  export type TextUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<TextCreateWithoutQuestionInput, TextUncheckedCreateWithoutQuestionInput> | TextCreateWithoutQuestionInput[] | TextUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: TextCreateOrConnectWithoutQuestionInput | TextCreateOrConnectWithoutQuestionInput[]
    upsert?: TextUpsertWithWhereUniqueWithoutQuestionInput | TextUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: TextCreateManyQuestionInputEnvelope
    set?: TextWhereUniqueInput | TextWhereUniqueInput[]
    disconnect?: TextWhereUniqueInput | TextWhereUniqueInput[]
    delete?: TextWhereUniqueInput | TextWhereUniqueInput[]
    connect?: TextWhereUniqueInput | TextWhereUniqueInput[]
    update?: TextUpdateWithWhereUniqueWithoutQuestionInput | TextUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: TextUpdateManyWithWhereWithoutQuestionInput | TextUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: TextScalarWhereInput | TextScalarWhereInput[]
  }

  export type CategoryUpdateManyWithoutQuestionsNestedInput = {
    create?: XOR<CategoryCreateWithoutQuestionsInput, CategoryUncheckedCreateWithoutQuestionsInput> | CategoryCreateWithoutQuestionsInput[] | CategoryUncheckedCreateWithoutQuestionsInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutQuestionsInput | CategoryCreateOrConnectWithoutQuestionsInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutQuestionsInput | CategoryUpsertWithWhereUniqueWithoutQuestionsInput[]
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutQuestionsInput | CategoryUpdateWithWhereUniqueWithoutQuestionsInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutQuestionsInput | CategoryUpdateManyWithWhereWithoutQuestionsInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type CourseUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<CourseCreateWithoutQuestionsInput, CourseUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutQuestionsInput
    upsert?: CourseUpsertWithoutQuestionsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutQuestionsInput, CourseUpdateWithoutQuestionsInput>, CourseUncheckedUpdateWithoutQuestionsInput>
  }

  export type AnswerUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutQuestionInput | AnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutQuestionInput | AnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutQuestionInput | AnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type QuestionMediaUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<QuestionMediaCreateWithoutQuestionInput, QuestionMediaUncheckedCreateWithoutQuestionInput> | QuestionMediaCreateWithoutQuestionInput[] | QuestionMediaUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuestionMediaCreateOrConnectWithoutQuestionInput | QuestionMediaCreateOrConnectWithoutQuestionInput[]
    upsert?: QuestionMediaUpsertWithWhereUniqueWithoutQuestionInput | QuestionMediaUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: QuestionMediaCreateManyQuestionInputEnvelope
    set?: QuestionMediaWhereUniqueInput | QuestionMediaWhereUniqueInput[]
    disconnect?: QuestionMediaWhereUniqueInput | QuestionMediaWhereUniqueInput[]
    delete?: QuestionMediaWhereUniqueInput | QuestionMediaWhereUniqueInput[]
    connect?: QuestionMediaWhereUniqueInput | QuestionMediaWhereUniqueInput[]
    update?: QuestionMediaUpdateWithWhereUniqueWithoutQuestionInput | QuestionMediaUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: QuestionMediaUpdateManyWithWhereWithoutQuestionInput | QuestionMediaUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: QuestionMediaScalarWhereInput | QuestionMediaScalarWhereInput[]
  }

  export type AttemptQuestionUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AttemptQuestionCreateWithoutQuestionInput, AttemptQuestionUncheckedCreateWithoutQuestionInput> | AttemptQuestionCreateWithoutQuestionInput[] | AttemptQuestionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AttemptQuestionCreateOrConnectWithoutQuestionInput | AttemptQuestionCreateOrConnectWithoutQuestionInput[]
    upsert?: AttemptQuestionUpsertWithWhereUniqueWithoutQuestionInput | AttemptQuestionUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AttemptQuestionCreateManyQuestionInputEnvelope
    set?: AttemptQuestionWhereUniqueInput | AttemptQuestionWhereUniqueInput[]
    disconnect?: AttemptQuestionWhereUniqueInput | AttemptQuestionWhereUniqueInput[]
    delete?: AttemptQuestionWhereUniqueInput | AttemptQuestionWhereUniqueInput[]
    connect?: AttemptQuestionWhereUniqueInput | AttemptQuestionWhereUniqueInput[]
    update?: AttemptQuestionUpdateWithWhereUniqueWithoutQuestionInput | AttemptQuestionUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AttemptQuestionUpdateManyWithWhereWithoutQuestionInput | AttemptQuestionUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AttemptQuestionScalarWhereInput | AttemptQuestionScalarWhereInput[]
  }

  export type TextUpdateManyWithoutQuestionHintNestedInput = {
    create?: XOR<TextCreateWithoutQuestionHintInput, TextUncheckedCreateWithoutQuestionHintInput> | TextCreateWithoutQuestionHintInput[] | TextUncheckedCreateWithoutQuestionHintInput[]
    connectOrCreate?: TextCreateOrConnectWithoutQuestionHintInput | TextCreateOrConnectWithoutQuestionHintInput[]
    upsert?: TextUpsertWithWhereUniqueWithoutQuestionHintInput | TextUpsertWithWhereUniqueWithoutQuestionHintInput[]
    createMany?: TextCreateManyQuestionHintInputEnvelope
    set?: TextWhereUniqueInput | TextWhereUniqueInput[]
    disconnect?: TextWhereUniqueInput | TextWhereUniqueInput[]
    delete?: TextWhereUniqueInput | TextWhereUniqueInput[]
    connect?: TextWhereUniqueInput | TextWhereUniqueInput[]
    update?: TextUpdateWithWhereUniqueWithoutQuestionHintInput | TextUpdateWithWhereUniqueWithoutQuestionHintInput[]
    updateMany?: TextUpdateManyWithWhereWithoutQuestionHintInput | TextUpdateManyWithWhereWithoutQuestionHintInput[]
    deleteMany?: TextScalarWhereInput | TextScalarWhereInput[]
  }

  export type TextUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<TextCreateWithoutQuestionInput, TextUncheckedCreateWithoutQuestionInput> | TextCreateWithoutQuestionInput[] | TextUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: TextCreateOrConnectWithoutQuestionInput | TextCreateOrConnectWithoutQuestionInput[]
    upsert?: TextUpsertWithWhereUniqueWithoutQuestionInput | TextUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: TextCreateManyQuestionInputEnvelope
    set?: TextWhereUniqueInput | TextWhereUniqueInput[]
    disconnect?: TextWhereUniqueInput | TextWhereUniqueInput[]
    delete?: TextWhereUniqueInput | TextWhereUniqueInput[]
    connect?: TextWhereUniqueInput | TextWhereUniqueInput[]
    update?: TextUpdateWithWhereUniqueWithoutQuestionInput | TextUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: TextUpdateManyWithWhereWithoutQuestionInput | TextUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: TextScalarWhereInput | TextScalarWhereInput[]
  }

  export type CategoryUncheckedUpdateManyWithoutQuestionsNestedInput = {
    create?: XOR<CategoryCreateWithoutQuestionsInput, CategoryUncheckedCreateWithoutQuestionsInput> | CategoryCreateWithoutQuestionsInput[] | CategoryUncheckedCreateWithoutQuestionsInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutQuestionsInput | CategoryCreateOrConnectWithoutQuestionsInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutQuestionsInput | CategoryUpsertWithWhereUniqueWithoutQuestionsInput[]
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutQuestionsInput | CategoryUpdateWithWhereUniqueWithoutQuestionsInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutQuestionsInput | CategoryUpdateManyWithWhereWithoutQuestionsInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type AnswerUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutQuestionInput | AnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutQuestionInput | AnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutQuestionInput | AnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type QuestionMediaUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<QuestionMediaCreateWithoutQuestionInput, QuestionMediaUncheckedCreateWithoutQuestionInput> | QuestionMediaCreateWithoutQuestionInput[] | QuestionMediaUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuestionMediaCreateOrConnectWithoutQuestionInput | QuestionMediaCreateOrConnectWithoutQuestionInput[]
    upsert?: QuestionMediaUpsertWithWhereUniqueWithoutQuestionInput | QuestionMediaUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: QuestionMediaCreateManyQuestionInputEnvelope
    set?: QuestionMediaWhereUniqueInput | QuestionMediaWhereUniqueInput[]
    disconnect?: QuestionMediaWhereUniqueInput | QuestionMediaWhereUniqueInput[]
    delete?: QuestionMediaWhereUniqueInput | QuestionMediaWhereUniqueInput[]
    connect?: QuestionMediaWhereUniqueInput | QuestionMediaWhereUniqueInput[]
    update?: QuestionMediaUpdateWithWhereUniqueWithoutQuestionInput | QuestionMediaUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: QuestionMediaUpdateManyWithWhereWithoutQuestionInput | QuestionMediaUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: QuestionMediaScalarWhereInput | QuestionMediaScalarWhereInput[]
  }

  export type AttemptQuestionUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AttemptQuestionCreateWithoutQuestionInput, AttemptQuestionUncheckedCreateWithoutQuestionInput> | AttemptQuestionCreateWithoutQuestionInput[] | AttemptQuestionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AttemptQuestionCreateOrConnectWithoutQuestionInput | AttemptQuestionCreateOrConnectWithoutQuestionInput[]
    upsert?: AttemptQuestionUpsertWithWhereUniqueWithoutQuestionInput | AttemptQuestionUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AttemptQuestionCreateManyQuestionInputEnvelope
    set?: AttemptQuestionWhereUniqueInput | AttemptQuestionWhereUniqueInput[]
    disconnect?: AttemptQuestionWhereUniqueInput | AttemptQuestionWhereUniqueInput[]
    delete?: AttemptQuestionWhereUniqueInput | AttemptQuestionWhereUniqueInput[]
    connect?: AttemptQuestionWhereUniqueInput | AttemptQuestionWhereUniqueInput[]
    update?: AttemptQuestionUpdateWithWhereUniqueWithoutQuestionInput | AttemptQuestionUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AttemptQuestionUpdateManyWithWhereWithoutQuestionInput | AttemptQuestionUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AttemptQuestionScalarWhereInput | AttemptQuestionScalarWhereInput[]
  }

  export type TextUncheckedUpdateManyWithoutQuestionHintNestedInput = {
    create?: XOR<TextCreateWithoutQuestionHintInput, TextUncheckedCreateWithoutQuestionHintInput> | TextCreateWithoutQuestionHintInput[] | TextUncheckedCreateWithoutQuestionHintInput[]
    connectOrCreate?: TextCreateOrConnectWithoutQuestionHintInput | TextCreateOrConnectWithoutQuestionHintInput[]
    upsert?: TextUpsertWithWhereUniqueWithoutQuestionHintInput | TextUpsertWithWhereUniqueWithoutQuestionHintInput[]
    createMany?: TextCreateManyQuestionHintInputEnvelope
    set?: TextWhereUniqueInput | TextWhereUniqueInput[]
    disconnect?: TextWhereUniqueInput | TextWhereUniqueInput[]
    delete?: TextWhereUniqueInput | TextWhereUniqueInput[]
    connect?: TextWhereUniqueInput | TextWhereUniqueInput[]
    update?: TextUpdateWithWhereUniqueWithoutQuestionHintInput | TextUpdateWithWhereUniqueWithoutQuestionHintInput[]
    updateMany?: TextUpdateManyWithWhereWithoutQuestionHintInput | TextUpdateManyWithWhereWithoutQuestionHintInput[]
    deleteMany?: TextScalarWhereInput | TextScalarWhereInput[]
  }

  export type TextCreateNestedManyWithoutAnswerInput = {
    create?: XOR<TextCreateWithoutAnswerInput, TextUncheckedCreateWithoutAnswerInput> | TextCreateWithoutAnswerInput[] | TextUncheckedCreateWithoutAnswerInput[]
    connectOrCreate?: TextCreateOrConnectWithoutAnswerInput | TextCreateOrConnectWithoutAnswerInput[]
    createMany?: TextCreateManyAnswerInputEnvelope
    connect?: TextWhereUniqueInput | TextWhereUniqueInput[]
  }

  export type MediaCreateNestedOneWithoutAnswerInput = {
    create?: XOR<MediaCreateWithoutAnswerInput, MediaUncheckedCreateWithoutAnswerInput>
    connectOrCreate?: MediaCreateOrConnectWithoutAnswerInput
    connect?: MediaWhereUniqueInput
  }

  export type QuestionCreateNestedOneWithoutAnswersInput = {
    create?: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswersInput
    connect?: QuestionWhereUniqueInput
  }

  export type AnsweredQuestionCreateNestedManyWithoutAnswerInput = {
    create?: XOR<AnsweredQuestionCreateWithoutAnswerInput, AnsweredQuestionUncheckedCreateWithoutAnswerInput> | AnsweredQuestionCreateWithoutAnswerInput[] | AnsweredQuestionUncheckedCreateWithoutAnswerInput[]
    connectOrCreate?: AnsweredQuestionCreateOrConnectWithoutAnswerInput | AnsweredQuestionCreateOrConnectWithoutAnswerInput[]
    createMany?: AnsweredQuestionCreateManyAnswerInputEnvelope
    connect?: AnsweredQuestionWhereUniqueInput | AnsweredQuestionWhereUniqueInput[]
  }

  export type TextUncheckedCreateNestedManyWithoutAnswerInput = {
    create?: XOR<TextCreateWithoutAnswerInput, TextUncheckedCreateWithoutAnswerInput> | TextCreateWithoutAnswerInput[] | TextUncheckedCreateWithoutAnswerInput[]
    connectOrCreate?: TextCreateOrConnectWithoutAnswerInput | TextCreateOrConnectWithoutAnswerInput[]
    createMany?: TextCreateManyAnswerInputEnvelope
    connect?: TextWhereUniqueInput | TextWhereUniqueInput[]
  }

  export type AnsweredQuestionUncheckedCreateNestedManyWithoutAnswerInput = {
    create?: XOR<AnsweredQuestionCreateWithoutAnswerInput, AnsweredQuestionUncheckedCreateWithoutAnswerInput> | AnsweredQuestionCreateWithoutAnswerInput[] | AnsweredQuestionUncheckedCreateWithoutAnswerInput[]
    connectOrCreate?: AnsweredQuestionCreateOrConnectWithoutAnswerInput | AnsweredQuestionCreateOrConnectWithoutAnswerInput[]
    createMany?: AnsweredQuestionCreateManyAnswerInputEnvelope
    connect?: AnsweredQuestionWhereUniqueInput | AnsweredQuestionWhereUniqueInput[]
  }

  export type TextUpdateManyWithoutAnswerNestedInput = {
    create?: XOR<TextCreateWithoutAnswerInput, TextUncheckedCreateWithoutAnswerInput> | TextCreateWithoutAnswerInput[] | TextUncheckedCreateWithoutAnswerInput[]
    connectOrCreate?: TextCreateOrConnectWithoutAnswerInput | TextCreateOrConnectWithoutAnswerInput[]
    upsert?: TextUpsertWithWhereUniqueWithoutAnswerInput | TextUpsertWithWhereUniqueWithoutAnswerInput[]
    createMany?: TextCreateManyAnswerInputEnvelope
    set?: TextWhereUniqueInput | TextWhereUniqueInput[]
    disconnect?: TextWhereUniqueInput | TextWhereUniqueInput[]
    delete?: TextWhereUniqueInput | TextWhereUniqueInput[]
    connect?: TextWhereUniqueInput | TextWhereUniqueInput[]
    update?: TextUpdateWithWhereUniqueWithoutAnswerInput | TextUpdateWithWhereUniqueWithoutAnswerInput[]
    updateMany?: TextUpdateManyWithWhereWithoutAnswerInput | TextUpdateManyWithWhereWithoutAnswerInput[]
    deleteMany?: TextScalarWhereInput | TextScalarWhereInput[]
  }

  export type MediaUpdateOneWithoutAnswerNestedInput = {
    create?: XOR<MediaCreateWithoutAnswerInput, MediaUncheckedCreateWithoutAnswerInput>
    connectOrCreate?: MediaCreateOrConnectWithoutAnswerInput
    upsert?: MediaUpsertWithoutAnswerInput
    disconnect?: MediaWhereInput | boolean
    delete?: MediaWhereInput | boolean
    connect?: MediaWhereUniqueInput
    update?: XOR<XOR<MediaUpdateToOneWithWhereWithoutAnswerInput, MediaUpdateWithoutAnswerInput>, MediaUncheckedUpdateWithoutAnswerInput>
  }

  export type QuestionUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswersInput
    upsert?: QuestionUpsertWithoutAnswersInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutAnswersInput, QuestionUpdateWithoutAnswersInput>, QuestionUncheckedUpdateWithoutAnswersInput>
  }

  export type AnsweredQuestionUpdateManyWithoutAnswerNestedInput = {
    create?: XOR<AnsweredQuestionCreateWithoutAnswerInput, AnsweredQuestionUncheckedCreateWithoutAnswerInput> | AnsweredQuestionCreateWithoutAnswerInput[] | AnsweredQuestionUncheckedCreateWithoutAnswerInput[]
    connectOrCreate?: AnsweredQuestionCreateOrConnectWithoutAnswerInput | AnsweredQuestionCreateOrConnectWithoutAnswerInput[]
    upsert?: AnsweredQuestionUpsertWithWhereUniqueWithoutAnswerInput | AnsweredQuestionUpsertWithWhereUniqueWithoutAnswerInput[]
    createMany?: AnsweredQuestionCreateManyAnswerInputEnvelope
    set?: AnsweredQuestionWhereUniqueInput | AnsweredQuestionWhereUniqueInput[]
    disconnect?: AnsweredQuestionWhereUniqueInput | AnsweredQuestionWhereUniqueInput[]
    delete?: AnsweredQuestionWhereUniqueInput | AnsweredQuestionWhereUniqueInput[]
    connect?: AnsweredQuestionWhereUniqueInput | AnsweredQuestionWhereUniqueInput[]
    update?: AnsweredQuestionUpdateWithWhereUniqueWithoutAnswerInput | AnsweredQuestionUpdateWithWhereUniqueWithoutAnswerInput[]
    updateMany?: AnsweredQuestionUpdateManyWithWhereWithoutAnswerInput | AnsweredQuestionUpdateManyWithWhereWithoutAnswerInput[]
    deleteMany?: AnsweredQuestionScalarWhereInput | AnsweredQuestionScalarWhereInput[]
  }

  export type TextUncheckedUpdateManyWithoutAnswerNestedInput = {
    create?: XOR<TextCreateWithoutAnswerInput, TextUncheckedCreateWithoutAnswerInput> | TextCreateWithoutAnswerInput[] | TextUncheckedCreateWithoutAnswerInput[]
    connectOrCreate?: TextCreateOrConnectWithoutAnswerInput | TextCreateOrConnectWithoutAnswerInput[]
    upsert?: TextUpsertWithWhereUniqueWithoutAnswerInput | TextUpsertWithWhereUniqueWithoutAnswerInput[]
    createMany?: TextCreateManyAnswerInputEnvelope
    set?: TextWhereUniqueInput | TextWhereUniqueInput[]
    disconnect?: TextWhereUniqueInput | TextWhereUniqueInput[]
    delete?: TextWhereUniqueInput | TextWhereUniqueInput[]
    connect?: TextWhereUniqueInput | TextWhereUniqueInput[]
    update?: TextUpdateWithWhereUniqueWithoutAnswerInput | TextUpdateWithWhereUniqueWithoutAnswerInput[]
    updateMany?: TextUpdateManyWithWhereWithoutAnswerInput | TextUpdateManyWithWhereWithoutAnswerInput[]
    deleteMany?: TextScalarWhereInput | TextScalarWhereInput[]
  }

  export type AnsweredQuestionUncheckedUpdateManyWithoutAnswerNestedInput = {
    create?: XOR<AnsweredQuestionCreateWithoutAnswerInput, AnsweredQuestionUncheckedCreateWithoutAnswerInput> | AnsweredQuestionCreateWithoutAnswerInput[] | AnsweredQuestionUncheckedCreateWithoutAnswerInput[]
    connectOrCreate?: AnsweredQuestionCreateOrConnectWithoutAnswerInput | AnsweredQuestionCreateOrConnectWithoutAnswerInput[]
    upsert?: AnsweredQuestionUpsertWithWhereUniqueWithoutAnswerInput | AnsweredQuestionUpsertWithWhereUniqueWithoutAnswerInput[]
    createMany?: AnsweredQuestionCreateManyAnswerInputEnvelope
    set?: AnsweredQuestionWhereUniqueInput | AnsweredQuestionWhereUniqueInput[]
    disconnect?: AnsweredQuestionWhereUniqueInput | AnsweredQuestionWhereUniqueInput[]
    delete?: AnsweredQuestionWhereUniqueInput | AnsweredQuestionWhereUniqueInput[]
    connect?: AnsweredQuestionWhereUniqueInput | AnsweredQuestionWhereUniqueInput[]
    update?: AnsweredQuestionUpdateWithWhereUniqueWithoutAnswerInput | AnsweredQuestionUpdateWithWhereUniqueWithoutAnswerInput[]
    updateMany?: AnsweredQuestionUpdateManyWithWhereWithoutAnswerInput | AnsweredQuestionUpdateManyWithWhereWithoutAnswerInput[]
    deleteMany?: AnsweredQuestionScalarWhereInput | AnsweredQuestionScalarWhereInput[]
  }

  export type QuestionCreateNestedOneWithoutQuestionMediaInput = {
    create?: XOR<QuestionCreateWithoutQuestionMediaInput, QuestionUncheckedCreateWithoutQuestionMediaInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutQuestionMediaInput
    connect?: QuestionWhereUniqueInput
  }

  export type MediaCreateNestedOneWithoutQuestionMediaInput = {
    create?: XOR<MediaCreateWithoutQuestionMediaInput, MediaUncheckedCreateWithoutQuestionMediaInput>
    connectOrCreate?: MediaCreateOrConnectWithoutQuestionMediaInput
    connect?: MediaWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type QuestionUpdateOneRequiredWithoutQuestionMediaNestedInput = {
    create?: XOR<QuestionCreateWithoutQuestionMediaInput, QuestionUncheckedCreateWithoutQuestionMediaInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutQuestionMediaInput
    upsert?: QuestionUpsertWithoutQuestionMediaInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutQuestionMediaInput, QuestionUpdateWithoutQuestionMediaInput>, QuestionUncheckedUpdateWithoutQuestionMediaInput>
  }

  export type MediaUpdateOneRequiredWithoutQuestionMediaNestedInput = {
    create?: XOR<MediaCreateWithoutQuestionMediaInput, MediaUncheckedCreateWithoutQuestionMediaInput>
    connectOrCreate?: MediaCreateOrConnectWithoutQuestionMediaInput
    upsert?: MediaUpsertWithoutQuestionMediaInput
    connect?: MediaWhereUniqueInput
    update?: XOR<XOR<MediaUpdateToOneWithWhereWithoutQuestionMediaInput, MediaUpdateWithoutQuestionMediaInput>, MediaUncheckedUpdateWithoutQuestionMediaInput>
  }

  export type QuestionMediaCreateNestedManyWithoutMediaInput = {
    create?: XOR<QuestionMediaCreateWithoutMediaInput, QuestionMediaUncheckedCreateWithoutMediaInput> | QuestionMediaCreateWithoutMediaInput[] | QuestionMediaUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: QuestionMediaCreateOrConnectWithoutMediaInput | QuestionMediaCreateOrConnectWithoutMediaInput[]
    createMany?: QuestionMediaCreateManyMediaInputEnvelope
    connect?: QuestionMediaWhereUniqueInput | QuestionMediaWhereUniqueInput[]
  }

  export type AnswerCreateNestedManyWithoutMediaInput = {
    create?: XOR<AnswerCreateWithoutMediaInput, AnswerUncheckedCreateWithoutMediaInput> | AnswerCreateWithoutMediaInput[] | AnswerUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutMediaInput | AnswerCreateOrConnectWithoutMediaInput[]
    createMany?: AnswerCreateManyMediaInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type QuestionMediaUncheckedCreateNestedManyWithoutMediaInput = {
    create?: XOR<QuestionMediaCreateWithoutMediaInput, QuestionMediaUncheckedCreateWithoutMediaInput> | QuestionMediaCreateWithoutMediaInput[] | QuestionMediaUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: QuestionMediaCreateOrConnectWithoutMediaInput | QuestionMediaCreateOrConnectWithoutMediaInput[]
    createMany?: QuestionMediaCreateManyMediaInputEnvelope
    connect?: QuestionMediaWhereUniqueInput | QuestionMediaWhereUniqueInput[]
  }

  export type AnswerUncheckedCreateNestedManyWithoutMediaInput = {
    create?: XOR<AnswerCreateWithoutMediaInput, AnswerUncheckedCreateWithoutMediaInput> | AnswerCreateWithoutMediaInput[] | AnswerUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutMediaInput | AnswerCreateOrConnectWithoutMediaInput[]
    createMany?: AnswerCreateManyMediaInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type QuestionMediaUpdateManyWithoutMediaNestedInput = {
    create?: XOR<QuestionMediaCreateWithoutMediaInput, QuestionMediaUncheckedCreateWithoutMediaInput> | QuestionMediaCreateWithoutMediaInput[] | QuestionMediaUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: QuestionMediaCreateOrConnectWithoutMediaInput | QuestionMediaCreateOrConnectWithoutMediaInput[]
    upsert?: QuestionMediaUpsertWithWhereUniqueWithoutMediaInput | QuestionMediaUpsertWithWhereUniqueWithoutMediaInput[]
    createMany?: QuestionMediaCreateManyMediaInputEnvelope
    set?: QuestionMediaWhereUniqueInput | QuestionMediaWhereUniqueInput[]
    disconnect?: QuestionMediaWhereUniqueInput | QuestionMediaWhereUniqueInput[]
    delete?: QuestionMediaWhereUniqueInput | QuestionMediaWhereUniqueInput[]
    connect?: QuestionMediaWhereUniqueInput | QuestionMediaWhereUniqueInput[]
    update?: QuestionMediaUpdateWithWhereUniqueWithoutMediaInput | QuestionMediaUpdateWithWhereUniqueWithoutMediaInput[]
    updateMany?: QuestionMediaUpdateManyWithWhereWithoutMediaInput | QuestionMediaUpdateManyWithWhereWithoutMediaInput[]
    deleteMany?: QuestionMediaScalarWhereInput | QuestionMediaScalarWhereInput[]
  }

  export type AnswerUpdateManyWithoutMediaNestedInput = {
    create?: XOR<AnswerCreateWithoutMediaInput, AnswerUncheckedCreateWithoutMediaInput> | AnswerCreateWithoutMediaInput[] | AnswerUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutMediaInput | AnswerCreateOrConnectWithoutMediaInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutMediaInput | AnswerUpsertWithWhereUniqueWithoutMediaInput[]
    createMany?: AnswerCreateManyMediaInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutMediaInput | AnswerUpdateWithWhereUniqueWithoutMediaInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutMediaInput | AnswerUpdateManyWithWhereWithoutMediaInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type QuestionMediaUncheckedUpdateManyWithoutMediaNestedInput = {
    create?: XOR<QuestionMediaCreateWithoutMediaInput, QuestionMediaUncheckedCreateWithoutMediaInput> | QuestionMediaCreateWithoutMediaInput[] | QuestionMediaUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: QuestionMediaCreateOrConnectWithoutMediaInput | QuestionMediaCreateOrConnectWithoutMediaInput[]
    upsert?: QuestionMediaUpsertWithWhereUniqueWithoutMediaInput | QuestionMediaUpsertWithWhereUniqueWithoutMediaInput[]
    createMany?: QuestionMediaCreateManyMediaInputEnvelope
    set?: QuestionMediaWhereUniqueInput | QuestionMediaWhereUniqueInput[]
    disconnect?: QuestionMediaWhereUniqueInput | QuestionMediaWhereUniqueInput[]
    delete?: QuestionMediaWhereUniqueInput | QuestionMediaWhereUniqueInput[]
    connect?: QuestionMediaWhereUniqueInput | QuestionMediaWhereUniqueInput[]
    update?: QuestionMediaUpdateWithWhereUniqueWithoutMediaInput | QuestionMediaUpdateWithWhereUniqueWithoutMediaInput[]
    updateMany?: QuestionMediaUpdateManyWithWhereWithoutMediaInput | QuestionMediaUpdateManyWithWhereWithoutMediaInput[]
    deleteMany?: QuestionMediaScalarWhereInput | QuestionMediaScalarWhereInput[]
  }

  export type AnswerUncheckedUpdateManyWithoutMediaNestedInput = {
    create?: XOR<AnswerCreateWithoutMediaInput, AnswerUncheckedCreateWithoutMediaInput> | AnswerCreateWithoutMediaInput[] | AnswerUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutMediaInput | AnswerCreateOrConnectWithoutMediaInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutMediaInput | AnswerUpsertWithWhereUniqueWithoutMediaInput[]
    createMany?: AnswerCreateManyMediaInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutMediaInput | AnswerUpdateWithWhereUniqueWithoutMediaInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutMediaInput | AnswerUpdateManyWithWhereWithoutMediaInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserAttemptsInput = {
    create?: XOR<UserCreateWithoutUserAttemptsInput, UserUncheckedCreateWithoutUserAttemptsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserAttemptsInput
    connect?: UserWhereUniqueInput
  }

  export type CourseCreateNestedOneWithoutUserAttemptInput = {
    create?: XOR<CourseCreateWithoutUserAttemptInput, CourseUncheckedCreateWithoutUserAttemptInput>
    connectOrCreate?: CourseCreateOrConnectWithoutUserAttemptInput
    connect?: CourseWhereUniqueInput
  }

  export type AnsweredQuestionCreateNestedManyWithoutUserAttemptInput = {
    create?: XOR<AnsweredQuestionCreateWithoutUserAttemptInput, AnsweredQuestionUncheckedCreateWithoutUserAttemptInput> | AnsweredQuestionCreateWithoutUserAttemptInput[] | AnsweredQuestionUncheckedCreateWithoutUserAttemptInput[]
    connectOrCreate?: AnsweredQuestionCreateOrConnectWithoutUserAttemptInput | AnsweredQuestionCreateOrConnectWithoutUserAttemptInput[]
    createMany?: AnsweredQuestionCreateManyUserAttemptInputEnvelope
    connect?: AnsweredQuestionWhereUniqueInput | AnsweredQuestionWhereUniqueInput[]
  }

  export type CategoryCreateNestedManyWithoutUserAttemptInput = {
    create?: XOR<CategoryCreateWithoutUserAttemptInput, CategoryUncheckedCreateWithoutUserAttemptInput> | CategoryCreateWithoutUserAttemptInput[] | CategoryUncheckedCreateWithoutUserAttemptInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutUserAttemptInput | CategoryCreateOrConnectWithoutUserAttemptInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type AttemptQuestionCreateNestedManyWithoutUserAttemptInput = {
    create?: XOR<AttemptQuestionCreateWithoutUserAttemptInput, AttemptQuestionUncheckedCreateWithoutUserAttemptInput> | AttemptQuestionCreateWithoutUserAttemptInput[] | AttemptQuestionUncheckedCreateWithoutUserAttemptInput[]
    connectOrCreate?: AttemptQuestionCreateOrConnectWithoutUserAttemptInput | AttemptQuestionCreateOrConnectWithoutUserAttemptInput[]
    createMany?: AttemptQuestionCreateManyUserAttemptInputEnvelope
    connect?: AttemptQuestionWhereUniqueInput | AttemptQuestionWhereUniqueInput[]
  }

  export type AnsweredQuestionUncheckedCreateNestedManyWithoutUserAttemptInput = {
    create?: XOR<AnsweredQuestionCreateWithoutUserAttemptInput, AnsweredQuestionUncheckedCreateWithoutUserAttemptInput> | AnsweredQuestionCreateWithoutUserAttemptInput[] | AnsweredQuestionUncheckedCreateWithoutUserAttemptInput[]
    connectOrCreate?: AnsweredQuestionCreateOrConnectWithoutUserAttemptInput | AnsweredQuestionCreateOrConnectWithoutUserAttemptInput[]
    createMany?: AnsweredQuestionCreateManyUserAttemptInputEnvelope
    connect?: AnsweredQuestionWhereUniqueInput | AnsweredQuestionWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutUserAttemptInput = {
    create?: XOR<CategoryCreateWithoutUserAttemptInput, CategoryUncheckedCreateWithoutUserAttemptInput> | CategoryCreateWithoutUserAttemptInput[] | CategoryUncheckedCreateWithoutUserAttemptInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutUserAttemptInput | CategoryCreateOrConnectWithoutUserAttemptInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type AttemptQuestionUncheckedCreateNestedManyWithoutUserAttemptInput = {
    create?: XOR<AttemptQuestionCreateWithoutUserAttemptInput, AttemptQuestionUncheckedCreateWithoutUserAttemptInput> | AttemptQuestionCreateWithoutUserAttemptInput[] | AttemptQuestionUncheckedCreateWithoutUserAttemptInput[]
    connectOrCreate?: AttemptQuestionCreateOrConnectWithoutUserAttemptInput | AttemptQuestionCreateOrConnectWithoutUserAttemptInput[]
    createMany?: AttemptQuestionCreateManyUserAttemptInputEnvelope
    connect?: AttemptQuestionWhereUniqueInput | AttemptQuestionWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutUserAttemptsNestedInput = {
    create?: XOR<UserCreateWithoutUserAttemptsInput, UserUncheckedCreateWithoutUserAttemptsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserAttemptsInput
    upsert?: UserUpsertWithoutUserAttemptsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserAttemptsInput, UserUpdateWithoutUserAttemptsInput>, UserUncheckedUpdateWithoutUserAttemptsInput>
  }

  export type CourseUpdateOneWithoutUserAttemptNestedInput = {
    create?: XOR<CourseCreateWithoutUserAttemptInput, CourseUncheckedCreateWithoutUserAttemptInput>
    connectOrCreate?: CourseCreateOrConnectWithoutUserAttemptInput
    upsert?: CourseUpsertWithoutUserAttemptInput
    disconnect?: CourseWhereInput | boolean
    delete?: CourseWhereInput | boolean
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutUserAttemptInput, CourseUpdateWithoutUserAttemptInput>, CourseUncheckedUpdateWithoutUserAttemptInput>
  }

  export type AnsweredQuestionUpdateManyWithoutUserAttemptNestedInput = {
    create?: XOR<AnsweredQuestionCreateWithoutUserAttemptInput, AnsweredQuestionUncheckedCreateWithoutUserAttemptInput> | AnsweredQuestionCreateWithoutUserAttemptInput[] | AnsweredQuestionUncheckedCreateWithoutUserAttemptInput[]
    connectOrCreate?: AnsweredQuestionCreateOrConnectWithoutUserAttemptInput | AnsweredQuestionCreateOrConnectWithoutUserAttemptInput[]
    upsert?: AnsweredQuestionUpsertWithWhereUniqueWithoutUserAttemptInput | AnsweredQuestionUpsertWithWhereUniqueWithoutUserAttemptInput[]
    createMany?: AnsweredQuestionCreateManyUserAttemptInputEnvelope
    set?: AnsweredQuestionWhereUniqueInput | AnsweredQuestionWhereUniqueInput[]
    disconnect?: AnsweredQuestionWhereUniqueInput | AnsweredQuestionWhereUniqueInput[]
    delete?: AnsweredQuestionWhereUniqueInput | AnsweredQuestionWhereUniqueInput[]
    connect?: AnsweredQuestionWhereUniqueInput | AnsweredQuestionWhereUniqueInput[]
    update?: AnsweredQuestionUpdateWithWhereUniqueWithoutUserAttemptInput | AnsweredQuestionUpdateWithWhereUniqueWithoutUserAttemptInput[]
    updateMany?: AnsweredQuestionUpdateManyWithWhereWithoutUserAttemptInput | AnsweredQuestionUpdateManyWithWhereWithoutUserAttemptInput[]
    deleteMany?: AnsweredQuestionScalarWhereInput | AnsweredQuestionScalarWhereInput[]
  }

  export type CategoryUpdateManyWithoutUserAttemptNestedInput = {
    create?: XOR<CategoryCreateWithoutUserAttemptInput, CategoryUncheckedCreateWithoutUserAttemptInput> | CategoryCreateWithoutUserAttemptInput[] | CategoryUncheckedCreateWithoutUserAttemptInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutUserAttemptInput | CategoryCreateOrConnectWithoutUserAttemptInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutUserAttemptInput | CategoryUpsertWithWhereUniqueWithoutUserAttemptInput[]
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutUserAttemptInput | CategoryUpdateWithWhereUniqueWithoutUserAttemptInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutUserAttemptInput | CategoryUpdateManyWithWhereWithoutUserAttemptInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type AttemptQuestionUpdateManyWithoutUserAttemptNestedInput = {
    create?: XOR<AttemptQuestionCreateWithoutUserAttemptInput, AttemptQuestionUncheckedCreateWithoutUserAttemptInput> | AttemptQuestionCreateWithoutUserAttemptInput[] | AttemptQuestionUncheckedCreateWithoutUserAttemptInput[]
    connectOrCreate?: AttemptQuestionCreateOrConnectWithoutUserAttemptInput | AttemptQuestionCreateOrConnectWithoutUserAttemptInput[]
    upsert?: AttemptQuestionUpsertWithWhereUniqueWithoutUserAttemptInput | AttemptQuestionUpsertWithWhereUniqueWithoutUserAttemptInput[]
    createMany?: AttemptQuestionCreateManyUserAttemptInputEnvelope
    set?: AttemptQuestionWhereUniqueInput | AttemptQuestionWhereUniqueInput[]
    disconnect?: AttemptQuestionWhereUniqueInput | AttemptQuestionWhereUniqueInput[]
    delete?: AttemptQuestionWhereUniqueInput | AttemptQuestionWhereUniqueInput[]
    connect?: AttemptQuestionWhereUniqueInput | AttemptQuestionWhereUniqueInput[]
    update?: AttemptQuestionUpdateWithWhereUniqueWithoutUserAttemptInput | AttemptQuestionUpdateWithWhereUniqueWithoutUserAttemptInput[]
    updateMany?: AttemptQuestionUpdateManyWithWhereWithoutUserAttemptInput | AttemptQuestionUpdateManyWithWhereWithoutUserAttemptInput[]
    deleteMany?: AttemptQuestionScalarWhereInput | AttemptQuestionScalarWhereInput[]
  }

  export type AnsweredQuestionUncheckedUpdateManyWithoutUserAttemptNestedInput = {
    create?: XOR<AnsweredQuestionCreateWithoutUserAttemptInput, AnsweredQuestionUncheckedCreateWithoutUserAttemptInput> | AnsweredQuestionCreateWithoutUserAttemptInput[] | AnsweredQuestionUncheckedCreateWithoutUserAttemptInput[]
    connectOrCreate?: AnsweredQuestionCreateOrConnectWithoutUserAttemptInput | AnsweredQuestionCreateOrConnectWithoutUserAttemptInput[]
    upsert?: AnsweredQuestionUpsertWithWhereUniqueWithoutUserAttemptInput | AnsweredQuestionUpsertWithWhereUniqueWithoutUserAttemptInput[]
    createMany?: AnsweredQuestionCreateManyUserAttemptInputEnvelope
    set?: AnsweredQuestionWhereUniqueInput | AnsweredQuestionWhereUniqueInput[]
    disconnect?: AnsweredQuestionWhereUniqueInput | AnsweredQuestionWhereUniqueInput[]
    delete?: AnsweredQuestionWhereUniqueInput | AnsweredQuestionWhereUniqueInput[]
    connect?: AnsweredQuestionWhereUniqueInput | AnsweredQuestionWhereUniqueInput[]
    update?: AnsweredQuestionUpdateWithWhereUniqueWithoutUserAttemptInput | AnsweredQuestionUpdateWithWhereUniqueWithoutUserAttemptInput[]
    updateMany?: AnsweredQuestionUpdateManyWithWhereWithoutUserAttemptInput | AnsweredQuestionUpdateManyWithWhereWithoutUserAttemptInput[]
    deleteMany?: AnsweredQuestionScalarWhereInput | AnsweredQuestionScalarWhereInput[]
  }

  export type CategoryUncheckedUpdateManyWithoutUserAttemptNestedInput = {
    create?: XOR<CategoryCreateWithoutUserAttemptInput, CategoryUncheckedCreateWithoutUserAttemptInput> | CategoryCreateWithoutUserAttemptInput[] | CategoryUncheckedCreateWithoutUserAttemptInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutUserAttemptInput | CategoryCreateOrConnectWithoutUserAttemptInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutUserAttemptInput | CategoryUpsertWithWhereUniqueWithoutUserAttemptInput[]
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutUserAttemptInput | CategoryUpdateWithWhereUniqueWithoutUserAttemptInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutUserAttemptInput | CategoryUpdateManyWithWhereWithoutUserAttemptInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type AttemptQuestionUncheckedUpdateManyWithoutUserAttemptNestedInput = {
    create?: XOR<AttemptQuestionCreateWithoutUserAttemptInput, AttemptQuestionUncheckedCreateWithoutUserAttemptInput> | AttemptQuestionCreateWithoutUserAttemptInput[] | AttemptQuestionUncheckedCreateWithoutUserAttemptInput[]
    connectOrCreate?: AttemptQuestionCreateOrConnectWithoutUserAttemptInput | AttemptQuestionCreateOrConnectWithoutUserAttemptInput[]
    upsert?: AttemptQuestionUpsertWithWhereUniqueWithoutUserAttemptInput | AttemptQuestionUpsertWithWhereUniqueWithoutUserAttemptInput[]
    createMany?: AttemptQuestionCreateManyUserAttemptInputEnvelope
    set?: AttemptQuestionWhereUniqueInput | AttemptQuestionWhereUniqueInput[]
    disconnect?: AttemptQuestionWhereUniqueInput | AttemptQuestionWhereUniqueInput[]
    delete?: AttemptQuestionWhereUniqueInput | AttemptQuestionWhereUniqueInput[]
    connect?: AttemptQuestionWhereUniqueInput | AttemptQuestionWhereUniqueInput[]
    update?: AttemptQuestionUpdateWithWhereUniqueWithoutUserAttemptInput | AttemptQuestionUpdateWithWhereUniqueWithoutUserAttemptInput[]
    updateMany?: AttemptQuestionUpdateManyWithWhereWithoutUserAttemptInput | AttemptQuestionUpdateManyWithWhereWithoutUserAttemptInput[]
    deleteMany?: AttemptQuestionScalarWhereInput | AttemptQuestionScalarWhereInput[]
  }

  export type UserAttemptCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<UserAttemptCreateWithoutQuestionsInput, UserAttemptUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: UserAttemptCreateOrConnectWithoutQuestionsInput
    connect?: UserAttemptWhereUniqueInput
  }

  export type QuestionCreateNestedOneWithoutAttemptQuestionInput = {
    create?: XOR<QuestionCreateWithoutAttemptQuestionInput, QuestionUncheckedCreateWithoutAttemptQuestionInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAttemptQuestionInput
    connect?: QuestionWhereUniqueInput
  }

  export type UserAttemptUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<UserAttemptCreateWithoutQuestionsInput, UserAttemptUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: UserAttemptCreateOrConnectWithoutQuestionsInput
    upsert?: UserAttemptUpsertWithoutQuestionsInput
    connect?: UserAttemptWhereUniqueInput
    update?: XOR<XOR<UserAttemptUpdateToOneWithWhereWithoutQuestionsInput, UserAttemptUpdateWithoutQuestionsInput>, UserAttemptUncheckedUpdateWithoutQuestionsInput>
  }

  export type QuestionUpdateOneRequiredWithoutAttemptQuestionNestedInput = {
    create?: XOR<QuestionCreateWithoutAttemptQuestionInput, QuestionUncheckedCreateWithoutAttemptQuestionInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAttemptQuestionInput
    upsert?: QuestionUpsertWithoutAttemptQuestionInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutAttemptQuestionInput, QuestionUpdateWithoutAttemptQuestionInput>, QuestionUncheckedUpdateWithoutAttemptQuestionInput>
  }

  export type UserAttemptCreateNestedOneWithoutAnsweredQuestionsInput = {
    create?: XOR<UserAttemptCreateWithoutAnsweredQuestionsInput, UserAttemptUncheckedCreateWithoutAnsweredQuestionsInput>
    connectOrCreate?: UserAttemptCreateOrConnectWithoutAnsweredQuestionsInput
    connect?: UserAttemptWhereUniqueInput
  }

  export type AnswerCreateNestedOneWithoutAnsweredQuestionsInput = {
    create?: XOR<AnswerCreateWithoutAnsweredQuestionsInput, AnswerUncheckedCreateWithoutAnsweredQuestionsInput>
    connectOrCreate?: AnswerCreateOrConnectWithoutAnsweredQuestionsInput
    connect?: AnswerWhereUniqueInput
  }

  export type UserAttemptUpdateOneRequiredWithoutAnsweredQuestionsNestedInput = {
    create?: XOR<UserAttemptCreateWithoutAnsweredQuestionsInput, UserAttemptUncheckedCreateWithoutAnsweredQuestionsInput>
    connectOrCreate?: UserAttemptCreateOrConnectWithoutAnsweredQuestionsInput
    upsert?: UserAttemptUpsertWithoutAnsweredQuestionsInput
    connect?: UserAttemptWhereUniqueInput
    update?: XOR<XOR<UserAttemptUpdateToOneWithWhereWithoutAnsweredQuestionsInput, UserAttemptUpdateWithoutAnsweredQuestionsInput>, UserAttemptUncheckedUpdateWithoutAnsweredQuestionsInput>
  }

  export type AnswerUpdateOneRequiredWithoutAnsweredQuestionsNestedInput = {
    create?: XOR<AnswerCreateWithoutAnsweredQuestionsInput, AnswerUncheckedCreateWithoutAnsweredQuestionsInput>
    connectOrCreate?: AnswerCreateOrConnectWithoutAnsweredQuestionsInput
    upsert?: AnswerUpsertWithoutAnsweredQuestionsInput
    connect?: AnswerWhereUniqueInput
    update?: XOR<XOR<AnswerUpdateToOneWithWhereWithoutAnsweredQuestionsInput, AnswerUpdateWithoutAnsweredQuestionsInput>, AnswerUncheckedUpdateWithoutAnsweredQuestionsInput>
  }

  export type LanguageCreateNestedOneWithoutStringsInput = {
    create?: XOR<LanguageCreateWithoutStringsInput, LanguageUncheckedCreateWithoutStringsInput>
    connectOrCreate?: LanguageCreateOrConnectWithoutStringsInput
    connect?: LanguageWhereUniqueInput
  }

  export type CourseCreateNestedOneWithoutDescriptionInput = {
    create?: XOR<CourseCreateWithoutDescriptionInput, CourseUncheckedCreateWithoutDescriptionInput>
    connectOrCreate?: CourseCreateOrConnectWithoutDescriptionInput
    connect?: CourseWhereUniqueInput
  }

  export type CourseCreateNestedOneWithoutNameInput = {
    create?: XOR<CourseCreateWithoutNameInput, CourseUncheckedCreateWithoutNameInput>
    connectOrCreate?: CourseCreateOrConnectWithoutNameInput
    connect?: CourseWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutNameInput = {
    create?: XOR<CategoryCreateWithoutNameInput, CategoryUncheckedCreateWithoutNameInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutNameInput
    connect?: CategoryWhereUniqueInput
  }

  export type QuestionCreateNestedOneWithoutTextInput = {
    create?: XOR<QuestionCreateWithoutTextInput, QuestionUncheckedCreateWithoutTextInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutTextInput
    connect?: QuestionWhereUniqueInput
  }

  export type AnswerCreateNestedOneWithoutTextInput = {
    create?: XOR<AnswerCreateWithoutTextInput, AnswerUncheckedCreateWithoutTextInput>
    connectOrCreate?: AnswerCreateOrConnectWithoutTextInput
    connect?: AnswerWhereUniqueInput
  }

  export type QuestionCreateNestedOneWithoutHintInput = {
    create?: XOR<QuestionCreateWithoutHintInput, QuestionUncheckedCreateWithoutHintInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutHintInput
    connect?: QuestionWhereUniqueInput
  }

  export type LanguageUpdateOneRequiredWithoutStringsNestedInput = {
    create?: XOR<LanguageCreateWithoutStringsInput, LanguageUncheckedCreateWithoutStringsInput>
    connectOrCreate?: LanguageCreateOrConnectWithoutStringsInput
    upsert?: LanguageUpsertWithoutStringsInput
    connect?: LanguageWhereUniqueInput
    update?: XOR<XOR<LanguageUpdateToOneWithWhereWithoutStringsInput, LanguageUpdateWithoutStringsInput>, LanguageUncheckedUpdateWithoutStringsInput>
  }

  export type CourseUpdateOneWithoutDescriptionNestedInput = {
    create?: XOR<CourseCreateWithoutDescriptionInput, CourseUncheckedCreateWithoutDescriptionInput>
    connectOrCreate?: CourseCreateOrConnectWithoutDescriptionInput
    upsert?: CourseUpsertWithoutDescriptionInput
    disconnect?: CourseWhereInput | boolean
    delete?: CourseWhereInput | boolean
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutDescriptionInput, CourseUpdateWithoutDescriptionInput>, CourseUncheckedUpdateWithoutDescriptionInput>
  }

  export type CourseUpdateOneWithoutNameNestedInput = {
    create?: XOR<CourseCreateWithoutNameInput, CourseUncheckedCreateWithoutNameInput>
    connectOrCreate?: CourseCreateOrConnectWithoutNameInput
    upsert?: CourseUpsertWithoutNameInput
    disconnect?: CourseWhereInput | boolean
    delete?: CourseWhereInput | boolean
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutNameInput, CourseUpdateWithoutNameInput>, CourseUncheckedUpdateWithoutNameInput>
  }

  export type CategoryUpdateOneWithoutNameNestedInput = {
    create?: XOR<CategoryCreateWithoutNameInput, CategoryUncheckedCreateWithoutNameInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutNameInput
    upsert?: CategoryUpsertWithoutNameInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutNameInput, CategoryUpdateWithoutNameInput>, CategoryUncheckedUpdateWithoutNameInput>
  }

  export type QuestionUpdateOneWithoutTextNestedInput = {
    create?: XOR<QuestionCreateWithoutTextInput, QuestionUncheckedCreateWithoutTextInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutTextInput
    upsert?: QuestionUpsertWithoutTextInput
    disconnect?: QuestionWhereInput | boolean
    delete?: QuestionWhereInput | boolean
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutTextInput, QuestionUpdateWithoutTextInput>, QuestionUncheckedUpdateWithoutTextInput>
  }

  export type AnswerUpdateOneWithoutTextNestedInput = {
    create?: XOR<AnswerCreateWithoutTextInput, AnswerUncheckedCreateWithoutTextInput>
    connectOrCreate?: AnswerCreateOrConnectWithoutTextInput
    upsert?: AnswerUpsertWithoutTextInput
    disconnect?: AnswerWhereInput | boolean
    delete?: AnswerWhereInput | boolean
    connect?: AnswerWhereUniqueInput
    update?: XOR<XOR<AnswerUpdateToOneWithWhereWithoutTextInput, AnswerUpdateWithoutTextInput>, AnswerUncheckedUpdateWithoutTextInput>
  }

  export type QuestionUpdateOneWithoutHintNestedInput = {
    create?: XOR<QuestionCreateWithoutHintInput, QuestionUncheckedCreateWithoutHintInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutHintInput
    upsert?: QuestionUpsertWithoutHintInput
    disconnect?: QuestionWhereInput | boolean
    delete?: QuestionWhereInput | boolean
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutHintInput, QuestionUpdateWithoutHintInput>, QuestionUncheckedUpdateWithoutHintInput>
  }

  export type TextCreateNestedManyWithoutLanguageInput = {
    create?: XOR<TextCreateWithoutLanguageInput, TextUncheckedCreateWithoutLanguageInput> | TextCreateWithoutLanguageInput[] | TextUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: TextCreateOrConnectWithoutLanguageInput | TextCreateOrConnectWithoutLanguageInput[]
    createMany?: TextCreateManyLanguageInputEnvelope
    connect?: TextWhereUniqueInput | TextWhereUniqueInput[]
  }

  export type TextUncheckedCreateNestedManyWithoutLanguageInput = {
    create?: XOR<TextCreateWithoutLanguageInput, TextUncheckedCreateWithoutLanguageInput> | TextCreateWithoutLanguageInput[] | TextUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: TextCreateOrConnectWithoutLanguageInput | TextCreateOrConnectWithoutLanguageInput[]
    createMany?: TextCreateManyLanguageInputEnvelope
    connect?: TextWhereUniqueInput | TextWhereUniqueInput[]
  }

  export type TextUpdateManyWithoutLanguageNestedInput = {
    create?: XOR<TextCreateWithoutLanguageInput, TextUncheckedCreateWithoutLanguageInput> | TextCreateWithoutLanguageInput[] | TextUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: TextCreateOrConnectWithoutLanguageInput | TextCreateOrConnectWithoutLanguageInput[]
    upsert?: TextUpsertWithWhereUniqueWithoutLanguageInput | TextUpsertWithWhereUniqueWithoutLanguageInput[]
    createMany?: TextCreateManyLanguageInputEnvelope
    set?: TextWhereUniqueInput | TextWhereUniqueInput[]
    disconnect?: TextWhereUniqueInput | TextWhereUniqueInput[]
    delete?: TextWhereUniqueInput | TextWhereUniqueInput[]
    connect?: TextWhereUniqueInput | TextWhereUniqueInput[]
    update?: TextUpdateWithWhereUniqueWithoutLanguageInput | TextUpdateWithWhereUniqueWithoutLanguageInput[]
    updateMany?: TextUpdateManyWithWhereWithoutLanguageInput | TextUpdateManyWithWhereWithoutLanguageInput[]
    deleteMany?: TextScalarWhereInput | TextScalarWhereInput[]
  }

  export type TextUncheckedUpdateManyWithoutLanguageNestedInput = {
    create?: XOR<TextCreateWithoutLanguageInput, TextUncheckedCreateWithoutLanguageInput> | TextCreateWithoutLanguageInput[] | TextUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: TextCreateOrConnectWithoutLanguageInput | TextCreateOrConnectWithoutLanguageInput[]
    upsert?: TextUpsertWithWhereUniqueWithoutLanguageInput | TextUpsertWithWhereUniqueWithoutLanguageInput[]
    createMany?: TextCreateManyLanguageInputEnvelope
    set?: TextWhereUniqueInput | TextWhereUniqueInput[]
    disconnect?: TextWhereUniqueInput | TextWhereUniqueInput[]
    delete?: TextWhereUniqueInput | TextWhereUniqueInput[]
    connect?: TextWhereUniqueInput | TextWhereUniqueInput[]
    update?: TextUpdateWithWhereUniqueWithoutLanguageInput | TextUpdateWithWhereUniqueWithoutLanguageInput[]
    updateMany?: TextUpdateManyWithWhereWithoutLanguageInput | TextUpdateManyWithWhereWithoutLanguageInput[]
    deleteMany?: TextScalarWhereInput | TextScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type CourseCreateWithoutUsersInput = {
    id?: string
    image?: string | null
    isActive?: boolean
    name?: TextCreateNestedManyWithoutCourseNameInput
    description?: TextCreateNestedManyWithoutCourseDescriptionInput
    questions?: QuestionCreateNestedManyWithoutCourseInput
    UserAttempt?: UserAttemptCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutUsersInput = {
    id?: string
    image?: string | null
    isActive?: boolean
    name?: TextUncheckedCreateNestedManyWithoutCourseNameInput
    description?: TextUncheckedCreateNestedManyWithoutCourseDescriptionInput
    questions?: QuestionUncheckedCreateNestedManyWithoutCourseInput
    UserAttempt?: UserAttemptUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutUsersInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutUsersInput, CourseUncheckedCreateWithoutUsersInput>
  }

  export type UserAttemptCreateWithoutUserInput = {
    id?: string
    date: Date | string
    result: number
    isTimed: boolean
    isInstantResult: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    currentQuestionIndex?: number
    endTime?: Date | string | null
    course?: CourseCreateNestedOneWithoutUserAttemptInput
    answeredQuestions?: AnsweredQuestionCreateNestedManyWithoutUserAttemptInput
    categories?: CategoryCreateNestedManyWithoutUserAttemptInput
    questions?: AttemptQuestionCreateNestedManyWithoutUserAttemptInput
  }

  export type UserAttemptUncheckedCreateWithoutUserInput = {
    id?: string
    date: Date | string
    result: number
    courseId?: string | null
    isTimed: boolean
    isInstantResult: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    currentQuestionIndex?: number
    endTime?: Date | string | null
    answeredQuestions?: AnsweredQuestionUncheckedCreateNestedManyWithoutUserAttemptInput
    categories?: CategoryUncheckedCreateNestedManyWithoutUserAttemptInput
    questions?: AttemptQuestionUncheckedCreateNestedManyWithoutUserAttemptInput
  }

  export type UserAttemptCreateOrConnectWithoutUserInput = {
    where: UserAttemptWhereUniqueInput
    create: XOR<UserAttemptCreateWithoutUserInput, UserAttemptUncheckedCreateWithoutUserInput>
  }

  export type UserAttemptCreateManyUserInputEnvelope = {
    data: UserAttemptCreateManyUserInput | UserAttemptCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CourseUpsertWithWhereUniqueWithoutUsersInput = {
    where: CourseWhereUniqueInput
    update: XOR<CourseUpdateWithoutUsersInput, CourseUncheckedUpdateWithoutUsersInput>
    create: XOR<CourseCreateWithoutUsersInput, CourseUncheckedCreateWithoutUsersInput>
  }

  export type CourseUpdateWithWhereUniqueWithoutUsersInput = {
    where: CourseWhereUniqueInput
    data: XOR<CourseUpdateWithoutUsersInput, CourseUncheckedUpdateWithoutUsersInput>
  }

  export type CourseUpdateManyWithWhereWithoutUsersInput = {
    where: CourseScalarWhereInput
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyWithoutUsersInput>
  }

  export type CourseScalarWhereInput = {
    AND?: CourseScalarWhereInput | CourseScalarWhereInput[]
    OR?: CourseScalarWhereInput[]
    NOT?: CourseScalarWhereInput | CourseScalarWhereInput[]
    id?: StringFilter<"Course"> | string
    image?: StringNullableFilter<"Course"> | string | null
    isActive?: BoolFilter<"Course"> | boolean
  }

  export type UserAttemptUpsertWithWhereUniqueWithoutUserInput = {
    where: UserAttemptWhereUniqueInput
    update: XOR<UserAttemptUpdateWithoutUserInput, UserAttemptUncheckedUpdateWithoutUserInput>
    create: XOR<UserAttemptCreateWithoutUserInput, UserAttemptUncheckedCreateWithoutUserInput>
  }

  export type UserAttemptUpdateWithWhereUniqueWithoutUserInput = {
    where: UserAttemptWhereUniqueInput
    data: XOR<UserAttemptUpdateWithoutUserInput, UserAttemptUncheckedUpdateWithoutUserInput>
  }

  export type UserAttemptUpdateManyWithWhereWithoutUserInput = {
    where: UserAttemptScalarWhereInput
    data: XOR<UserAttemptUpdateManyMutationInput, UserAttemptUncheckedUpdateManyWithoutUserInput>
  }

  export type UserAttemptScalarWhereInput = {
    AND?: UserAttemptScalarWhereInput | UserAttemptScalarWhereInput[]
    OR?: UserAttemptScalarWhereInput[]
    NOT?: UserAttemptScalarWhereInput | UserAttemptScalarWhereInput[]
    id?: StringFilter<"UserAttempt"> | string
    userId?: StringFilter<"UserAttempt"> | string
    date?: DateTimeFilter<"UserAttempt"> | Date | string
    result?: FloatFilter<"UserAttempt"> | number
    courseId?: StringNullableFilter<"UserAttempt"> | string | null
    isTimed?: BoolFilter<"UserAttempt"> | boolean
    isInstantResult?: BoolFilter<"UserAttempt"> | boolean
    createdAt?: DateTimeFilter<"UserAttempt"> | Date | string
    updatedAt?: DateTimeFilter<"UserAttempt"> | Date | string
    currentQuestionIndex?: IntFilter<"UserAttempt"> | number
    endTime?: DateTimeNullableFilter<"UserAttempt"> | Date | string | null
  }

  export type TextCreateWithoutCourseNameInput = {
    id?: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
    language: LanguageCreateNestedOneWithoutStringsInput
    CourseDescription?: CourseCreateNestedOneWithoutDescriptionInput
    CategoryName?: CategoryCreateNestedOneWithoutNameInput
    Question?: QuestionCreateNestedOneWithoutTextInput
    Answer?: AnswerCreateNestedOneWithoutTextInput
    questionHint?: QuestionCreateNestedOneWithoutHintInput
  }

  export type TextUncheckedCreateWithoutCourseNameInput = {
    id?: string
    value: string
    languageId: string
    courseDescriptionId?: string | null
    categoryNameId?: string | null
    questionId?: string | null
    answerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    questionHintId?: string | null
  }

  export type TextCreateOrConnectWithoutCourseNameInput = {
    where: TextWhereUniqueInput
    create: XOR<TextCreateWithoutCourseNameInput, TextUncheckedCreateWithoutCourseNameInput>
  }

  export type TextCreateManyCourseNameInputEnvelope = {
    data: TextCreateManyCourseNameInput | TextCreateManyCourseNameInput[]
    skipDuplicates?: boolean
  }

  export type TextCreateWithoutCourseDescriptionInput = {
    id?: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
    language: LanguageCreateNestedOneWithoutStringsInput
    CourseName?: CourseCreateNestedOneWithoutNameInput
    CategoryName?: CategoryCreateNestedOneWithoutNameInput
    Question?: QuestionCreateNestedOneWithoutTextInput
    Answer?: AnswerCreateNestedOneWithoutTextInput
    questionHint?: QuestionCreateNestedOneWithoutHintInput
  }

  export type TextUncheckedCreateWithoutCourseDescriptionInput = {
    id?: string
    value: string
    languageId: string
    courseNameId?: string | null
    categoryNameId?: string | null
    questionId?: string | null
    answerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    questionHintId?: string | null
  }

  export type TextCreateOrConnectWithoutCourseDescriptionInput = {
    where: TextWhereUniqueInput
    create: XOR<TextCreateWithoutCourseDescriptionInput, TextUncheckedCreateWithoutCourseDescriptionInput>
  }

  export type TextCreateManyCourseDescriptionInputEnvelope = {
    data: TextCreateManyCourseDescriptionInput | TextCreateManyCourseDescriptionInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutCoursesInput = {
    id?: string
    firstName: string
    lastName: string
    personnr: string
    tel: string
    email: string
    password: string
    isActive?: boolean
    expiryDate: Date | string
    userAttempts?: UserAttemptCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCoursesInput = {
    id?: string
    firstName: string
    lastName: string
    personnr: string
    tel: string
    email: string
    password: string
    isActive?: boolean
    expiryDate: Date | string
    userAttempts?: UserAttemptUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCoursesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCoursesInput, UserUncheckedCreateWithoutCoursesInput>
  }

  export type QuestionCreateWithoutCourseInput = {
    id?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    text?: TextCreateNestedManyWithoutQuestionInput
    categories?: CategoryCreateNestedManyWithoutQuestionsInput
    answers?: AnswerCreateNestedManyWithoutQuestionInput
    questionMedia?: QuestionMediaCreateNestedManyWithoutQuestionInput
    AttemptQuestion?: AttemptQuestionCreateNestedManyWithoutQuestionInput
    hint?: TextCreateNestedManyWithoutQuestionHintInput
  }

  export type QuestionUncheckedCreateWithoutCourseInput = {
    id?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    text?: TextUncheckedCreateNestedManyWithoutQuestionInput
    categories?: CategoryUncheckedCreateNestedManyWithoutQuestionsInput
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
    questionMedia?: QuestionMediaUncheckedCreateNestedManyWithoutQuestionInput
    AttemptQuestion?: AttemptQuestionUncheckedCreateNestedManyWithoutQuestionInput
    hint?: TextUncheckedCreateNestedManyWithoutQuestionHintInput
  }

  export type QuestionCreateOrConnectWithoutCourseInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutCourseInput, QuestionUncheckedCreateWithoutCourseInput>
  }

  export type QuestionCreateManyCourseInputEnvelope = {
    data: QuestionCreateManyCourseInput | QuestionCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type UserAttemptCreateWithoutCourseInput = {
    id?: string
    date: Date | string
    result: number
    isTimed: boolean
    isInstantResult: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    currentQuestionIndex?: number
    endTime?: Date | string | null
    user: UserCreateNestedOneWithoutUserAttemptsInput
    answeredQuestions?: AnsweredQuestionCreateNestedManyWithoutUserAttemptInput
    categories?: CategoryCreateNestedManyWithoutUserAttemptInput
    questions?: AttemptQuestionCreateNestedManyWithoutUserAttemptInput
  }

  export type UserAttemptUncheckedCreateWithoutCourseInput = {
    id?: string
    userId: string
    date: Date | string
    result: number
    isTimed: boolean
    isInstantResult: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    currentQuestionIndex?: number
    endTime?: Date | string | null
    answeredQuestions?: AnsweredQuestionUncheckedCreateNestedManyWithoutUserAttemptInput
    categories?: CategoryUncheckedCreateNestedManyWithoutUserAttemptInput
    questions?: AttemptQuestionUncheckedCreateNestedManyWithoutUserAttemptInput
  }

  export type UserAttemptCreateOrConnectWithoutCourseInput = {
    where: UserAttemptWhereUniqueInput
    create: XOR<UserAttemptCreateWithoutCourseInput, UserAttemptUncheckedCreateWithoutCourseInput>
  }

  export type UserAttemptCreateManyCourseInputEnvelope = {
    data: UserAttemptCreateManyCourseInput | UserAttemptCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type TextUpsertWithWhereUniqueWithoutCourseNameInput = {
    where: TextWhereUniqueInput
    update: XOR<TextUpdateWithoutCourseNameInput, TextUncheckedUpdateWithoutCourseNameInput>
    create: XOR<TextCreateWithoutCourseNameInput, TextUncheckedCreateWithoutCourseNameInput>
  }

  export type TextUpdateWithWhereUniqueWithoutCourseNameInput = {
    where: TextWhereUniqueInput
    data: XOR<TextUpdateWithoutCourseNameInput, TextUncheckedUpdateWithoutCourseNameInput>
  }

  export type TextUpdateManyWithWhereWithoutCourseNameInput = {
    where: TextScalarWhereInput
    data: XOR<TextUpdateManyMutationInput, TextUncheckedUpdateManyWithoutCourseNameInput>
  }

  export type TextScalarWhereInput = {
    AND?: TextScalarWhereInput | TextScalarWhereInput[]
    OR?: TextScalarWhereInput[]
    NOT?: TextScalarWhereInput | TextScalarWhereInput[]
    id?: StringFilter<"Text"> | string
    value?: StringFilter<"Text"> | string
    languageId?: StringFilter<"Text"> | string
    courseDescriptionId?: StringNullableFilter<"Text"> | string | null
    courseNameId?: StringNullableFilter<"Text"> | string | null
    categoryNameId?: StringNullableFilter<"Text"> | string | null
    questionId?: StringNullableFilter<"Text"> | string | null
    answerId?: StringNullableFilter<"Text"> | string | null
    createdAt?: DateTimeFilter<"Text"> | Date | string
    updatedAt?: DateTimeFilter<"Text"> | Date | string
    questionHintId?: StringNullableFilter<"Text"> | string | null
  }

  export type TextUpsertWithWhereUniqueWithoutCourseDescriptionInput = {
    where: TextWhereUniqueInput
    update: XOR<TextUpdateWithoutCourseDescriptionInput, TextUncheckedUpdateWithoutCourseDescriptionInput>
    create: XOR<TextCreateWithoutCourseDescriptionInput, TextUncheckedCreateWithoutCourseDescriptionInput>
  }

  export type TextUpdateWithWhereUniqueWithoutCourseDescriptionInput = {
    where: TextWhereUniqueInput
    data: XOR<TextUpdateWithoutCourseDescriptionInput, TextUncheckedUpdateWithoutCourseDescriptionInput>
  }

  export type TextUpdateManyWithWhereWithoutCourseDescriptionInput = {
    where: TextScalarWhereInput
    data: XOR<TextUpdateManyMutationInput, TextUncheckedUpdateManyWithoutCourseDescriptionInput>
  }

  export type UserUpsertWithWhereUniqueWithoutCoursesInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutCoursesInput, UserUncheckedUpdateWithoutCoursesInput>
    create: XOR<UserCreateWithoutCoursesInput, UserUncheckedCreateWithoutCoursesInput>
  }

  export type UserUpdateWithWhereUniqueWithoutCoursesInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutCoursesInput, UserUncheckedUpdateWithoutCoursesInput>
  }

  export type UserUpdateManyWithWhereWithoutCoursesInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutCoursesInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    personnr?: StringFilter<"User"> | string
    tel?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    isActive?: BoolFilter<"User"> | boolean
    expiryDate?: DateTimeFilter<"User"> | Date | string
  }

  export type QuestionUpsertWithWhereUniqueWithoutCourseInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutCourseInput, QuestionUncheckedUpdateWithoutCourseInput>
    create: XOR<QuestionCreateWithoutCourseInput, QuestionUncheckedCreateWithoutCourseInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutCourseInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutCourseInput, QuestionUncheckedUpdateWithoutCourseInput>
  }

  export type QuestionUpdateManyWithWhereWithoutCourseInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutCourseInput>
  }

  export type QuestionScalarWhereInput = {
    AND?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    OR?: QuestionScalarWhereInput[]
    NOT?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    id?: StringFilter<"Question"> | string
    courseId?: StringFilter<"Question"> | string
    isActive?: BoolFilter<"Question"> | boolean
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
  }

  export type UserAttemptUpsertWithWhereUniqueWithoutCourseInput = {
    where: UserAttemptWhereUniqueInput
    update: XOR<UserAttemptUpdateWithoutCourseInput, UserAttemptUncheckedUpdateWithoutCourseInput>
    create: XOR<UserAttemptCreateWithoutCourseInput, UserAttemptUncheckedCreateWithoutCourseInput>
  }

  export type UserAttemptUpdateWithWhereUniqueWithoutCourseInput = {
    where: UserAttemptWhereUniqueInput
    data: XOR<UserAttemptUpdateWithoutCourseInput, UserAttemptUncheckedUpdateWithoutCourseInput>
  }

  export type UserAttemptUpdateManyWithWhereWithoutCourseInput = {
    where: UserAttemptScalarWhereInput
    data: XOR<UserAttemptUpdateManyMutationInput, UserAttemptUncheckedUpdateManyWithoutCourseInput>
  }

  export type QuestionCreateWithoutCategoriesInput = {
    id?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    text?: TextCreateNestedManyWithoutQuestionInput
    course: CourseCreateNestedOneWithoutQuestionsInput
    answers?: AnswerCreateNestedManyWithoutQuestionInput
    questionMedia?: QuestionMediaCreateNestedManyWithoutQuestionInput
    AttemptQuestion?: AttemptQuestionCreateNestedManyWithoutQuestionInput
    hint?: TextCreateNestedManyWithoutQuestionHintInput
  }

  export type QuestionUncheckedCreateWithoutCategoriesInput = {
    id?: string
    courseId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    text?: TextUncheckedCreateNestedManyWithoutQuestionInput
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
    questionMedia?: QuestionMediaUncheckedCreateNestedManyWithoutQuestionInput
    AttemptQuestion?: AttemptQuestionUncheckedCreateNestedManyWithoutQuestionInput
    hint?: TextUncheckedCreateNestedManyWithoutQuestionHintInput
  }

  export type QuestionCreateOrConnectWithoutCategoriesInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutCategoriesInput, QuestionUncheckedCreateWithoutCategoriesInput>
  }

  export type TextCreateWithoutCategoryNameInput = {
    id?: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
    language: LanguageCreateNestedOneWithoutStringsInput
    CourseDescription?: CourseCreateNestedOneWithoutDescriptionInput
    CourseName?: CourseCreateNestedOneWithoutNameInput
    Question?: QuestionCreateNestedOneWithoutTextInput
    Answer?: AnswerCreateNestedOneWithoutTextInput
    questionHint?: QuestionCreateNestedOneWithoutHintInput
  }

  export type TextUncheckedCreateWithoutCategoryNameInput = {
    id?: string
    value: string
    languageId: string
    courseDescriptionId?: string | null
    courseNameId?: string | null
    questionId?: string | null
    answerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    questionHintId?: string | null
  }

  export type TextCreateOrConnectWithoutCategoryNameInput = {
    where: TextWhereUniqueInput
    create: XOR<TextCreateWithoutCategoryNameInput, TextUncheckedCreateWithoutCategoryNameInput>
  }

  export type TextCreateManyCategoryNameInputEnvelope = {
    data: TextCreateManyCategoryNameInput | TextCreateManyCategoryNameInput[]
    skipDuplicates?: boolean
  }

  export type UserAttemptCreateWithoutCategoriesInput = {
    id?: string
    date: Date | string
    result: number
    isTimed: boolean
    isInstantResult: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    currentQuestionIndex?: number
    endTime?: Date | string | null
    user: UserCreateNestedOneWithoutUserAttemptsInput
    course?: CourseCreateNestedOneWithoutUserAttemptInput
    answeredQuestions?: AnsweredQuestionCreateNestedManyWithoutUserAttemptInput
    questions?: AttemptQuestionCreateNestedManyWithoutUserAttemptInput
  }

  export type UserAttemptUncheckedCreateWithoutCategoriesInput = {
    id?: string
    userId: string
    date: Date | string
    result: number
    courseId?: string | null
    isTimed: boolean
    isInstantResult: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    currentQuestionIndex?: number
    endTime?: Date | string | null
    answeredQuestions?: AnsweredQuestionUncheckedCreateNestedManyWithoutUserAttemptInput
    questions?: AttemptQuestionUncheckedCreateNestedManyWithoutUserAttemptInput
  }

  export type UserAttemptCreateOrConnectWithoutCategoriesInput = {
    where: UserAttemptWhereUniqueInput
    create: XOR<UserAttemptCreateWithoutCategoriesInput, UserAttemptUncheckedCreateWithoutCategoriesInput>
  }

  export type QuestionUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutCategoriesInput, QuestionUncheckedUpdateWithoutCategoriesInput>
    create: XOR<QuestionCreateWithoutCategoriesInput, QuestionUncheckedCreateWithoutCategoriesInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutCategoriesInput, QuestionUncheckedUpdateWithoutCategoriesInput>
  }

  export type QuestionUpdateManyWithWhereWithoutCategoriesInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type TextUpsertWithWhereUniqueWithoutCategoryNameInput = {
    where: TextWhereUniqueInput
    update: XOR<TextUpdateWithoutCategoryNameInput, TextUncheckedUpdateWithoutCategoryNameInput>
    create: XOR<TextCreateWithoutCategoryNameInput, TextUncheckedCreateWithoutCategoryNameInput>
  }

  export type TextUpdateWithWhereUniqueWithoutCategoryNameInput = {
    where: TextWhereUniqueInput
    data: XOR<TextUpdateWithoutCategoryNameInput, TextUncheckedUpdateWithoutCategoryNameInput>
  }

  export type TextUpdateManyWithWhereWithoutCategoryNameInput = {
    where: TextScalarWhereInput
    data: XOR<TextUpdateManyMutationInput, TextUncheckedUpdateManyWithoutCategoryNameInput>
  }

  export type UserAttemptUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: UserAttemptWhereUniqueInput
    update: XOR<UserAttemptUpdateWithoutCategoriesInput, UserAttemptUncheckedUpdateWithoutCategoriesInput>
    create: XOR<UserAttemptCreateWithoutCategoriesInput, UserAttemptUncheckedCreateWithoutCategoriesInput>
  }

  export type UserAttemptUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: UserAttemptWhereUniqueInput
    data: XOR<UserAttemptUpdateWithoutCategoriesInput, UserAttemptUncheckedUpdateWithoutCategoriesInput>
  }

  export type UserAttemptUpdateManyWithWhereWithoutCategoriesInput = {
    where: UserAttemptScalarWhereInput
    data: XOR<UserAttemptUpdateManyMutationInput, UserAttemptUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type TextCreateWithoutQuestionInput = {
    id?: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
    language: LanguageCreateNestedOneWithoutStringsInput
    CourseDescription?: CourseCreateNestedOneWithoutDescriptionInput
    CourseName?: CourseCreateNestedOneWithoutNameInput
    CategoryName?: CategoryCreateNestedOneWithoutNameInput
    Answer?: AnswerCreateNestedOneWithoutTextInput
    questionHint?: QuestionCreateNestedOneWithoutHintInput
  }

  export type TextUncheckedCreateWithoutQuestionInput = {
    id?: string
    value: string
    languageId: string
    courseDescriptionId?: string | null
    courseNameId?: string | null
    categoryNameId?: string | null
    answerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    questionHintId?: string | null
  }

  export type TextCreateOrConnectWithoutQuestionInput = {
    where: TextWhereUniqueInput
    create: XOR<TextCreateWithoutQuestionInput, TextUncheckedCreateWithoutQuestionInput>
  }

  export type TextCreateManyQuestionInputEnvelope = {
    data: TextCreateManyQuestionInput | TextCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type CategoryCreateWithoutQuestionsInput = {
    id?: string
    image?: string | null
    name?: TextCreateNestedManyWithoutCategoryNameInput
    UserAttempt?: UserAttemptCreateNestedManyWithoutCategoriesInput
  }

  export type CategoryUncheckedCreateWithoutQuestionsInput = {
    id?: string
    image?: string | null
    name?: TextUncheckedCreateNestedManyWithoutCategoryNameInput
    UserAttempt?: UserAttemptUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type CategoryCreateOrConnectWithoutQuestionsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutQuestionsInput, CategoryUncheckedCreateWithoutQuestionsInput>
  }

  export type CourseCreateWithoutQuestionsInput = {
    id?: string
    image?: string | null
    isActive?: boolean
    name?: TextCreateNestedManyWithoutCourseNameInput
    description?: TextCreateNestedManyWithoutCourseDescriptionInput
    users?: UserCreateNestedManyWithoutCoursesInput
    UserAttempt?: UserAttemptCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutQuestionsInput = {
    id?: string
    image?: string | null
    isActive?: boolean
    name?: TextUncheckedCreateNestedManyWithoutCourseNameInput
    description?: TextUncheckedCreateNestedManyWithoutCourseDescriptionInput
    users?: UserUncheckedCreateNestedManyWithoutCoursesInput
    UserAttempt?: UserAttemptUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutQuestionsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutQuestionsInput, CourseUncheckedCreateWithoutQuestionsInput>
  }

  export type AnswerCreateWithoutQuestionInput = {
    id?: string
    isActive?: boolean
    isCorrect: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    text?: TextCreateNestedManyWithoutAnswerInput
    media?: MediaCreateNestedOneWithoutAnswerInput
    answeredQuestions?: AnsweredQuestionCreateNestedManyWithoutAnswerInput
  }

  export type AnswerUncheckedCreateWithoutQuestionInput = {
    id?: string
    mediaId?: string | null
    isActive?: boolean
    isCorrect: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    text?: TextUncheckedCreateNestedManyWithoutAnswerInput
    answeredQuestions?: AnsweredQuestionUncheckedCreateNestedManyWithoutAnswerInput
  }

  export type AnswerCreateOrConnectWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput>
  }

  export type AnswerCreateManyQuestionInputEnvelope = {
    data: AnswerCreateManyQuestionInput | AnswerCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type QuestionMediaCreateWithoutQuestionInput = {
    id?: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    media: MediaCreateNestedOneWithoutQuestionMediaInput
  }

  export type QuestionMediaUncheckedCreateWithoutQuestionInput = {
    id?: string
    mediaId: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionMediaCreateOrConnectWithoutQuestionInput = {
    where: QuestionMediaWhereUniqueInput
    create: XOR<QuestionMediaCreateWithoutQuestionInput, QuestionMediaUncheckedCreateWithoutQuestionInput>
  }

  export type QuestionMediaCreateManyQuestionInputEnvelope = {
    data: QuestionMediaCreateManyQuestionInput | QuestionMediaCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type AttemptQuestionCreateWithoutQuestionInput = {
    id?: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isMarked?: boolean
    isAnswered?: boolean
    userAttempt: UserAttemptCreateNestedOneWithoutQuestionsInput
  }

  export type AttemptQuestionUncheckedCreateWithoutQuestionInput = {
    id?: string
    userAttemptId: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isMarked?: boolean
    isAnswered?: boolean
  }

  export type AttemptQuestionCreateOrConnectWithoutQuestionInput = {
    where: AttemptQuestionWhereUniqueInput
    create: XOR<AttemptQuestionCreateWithoutQuestionInput, AttemptQuestionUncheckedCreateWithoutQuestionInput>
  }

  export type AttemptQuestionCreateManyQuestionInputEnvelope = {
    data: AttemptQuestionCreateManyQuestionInput | AttemptQuestionCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type TextCreateWithoutQuestionHintInput = {
    id?: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
    language: LanguageCreateNestedOneWithoutStringsInput
    CourseDescription?: CourseCreateNestedOneWithoutDescriptionInput
    CourseName?: CourseCreateNestedOneWithoutNameInput
    CategoryName?: CategoryCreateNestedOneWithoutNameInput
    Question?: QuestionCreateNestedOneWithoutTextInput
    Answer?: AnswerCreateNestedOneWithoutTextInput
  }

  export type TextUncheckedCreateWithoutQuestionHintInput = {
    id?: string
    value: string
    languageId: string
    courseDescriptionId?: string | null
    courseNameId?: string | null
    categoryNameId?: string | null
    questionId?: string | null
    answerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TextCreateOrConnectWithoutQuestionHintInput = {
    where: TextWhereUniqueInput
    create: XOR<TextCreateWithoutQuestionHintInput, TextUncheckedCreateWithoutQuestionHintInput>
  }

  export type TextCreateManyQuestionHintInputEnvelope = {
    data: TextCreateManyQuestionHintInput | TextCreateManyQuestionHintInput[]
    skipDuplicates?: boolean
  }

  export type TextUpsertWithWhereUniqueWithoutQuestionInput = {
    where: TextWhereUniqueInput
    update: XOR<TextUpdateWithoutQuestionInput, TextUncheckedUpdateWithoutQuestionInput>
    create: XOR<TextCreateWithoutQuestionInput, TextUncheckedCreateWithoutQuestionInput>
  }

  export type TextUpdateWithWhereUniqueWithoutQuestionInput = {
    where: TextWhereUniqueInput
    data: XOR<TextUpdateWithoutQuestionInput, TextUncheckedUpdateWithoutQuestionInput>
  }

  export type TextUpdateManyWithWhereWithoutQuestionInput = {
    where: TextScalarWhereInput
    data: XOR<TextUpdateManyMutationInput, TextUncheckedUpdateManyWithoutQuestionInput>
  }

  export type CategoryUpsertWithWhereUniqueWithoutQuestionsInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutQuestionsInput, CategoryUncheckedUpdateWithoutQuestionsInput>
    create: XOR<CategoryCreateWithoutQuestionsInput, CategoryUncheckedCreateWithoutQuestionsInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutQuestionsInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutQuestionsInput, CategoryUncheckedUpdateWithoutQuestionsInput>
  }

  export type CategoryUpdateManyWithWhereWithoutQuestionsInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutQuestionsInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    OR?: CategoryScalarWhereInput[]
    NOT?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    id?: StringFilter<"Category"> | string
    image?: StringNullableFilter<"Category"> | string | null
  }

  export type CourseUpsertWithoutQuestionsInput = {
    update: XOR<CourseUpdateWithoutQuestionsInput, CourseUncheckedUpdateWithoutQuestionsInput>
    create: XOR<CourseCreateWithoutQuestionsInput, CourseUncheckedCreateWithoutQuestionsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutQuestionsInput, CourseUncheckedUpdateWithoutQuestionsInput>
  }

  export type CourseUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    name?: TextUpdateManyWithoutCourseNameNestedInput
    description?: TextUpdateManyWithoutCourseDescriptionNestedInput
    users?: UserUpdateManyWithoutCoursesNestedInput
    UserAttempt?: UserAttemptUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    name?: TextUncheckedUpdateManyWithoutCourseNameNestedInput
    description?: TextUncheckedUpdateManyWithoutCourseDescriptionNestedInput
    users?: UserUncheckedUpdateManyWithoutCoursesNestedInput
    UserAttempt?: UserAttemptUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type AnswerUpsertWithWhereUniqueWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    update: XOR<AnswerUpdateWithoutQuestionInput, AnswerUncheckedUpdateWithoutQuestionInput>
    create: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput>
  }

  export type AnswerUpdateWithWhereUniqueWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    data: XOR<AnswerUpdateWithoutQuestionInput, AnswerUncheckedUpdateWithoutQuestionInput>
  }

  export type AnswerUpdateManyWithWhereWithoutQuestionInput = {
    where: AnswerScalarWhereInput
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyWithoutQuestionInput>
  }

  export type AnswerScalarWhereInput = {
    AND?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
    OR?: AnswerScalarWhereInput[]
    NOT?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
    id?: StringFilter<"Answer"> | string
    mediaId?: StringNullableFilter<"Answer"> | string | null
    isActive?: BoolFilter<"Answer"> | boolean
    questionId?: StringFilter<"Answer"> | string
    isCorrect?: BoolFilter<"Answer"> | boolean
    createdAt?: DateTimeFilter<"Answer"> | Date | string
    updatedAt?: DateTimeFilter<"Answer"> | Date | string
  }

  export type QuestionMediaUpsertWithWhereUniqueWithoutQuestionInput = {
    where: QuestionMediaWhereUniqueInput
    update: XOR<QuestionMediaUpdateWithoutQuestionInput, QuestionMediaUncheckedUpdateWithoutQuestionInput>
    create: XOR<QuestionMediaCreateWithoutQuestionInput, QuestionMediaUncheckedCreateWithoutQuestionInput>
  }

  export type QuestionMediaUpdateWithWhereUniqueWithoutQuestionInput = {
    where: QuestionMediaWhereUniqueInput
    data: XOR<QuestionMediaUpdateWithoutQuestionInput, QuestionMediaUncheckedUpdateWithoutQuestionInput>
  }

  export type QuestionMediaUpdateManyWithWhereWithoutQuestionInput = {
    where: QuestionMediaScalarWhereInput
    data: XOR<QuestionMediaUpdateManyMutationInput, QuestionMediaUncheckedUpdateManyWithoutQuestionInput>
  }

  export type QuestionMediaScalarWhereInput = {
    AND?: QuestionMediaScalarWhereInput | QuestionMediaScalarWhereInput[]
    OR?: QuestionMediaScalarWhereInput[]
    NOT?: QuestionMediaScalarWhereInput | QuestionMediaScalarWhereInput[]
    id?: StringFilter<"QuestionMedia"> | string
    questionId?: StringFilter<"QuestionMedia"> | string
    mediaId?: StringFilter<"QuestionMedia"> | string
    order?: IntFilter<"QuestionMedia"> | number
    createdAt?: DateTimeFilter<"QuestionMedia"> | Date | string
    updatedAt?: DateTimeFilter<"QuestionMedia"> | Date | string
  }

  export type AttemptQuestionUpsertWithWhereUniqueWithoutQuestionInput = {
    where: AttemptQuestionWhereUniqueInput
    update: XOR<AttemptQuestionUpdateWithoutQuestionInput, AttemptQuestionUncheckedUpdateWithoutQuestionInput>
    create: XOR<AttemptQuestionCreateWithoutQuestionInput, AttemptQuestionUncheckedCreateWithoutQuestionInput>
  }

  export type AttemptQuestionUpdateWithWhereUniqueWithoutQuestionInput = {
    where: AttemptQuestionWhereUniqueInput
    data: XOR<AttemptQuestionUpdateWithoutQuestionInput, AttemptQuestionUncheckedUpdateWithoutQuestionInput>
  }

  export type AttemptQuestionUpdateManyWithWhereWithoutQuestionInput = {
    where: AttemptQuestionScalarWhereInput
    data: XOR<AttemptQuestionUpdateManyMutationInput, AttemptQuestionUncheckedUpdateManyWithoutQuestionInput>
  }

  export type AttemptQuestionScalarWhereInput = {
    AND?: AttemptQuestionScalarWhereInput | AttemptQuestionScalarWhereInput[]
    OR?: AttemptQuestionScalarWhereInput[]
    NOT?: AttemptQuestionScalarWhereInput | AttemptQuestionScalarWhereInput[]
    id?: StringFilter<"AttemptQuestion"> | string
    userAttemptId?: StringFilter<"AttemptQuestion"> | string
    questionId?: StringFilter<"AttemptQuestion"> | string
    order?: IntFilter<"AttemptQuestion"> | number
    createdAt?: DateTimeFilter<"AttemptQuestion"> | Date | string
    updatedAt?: DateTimeFilter<"AttemptQuestion"> | Date | string
    isMarked?: BoolFilter<"AttemptQuestion"> | boolean
    isAnswered?: BoolFilter<"AttemptQuestion"> | boolean
  }

  export type TextUpsertWithWhereUniqueWithoutQuestionHintInput = {
    where: TextWhereUniqueInput
    update: XOR<TextUpdateWithoutQuestionHintInput, TextUncheckedUpdateWithoutQuestionHintInput>
    create: XOR<TextCreateWithoutQuestionHintInput, TextUncheckedCreateWithoutQuestionHintInput>
  }

  export type TextUpdateWithWhereUniqueWithoutQuestionHintInput = {
    where: TextWhereUniqueInput
    data: XOR<TextUpdateWithoutQuestionHintInput, TextUncheckedUpdateWithoutQuestionHintInput>
  }

  export type TextUpdateManyWithWhereWithoutQuestionHintInput = {
    where: TextScalarWhereInput
    data: XOR<TextUpdateManyMutationInput, TextUncheckedUpdateManyWithoutQuestionHintInput>
  }

  export type TextCreateWithoutAnswerInput = {
    id?: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
    language: LanguageCreateNestedOneWithoutStringsInput
    CourseDescription?: CourseCreateNestedOneWithoutDescriptionInput
    CourseName?: CourseCreateNestedOneWithoutNameInput
    CategoryName?: CategoryCreateNestedOneWithoutNameInput
    Question?: QuestionCreateNestedOneWithoutTextInput
    questionHint?: QuestionCreateNestedOneWithoutHintInput
  }

  export type TextUncheckedCreateWithoutAnswerInput = {
    id?: string
    value: string
    languageId: string
    courseDescriptionId?: string | null
    courseNameId?: string | null
    categoryNameId?: string | null
    questionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    questionHintId?: string | null
  }

  export type TextCreateOrConnectWithoutAnswerInput = {
    where: TextWhereUniqueInput
    create: XOR<TextCreateWithoutAnswerInput, TextUncheckedCreateWithoutAnswerInput>
  }

  export type TextCreateManyAnswerInputEnvelope = {
    data: TextCreateManyAnswerInput | TextCreateManyAnswerInput[]
    skipDuplicates?: boolean
  }

  export type MediaCreateWithoutAnswerInput = {
    id?: string
    url: string
    type?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    questionMedia?: QuestionMediaCreateNestedManyWithoutMediaInput
  }

  export type MediaUncheckedCreateWithoutAnswerInput = {
    id?: string
    url: string
    type?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    questionMedia?: QuestionMediaUncheckedCreateNestedManyWithoutMediaInput
  }

  export type MediaCreateOrConnectWithoutAnswerInput = {
    where: MediaWhereUniqueInput
    create: XOR<MediaCreateWithoutAnswerInput, MediaUncheckedCreateWithoutAnswerInput>
  }

  export type QuestionCreateWithoutAnswersInput = {
    id?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    text?: TextCreateNestedManyWithoutQuestionInput
    categories?: CategoryCreateNestedManyWithoutQuestionsInput
    course: CourseCreateNestedOneWithoutQuestionsInput
    questionMedia?: QuestionMediaCreateNestedManyWithoutQuestionInput
    AttemptQuestion?: AttemptQuestionCreateNestedManyWithoutQuestionInput
    hint?: TextCreateNestedManyWithoutQuestionHintInput
  }

  export type QuestionUncheckedCreateWithoutAnswersInput = {
    id?: string
    courseId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    text?: TextUncheckedCreateNestedManyWithoutQuestionInput
    categories?: CategoryUncheckedCreateNestedManyWithoutQuestionsInput
    questionMedia?: QuestionMediaUncheckedCreateNestedManyWithoutQuestionInput
    AttemptQuestion?: AttemptQuestionUncheckedCreateNestedManyWithoutQuestionInput
    hint?: TextUncheckedCreateNestedManyWithoutQuestionHintInput
  }

  export type QuestionCreateOrConnectWithoutAnswersInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
  }

  export type AnsweredQuestionCreateWithoutAnswerInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userAttempt: UserAttemptCreateNestedOneWithoutAnsweredQuestionsInput
  }

  export type AnsweredQuestionUncheckedCreateWithoutAnswerInput = {
    id?: string
    userAttemptId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnsweredQuestionCreateOrConnectWithoutAnswerInput = {
    where: AnsweredQuestionWhereUniqueInput
    create: XOR<AnsweredQuestionCreateWithoutAnswerInput, AnsweredQuestionUncheckedCreateWithoutAnswerInput>
  }

  export type AnsweredQuestionCreateManyAnswerInputEnvelope = {
    data: AnsweredQuestionCreateManyAnswerInput | AnsweredQuestionCreateManyAnswerInput[]
    skipDuplicates?: boolean
  }

  export type TextUpsertWithWhereUniqueWithoutAnswerInput = {
    where: TextWhereUniqueInput
    update: XOR<TextUpdateWithoutAnswerInput, TextUncheckedUpdateWithoutAnswerInput>
    create: XOR<TextCreateWithoutAnswerInput, TextUncheckedCreateWithoutAnswerInput>
  }

  export type TextUpdateWithWhereUniqueWithoutAnswerInput = {
    where: TextWhereUniqueInput
    data: XOR<TextUpdateWithoutAnswerInput, TextUncheckedUpdateWithoutAnswerInput>
  }

  export type TextUpdateManyWithWhereWithoutAnswerInput = {
    where: TextScalarWhereInput
    data: XOR<TextUpdateManyMutationInput, TextUncheckedUpdateManyWithoutAnswerInput>
  }

  export type MediaUpsertWithoutAnswerInput = {
    update: XOR<MediaUpdateWithoutAnswerInput, MediaUncheckedUpdateWithoutAnswerInput>
    create: XOR<MediaCreateWithoutAnswerInput, MediaUncheckedCreateWithoutAnswerInput>
    where?: MediaWhereInput
  }

  export type MediaUpdateToOneWithWhereWithoutAnswerInput = {
    where?: MediaWhereInput
    data: XOR<MediaUpdateWithoutAnswerInput, MediaUncheckedUpdateWithoutAnswerInput>
  }

  export type MediaUpdateWithoutAnswerInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questionMedia?: QuestionMediaUpdateManyWithoutMediaNestedInput
  }

  export type MediaUncheckedUpdateWithoutAnswerInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questionMedia?: QuestionMediaUncheckedUpdateManyWithoutMediaNestedInput
  }

  export type QuestionUpsertWithoutAnswersInput = {
    update: XOR<QuestionUpdateWithoutAnswersInput, QuestionUncheckedUpdateWithoutAnswersInput>
    create: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutAnswersInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutAnswersInput, QuestionUncheckedUpdateWithoutAnswersInput>
  }

  export type QuestionUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: TextUpdateManyWithoutQuestionNestedInput
    categories?: CategoryUpdateManyWithoutQuestionsNestedInput
    course?: CourseUpdateOneRequiredWithoutQuestionsNestedInput
    questionMedia?: QuestionMediaUpdateManyWithoutQuestionNestedInput
    AttemptQuestion?: AttemptQuestionUpdateManyWithoutQuestionNestedInput
    hint?: TextUpdateManyWithoutQuestionHintNestedInput
  }

  export type QuestionUncheckedUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: TextUncheckedUpdateManyWithoutQuestionNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutQuestionsNestedInput
    questionMedia?: QuestionMediaUncheckedUpdateManyWithoutQuestionNestedInput
    AttemptQuestion?: AttemptQuestionUncheckedUpdateManyWithoutQuestionNestedInput
    hint?: TextUncheckedUpdateManyWithoutQuestionHintNestedInput
  }

  export type AnsweredQuestionUpsertWithWhereUniqueWithoutAnswerInput = {
    where: AnsweredQuestionWhereUniqueInput
    update: XOR<AnsweredQuestionUpdateWithoutAnswerInput, AnsweredQuestionUncheckedUpdateWithoutAnswerInput>
    create: XOR<AnsweredQuestionCreateWithoutAnswerInput, AnsweredQuestionUncheckedCreateWithoutAnswerInput>
  }

  export type AnsweredQuestionUpdateWithWhereUniqueWithoutAnswerInput = {
    where: AnsweredQuestionWhereUniqueInput
    data: XOR<AnsweredQuestionUpdateWithoutAnswerInput, AnsweredQuestionUncheckedUpdateWithoutAnswerInput>
  }

  export type AnsweredQuestionUpdateManyWithWhereWithoutAnswerInput = {
    where: AnsweredQuestionScalarWhereInput
    data: XOR<AnsweredQuestionUpdateManyMutationInput, AnsweredQuestionUncheckedUpdateManyWithoutAnswerInput>
  }

  export type AnsweredQuestionScalarWhereInput = {
    AND?: AnsweredQuestionScalarWhereInput | AnsweredQuestionScalarWhereInput[]
    OR?: AnsweredQuestionScalarWhereInput[]
    NOT?: AnsweredQuestionScalarWhereInput | AnsweredQuestionScalarWhereInput[]
    id?: StringFilter<"AnsweredQuestion"> | string
    userAttemptId?: StringFilter<"AnsweredQuestion"> | string
    answerId?: StringFilter<"AnsweredQuestion"> | string
    createdAt?: DateTimeFilter<"AnsweredQuestion"> | Date | string
    updatedAt?: DateTimeFilter<"AnsweredQuestion"> | Date | string
  }

  export type QuestionCreateWithoutQuestionMediaInput = {
    id?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    text?: TextCreateNestedManyWithoutQuestionInput
    categories?: CategoryCreateNestedManyWithoutQuestionsInput
    course: CourseCreateNestedOneWithoutQuestionsInput
    answers?: AnswerCreateNestedManyWithoutQuestionInput
    AttemptQuestion?: AttemptQuestionCreateNestedManyWithoutQuestionInput
    hint?: TextCreateNestedManyWithoutQuestionHintInput
  }

  export type QuestionUncheckedCreateWithoutQuestionMediaInput = {
    id?: string
    courseId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    text?: TextUncheckedCreateNestedManyWithoutQuestionInput
    categories?: CategoryUncheckedCreateNestedManyWithoutQuestionsInput
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
    AttemptQuestion?: AttemptQuestionUncheckedCreateNestedManyWithoutQuestionInput
    hint?: TextUncheckedCreateNestedManyWithoutQuestionHintInput
  }

  export type QuestionCreateOrConnectWithoutQuestionMediaInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutQuestionMediaInput, QuestionUncheckedCreateWithoutQuestionMediaInput>
  }

  export type MediaCreateWithoutQuestionMediaInput = {
    id?: string
    url: string
    type?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    answer?: AnswerCreateNestedManyWithoutMediaInput
  }

  export type MediaUncheckedCreateWithoutQuestionMediaInput = {
    id?: string
    url: string
    type?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    answer?: AnswerUncheckedCreateNestedManyWithoutMediaInput
  }

  export type MediaCreateOrConnectWithoutQuestionMediaInput = {
    where: MediaWhereUniqueInput
    create: XOR<MediaCreateWithoutQuestionMediaInput, MediaUncheckedCreateWithoutQuestionMediaInput>
  }

  export type QuestionUpsertWithoutQuestionMediaInput = {
    update: XOR<QuestionUpdateWithoutQuestionMediaInput, QuestionUncheckedUpdateWithoutQuestionMediaInput>
    create: XOR<QuestionCreateWithoutQuestionMediaInput, QuestionUncheckedCreateWithoutQuestionMediaInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutQuestionMediaInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutQuestionMediaInput, QuestionUncheckedUpdateWithoutQuestionMediaInput>
  }

  export type QuestionUpdateWithoutQuestionMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: TextUpdateManyWithoutQuestionNestedInput
    categories?: CategoryUpdateManyWithoutQuestionsNestedInput
    course?: CourseUpdateOneRequiredWithoutQuestionsNestedInput
    answers?: AnswerUpdateManyWithoutQuestionNestedInput
    AttemptQuestion?: AttemptQuestionUpdateManyWithoutQuestionNestedInput
    hint?: TextUpdateManyWithoutQuestionHintNestedInput
  }

  export type QuestionUncheckedUpdateWithoutQuestionMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: TextUncheckedUpdateManyWithoutQuestionNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutQuestionsNestedInput
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
    AttemptQuestion?: AttemptQuestionUncheckedUpdateManyWithoutQuestionNestedInput
    hint?: TextUncheckedUpdateManyWithoutQuestionHintNestedInput
  }

  export type MediaUpsertWithoutQuestionMediaInput = {
    update: XOR<MediaUpdateWithoutQuestionMediaInput, MediaUncheckedUpdateWithoutQuestionMediaInput>
    create: XOR<MediaCreateWithoutQuestionMediaInput, MediaUncheckedCreateWithoutQuestionMediaInput>
    where?: MediaWhereInput
  }

  export type MediaUpdateToOneWithWhereWithoutQuestionMediaInput = {
    where?: MediaWhereInput
    data: XOR<MediaUpdateWithoutQuestionMediaInput, MediaUncheckedUpdateWithoutQuestionMediaInput>
  }

  export type MediaUpdateWithoutQuestionMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answer?: AnswerUpdateManyWithoutMediaNestedInput
  }

  export type MediaUncheckedUpdateWithoutQuestionMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answer?: AnswerUncheckedUpdateManyWithoutMediaNestedInput
  }

  export type QuestionMediaCreateWithoutMediaInput = {
    id?: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    question: QuestionCreateNestedOneWithoutQuestionMediaInput
  }

  export type QuestionMediaUncheckedCreateWithoutMediaInput = {
    id?: string
    questionId: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionMediaCreateOrConnectWithoutMediaInput = {
    where: QuestionMediaWhereUniqueInput
    create: XOR<QuestionMediaCreateWithoutMediaInput, QuestionMediaUncheckedCreateWithoutMediaInput>
  }

  export type QuestionMediaCreateManyMediaInputEnvelope = {
    data: QuestionMediaCreateManyMediaInput | QuestionMediaCreateManyMediaInput[]
    skipDuplicates?: boolean
  }

  export type AnswerCreateWithoutMediaInput = {
    id?: string
    isActive?: boolean
    isCorrect: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    text?: TextCreateNestedManyWithoutAnswerInput
    question: QuestionCreateNestedOneWithoutAnswersInput
    answeredQuestions?: AnsweredQuestionCreateNestedManyWithoutAnswerInput
  }

  export type AnswerUncheckedCreateWithoutMediaInput = {
    id?: string
    isActive?: boolean
    questionId: string
    isCorrect: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    text?: TextUncheckedCreateNestedManyWithoutAnswerInput
    answeredQuestions?: AnsweredQuestionUncheckedCreateNestedManyWithoutAnswerInput
  }

  export type AnswerCreateOrConnectWithoutMediaInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutMediaInput, AnswerUncheckedCreateWithoutMediaInput>
  }

  export type AnswerCreateManyMediaInputEnvelope = {
    data: AnswerCreateManyMediaInput | AnswerCreateManyMediaInput[]
    skipDuplicates?: boolean
  }

  export type QuestionMediaUpsertWithWhereUniqueWithoutMediaInput = {
    where: QuestionMediaWhereUniqueInput
    update: XOR<QuestionMediaUpdateWithoutMediaInput, QuestionMediaUncheckedUpdateWithoutMediaInput>
    create: XOR<QuestionMediaCreateWithoutMediaInput, QuestionMediaUncheckedCreateWithoutMediaInput>
  }

  export type QuestionMediaUpdateWithWhereUniqueWithoutMediaInput = {
    where: QuestionMediaWhereUniqueInput
    data: XOR<QuestionMediaUpdateWithoutMediaInput, QuestionMediaUncheckedUpdateWithoutMediaInput>
  }

  export type QuestionMediaUpdateManyWithWhereWithoutMediaInput = {
    where: QuestionMediaScalarWhereInput
    data: XOR<QuestionMediaUpdateManyMutationInput, QuestionMediaUncheckedUpdateManyWithoutMediaInput>
  }

  export type AnswerUpsertWithWhereUniqueWithoutMediaInput = {
    where: AnswerWhereUniqueInput
    update: XOR<AnswerUpdateWithoutMediaInput, AnswerUncheckedUpdateWithoutMediaInput>
    create: XOR<AnswerCreateWithoutMediaInput, AnswerUncheckedCreateWithoutMediaInput>
  }

  export type AnswerUpdateWithWhereUniqueWithoutMediaInput = {
    where: AnswerWhereUniqueInput
    data: XOR<AnswerUpdateWithoutMediaInput, AnswerUncheckedUpdateWithoutMediaInput>
  }

  export type AnswerUpdateManyWithWhereWithoutMediaInput = {
    where: AnswerScalarWhereInput
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyWithoutMediaInput>
  }

  export type UserCreateWithoutUserAttemptsInput = {
    id?: string
    firstName: string
    lastName: string
    personnr: string
    tel: string
    email: string
    password: string
    isActive?: boolean
    expiryDate: Date | string
    courses?: CourseCreateNestedManyWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutUserAttemptsInput = {
    id?: string
    firstName: string
    lastName: string
    personnr: string
    tel: string
    email: string
    password: string
    isActive?: boolean
    expiryDate: Date | string
    courses?: CourseUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserCreateOrConnectWithoutUserAttemptsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserAttemptsInput, UserUncheckedCreateWithoutUserAttemptsInput>
  }

  export type CourseCreateWithoutUserAttemptInput = {
    id?: string
    image?: string | null
    isActive?: boolean
    name?: TextCreateNestedManyWithoutCourseNameInput
    description?: TextCreateNestedManyWithoutCourseDescriptionInput
    users?: UserCreateNestedManyWithoutCoursesInput
    questions?: QuestionCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutUserAttemptInput = {
    id?: string
    image?: string | null
    isActive?: boolean
    name?: TextUncheckedCreateNestedManyWithoutCourseNameInput
    description?: TextUncheckedCreateNestedManyWithoutCourseDescriptionInput
    users?: UserUncheckedCreateNestedManyWithoutCoursesInput
    questions?: QuestionUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutUserAttemptInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutUserAttemptInput, CourseUncheckedCreateWithoutUserAttemptInput>
  }

  export type AnsweredQuestionCreateWithoutUserAttemptInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    answer: AnswerCreateNestedOneWithoutAnsweredQuestionsInput
  }

  export type AnsweredQuestionUncheckedCreateWithoutUserAttemptInput = {
    id?: string
    answerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnsweredQuestionCreateOrConnectWithoutUserAttemptInput = {
    where: AnsweredQuestionWhereUniqueInput
    create: XOR<AnsweredQuestionCreateWithoutUserAttemptInput, AnsweredQuestionUncheckedCreateWithoutUserAttemptInput>
  }

  export type AnsweredQuestionCreateManyUserAttemptInputEnvelope = {
    data: AnsweredQuestionCreateManyUserAttemptInput | AnsweredQuestionCreateManyUserAttemptInput[]
    skipDuplicates?: boolean
  }

  export type CategoryCreateWithoutUserAttemptInput = {
    id?: string
    image?: string | null
    questions?: QuestionCreateNestedManyWithoutCategoriesInput
    name?: TextCreateNestedManyWithoutCategoryNameInput
  }

  export type CategoryUncheckedCreateWithoutUserAttemptInput = {
    id?: string
    image?: string | null
    questions?: QuestionUncheckedCreateNestedManyWithoutCategoriesInput
    name?: TextUncheckedCreateNestedManyWithoutCategoryNameInput
  }

  export type CategoryCreateOrConnectWithoutUserAttemptInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutUserAttemptInput, CategoryUncheckedCreateWithoutUserAttemptInput>
  }

  export type AttemptQuestionCreateWithoutUserAttemptInput = {
    id?: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isMarked?: boolean
    isAnswered?: boolean
    question: QuestionCreateNestedOneWithoutAttemptQuestionInput
  }

  export type AttemptQuestionUncheckedCreateWithoutUserAttemptInput = {
    id?: string
    questionId: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isMarked?: boolean
    isAnswered?: boolean
  }

  export type AttemptQuestionCreateOrConnectWithoutUserAttemptInput = {
    where: AttemptQuestionWhereUniqueInput
    create: XOR<AttemptQuestionCreateWithoutUserAttemptInput, AttemptQuestionUncheckedCreateWithoutUserAttemptInput>
  }

  export type AttemptQuestionCreateManyUserAttemptInputEnvelope = {
    data: AttemptQuestionCreateManyUserAttemptInput | AttemptQuestionCreateManyUserAttemptInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutUserAttemptsInput = {
    update: XOR<UserUpdateWithoutUserAttemptsInput, UserUncheckedUpdateWithoutUserAttemptsInput>
    create: XOR<UserCreateWithoutUserAttemptsInput, UserUncheckedCreateWithoutUserAttemptsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserAttemptsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserAttemptsInput, UserUncheckedUpdateWithoutUserAttemptsInput>
  }

  export type UserUpdateWithoutUserAttemptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    personnr?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: CourseUpdateManyWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutUserAttemptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    personnr?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: CourseUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type CourseUpsertWithoutUserAttemptInput = {
    update: XOR<CourseUpdateWithoutUserAttemptInput, CourseUncheckedUpdateWithoutUserAttemptInput>
    create: XOR<CourseCreateWithoutUserAttemptInput, CourseUncheckedCreateWithoutUserAttemptInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutUserAttemptInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutUserAttemptInput, CourseUncheckedUpdateWithoutUserAttemptInput>
  }

  export type CourseUpdateWithoutUserAttemptInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    name?: TextUpdateManyWithoutCourseNameNestedInput
    description?: TextUpdateManyWithoutCourseDescriptionNestedInput
    users?: UserUpdateManyWithoutCoursesNestedInput
    questions?: QuestionUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutUserAttemptInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    name?: TextUncheckedUpdateManyWithoutCourseNameNestedInput
    description?: TextUncheckedUpdateManyWithoutCourseDescriptionNestedInput
    users?: UserUncheckedUpdateManyWithoutCoursesNestedInput
    questions?: QuestionUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type AnsweredQuestionUpsertWithWhereUniqueWithoutUserAttemptInput = {
    where: AnsweredQuestionWhereUniqueInput
    update: XOR<AnsweredQuestionUpdateWithoutUserAttemptInput, AnsweredQuestionUncheckedUpdateWithoutUserAttemptInput>
    create: XOR<AnsweredQuestionCreateWithoutUserAttemptInput, AnsweredQuestionUncheckedCreateWithoutUserAttemptInput>
  }

  export type AnsweredQuestionUpdateWithWhereUniqueWithoutUserAttemptInput = {
    where: AnsweredQuestionWhereUniqueInput
    data: XOR<AnsweredQuestionUpdateWithoutUserAttemptInput, AnsweredQuestionUncheckedUpdateWithoutUserAttemptInput>
  }

  export type AnsweredQuestionUpdateManyWithWhereWithoutUserAttemptInput = {
    where: AnsweredQuestionScalarWhereInput
    data: XOR<AnsweredQuestionUpdateManyMutationInput, AnsweredQuestionUncheckedUpdateManyWithoutUserAttemptInput>
  }

  export type CategoryUpsertWithWhereUniqueWithoutUserAttemptInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutUserAttemptInput, CategoryUncheckedUpdateWithoutUserAttemptInput>
    create: XOR<CategoryCreateWithoutUserAttemptInput, CategoryUncheckedCreateWithoutUserAttemptInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutUserAttemptInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutUserAttemptInput, CategoryUncheckedUpdateWithoutUserAttemptInput>
  }

  export type CategoryUpdateManyWithWhereWithoutUserAttemptInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutUserAttemptInput>
  }

  export type AttemptQuestionUpsertWithWhereUniqueWithoutUserAttemptInput = {
    where: AttemptQuestionWhereUniqueInput
    update: XOR<AttemptQuestionUpdateWithoutUserAttemptInput, AttemptQuestionUncheckedUpdateWithoutUserAttemptInput>
    create: XOR<AttemptQuestionCreateWithoutUserAttemptInput, AttemptQuestionUncheckedCreateWithoutUserAttemptInput>
  }

  export type AttemptQuestionUpdateWithWhereUniqueWithoutUserAttemptInput = {
    where: AttemptQuestionWhereUniqueInput
    data: XOR<AttemptQuestionUpdateWithoutUserAttemptInput, AttemptQuestionUncheckedUpdateWithoutUserAttemptInput>
  }

  export type AttemptQuestionUpdateManyWithWhereWithoutUserAttemptInput = {
    where: AttemptQuestionScalarWhereInput
    data: XOR<AttemptQuestionUpdateManyMutationInput, AttemptQuestionUncheckedUpdateManyWithoutUserAttemptInput>
  }

  export type UserAttemptCreateWithoutQuestionsInput = {
    id?: string
    date: Date | string
    result: number
    isTimed: boolean
    isInstantResult: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    currentQuestionIndex?: number
    endTime?: Date | string | null
    user: UserCreateNestedOneWithoutUserAttemptsInput
    course?: CourseCreateNestedOneWithoutUserAttemptInput
    answeredQuestions?: AnsweredQuestionCreateNestedManyWithoutUserAttemptInput
    categories?: CategoryCreateNestedManyWithoutUserAttemptInput
  }

  export type UserAttemptUncheckedCreateWithoutQuestionsInput = {
    id?: string
    userId: string
    date: Date | string
    result: number
    courseId?: string | null
    isTimed: boolean
    isInstantResult: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    currentQuestionIndex?: number
    endTime?: Date | string | null
    answeredQuestions?: AnsweredQuestionUncheckedCreateNestedManyWithoutUserAttemptInput
    categories?: CategoryUncheckedCreateNestedManyWithoutUserAttemptInput
  }

  export type UserAttemptCreateOrConnectWithoutQuestionsInput = {
    where: UserAttemptWhereUniqueInput
    create: XOR<UserAttemptCreateWithoutQuestionsInput, UserAttemptUncheckedCreateWithoutQuestionsInput>
  }

  export type QuestionCreateWithoutAttemptQuestionInput = {
    id?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    text?: TextCreateNestedManyWithoutQuestionInput
    categories?: CategoryCreateNestedManyWithoutQuestionsInput
    course: CourseCreateNestedOneWithoutQuestionsInput
    answers?: AnswerCreateNestedManyWithoutQuestionInput
    questionMedia?: QuestionMediaCreateNestedManyWithoutQuestionInput
    hint?: TextCreateNestedManyWithoutQuestionHintInput
  }

  export type QuestionUncheckedCreateWithoutAttemptQuestionInput = {
    id?: string
    courseId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    text?: TextUncheckedCreateNestedManyWithoutQuestionInput
    categories?: CategoryUncheckedCreateNestedManyWithoutQuestionsInput
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
    questionMedia?: QuestionMediaUncheckedCreateNestedManyWithoutQuestionInput
    hint?: TextUncheckedCreateNestedManyWithoutQuestionHintInput
  }

  export type QuestionCreateOrConnectWithoutAttemptQuestionInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutAttemptQuestionInput, QuestionUncheckedCreateWithoutAttemptQuestionInput>
  }

  export type UserAttemptUpsertWithoutQuestionsInput = {
    update: XOR<UserAttemptUpdateWithoutQuestionsInput, UserAttemptUncheckedUpdateWithoutQuestionsInput>
    create: XOR<UserAttemptCreateWithoutQuestionsInput, UserAttemptUncheckedCreateWithoutQuestionsInput>
    where?: UserAttemptWhereInput
  }

  export type UserAttemptUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: UserAttemptWhereInput
    data: XOR<UserAttemptUpdateWithoutQuestionsInput, UserAttemptUncheckedUpdateWithoutQuestionsInput>
  }

  export type UserAttemptUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: FloatFieldUpdateOperationsInput | number
    isTimed?: BoolFieldUpdateOperationsInput | boolean
    isInstantResult?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentQuestionIndex?: IntFieldUpdateOperationsInput | number
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutUserAttemptsNestedInput
    course?: CourseUpdateOneWithoutUserAttemptNestedInput
    answeredQuestions?: AnsweredQuestionUpdateManyWithoutUserAttemptNestedInput
    categories?: CategoryUpdateManyWithoutUserAttemptNestedInput
  }

  export type UserAttemptUncheckedUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: FloatFieldUpdateOperationsInput | number
    courseId?: NullableStringFieldUpdateOperationsInput | string | null
    isTimed?: BoolFieldUpdateOperationsInput | boolean
    isInstantResult?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentQuestionIndex?: IntFieldUpdateOperationsInput | number
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answeredQuestions?: AnsweredQuestionUncheckedUpdateManyWithoutUserAttemptNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutUserAttemptNestedInput
  }

  export type QuestionUpsertWithoutAttemptQuestionInput = {
    update: XOR<QuestionUpdateWithoutAttemptQuestionInput, QuestionUncheckedUpdateWithoutAttemptQuestionInput>
    create: XOR<QuestionCreateWithoutAttemptQuestionInput, QuestionUncheckedCreateWithoutAttemptQuestionInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutAttemptQuestionInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutAttemptQuestionInput, QuestionUncheckedUpdateWithoutAttemptQuestionInput>
  }

  export type QuestionUpdateWithoutAttemptQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: TextUpdateManyWithoutQuestionNestedInput
    categories?: CategoryUpdateManyWithoutQuestionsNestedInput
    course?: CourseUpdateOneRequiredWithoutQuestionsNestedInput
    answers?: AnswerUpdateManyWithoutQuestionNestedInput
    questionMedia?: QuestionMediaUpdateManyWithoutQuestionNestedInput
    hint?: TextUpdateManyWithoutQuestionHintNestedInput
  }

  export type QuestionUncheckedUpdateWithoutAttemptQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: TextUncheckedUpdateManyWithoutQuestionNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutQuestionsNestedInput
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
    questionMedia?: QuestionMediaUncheckedUpdateManyWithoutQuestionNestedInput
    hint?: TextUncheckedUpdateManyWithoutQuestionHintNestedInput
  }

  export type UserAttemptCreateWithoutAnsweredQuestionsInput = {
    id?: string
    date: Date | string
    result: number
    isTimed: boolean
    isInstantResult: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    currentQuestionIndex?: number
    endTime?: Date | string | null
    user: UserCreateNestedOneWithoutUserAttemptsInput
    course?: CourseCreateNestedOneWithoutUserAttemptInput
    categories?: CategoryCreateNestedManyWithoutUserAttemptInput
    questions?: AttemptQuestionCreateNestedManyWithoutUserAttemptInput
  }

  export type UserAttemptUncheckedCreateWithoutAnsweredQuestionsInput = {
    id?: string
    userId: string
    date: Date | string
    result: number
    courseId?: string | null
    isTimed: boolean
    isInstantResult: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    currentQuestionIndex?: number
    endTime?: Date | string | null
    categories?: CategoryUncheckedCreateNestedManyWithoutUserAttemptInput
    questions?: AttemptQuestionUncheckedCreateNestedManyWithoutUserAttemptInput
  }

  export type UserAttemptCreateOrConnectWithoutAnsweredQuestionsInput = {
    where: UserAttemptWhereUniqueInput
    create: XOR<UserAttemptCreateWithoutAnsweredQuestionsInput, UserAttemptUncheckedCreateWithoutAnsweredQuestionsInput>
  }

  export type AnswerCreateWithoutAnsweredQuestionsInput = {
    id?: string
    isActive?: boolean
    isCorrect: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    text?: TextCreateNestedManyWithoutAnswerInput
    media?: MediaCreateNestedOneWithoutAnswerInput
    question: QuestionCreateNestedOneWithoutAnswersInput
  }

  export type AnswerUncheckedCreateWithoutAnsweredQuestionsInput = {
    id?: string
    mediaId?: string | null
    isActive?: boolean
    questionId: string
    isCorrect: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    text?: TextUncheckedCreateNestedManyWithoutAnswerInput
  }

  export type AnswerCreateOrConnectWithoutAnsweredQuestionsInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutAnsweredQuestionsInput, AnswerUncheckedCreateWithoutAnsweredQuestionsInput>
  }

  export type UserAttemptUpsertWithoutAnsweredQuestionsInput = {
    update: XOR<UserAttemptUpdateWithoutAnsweredQuestionsInput, UserAttemptUncheckedUpdateWithoutAnsweredQuestionsInput>
    create: XOR<UserAttemptCreateWithoutAnsweredQuestionsInput, UserAttemptUncheckedCreateWithoutAnsweredQuestionsInput>
    where?: UserAttemptWhereInput
  }

  export type UserAttemptUpdateToOneWithWhereWithoutAnsweredQuestionsInput = {
    where?: UserAttemptWhereInput
    data: XOR<UserAttemptUpdateWithoutAnsweredQuestionsInput, UserAttemptUncheckedUpdateWithoutAnsweredQuestionsInput>
  }

  export type UserAttemptUpdateWithoutAnsweredQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: FloatFieldUpdateOperationsInput | number
    isTimed?: BoolFieldUpdateOperationsInput | boolean
    isInstantResult?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentQuestionIndex?: IntFieldUpdateOperationsInput | number
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutUserAttemptsNestedInput
    course?: CourseUpdateOneWithoutUserAttemptNestedInput
    categories?: CategoryUpdateManyWithoutUserAttemptNestedInput
    questions?: AttemptQuestionUpdateManyWithoutUserAttemptNestedInput
  }

  export type UserAttemptUncheckedUpdateWithoutAnsweredQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: FloatFieldUpdateOperationsInput | number
    courseId?: NullableStringFieldUpdateOperationsInput | string | null
    isTimed?: BoolFieldUpdateOperationsInput | boolean
    isInstantResult?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentQuestionIndex?: IntFieldUpdateOperationsInput | number
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    categories?: CategoryUncheckedUpdateManyWithoutUserAttemptNestedInput
    questions?: AttemptQuestionUncheckedUpdateManyWithoutUserAttemptNestedInput
  }

  export type AnswerUpsertWithoutAnsweredQuestionsInput = {
    update: XOR<AnswerUpdateWithoutAnsweredQuestionsInput, AnswerUncheckedUpdateWithoutAnsweredQuestionsInput>
    create: XOR<AnswerCreateWithoutAnsweredQuestionsInput, AnswerUncheckedCreateWithoutAnsweredQuestionsInput>
    where?: AnswerWhereInput
  }

  export type AnswerUpdateToOneWithWhereWithoutAnsweredQuestionsInput = {
    where?: AnswerWhereInput
    data: XOR<AnswerUpdateWithoutAnsweredQuestionsInput, AnswerUncheckedUpdateWithoutAnsweredQuestionsInput>
  }

  export type AnswerUpdateWithoutAnsweredQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: TextUpdateManyWithoutAnswerNestedInput
    media?: MediaUpdateOneWithoutAnswerNestedInput
    question?: QuestionUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type AnswerUncheckedUpdateWithoutAnsweredQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    mediaId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    questionId?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: TextUncheckedUpdateManyWithoutAnswerNestedInput
  }

  export type LanguageCreateWithoutStringsInput = {
    id?: string
    name: string
    code: string
    isActive?: boolean
    isRTL: boolean
  }

  export type LanguageUncheckedCreateWithoutStringsInput = {
    id?: string
    name: string
    code: string
    isActive?: boolean
    isRTL: boolean
  }

  export type LanguageCreateOrConnectWithoutStringsInput = {
    where: LanguageWhereUniqueInput
    create: XOR<LanguageCreateWithoutStringsInput, LanguageUncheckedCreateWithoutStringsInput>
  }

  export type CourseCreateWithoutDescriptionInput = {
    id?: string
    image?: string | null
    isActive?: boolean
    name?: TextCreateNestedManyWithoutCourseNameInput
    users?: UserCreateNestedManyWithoutCoursesInput
    questions?: QuestionCreateNestedManyWithoutCourseInput
    UserAttempt?: UserAttemptCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutDescriptionInput = {
    id?: string
    image?: string | null
    isActive?: boolean
    name?: TextUncheckedCreateNestedManyWithoutCourseNameInput
    users?: UserUncheckedCreateNestedManyWithoutCoursesInput
    questions?: QuestionUncheckedCreateNestedManyWithoutCourseInput
    UserAttempt?: UserAttemptUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutDescriptionInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutDescriptionInput, CourseUncheckedCreateWithoutDescriptionInput>
  }

  export type CourseCreateWithoutNameInput = {
    id?: string
    image?: string | null
    isActive?: boolean
    description?: TextCreateNestedManyWithoutCourseDescriptionInput
    users?: UserCreateNestedManyWithoutCoursesInput
    questions?: QuestionCreateNestedManyWithoutCourseInput
    UserAttempt?: UserAttemptCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutNameInput = {
    id?: string
    image?: string | null
    isActive?: boolean
    description?: TextUncheckedCreateNestedManyWithoutCourseDescriptionInput
    users?: UserUncheckedCreateNestedManyWithoutCoursesInput
    questions?: QuestionUncheckedCreateNestedManyWithoutCourseInput
    UserAttempt?: UserAttemptUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutNameInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutNameInput, CourseUncheckedCreateWithoutNameInput>
  }

  export type CategoryCreateWithoutNameInput = {
    id?: string
    image?: string | null
    questions?: QuestionCreateNestedManyWithoutCategoriesInput
    UserAttempt?: UserAttemptCreateNestedManyWithoutCategoriesInput
  }

  export type CategoryUncheckedCreateWithoutNameInput = {
    id?: string
    image?: string | null
    questions?: QuestionUncheckedCreateNestedManyWithoutCategoriesInput
    UserAttempt?: UserAttemptUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type CategoryCreateOrConnectWithoutNameInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutNameInput, CategoryUncheckedCreateWithoutNameInput>
  }

  export type QuestionCreateWithoutTextInput = {
    id?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryCreateNestedManyWithoutQuestionsInput
    course: CourseCreateNestedOneWithoutQuestionsInput
    answers?: AnswerCreateNestedManyWithoutQuestionInput
    questionMedia?: QuestionMediaCreateNestedManyWithoutQuestionInput
    AttemptQuestion?: AttemptQuestionCreateNestedManyWithoutQuestionInput
    hint?: TextCreateNestedManyWithoutQuestionHintInput
  }

  export type QuestionUncheckedCreateWithoutTextInput = {
    id?: string
    courseId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutQuestionsInput
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
    questionMedia?: QuestionMediaUncheckedCreateNestedManyWithoutQuestionInput
    AttemptQuestion?: AttemptQuestionUncheckedCreateNestedManyWithoutQuestionInput
    hint?: TextUncheckedCreateNestedManyWithoutQuestionHintInput
  }

  export type QuestionCreateOrConnectWithoutTextInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutTextInput, QuestionUncheckedCreateWithoutTextInput>
  }

  export type AnswerCreateWithoutTextInput = {
    id?: string
    isActive?: boolean
    isCorrect: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    media?: MediaCreateNestedOneWithoutAnswerInput
    question: QuestionCreateNestedOneWithoutAnswersInput
    answeredQuestions?: AnsweredQuestionCreateNestedManyWithoutAnswerInput
  }

  export type AnswerUncheckedCreateWithoutTextInput = {
    id?: string
    mediaId?: string | null
    isActive?: boolean
    questionId: string
    isCorrect: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    answeredQuestions?: AnsweredQuestionUncheckedCreateNestedManyWithoutAnswerInput
  }

  export type AnswerCreateOrConnectWithoutTextInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutTextInput, AnswerUncheckedCreateWithoutTextInput>
  }

  export type QuestionCreateWithoutHintInput = {
    id?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    text?: TextCreateNestedManyWithoutQuestionInput
    categories?: CategoryCreateNestedManyWithoutQuestionsInput
    course: CourseCreateNestedOneWithoutQuestionsInput
    answers?: AnswerCreateNestedManyWithoutQuestionInput
    questionMedia?: QuestionMediaCreateNestedManyWithoutQuestionInput
    AttemptQuestion?: AttemptQuestionCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutHintInput = {
    id?: string
    courseId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    text?: TextUncheckedCreateNestedManyWithoutQuestionInput
    categories?: CategoryUncheckedCreateNestedManyWithoutQuestionsInput
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
    questionMedia?: QuestionMediaUncheckedCreateNestedManyWithoutQuestionInput
    AttemptQuestion?: AttemptQuestionUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutHintInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutHintInput, QuestionUncheckedCreateWithoutHintInput>
  }

  export type LanguageUpsertWithoutStringsInput = {
    update: XOR<LanguageUpdateWithoutStringsInput, LanguageUncheckedUpdateWithoutStringsInput>
    create: XOR<LanguageCreateWithoutStringsInput, LanguageUncheckedCreateWithoutStringsInput>
    where?: LanguageWhereInput
  }

  export type LanguageUpdateToOneWithWhereWithoutStringsInput = {
    where?: LanguageWhereInput
    data: XOR<LanguageUpdateWithoutStringsInput, LanguageUncheckedUpdateWithoutStringsInput>
  }

  export type LanguageUpdateWithoutStringsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isRTL?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LanguageUncheckedUpdateWithoutStringsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isRTL?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CourseUpsertWithoutDescriptionInput = {
    update: XOR<CourseUpdateWithoutDescriptionInput, CourseUncheckedUpdateWithoutDescriptionInput>
    create: XOR<CourseCreateWithoutDescriptionInput, CourseUncheckedCreateWithoutDescriptionInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutDescriptionInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutDescriptionInput, CourseUncheckedUpdateWithoutDescriptionInput>
  }

  export type CourseUpdateWithoutDescriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    name?: TextUpdateManyWithoutCourseNameNestedInput
    users?: UserUpdateManyWithoutCoursesNestedInput
    questions?: QuestionUpdateManyWithoutCourseNestedInput
    UserAttempt?: UserAttemptUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutDescriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    name?: TextUncheckedUpdateManyWithoutCourseNameNestedInput
    users?: UserUncheckedUpdateManyWithoutCoursesNestedInput
    questions?: QuestionUncheckedUpdateManyWithoutCourseNestedInput
    UserAttempt?: UserAttemptUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseUpsertWithoutNameInput = {
    update: XOR<CourseUpdateWithoutNameInput, CourseUncheckedUpdateWithoutNameInput>
    create: XOR<CourseCreateWithoutNameInput, CourseUncheckedCreateWithoutNameInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutNameInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutNameInput, CourseUncheckedUpdateWithoutNameInput>
  }

  export type CourseUpdateWithoutNameInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    description?: TextUpdateManyWithoutCourseDescriptionNestedInput
    users?: UserUpdateManyWithoutCoursesNestedInput
    questions?: QuestionUpdateManyWithoutCourseNestedInput
    UserAttempt?: UserAttemptUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutNameInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    description?: TextUncheckedUpdateManyWithoutCourseDescriptionNestedInput
    users?: UserUncheckedUpdateManyWithoutCoursesNestedInput
    questions?: QuestionUncheckedUpdateManyWithoutCourseNestedInput
    UserAttempt?: UserAttemptUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CategoryUpsertWithoutNameInput = {
    update: XOR<CategoryUpdateWithoutNameInput, CategoryUncheckedUpdateWithoutNameInput>
    create: XOR<CategoryCreateWithoutNameInput, CategoryUncheckedCreateWithoutNameInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutNameInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutNameInput, CategoryUncheckedUpdateWithoutNameInput>
  }

  export type CategoryUpdateWithoutNameInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    questions?: QuestionUpdateManyWithoutCategoriesNestedInput
    UserAttempt?: UserAttemptUpdateManyWithoutCategoriesNestedInput
  }

  export type CategoryUncheckedUpdateWithoutNameInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    questions?: QuestionUncheckedUpdateManyWithoutCategoriesNestedInput
    UserAttempt?: UserAttemptUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type QuestionUpsertWithoutTextInput = {
    update: XOR<QuestionUpdateWithoutTextInput, QuestionUncheckedUpdateWithoutTextInput>
    create: XOR<QuestionCreateWithoutTextInput, QuestionUncheckedCreateWithoutTextInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutTextInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutTextInput, QuestionUncheckedUpdateWithoutTextInput>
  }

  export type QuestionUpdateWithoutTextInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUpdateManyWithoutQuestionsNestedInput
    course?: CourseUpdateOneRequiredWithoutQuestionsNestedInput
    answers?: AnswerUpdateManyWithoutQuestionNestedInput
    questionMedia?: QuestionMediaUpdateManyWithoutQuestionNestedInput
    AttemptQuestion?: AttemptQuestionUpdateManyWithoutQuestionNestedInput
    hint?: TextUpdateManyWithoutQuestionHintNestedInput
  }

  export type QuestionUncheckedUpdateWithoutTextInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutQuestionsNestedInput
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
    questionMedia?: QuestionMediaUncheckedUpdateManyWithoutQuestionNestedInput
    AttemptQuestion?: AttemptQuestionUncheckedUpdateManyWithoutQuestionNestedInput
    hint?: TextUncheckedUpdateManyWithoutQuestionHintNestedInput
  }

  export type AnswerUpsertWithoutTextInput = {
    update: XOR<AnswerUpdateWithoutTextInput, AnswerUncheckedUpdateWithoutTextInput>
    create: XOR<AnswerCreateWithoutTextInput, AnswerUncheckedCreateWithoutTextInput>
    where?: AnswerWhereInput
  }

  export type AnswerUpdateToOneWithWhereWithoutTextInput = {
    where?: AnswerWhereInput
    data: XOR<AnswerUpdateWithoutTextInput, AnswerUncheckedUpdateWithoutTextInput>
  }

  export type AnswerUpdateWithoutTextInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    media?: MediaUpdateOneWithoutAnswerNestedInput
    question?: QuestionUpdateOneRequiredWithoutAnswersNestedInput
    answeredQuestions?: AnsweredQuestionUpdateManyWithoutAnswerNestedInput
  }

  export type AnswerUncheckedUpdateWithoutTextInput = {
    id?: StringFieldUpdateOperationsInput | string
    mediaId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    questionId?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answeredQuestions?: AnsweredQuestionUncheckedUpdateManyWithoutAnswerNestedInput
  }

  export type QuestionUpsertWithoutHintInput = {
    update: XOR<QuestionUpdateWithoutHintInput, QuestionUncheckedUpdateWithoutHintInput>
    create: XOR<QuestionCreateWithoutHintInput, QuestionUncheckedCreateWithoutHintInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutHintInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutHintInput, QuestionUncheckedUpdateWithoutHintInput>
  }

  export type QuestionUpdateWithoutHintInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: TextUpdateManyWithoutQuestionNestedInput
    categories?: CategoryUpdateManyWithoutQuestionsNestedInput
    course?: CourseUpdateOneRequiredWithoutQuestionsNestedInput
    answers?: AnswerUpdateManyWithoutQuestionNestedInput
    questionMedia?: QuestionMediaUpdateManyWithoutQuestionNestedInput
    AttemptQuestion?: AttemptQuestionUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutHintInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: TextUncheckedUpdateManyWithoutQuestionNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutQuestionsNestedInput
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
    questionMedia?: QuestionMediaUncheckedUpdateManyWithoutQuestionNestedInput
    AttemptQuestion?: AttemptQuestionUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type TextCreateWithoutLanguageInput = {
    id?: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
    CourseDescription?: CourseCreateNestedOneWithoutDescriptionInput
    CourseName?: CourseCreateNestedOneWithoutNameInput
    CategoryName?: CategoryCreateNestedOneWithoutNameInput
    Question?: QuestionCreateNestedOneWithoutTextInput
    Answer?: AnswerCreateNestedOneWithoutTextInput
    questionHint?: QuestionCreateNestedOneWithoutHintInput
  }

  export type TextUncheckedCreateWithoutLanguageInput = {
    id?: string
    value: string
    courseDescriptionId?: string | null
    courseNameId?: string | null
    categoryNameId?: string | null
    questionId?: string | null
    answerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    questionHintId?: string | null
  }

  export type TextCreateOrConnectWithoutLanguageInput = {
    where: TextWhereUniqueInput
    create: XOR<TextCreateWithoutLanguageInput, TextUncheckedCreateWithoutLanguageInput>
  }

  export type TextCreateManyLanguageInputEnvelope = {
    data: TextCreateManyLanguageInput | TextCreateManyLanguageInput[]
    skipDuplicates?: boolean
  }

  export type TextUpsertWithWhereUniqueWithoutLanguageInput = {
    where: TextWhereUniqueInput
    update: XOR<TextUpdateWithoutLanguageInput, TextUncheckedUpdateWithoutLanguageInput>
    create: XOR<TextCreateWithoutLanguageInput, TextUncheckedCreateWithoutLanguageInput>
  }

  export type TextUpdateWithWhereUniqueWithoutLanguageInput = {
    where: TextWhereUniqueInput
    data: XOR<TextUpdateWithoutLanguageInput, TextUncheckedUpdateWithoutLanguageInput>
  }

  export type TextUpdateManyWithWhereWithoutLanguageInput = {
    where: TextScalarWhereInput
    data: XOR<TextUpdateManyMutationInput, TextUncheckedUpdateManyWithoutLanguageInput>
  }

  export type UserAttemptCreateManyUserInput = {
    id?: string
    date: Date | string
    result: number
    courseId?: string | null
    isTimed: boolean
    isInstantResult: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    currentQuestionIndex?: number
    endTime?: Date | string | null
  }

  export type CourseUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    name?: TextUpdateManyWithoutCourseNameNestedInput
    description?: TextUpdateManyWithoutCourseDescriptionNestedInput
    questions?: QuestionUpdateManyWithoutCourseNestedInput
    UserAttempt?: UserAttemptUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    name?: TextUncheckedUpdateManyWithoutCourseNameNestedInput
    description?: TextUncheckedUpdateManyWithoutCourseDescriptionNestedInput
    questions?: QuestionUncheckedUpdateManyWithoutCourseNestedInput
    UserAttempt?: UserAttemptUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserAttemptUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: FloatFieldUpdateOperationsInput | number
    isTimed?: BoolFieldUpdateOperationsInput | boolean
    isInstantResult?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentQuestionIndex?: IntFieldUpdateOperationsInput | number
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    course?: CourseUpdateOneWithoutUserAttemptNestedInput
    answeredQuestions?: AnsweredQuestionUpdateManyWithoutUserAttemptNestedInput
    categories?: CategoryUpdateManyWithoutUserAttemptNestedInput
    questions?: AttemptQuestionUpdateManyWithoutUserAttemptNestedInput
  }

  export type UserAttemptUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: FloatFieldUpdateOperationsInput | number
    courseId?: NullableStringFieldUpdateOperationsInput | string | null
    isTimed?: BoolFieldUpdateOperationsInput | boolean
    isInstantResult?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentQuestionIndex?: IntFieldUpdateOperationsInput | number
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answeredQuestions?: AnsweredQuestionUncheckedUpdateManyWithoutUserAttemptNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutUserAttemptNestedInput
    questions?: AttemptQuestionUncheckedUpdateManyWithoutUserAttemptNestedInput
  }

  export type UserAttemptUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: FloatFieldUpdateOperationsInput | number
    courseId?: NullableStringFieldUpdateOperationsInput | string | null
    isTimed?: BoolFieldUpdateOperationsInput | boolean
    isInstantResult?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentQuestionIndex?: IntFieldUpdateOperationsInput | number
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TextCreateManyCourseNameInput = {
    id?: string
    value: string
    languageId: string
    courseDescriptionId?: string | null
    categoryNameId?: string | null
    questionId?: string | null
    answerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    questionHintId?: string | null
  }

  export type TextCreateManyCourseDescriptionInput = {
    id?: string
    value: string
    languageId: string
    courseNameId?: string | null
    categoryNameId?: string | null
    questionId?: string | null
    answerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    questionHintId?: string | null
  }

  export type QuestionCreateManyCourseInput = {
    id?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserAttemptCreateManyCourseInput = {
    id?: string
    userId: string
    date: Date | string
    result: number
    isTimed: boolean
    isInstantResult: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    currentQuestionIndex?: number
    endTime?: Date | string | null
  }

  export type TextUpdateWithoutCourseNameInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    language?: LanguageUpdateOneRequiredWithoutStringsNestedInput
    CourseDescription?: CourseUpdateOneWithoutDescriptionNestedInput
    CategoryName?: CategoryUpdateOneWithoutNameNestedInput
    Question?: QuestionUpdateOneWithoutTextNestedInput
    Answer?: AnswerUpdateOneWithoutTextNestedInput
    questionHint?: QuestionUpdateOneWithoutHintNestedInput
  }

  export type TextUncheckedUpdateWithoutCourseNameInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    languageId?: StringFieldUpdateOperationsInput | string
    courseDescriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryNameId?: NullableStringFieldUpdateOperationsInput | string | null
    questionId?: NullableStringFieldUpdateOperationsInput | string | null
    answerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questionHintId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TextUncheckedUpdateManyWithoutCourseNameInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    languageId?: StringFieldUpdateOperationsInput | string
    courseDescriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryNameId?: NullableStringFieldUpdateOperationsInput | string | null
    questionId?: NullableStringFieldUpdateOperationsInput | string | null
    answerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questionHintId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TextUpdateWithoutCourseDescriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    language?: LanguageUpdateOneRequiredWithoutStringsNestedInput
    CourseName?: CourseUpdateOneWithoutNameNestedInput
    CategoryName?: CategoryUpdateOneWithoutNameNestedInput
    Question?: QuestionUpdateOneWithoutTextNestedInput
    Answer?: AnswerUpdateOneWithoutTextNestedInput
    questionHint?: QuestionUpdateOneWithoutHintNestedInput
  }

  export type TextUncheckedUpdateWithoutCourseDescriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    languageId?: StringFieldUpdateOperationsInput | string
    courseNameId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryNameId?: NullableStringFieldUpdateOperationsInput | string | null
    questionId?: NullableStringFieldUpdateOperationsInput | string | null
    answerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questionHintId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TextUncheckedUpdateManyWithoutCourseDescriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    languageId?: StringFieldUpdateOperationsInput | string
    courseNameId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryNameId?: NullableStringFieldUpdateOperationsInput | string | null
    questionId?: NullableStringFieldUpdateOperationsInput | string | null
    answerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questionHintId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    personnr?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userAttempts?: UserAttemptUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    personnr?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userAttempts?: UserAttemptUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    personnr?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: TextUpdateManyWithoutQuestionNestedInput
    categories?: CategoryUpdateManyWithoutQuestionsNestedInput
    answers?: AnswerUpdateManyWithoutQuestionNestedInput
    questionMedia?: QuestionMediaUpdateManyWithoutQuestionNestedInput
    AttemptQuestion?: AttemptQuestionUpdateManyWithoutQuestionNestedInput
    hint?: TextUpdateManyWithoutQuestionHintNestedInput
  }

  export type QuestionUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: TextUncheckedUpdateManyWithoutQuestionNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutQuestionsNestedInput
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
    questionMedia?: QuestionMediaUncheckedUpdateManyWithoutQuestionNestedInput
    AttemptQuestion?: AttemptQuestionUncheckedUpdateManyWithoutQuestionNestedInput
    hint?: TextUncheckedUpdateManyWithoutQuestionHintNestedInput
  }

  export type QuestionUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAttemptUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: FloatFieldUpdateOperationsInput | number
    isTimed?: BoolFieldUpdateOperationsInput | boolean
    isInstantResult?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentQuestionIndex?: IntFieldUpdateOperationsInput | number
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutUserAttemptsNestedInput
    answeredQuestions?: AnsweredQuestionUpdateManyWithoutUserAttemptNestedInput
    categories?: CategoryUpdateManyWithoutUserAttemptNestedInput
    questions?: AttemptQuestionUpdateManyWithoutUserAttemptNestedInput
  }

  export type UserAttemptUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: FloatFieldUpdateOperationsInput | number
    isTimed?: BoolFieldUpdateOperationsInput | boolean
    isInstantResult?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentQuestionIndex?: IntFieldUpdateOperationsInput | number
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answeredQuestions?: AnsweredQuestionUncheckedUpdateManyWithoutUserAttemptNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutUserAttemptNestedInput
    questions?: AttemptQuestionUncheckedUpdateManyWithoutUserAttemptNestedInput
  }

  export type UserAttemptUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: FloatFieldUpdateOperationsInput | number
    isTimed?: BoolFieldUpdateOperationsInput | boolean
    isInstantResult?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentQuestionIndex?: IntFieldUpdateOperationsInput | number
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TextCreateManyCategoryNameInput = {
    id?: string
    value: string
    languageId: string
    courseDescriptionId?: string | null
    courseNameId?: string | null
    questionId?: string | null
    answerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    questionHintId?: string | null
  }

  export type QuestionUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: TextUpdateManyWithoutQuestionNestedInput
    course?: CourseUpdateOneRequiredWithoutQuestionsNestedInput
    answers?: AnswerUpdateManyWithoutQuestionNestedInput
    questionMedia?: QuestionMediaUpdateManyWithoutQuestionNestedInput
    AttemptQuestion?: AttemptQuestionUpdateManyWithoutQuestionNestedInput
    hint?: TextUpdateManyWithoutQuestionHintNestedInput
  }

  export type QuestionUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: TextUncheckedUpdateManyWithoutQuestionNestedInput
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
    questionMedia?: QuestionMediaUncheckedUpdateManyWithoutQuestionNestedInput
    AttemptQuestion?: AttemptQuestionUncheckedUpdateManyWithoutQuestionNestedInput
    hint?: TextUncheckedUpdateManyWithoutQuestionHintNestedInput
  }

  export type QuestionUncheckedUpdateManyWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TextUpdateWithoutCategoryNameInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    language?: LanguageUpdateOneRequiredWithoutStringsNestedInput
    CourseDescription?: CourseUpdateOneWithoutDescriptionNestedInput
    CourseName?: CourseUpdateOneWithoutNameNestedInput
    Question?: QuestionUpdateOneWithoutTextNestedInput
    Answer?: AnswerUpdateOneWithoutTextNestedInput
    questionHint?: QuestionUpdateOneWithoutHintNestedInput
  }

  export type TextUncheckedUpdateWithoutCategoryNameInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    languageId?: StringFieldUpdateOperationsInput | string
    courseDescriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    courseNameId?: NullableStringFieldUpdateOperationsInput | string | null
    questionId?: NullableStringFieldUpdateOperationsInput | string | null
    answerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questionHintId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TextUncheckedUpdateManyWithoutCategoryNameInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    languageId?: StringFieldUpdateOperationsInput | string
    courseDescriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    courseNameId?: NullableStringFieldUpdateOperationsInput | string | null
    questionId?: NullableStringFieldUpdateOperationsInput | string | null
    answerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questionHintId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserAttemptUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: FloatFieldUpdateOperationsInput | number
    isTimed?: BoolFieldUpdateOperationsInput | boolean
    isInstantResult?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentQuestionIndex?: IntFieldUpdateOperationsInput | number
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutUserAttemptsNestedInput
    course?: CourseUpdateOneWithoutUserAttemptNestedInput
    answeredQuestions?: AnsweredQuestionUpdateManyWithoutUserAttemptNestedInput
    questions?: AttemptQuestionUpdateManyWithoutUserAttemptNestedInput
  }

  export type UserAttemptUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: FloatFieldUpdateOperationsInput | number
    courseId?: NullableStringFieldUpdateOperationsInput | string | null
    isTimed?: BoolFieldUpdateOperationsInput | boolean
    isInstantResult?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentQuestionIndex?: IntFieldUpdateOperationsInput | number
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answeredQuestions?: AnsweredQuestionUncheckedUpdateManyWithoutUserAttemptNestedInput
    questions?: AttemptQuestionUncheckedUpdateManyWithoutUserAttemptNestedInput
  }

  export type UserAttemptUncheckedUpdateManyWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: FloatFieldUpdateOperationsInput | number
    courseId?: NullableStringFieldUpdateOperationsInput | string | null
    isTimed?: BoolFieldUpdateOperationsInput | boolean
    isInstantResult?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentQuestionIndex?: IntFieldUpdateOperationsInput | number
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TextCreateManyQuestionInput = {
    id?: string
    value: string
    languageId: string
    courseDescriptionId?: string | null
    courseNameId?: string | null
    categoryNameId?: string | null
    answerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    questionHintId?: string | null
  }

  export type AnswerCreateManyQuestionInput = {
    id?: string
    mediaId?: string | null
    isActive?: boolean
    isCorrect: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionMediaCreateManyQuestionInput = {
    id?: string
    mediaId: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttemptQuestionCreateManyQuestionInput = {
    id?: string
    userAttemptId: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isMarked?: boolean
    isAnswered?: boolean
  }

  export type TextCreateManyQuestionHintInput = {
    id?: string
    value: string
    languageId: string
    courseDescriptionId?: string | null
    courseNameId?: string | null
    categoryNameId?: string | null
    questionId?: string | null
    answerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TextUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    language?: LanguageUpdateOneRequiredWithoutStringsNestedInput
    CourseDescription?: CourseUpdateOneWithoutDescriptionNestedInput
    CourseName?: CourseUpdateOneWithoutNameNestedInput
    CategoryName?: CategoryUpdateOneWithoutNameNestedInput
    Answer?: AnswerUpdateOneWithoutTextNestedInput
    questionHint?: QuestionUpdateOneWithoutHintNestedInput
  }

  export type TextUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    languageId?: StringFieldUpdateOperationsInput | string
    courseDescriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    courseNameId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryNameId?: NullableStringFieldUpdateOperationsInput | string | null
    answerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questionHintId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TextUncheckedUpdateManyWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    languageId?: StringFieldUpdateOperationsInput | string
    courseDescriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    courseNameId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryNameId?: NullableStringFieldUpdateOperationsInput | string | null
    answerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questionHintId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    name?: TextUpdateManyWithoutCategoryNameNestedInput
    UserAttempt?: UserAttemptUpdateManyWithoutCategoriesNestedInput
  }

  export type CategoryUncheckedUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    name?: TextUncheckedUpdateManyWithoutCategoryNameNestedInput
    UserAttempt?: UserAttemptUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AnswerUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: TextUpdateManyWithoutAnswerNestedInput
    media?: MediaUpdateOneWithoutAnswerNestedInput
    answeredQuestions?: AnsweredQuestionUpdateManyWithoutAnswerNestedInput
  }

  export type AnswerUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    mediaId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: TextUncheckedUpdateManyWithoutAnswerNestedInput
    answeredQuestions?: AnsweredQuestionUncheckedUpdateManyWithoutAnswerNestedInput
  }

  export type AnswerUncheckedUpdateManyWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    mediaId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionMediaUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    media?: MediaUpdateOneRequiredWithoutQuestionMediaNestedInput
  }

  export type QuestionMediaUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    mediaId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionMediaUncheckedUpdateManyWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    mediaId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttemptQuestionUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isMarked?: BoolFieldUpdateOperationsInput | boolean
    isAnswered?: BoolFieldUpdateOperationsInput | boolean
    userAttempt?: UserAttemptUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type AttemptQuestionUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userAttemptId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isMarked?: BoolFieldUpdateOperationsInput | boolean
    isAnswered?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AttemptQuestionUncheckedUpdateManyWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userAttemptId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isMarked?: BoolFieldUpdateOperationsInput | boolean
    isAnswered?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TextUpdateWithoutQuestionHintInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    language?: LanguageUpdateOneRequiredWithoutStringsNestedInput
    CourseDescription?: CourseUpdateOneWithoutDescriptionNestedInput
    CourseName?: CourseUpdateOneWithoutNameNestedInput
    CategoryName?: CategoryUpdateOneWithoutNameNestedInput
    Question?: QuestionUpdateOneWithoutTextNestedInput
    Answer?: AnswerUpdateOneWithoutTextNestedInput
  }

  export type TextUncheckedUpdateWithoutQuestionHintInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    languageId?: StringFieldUpdateOperationsInput | string
    courseDescriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    courseNameId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryNameId?: NullableStringFieldUpdateOperationsInput | string | null
    questionId?: NullableStringFieldUpdateOperationsInput | string | null
    answerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TextUncheckedUpdateManyWithoutQuestionHintInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    languageId?: StringFieldUpdateOperationsInput | string
    courseDescriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    courseNameId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryNameId?: NullableStringFieldUpdateOperationsInput | string | null
    questionId?: NullableStringFieldUpdateOperationsInput | string | null
    answerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TextCreateManyAnswerInput = {
    id?: string
    value: string
    languageId: string
    courseDescriptionId?: string | null
    courseNameId?: string | null
    categoryNameId?: string | null
    questionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    questionHintId?: string | null
  }

  export type AnsweredQuestionCreateManyAnswerInput = {
    id?: string
    userAttemptId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TextUpdateWithoutAnswerInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    language?: LanguageUpdateOneRequiredWithoutStringsNestedInput
    CourseDescription?: CourseUpdateOneWithoutDescriptionNestedInput
    CourseName?: CourseUpdateOneWithoutNameNestedInput
    CategoryName?: CategoryUpdateOneWithoutNameNestedInput
    Question?: QuestionUpdateOneWithoutTextNestedInput
    questionHint?: QuestionUpdateOneWithoutHintNestedInput
  }

  export type TextUncheckedUpdateWithoutAnswerInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    languageId?: StringFieldUpdateOperationsInput | string
    courseDescriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    courseNameId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryNameId?: NullableStringFieldUpdateOperationsInput | string | null
    questionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questionHintId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TextUncheckedUpdateManyWithoutAnswerInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    languageId?: StringFieldUpdateOperationsInput | string
    courseDescriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    courseNameId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryNameId?: NullableStringFieldUpdateOperationsInput | string | null
    questionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questionHintId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AnsweredQuestionUpdateWithoutAnswerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userAttempt?: UserAttemptUpdateOneRequiredWithoutAnsweredQuestionsNestedInput
  }

  export type AnsweredQuestionUncheckedUpdateWithoutAnswerInput = {
    id?: StringFieldUpdateOperationsInput | string
    userAttemptId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnsweredQuestionUncheckedUpdateManyWithoutAnswerInput = {
    id?: StringFieldUpdateOperationsInput | string
    userAttemptId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionMediaCreateManyMediaInput = {
    id?: string
    questionId: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnswerCreateManyMediaInput = {
    id?: string
    isActive?: boolean
    questionId: string
    isCorrect: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionMediaUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: QuestionUpdateOneRequiredWithoutQuestionMediaNestedInput
  }

  export type QuestionMediaUncheckedUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionMediaUncheckedUpdateManyWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: TextUpdateManyWithoutAnswerNestedInput
    question?: QuestionUpdateOneRequiredWithoutAnswersNestedInput
    answeredQuestions?: AnsweredQuestionUpdateManyWithoutAnswerNestedInput
  }

  export type AnswerUncheckedUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    questionId?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: TextUncheckedUpdateManyWithoutAnswerNestedInput
    answeredQuestions?: AnsweredQuestionUncheckedUpdateManyWithoutAnswerNestedInput
  }

  export type AnswerUncheckedUpdateManyWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    questionId?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnsweredQuestionCreateManyUserAttemptInput = {
    id?: string
    answerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttemptQuestionCreateManyUserAttemptInput = {
    id?: string
    questionId: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isMarked?: boolean
    isAnswered?: boolean
  }

  export type AnsweredQuestionUpdateWithoutUserAttemptInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answer?: AnswerUpdateOneRequiredWithoutAnsweredQuestionsNestedInput
  }

  export type AnsweredQuestionUncheckedUpdateWithoutUserAttemptInput = {
    id?: StringFieldUpdateOperationsInput | string
    answerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnsweredQuestionUncheckedUpdateManyWithoutUserAttemptInput = {
    id?: StringFieldUpdateOperationsInput | string
    answerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUpdateWithoutUserAttemptInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    questions?: QuestionUpdateManyWithoutCategoriesNestedInput
    name?: TextUpdateManyWithoutCategoryNameNestedInput
  }

  export type CategoryUncheckedUpdateWithoutUserAttemptInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    questions?: QuestionUncheckedUpdateManyWithoutCategoriesNestedInput
    name?: TextUncheckedUpdateManyWithoutCategoryNameNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutUserAttemptInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AttemptQuestionUpdateWithoutUserAttemptInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isMarked?: BoolFieldUpdateOperationsInput | boolean
    isAnswered?: BoolFieldUpdateOperationsInput | boolean
    question?: QuestionUpdateOneRequiredWithoutAttemptQuestionNestedInput
  }

  export type AttemptQuestionUncheckedUpdateWithoutUserAttemptInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isMarked?: BoolFieldUpdateOperationsInput | boolean
    isAnswered?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AttemptQuestionUncheckedUpdateManyWithoutUserAttemptInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isMarked?: BoolFieldUpdateOperationsInput | boolean
    isAnswered?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TextCreateManyLanguageInput = {
    id?: string
    value: string
    courseDescriptionId?: string | null
    courseNameId?: string | null
    categoryNameId?: string | null
    questionId?: string | null
    answerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    questionHintId?: string | null
  }

  export type TextUpdateWithoutLanguageInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CourseDescription?: CourseUpdateOneWithoutDescriptionNestedInput
    CourseName?: CourseUpdateOneWithoutNameNestedInput
    CategoryName?: CategoryUpdateOneWithoutNameNestedInput
    Question?: QuestionUpdateOneWithoutTextNestedInput
    Answer?: AnswerUpdateOneWithoutTextNestedInput
    questionHint?: QuestionUpdateOneWithoutHintNestedInput
  }

  export type TextUncheckedUpdateWithoutLanguageInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    courseDescriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    courseNameId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryNameId?: NullableStringFieldUpdateOperationsInput | string | null
    questionId?: NullableStringFieldUpdateOperationsInput | string | null
    answerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questionHintId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TextUncheckedUpdateManyWithoutLanguageInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    courseDescriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    courseNameId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryNameId?: NullableStringFieldUpdateOperationsInput | string | null
    questionId?: NullableStringFieldUpdateOperationsInput | string | null
    answerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questionHintId?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CourseCountOutputTypeDefaultArgs instead
     */
    export type CourseCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CourseCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryCountOutputTypeDefaultArgs instead
     */
    export type CategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use QuestionCountOutputTypeDefaultArgs instead
     */
    export type QuestionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = QuestionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AnswerCountOutputTypeDefaultArgs instead
     */
    export type AnswerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AnswerCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MediaCountOutputTypeDefaultArgs instead
     */
    export type MediaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MediaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserAttemptCountOutputTypeDefaultArgs instead
     */
    export type UserAttemptCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserAttemptCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LanguageCountOutputTypeDefaultArgs instead
     */
    export type LanguageCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LanguageCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CourseDefaultArgs instead
     */
    export type CourseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CourseDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryDefaultArgs instead
     */
    export type CategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use QuestionDefaultArgs instead
     */
    export type QuestionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = QuestionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AnswerDefaultArgs instead
     */
    export type AnswerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AnswerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use QuestionMediaDefaultArgs instead
     */
    export type QuestionMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = QuestionMediaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MediaDefaultArgs instead
     */
    export type MediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MediaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserAttemptDefaultArgs instead
     */
    export type UserAttemptArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserAttemptDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AttemptQuestionDefaultArgs instead
     */
    export type AttemptQuestionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AttemptQuestionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AnsweredQuestionDefaultArgs instead
     */
    export type AnsweredQuestionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AnsweredQuestionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TextDefaultArgs instead
     */
    export type TextArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TextDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LanguageDefaultArgs instead
     */
    export type LanguageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LanguageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdminDefaultArgs instead
     */
    export type AdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdminDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SettingsDefaultArgs instead
     */
    export type SettingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SettingsDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}