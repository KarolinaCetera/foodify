-- AlterTable
ALTER TABLE "RecipeElements" ADD COLUMN     "recipeId" INTEGER;

-- AddForeignKey
ALTER TABLE "RecipeElements" ADD CONSTRAINT "RecipeElements_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe"("id") ON DELETE SET NULL ON UPDATE CASCADE;
