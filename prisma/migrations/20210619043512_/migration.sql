/*
  Warnings:

  - You are about to alter the column `postImg` on the `Post` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `TinyInt`.
  - You are about to alter the column `userImg` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `TinyInt`.

*/
-- AlterTable
ALTER TABLE `Post` MODIFY `postImg` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `User` MODIFY `userImg` BOOLEAN NOT NULL DEFAULT false;
