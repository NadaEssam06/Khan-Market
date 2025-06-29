import { Routes } from '@angular/router';
import { MarketComponent } from './Components/market/market.component';
import { FoodDetailsComponent } from './Components/food-details/food-details.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { AddItemComponent } from './Components/add-item/add-item.component';

export const routes: Routes = [
  { path: '', component: MarketComponent },
  { path: 'market', component: MarketComponent },
  { path: 'item/:id', component: FoodDetailsComponent },
  { path: 'additem', component: AddItemComponent },
  { path: '**', component: NotFoundComponent },
];
