import { Injectable } from '@angular/core';
import { Product } from './app.component';

@Injectable({
  providedIn: 'root',
})
export class FavService {
  private favItems: Product[] = [];

  addToFav(product: Product) {
    if (!this.isInFavorites(product)) {
      this.favItems.push(product);
    }
  }
  private isInFavorites(product: Product): boolean {
    return this.favItems.some((favProduct) => favProduct.id === product.id);
  }

  getFav() {
    return this.favItems;
  }

  favRemove(product: Product) {
    this.favItems = this.favItems.filter((item) => item.id != product.id);
  }

  clearCart() {
    this.favItems = [];
    return this.favItems;
  }

  constructor() {}
}
