import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.service';
import * as $ from "jquery";

@Component({
  selector: 'app-recipes-component',
  templateUrl: './recipes-component.component.html',
  styleUrls: ['./recipes-component.component.css']
})
export class RecipesComponentComponent implements OnInit {

  nombre: string;
  maxCal: number;
  cantidad: number = 0;

  recipes: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    //$('#slider').slider();
  }
  buscar() {
    this.recipeService.getRecipe(this.nombre, this.maxCal, this.cantidad).subscribe((response: Recipe[]) => {
      this.recipes = response.results;
    });
  }

}
