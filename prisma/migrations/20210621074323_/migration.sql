/*
  Warnings:

  - You are about to alter the column `postImg` on the `Post` table. The data in that column could be lost. The data in that column will be cast from `TinyInt` to `VarChar(191)`.
  - You are about to alter the column `userImg` on the `User` table. The data in that column could be lost. The data in that column will be cast from `TinyInt` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `Post` MODIFY `postImg` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `User` MODIFY `userImg` VARCHAR(191) NOT NULL;
