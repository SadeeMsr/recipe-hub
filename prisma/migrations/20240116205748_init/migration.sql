-- CreateTable
CREATE TABLE "Recipe" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "ingredients" TEXT NOT NULL,
    "instruction" TEXT NOT NULL,
    "RecipeView" TEXT
);
