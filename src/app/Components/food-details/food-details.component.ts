import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FoodreqService } from '../../Service/foodreq.service';
import { ActivatedRoute } from '@angular/router';
import { FoodCardComponent } from '../food-card/food-card.component';

@Component({
  selector: 'app-food-details',
  imports: [FoodCardComponent],
  providers: [FoodreqService],
  templateUrl: './food-details.component.html',
  styles: ``,
})
export class FoodDetailsComponent {
  item: any;
  id = 0;
  constructor(private htt: FoodreqService, myacticrRout: ActivatedRoute) {
    this.id = myacticrRout.snapshot.params['id'];
  }

  ngOnInit() {
    this.htt.getFoodByID(this.id).subscribe({
      next: (data) => (this.item = data),
      error: (e) => console.error('Error fetching food data:', e),
    });
  }
}
