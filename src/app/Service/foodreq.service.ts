import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FoodCardComponent } from '../Components/food-card/food-card.component';

@Injectable({
  providedIn: 'root',
})
export class FoodreqService {
  private url = 'http://localhost:3000/food';
  constructor(private htt: HttpClient) {}
  getAllFood() {
    return this.htt.get(this.url);
  }
  getFoodByID(id: number) {
    return this.htt.get(this.url + '/' + id);
  }
  addFood(food: FoodCardComponent) {
    return this.htt.put(this.url, food);
  }
}
