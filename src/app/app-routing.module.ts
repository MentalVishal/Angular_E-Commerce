import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MainProductComponent } from './main-product/main-product.component';
import { FavComponent } from './fav/fav.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: '', component: MainProductComponent },
  { path: 'cart', component: CartComponent },
  { path: 'fav', component: FavComponent },
  { path: 'not-found', component: NotFoundComponent }, // Add a route for the NotFoundComponent
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
