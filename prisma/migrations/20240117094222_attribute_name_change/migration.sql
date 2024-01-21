/*
  Warnings:

  - You are about to drop the column `RecipeView` on the `Recipe` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Recipe" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "ingredients" TEXT NOT NULL,
    "instruction" TEXT NOT NULL,
    "recipeView" TEXT
);
INSERT INTO "new_Recipe" ("id", "ingredients", "instruction", "title") SELECT "id", "ingredients", "instruction", "title" FROM "Recipe";
DROP TABLE "Recipe";
ALTER TABLE "new_Recipe" RENAME TO "Recipe";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
