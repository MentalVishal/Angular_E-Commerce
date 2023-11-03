import { Component } from '@angular/core';
import { Product } from '../app.component';
import { FavService } from '../fav.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css'],
})
export class FavComponent {
  favItems: Product[] = [];

  constructor(
    private favService: FavService,
    private cartService: CartService
  ) {
    this.favItems = this.favService.getFav();
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Added to cart'); // You can customize this alert or use a more sophisticated notification system
  }
  show() {
    console.log(this.favItems);
  }
  addToFavorites(product: Product) {
    this.favService.addToFav(product);
    product.isFavorite = true; // You can also update the product's state to reflect it as a favorite
  }
  removeToFav(product: Product) {
    this.favService.favRemove(product);
    product.isFavorite = false;
  }
  toggleFavorite(product: Product) {
    product.isFavorite = !product.isFavorite;
    if (!product.isFavorite) {
      this.favItems = this.favItems.filter((item) => item.id != product.id);
    }
  }
  toggelDetails(product: Product) {
    product.showDetails = !product.showDetails;
  }
}
