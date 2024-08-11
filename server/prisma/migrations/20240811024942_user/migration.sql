/*
  Warnings:

  - You are about to drop the column `username` on the `User` table. All the data in the column will be lost.
  - Added the required column `classe` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lieux` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `naissance` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nom` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prenom` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telephone` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "username",
ADD COLUMN     "classe" TEXT NOT NULL,
ADD COLUMN     "lieux" TEXT NOT NULL,
ADD COLUMN     "naissance" TEXT NOT NULL,
ADD COLUMN     "nom" TEXT NOT NULL,
ADD COLUMN     "prenom" TEXT NOT NULL,
ADD COLUMN     "telephone" TEXT NOT NULL;
