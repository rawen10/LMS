/*
  Warnings:

  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "createdAt",
ALTER COLUMN "lieux" DROP NOT NULL,
ALTER COLUMN "naissance" DROP NOT NULL,
ALTER COLUMN "telephone" DROP NOT NULL;
