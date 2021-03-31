import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicedataService {
private url="https://api.spoonacular.com/recipes/findByNutrients?apiKey=9b7b6edd4db74d6a9a6b4e5783584bf4&minCarbs=10&maxCarbs=50&number=2";
 public sendGetRequest(){
    return this.httpClient.get(this.url);
  }




  constructor(private httpClient: HttpClient ) { }
}
