/*
  Warnings:

  - You are about to drop the column `userIng` on the `User` table. All the data in the column will be lost.
  - Added the required column `userImg` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User` DROP COLUMN `userIng`,
    ADD COLUMN `userImg` VARCHAR(191) NOT NULL;
