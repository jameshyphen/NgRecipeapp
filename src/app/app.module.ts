import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RecipeComponent } from './recipe/recipe.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { RecipeModule } from './recipe/recipe.module';

@NgModule({
  declarations: [AppComponent, RecipeComponent, IngredientComponent],
  imports: [BrowserModule, RecipeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
