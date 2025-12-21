/*
  Warnings:

  - You are about to drop the `Reviews` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `addressName` to the `UserAddresses` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Reviews" DROP CONSTRAINT "Reviews_productId_fkey";

-- DropForeignKey
ALTER TABLE "Reviews" DROP CONSTRAINT "Reviews_userId_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "role" SET DEFAULT 'BUYER';

-- AlterTable
ALTER TABLE "UserAddresses" ADD COLUMN     "addressName" TEXT NOT NULL;

-- DropTable
DROP TABLE "Reviews";
