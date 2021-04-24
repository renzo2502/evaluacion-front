import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  RECIPES_API_KEY: string = "e6c784e790a74361a35c529db8df08f5";
  BASE_URL_RECIPES: string = "https://api.spoonacular.com/recipes/complexSearch?apiKey="
  URI: string = this.BASE_URL_RECIPES + this.RECIPES_API_KEY;

  private recipes: Recipe[];
  constructor(private http: HttpClient) { }
  /**
   * 
   * @param title 
   * @param maxCalories 
   * @param cantidad 
   * @returns 
   */
  getRecipe(title: string, maxCalories: number, number: number): Observable<Recipe[]> {
    var query = this.URI;
    if (title != undefined || title.length > 0) {
      query = query.concat("&&title=").concat(title);
    }
    if (maxCalories) {
      query = query.concat("&&maxCalories=").concat(maxCalories + "");
    }
    if (number) {
      query = query.concat("&&number=").concat(number + "");
    }
    return this.http.get(query)
      .pipe(
        map((res) => {
          return JSON.parse(JSON.stringify(res));
        })
      );
  }
}

export class Recipe {
  id: number;
  title: string;
  image: string;
  imageType: string;
}

