import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RecipesService } from "../recipes.service";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-details",
  templateUrl: "./recipe-details.page.html",
  styleUrls: ["./recipe-details.page.scss"],
})
export class RecipeDetailsPage implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService
  ) {}
  loadedRecipe: Recipe = null;

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has("recipeId")) {
        // redirect
        return;
      }
      const recipeId = paramMap.get("recipeId");
      this.loadedRecipe = this.recipesService.getRecipe(recipeId);
    });
  }
}
