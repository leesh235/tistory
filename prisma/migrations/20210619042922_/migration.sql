/*
  Warnings:

  - Added the required column `postImg` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userIng` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Post` ADD COLUMN `postImg` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `userIng` VARCHAR(191) NOT NULL;
