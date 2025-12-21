-- DropForeignKey
ALTER TABLE "Order_Items" DROP CONSTRAINT "Order_Items_orderId_fkey";

-- AddForeignKey
ALTER TABLE "Order_Items" ADD CONSTRAINT "Order_Items_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Orders"("id") ON DELETE CASCADE ON UPDATE CASCADE;
