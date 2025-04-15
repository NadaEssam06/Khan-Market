import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Components/header/header.component';
import { FoodCardComponent } from './Components/food-card/food-card.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FoodCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'final';
}
