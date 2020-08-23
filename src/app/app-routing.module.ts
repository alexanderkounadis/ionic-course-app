import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'recipes',
    pathMatch: 'full'
  },
  {
    path: 'recipes',
    // loadChildren: () => import('./recipes/recipes.module').then( m => m.RecipesPageModule),
    children: [
      {
        path: '', loadChildren: './recipes/recipes.module#RecipesPageModule'
      },
      {
        path: ':recipeId', loadChildren: './recipes/recipe-details/recipe-details.module#RecipeDetailsPageModule'
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
