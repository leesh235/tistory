/*
  Warnings:

  - You are about to drop the column `postImg` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `userImg` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Post` DROP COLUMN `postImg`,
    ADD COLUMN `postImgId` VARCHAR(191);

-- AlterTable
ALTER TABLE `User` DROP COLUMN `userImg`,
    ADD COLUMN `userImgId` VARCHAR(191);
