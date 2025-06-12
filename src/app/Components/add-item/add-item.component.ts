import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FoodreqService } from '../../Service/foodreq.service';
import { FoodModule } from '../../Models/food.module';

@Component({
  selector: 'app-add-item',
  imports: [RouterModule, FormsModule, ReactiveFormsModule],
  providers: [FoodreqService],
  templateUrl: './add-item.component.html',
  styles: ``,
})
export class AddItemComponent {
  err: any[] = [];
  constructor(private foodReq: FoodreqService) {}
  addItemForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    price: new FormControl('', [
      Validators.required,
      Validators.min(3),
      Validators.max(100),
    ]),
  });

  send() {
    if (this.addItemForm.valid) {
      let foodItem = {
        name: this.addItemForm.controls.name.value,
        price: this.addItemForm.controls.price.value,
        src: 'images/food.jpg',
        info: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.jinistock.com%2Fshop%2Ffoul-and-falafel-1923&psig=AOvVaw2hSr1NT-ClMouxpx4XRbTX&ust=1744789720379000&source=images&opi=89978449',
      };
      this.err = [];
      console.log(foodItem.name, foodItem.price);
      console.log(this.foodReq.addFood(foodItem).subscribe());
      this.addItemForm.controls.name.setValue(null);
      this.addItemForm.controls.price.setValue(null);
    } else {
      console.log('cannot');
      if (!this.addItemForm.controls.name.valid) {
        this.err[0] = 'Not valid name';
      }
      if (!this.addItemForm.controls.price.valid) {
        this.err[1] = 'Allowed Price is from 3 to 100 LE';
      }
    }
  }
}
