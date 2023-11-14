/*
  Warnings:

  - You are about to drop the `toppings` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "pizzas" ALTER COLUMN "toppings" SET DATA TYPE TEXT[];

-- DropTable
DROP TABLE "toppings";
