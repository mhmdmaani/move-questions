-- CreateTable
CREATE TABLE `audio` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `enabled` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NULL,
    `updated_at` DATETIME(3) NULL,
    `deleted_at` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `authorizations` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `enabled` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NULL,
    `updated_at` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `choices` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `enabled` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NULL,
    `updated_at` DATETIME(3) NULL,
    `deleted_at` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `choices_lang` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `ch_id` BIGINT NOT NULL,
    `lang` BIGINT NOT NULL,
    `text` VARCHAR(191) NOT NULL,
    `hint` VARCHAR(191) NULL,
    `audio` BIGINT NULL,
    `created_at` DATETIME(3) NULL,
    `updated_at` DATETIME(3) NULL,
    `deleted_at` DATETIME(3) NULL,

    UNIQUE INDEX `choices_lang_ch_id_lang_deleted_at_key`(`ch_id`, `lang`, `deleted_at`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `failed_jobs` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `uuid` VARCHAR(191) NOT NULL,
    `connection` VARCHAR(191) NOT NULL,
    `queue` VARCHAR(191) NOT NULL,
    `payload` VARCHAR(191) NOT NULL,
    `exception` VARCHAR(191) NOT NULL,
    `failed_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `failed_jobs_uuid_key`(`uuid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `groups` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `code` VARCHAR(191) NOT NULL,
    `level` INTEGER NOT NULL DEFAULT 1,
    `media` BIGINT NULL,
    `rand_count` INTEGER NOT NULL DEFAULT 0,
    `enabled` BOOLEAN NOT NULL DEFAULT true,
    `other` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NULL,
    `updated_at` DATETIME(3) NULL,
    `deleted_at` DATETIME(3) NULL,

    UNIQUE INDEX `groups_code_deleted_at_key`(`code`, `deleted_at`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `groups_lang` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `gp_id` BIGINT NOT NULL,
    `lang` BIGINT NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `desc` VARCHAR(191) NULL,
    `audio` BIGINT NULL,
    `created_at` DATETIME(3) NULL,
    `updated_at` DATETIME(3) NULL,
    `deleted_at` DATETIME(3) NULL,

    UNIQUE INDEX `groups_lang_gp_id_lang_deleted_at_key`(`gp_id`, `lang`, `deleted_at`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `languages` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `code` VARCHAR(191) NOT NULL,
    `voice_code` VARCHAR(191) NOT NULL,
    `voice_type` VARCHAR(191) NOT NULL,
    `voice_name` VARCHAR(191) NOT NULL,
    `voice_gender` VARCHAR(191) NOT NULL,
    `voice_profile` VARCHAR(191) NOT NULL,
    `enabled` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NULL,
    `updated_at` DATETIME(3) NULL,
    `deleted_at` DATETIME(3) NULL,

    UNIQUE INDEX `languages_code_key`(`code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `licenses` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `code` VARCHAR(191) NOT NULL,
    `media` BIGINT NULL,
    `enabled` BOOLEAN NOT NULL DEFAULT true,
    `other` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NULL,
    `updated_at` DATETIME(3) NULL,
    `deleted_at` DATETIME(3) NULL,

    UNIQUE INDEX `licenses_code_deleted_at_key`(`code`, `deleted_at`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `licenses_lang` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `li_id` BIGINT NOT NULL,
    `lang` BIGINT NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `desc` VARCHAR(191) NULL,
    `audio` BIGINT NULL,
    `created_at` DATETIME(3) NULL,
    `updated_at` DATETIME(3) NULL,
    `deleted_at` DATETIME(3) NULL,

    UNIQUE INDEX `licenses_lang_li_id_lang_deleted_at_key`(`li_id`, `lang`, `deleted_at`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `media` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `extension` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `uploaded_name` VARCHAR(191) NOT NULL,
    `enabled` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NULL,
    `updated_at` DATETIME(3) NULL,
    `deleted_at` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Migrations` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `migration` VARCHAR(191) NOT NULL,
    `batch` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `password_resets` (
    `email` VARCHAR(191) NOT NULL,
    `token` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NULL,

    PRIMARY KEY (`email`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `questions` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `enabled` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NULL,
    `updated_at` DATETIME(3) NULL,
    `deleted_at` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `questions_lang` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `qs_id` BIGINT NOT NULL,
    `lang` BIGINT NOT NULL,
    `text` VARCHAR(191) NOT NULL,
    `hint` VARCHAR(191) NULL,
    `audio` BIGINT NULL,
    `created_at` DATETIME(3) NULL,
    `updated_at` DATETIME(3) NULL,
    `deleted_at` DATETIME(3) NULL,

    UNIQUE INDEX `questions_lang_qs_id_lang_deleted_at_key`(`qs_id`, `lang`, `deleted_at`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `quizzes` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `code` VARCHAR(191) NOT NULL,
    `duration` INTEGER NOT NULL DEFAULT 100,
    `level` INTEGER NOT NULL DEFAULT 1,
    `media` BIGINT NULL,
    `enabled` BOOLEAN NOT NULL DEFAULT true,
    `other` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NULL,
    `updated_at` DATETIME(3) NULL,
    `deleted_at` DATETIME(3) NULL,

    UNIQUE INDEX `quizzes_code_deleted_at_key`(`code`, `deleted_at`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `quizzes_lang` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `qz_id` BIGINT NOT NULL,
    `lang` BIGINT NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `desc` VARCHAR(191) NULL,
    `audio` BIGINT NULL,
    `created_at` DATETIME(3) NULL,
    `updated_at` DATETIME(3) NULL,
    `deleted_at` DATETIME(3) NULL,

    UNIQUE INDEX `quizzes_lang_qz_id_lang_deleted_at_key`(`qz_id`, `lang`, `deleted_at`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `relations` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `li_id` BIGINT NOT NULL,
    `gp_id` BIGINT NOT NULL,
    `qz_id` BIGINT NOT NULL,
    `enabled` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NULL,
    `updated_at` DATETIME(3) NULL,
    `deleted_at` DATETIME(3) NULL,

    UNIQUE INDEX `relations_li_id_gp_id_qz_id_deleted_at_key`(`li_id`, `gp_id`, `qz_id`, `deleted_at`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `relations_choices` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `rq_id` BIGINT NOT NULL,
    `ch_id` BIGINT NOT NULL,
    `md_id` BIGINT NULL,
    `correct` BOOLEAN NOT NULL DEFAULT false,
    `ordering` INTEGER NOT NULL DEFAULT 1,
    `created_at` DATETIME(3) NULL,
    `updated_at` DATETIME(3) NULL,
    `deleted_at` DATETIME(3) NULL,
    `relationsId` BIGINT NULL,

    UNIQUE INDEX `relations_choices_rq_id_ch_id_md_id_deleted_at_key`(`rq_id`, `ch_id`, `md_id`, `deleted_at`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `relations_questions` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `re_id` BIGINT NOT NULL,
    `qs_id` BIGINT NOT NULL,
    `md_id` BIGINT NULL,
    `ordering` INTEGER NOT NULL DEFAULT 1,
    `created_at` DATETIME(3) NULL,
    `updated_at` DATETIME(3) NULL,
    `deleted_at` DATETIME(3) NULL,

    UNIQUE INDEX `relations_questions_re_id_qs_id_deleted_at_key`(`re_id`, `qs_id`, `deleted_at`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `personal_number` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NULL,
    `location` BIGINT NOT NULL,
    `admin` BOOLEAN NOT NULL DEFAULT false,
    `enabled` BOOLEAN NOT NULL DEFAULT true,
    `activation_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `remember_token` VARCHAR(191) NULL,
    `email_verified_at` DATETIME(3) NULL,
    `password` VARCHAR(191) NULL,
    `two_factor_secret` VARCHAR(191) NULL,
    `two_factor_recovery_codes` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NULL,
    `updated_at` DATETIME(3) NULL,
    `deleted_at` DATETIME(3) NULL,

    UNIQUE INDEX `users_personal_number_key`(`personal_number`),
    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users_auth` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `us_id` BIGINT NOT NULL,
    `au_id` BIGINT NOT NULL,
    `created_at` DATETIME(3) NULL,
    `updated_at` DATETIME(3) NULL,
    `deleted_at` DATETIME(3) NULL,

    UNIQUE INDEX `users_auth_us_id_au_id_deleted_at_key`(`us_id`, `au_id`, `deleted_at`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users_groups` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `us_id` BIGINT NOT NULL,
    `gp_id` BIGINT NOT NULL,
    `created_at` DATETIME(3) NULL,
    `updated_at` DATETIME(3) NULL,
    `deleted_at` DATETIME(3) NULL,

    UNIQUE INDEX `users_groups_us_id_gp_id_deleted_at_key`(`us_id`, `gp_id`, `deleted_at`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users_login` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `us_id` BIGINT NOT NULL,
    `action` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NULL,
    `updated_at` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users_relations` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `us_id` BIGINT NOT NULL,
    `re_id` BIGINT NOT NULL,
    `correct` INTEGER NOT NULL,
    `wrong` INTEGER NOT NULL,
    `created_at` DATETIME(3) NULL,
    `updated_at` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users_relations_details` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `ur_id` BIGINT NOT NULL,
    `rq_id` BIGINT NOT NULL,
    `rc_id` BIGINT NOT NULL,
    `observed` BOOLEAN NOT NULL DEFAULT false,
    `created_at` DATETIME(3) NULL,
    `updated_at` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `locations` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `location` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NULL,
    `updated_at` DATETIME(3) NULL,
    `deleted_at` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
