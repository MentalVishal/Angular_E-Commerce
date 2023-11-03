import { Injectable } from '@angular/core';
import { Product } from './app.component';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items: Product[] = [];

  addToCart(product: Product) {
    if (this.isInCart(product)) {
      alert('Product is already in Cart...!');
    } else {
      this.items.push(product);
      alert('Product Added to Cart');
    }
  }

  private isInCart(product: Product): boolean {
    return this.items.some((favProduct) => favProduct.id === product.id);
  }

  getItems() {
    return this.items;
  }

  removeCart(product: Product) {
    this.items = this.items.filter((item) => item.id != product.id);
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  constructor() {}
}
