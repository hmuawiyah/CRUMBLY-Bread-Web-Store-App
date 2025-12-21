-- DropForeignKey
ALTER TABLE "UserAddresses" DROP CONSTRAINT "UserAddresses_userId_fkey";

-- AddForeignKey
ALTER TABLE "UserAddresses" ADD CONSTRAINT "UserAddresses_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
