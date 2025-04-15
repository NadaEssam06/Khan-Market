import { Component, OnInit } from '@angular/core';
import { FoodCardComponent } from '../food-card/food-card.component';
import { FoodreqService } from '../../Service/foodreq.service';
import { FoodModule } from '../../Models/food.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-market',
  imports: [FoodCardComponent],
  providers: [FoodreqService],
  templateUrl: './market.component.html',
  styles: ``,
})
export class MarketComponent {
  Allfood: any;
  constructor(private foodService: FoodreqService) {}
  ngOnInit() {
    this.foodService.getAllFood().subscribe({
      next: (data) => (this.Allfood = data),
      error: (error) => console.error('Error fetching food data:', error),
    });
  }
}
