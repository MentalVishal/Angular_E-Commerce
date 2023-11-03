import { Component } from '@angular/core';
import { Product } from '../app.component';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  items: Product[] = [];

  constructor(private cartService: CartService) {
    this.items = this.cartService.getItems();
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
  show() {
    console.log(this.items);
  }
  toggleFavorite(product: Product) {
    product.isFavorite = !product.isFavorite;
    console.log(product);
  }
  toggelDetails(product: Product) {
    product.showDetails = !product.showDetails;
  }
  remove(product: Product) {
    this.cartService.removeCart(product);
    this.items = this.cartService.getItems();
  }
}
