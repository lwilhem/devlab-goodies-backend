/*
  Warnings:

  - A unique constraint covering the columns `[retainerId]` on the table `shops` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `retainerId` to the `shops` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `shops` ADD COLUMN `retainerId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `retainers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `createdAtd` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `retainers_name_key`(`name`),
    UNIQUE INDEX `retainers_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `shops_retainerId_key` ON `shops`(`retainerId`);

-- AddForeignKey
ALTER TABLE `shops` ADD CONSTRAINT `shops_retainerId_fkey` FOREIGN KEY (`retainerId`) REFERENCES `retainers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
