import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodModule } from '../../Models/food.module';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-food-card',
  imports: [CommonModule, RouterModule],
  templateUrl: './food-card.component.html',
  styles: ``,
})
export class FoodCardComponent {
  @Input() food: FoodModule | undefined = undefined;
}
