import { MaterialModule } from './../material/material.module';
import { IngredientComponent } from './ingredient/ingredient.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecipeComponent } from './recipe/recipe.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    RecipeComponent,
    IngredientComponent,
    RecipeListComponent,
    AddRecipeComponent,
  ],
  imports: [CommonModule, MaterialModule, MatInputModule, MatFormFieldModule],
  exports: [RecipeListComponent],
})
export class RecipeModule {}
