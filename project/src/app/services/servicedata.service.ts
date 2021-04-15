import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServicedataService {
private url="https://api.spoonacular.com/recipes/findByNutrients?apiKey=9b7b6edd4db74d6a9a6b4e5783584bf4&minCarbs=10&maxCarbs=50&number=2";
private APIurl="https://api.spoonacular.com/recipes/findByNutrients?apiKey=9b7b6edd4db74d6a9a6b4e5783584bf4";
mincarbs=0;
maxcarbs=0;
minfats=0;
maxfats=0;
mincals=0;
maxcals=0;
num=2;
public sendGetRequest(){
    return this.httpClient.get(this.url);
  }

public postCarbs(carbs:[]) {

   this.mincarbs=carbs[0];
   this.maxcarbs=carbs[1];
   console.log(this.mincarbs);
   console.log(this.maxcarbs);
   return this.httpClient.get(`https://api.spoonacular.com/recipes/findByNutrients?apiKey=9b7b6edd4db74d6a9a6b4e5783584bf4&minCarbs=${this.mincarbs}&maxCarbs=${this.maxcarbs}&number=${this.num}`);
  
    }

    public postFats(fats:[]) {

   this.minfats=fats[0];
   this.maxfats=fats[1];
 
   return this.httpClient.get(`https://api.spoonacular.com/recipes/findByNutrients?apiKey=9b7b6edd4db74d6a9a6b4e5783584bf4&minFat=${this.minfats}&maxFat=${this.maxfats}&number=${this.num}`);
  
    }

       public postCals(cals:[]) {

   this.mincals=cals[0];
   this.maxcals=cals[1];
 
   return this.httpClient.get(`https://api.spoonacular.com/recipes/findByNutrients?apiKey=9b7b6edd4db74d6a9a6b4e5783584bf4&minCalories=${this.mincals}&maxCalories=${this.maxcals}&number=${this.num}`);
  
    }



  constructor(private httpClient: HttpClient ) { }
}
