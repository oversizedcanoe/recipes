export type Recipe = {
  name: string;
  type: RecipeType;
  description: string;
  gist: string;
  ingredients: string;
  steps: string;
  notes: string;
};

export enum RecipeType {
    Main = "Main",
    Protein = "Protein",
    Pasta = "Pasta",
    Soup = "Soup",
    Misc = "Misc"
}