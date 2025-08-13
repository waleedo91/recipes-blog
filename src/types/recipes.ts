export interface Recipe {
  recipeId: string;
  title: string;
  ingredients: string[];
  instructions: string;
  imageKey: string | undefined;
}
