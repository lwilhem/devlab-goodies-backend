/*
  Warnings:

  - You are about to drop the column `retainerId` on the `shops` table. All the data in the column will be lost.
  - You are about to drop the `buyers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `retainers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `shops` DROP FOREIGN KEY `shops_retainerId_fkey`;

-- AlterTable
ALTER TABLE `shops` DROP COLUMN `retainerId`;

-- DropTable
DROP TABLE `buyers`;

-- DropTable
DROP TABLE `retainers`;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `avatar` VARCHAR(191) NULL,
    `role` ENUM('ROlE_BUYER', 'ROLE_RETAINER') NOT NULL DEFAULT 'ROlE_BUYER',

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
