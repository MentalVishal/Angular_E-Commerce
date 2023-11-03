import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Product_App';
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  isFavorite: boolean;
  category: string;
  showDetails: boolean;
}
