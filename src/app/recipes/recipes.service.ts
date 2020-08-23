import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";

@Injectable({
  providedIn: "root",
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: "r1",
      title: "Schnitzel",
      ingredients: ["Pork Meat", "French Fries", "Salad"],
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Schnitzel.JPG/1024px-Schnitzel.JPG",
    },
    {
      id: "r2",
      title: "Spaghetti",
      ingredients: ["Spaghetti", "Meat", "Tomatoes"],
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/1024px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg",
    },
  ];
  constructor() {}

  getAllRecipes() {
    // return a copy
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find((recipe) => {
        return recipe.id === recipeId;
      }),
    };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipeId !== recipeId;
    });
  }
}
