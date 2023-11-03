import { Component } from '@angular/core';
import { Product } from '../app.component';
import { CartService } from '../cart.service';
import { FavService } from '../fav.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  constructor(
    private cartService: CartService,
    private favService: FavService
  ) {}

  addToFavorites(product: Product) {
    this.favService.addToFav(product);
    product.isFavorite = true; // You can also update the product's state to reflect it as a favorite
  }
  removeToFav(product: Product) {
    this.favService.favRemove(product);
    product.isFavorite = false;
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  products: Product[] = [
    {
      id: 1,
      name: 'Leather Shoes',
      description: 'Best Leather Shoes',
      price: 5199,
      image:
        'https://imgs.search.brave.com/i5L7QJar_pysTQMBOAaYGgpUaXKSQ7ud46zefH7-QzU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTcy/NDE3NTg2L3Bob3Rv/L2VsZWdhbnQtYmxh/Y2stbGVhdGhlci1z/aG9lcy5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9Y190VGxq/d2J1Mm0wQUd4d2Iy/N054Q2dHMFkyQ3Yt/QzR2OHE2VjM2Ulli/dz0',
      isFavorite: false,
      category: 'shoes',
      showDetails: false,
    },
    {
      id: 2,
      name: 'Running Shoes',
      description: 'High-performance Running Shoes',
      price: 7999,
      image:
        'https://imgs.search.brave.com/uoc_0nxIKi8Txd98MyRUqVPzKwc5TFNofiEICnRaiQM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTU2/NTAxNDI4L3Bob3Rv/L3Nwb3J0LXNob2Vz/LW9uLWlzb2xhdGVk/LXdoaXRlLWJhY2tn/cm91bmQuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPUJka2xx/bmZHVXZmMDItMkN4/WXN3LUFucmJFM2Ut/QjV6aEU5SlFJTEVF/VzQ9',
      isFavorite: false,
      category: 'shoes',
      showDetails: false,
    },
    {
      id: 3,
      name: "Men's Casual Shirt",
      description: "Stylish Men's Casual Shirt",
      price: 3499,
      image:
        'https://imgs.search.brave.com/7KtSs3VtSnhRmXx9y2X1lHezw2csU2KTZZzb6Hn_H50/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzA5/ODEvODE3OC9maWxl/cy9idXNpbmVzcy1j/YXN1YWwtc2hpcnQt/b3V0Zml0LmpwZz8x/MjY1Mjc4NzQyMTQ4/MTM5MzE2Mg',
      isFavorite: false,
      category: 'clothing',
      showDetails: false,
    },
    {
      id: 4,
      name: "Women's Dress",
      description: "Elegant Women's Dress",
      price: 5999,
      image:
        'https://imgs.search.brave.com/lPtqzUJwMvA7sQBqg1K56pQf1h8XMe08oaCg4bS2Ioc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFHd1F2Qk1rUEwu/anBn',
      isFavorite: false,
      category: 'clothing',
      showDetails: false,
    },
    {
      id: 5,
      name: 'Smartphone',
      description: 'Latest Smartphone Model',
      price: 9999,
      image:
        'https://imgs.search.brave.com/B7cC1CBHFnrbvNYykCfJJZOBQQ9FGs4AqP2r4qsvEaY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/MTg2ODA1NTE3NDYt/ODM5MjVkODk4Mzhi/P2l4bGliPXJiLTQu/MC4zJml4aWQ9TTN3/eE1qQTNmREI4TUh4/elpXRnlZMmg4TVRk/OGZITnRZWEowY0do/dmJtVnpmR1Z1ZkRC/OGZEQjhmSHd3Jnc9/MTAwMCZxPTgw',
      isFavorite: false,
      category: 'electronics',
      showDetails: false,
    },
    {
      id: 6,
      name: 'Laptop',
      description: 'Powerful Laptop with High Performance',
      price: 14999,
      image:
        'https://imgs.search.brave.com/JTpcSbe1_hqZYTZXVXzyhK5DrrB5MO_5F0Y7CtfJzkw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/dGhld2lyZWN1dHRl/ci5jb20vd3AtY29u/dGVudC9tZWRpYS8y/MDIzLzA2L2xhcHRv/cHN1bmRlcjUwMC0y/MDQ4cHgtYWNlcmFz/cGlyZTNzcGluMTQu/anBnP2F1dG89d2Vi/cCZxdWFsaXR5PTc1/JndpZHRoPTEwMjQ',
      isFavorite: false,
      category: 'electronics',
      showDetails: false,
    },
    {
      id: 7,
      name: 'Coffee Maker',
      description: 'Automatic Coffee Maker',
      price: 699,
      image:
        'https://imgs.search.brave.com/Zv0UfPUcrcgCrLMMkIaZZB3eaZzGLj56jxO4yk5fYOQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jb2ZmZWUtbWFr/ZXJfMTUyMjkwLTEu/anBnP3NpemU9NjI2/JmV4dD1qcGc',
      isFavorite: false,
      category: 'appliances',
      showDetails: false,
    },
    {
      id: 8,
      name: 'Blender',
      description: 'High-speed Blender',
      price: 799,
      image:
        'https://imgs.search.brave.com/giwWkBN7zWsO3Ozt6nZBn6riuonVG2LrMuJDxYIDnIo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvODIz/ODI2NTgvcGhvdG8v/c21vb3RoaWUtaW4t/YS1ibGVuZGVyLWV4/cGxvZGVzLW91dC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/RTZtZTZBZkFxMHdR/TlRib0dsZ2xjUTl3/dnVMZl9IWmFHTG9T/WU5JOEsyRT0',
      isFavorite: false,
      category: 'appliances',
      showDetails: false,
    },
    {
      id: 9,
      name: 'Hiking Backpack',
      description: 'Durable Hiking Backpack',
      price: 999,
      image:
        'https://imgs.search.brave.com/KrVngwfupNvLllgXV5WBlacn6oEch7XiBzqP-cka8w4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG9wcGhvdG8uY29t/L3VwbG9hZHMvMjAy/Mi8xMS8wMy9Nb21l/bnQtc3Ryb2hsLW1v/dW50YWluLWxpZ2h0/LTQ1bC0xNC5qcGc_/YXV0bz13ZWJwJndp/ZHRoPTgwMCZjcm9w/PTE2OjEwLG9mZnNl/dC14NTA',
      isFavorite: false,
      category: 'outdoor',
      showDetails: false,
    },
    {
      id: 10,
      name: 'Tent',
      description: '3-Person Camping Tent',
      price: 2499,
      image:
        'https://imgs.search.brave.com/4PvzUlzVZbiJ0w0SqBlib6yJP-qsn-SMgGAcqAMeBaM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDkz/Nzg3MzcyL3Bob3Rv/L3RlbnQtY2FtcGlu/Zy5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9M3lpUHRPcW9m/SzY0WWhUZkh3bUdY/bXRWR0pnakxobEJK/WjYwZkZ1TEQtRT0',
      isFavorite: false,
      category: 'outdoor',
      showDetails: false,
    },
    {
      id: 11,
      name: 'Desk Chair',
      description: 'Ergonomic Desk Chair',
      price: 2999,
      image:
        'https://imgs.search.brave.com/73ThHUm8vjBEujL_4b7Md46T3qr7hg27WX-Ud1bFAwY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9weXhp/cy5ueW1hZy5jb20v/djEvaW1ncy8yOTgv/NTEzLzJiZWE3MjE5/YWRmNDE2MTM5Y2Qy/YzAyNjhmNDRhYjYw/OWUtbWVzaC1iYWNr/LW5lc3RpbmctY2hh/aXItdy1mbGlwLXNl/YXQtNS5yc3F1YXJl/Lnc2MDAuanBn',
      isFavorite: false,
      category: 'furniture',
      showDetails: false,
    },
    {
      id: 12,
      name: 'Sofa',
      description: 'Comfortable Three-Seat Sofa',
      price: 5999,
      image:
        'https://imgs.search.brave.com/C6Ct3iiBg6CZmwnT2InuBdzgswBnM-la6_18fbv-fp0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTg2/MDI1MTIvcGhvdG8v/d29tYW4tb24tdHVm/dGVkLXNvZmEuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPUls/bG5aZG9YN0xfaFB5/Ym5NLS1xTkI0bmtG/UEtyWXg1clUtalYt/dnA4a2c9',
      isFavorite: false,
      category: 'furniture',
      showDetails: false,
    },
    {
      id: 13,
      name: 'Gaming Console',
      description: 'Next-Gen Gaming Console',
      price: 4999,
      image:
        'https://imgs.search.brave.com/jt75OwUHjOvZ_xJzipnKIXwEhDVRaVwWSHTKv-JBKVE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/bmVvd2luLmNvbS9u/ZXdzL2ltYWdlcy91/cGxvYWRlZC8yMDIz/LzEwLzE2OTgzMTcx/NjlfcHJvZHVjdF8z/NDAxMjRfcHJvZHVj/dF9zaG90czFfc3Rv/cnkuanBn',
      isFavorite: false,
      category: 'gaming',
      showDetails: false,
    },
    {
      id: 14,
      name: 'Gaming Keyboard',
      description: 'Mechanical Gaming Keyboard',
      price: 1499,
      image:
        'https://imgs.search.brave.com/g3tQEmTB8iR9PFqq65kmWNawS74KPlec5BgEQgwVzgc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMx/MDYyNzY3Ni9waG90/by9nYW1lci1wbGF5/aW5nLWEtbXVsdGlw/bGF5ZXItZ2FtZS1v/bi1sYW4tcGFydHku/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PWtMdDlIVzE5S2ds/OEtDc2JyZFlnd2pB/Q0drTmNiSkxYSmY1/Q0lxSkR2X3M9',
      isFavorite: false,
      category: 'gaming',
      showDetails: false,
    },
    {
      id: 15,
      name: 'Home Theater System',
      description: 'Immersive Home Theater Setup',
      price: 7999,
      image:
        'https://imgs.search.brave.com/Z9gNQMKdhiJVToVXDparY6fIlPHufTw1qEYOlQxJZTk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3J1dGNoZmll/bGRvbmxpbmUuY29t/L3Byb2R1Y3RzLzIw/MTQvMzIvMDE4L3gw/MThDaU41MjAtRi5q/cGc',
      isFavorite: false,
      category: 'electronics',
      showDetails: false,
    },
    {
      id: 16,
      name: 'Digital Camera',
      description: 'Professional Digital Camera',
      price: 2999,
      image:
        'https://imgs.search.brave.com/v_nfRp7QxzLVExvRjuXtp4kjApuCL7cz1hoWP4eU3M0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTY4/MjYyNTAvcGhvdG8v/ZGlnaXRhbC1jYW1l/cmEtd2l0aC1jbGlw/cGluZy1wYXRoLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1j/ZUFGODI3emlfVWZj/emFqSkFXa1hvd1d4/ZHU1dGZpc1pIUm9D/aVNxOTR3PQ',
      isFavorite: false,
      category: 'electronics',
      showDetails: false,
    },
    {
      id: 17,
      name: 'Fitness Tracker',
      description: 'Advanced Fitness Tracker',
      price: 499,
      image:
        'https://imgs.search.brave.com/-41YbitZwXauogJkw_dmKrELKuVwdREpJBcjE9jHmnQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE3/OTUxNjQ2Ny9waG90/by9jaGVja2luZy10/aGUtZml0bmVzcy10/cmFja2VyLW9uLWhl/ci13cmlzdC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9aTFT/cEJiV2ZnTFNsQWdF/UHlzZmpKcWxPaC1Z/VkJjQkVxbVZ3R3Mw/Sm9ORT0',
      isFavorite: false,
      category: 'wearables',
      showDetails: false,
    },
    {
      id: 18,
      name: 'Smartwatch',
      description: 'Smartwatch with Built-in GPS',
      price: 899,
      image:
        'https://imgs.search.brave.com/UDwH7Bdtzk5jgeJNh89TFUdh7shbx_2t1ofBR89CAc0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDY5/MzI4Mjg2L3Bob3Rv/L3NtYXJ0d2F0Y2gu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PVVuczFVMmZqYzBN/NURJenhXOHFvOFdt/X0s3YWZ4Zk5sd1JX/YWlYczQ2UE09',
      isFavorite: false,
      category: 'wearables',
      showDetails: false,
    },
    {
      id: 19,
      name: 'Backpack',
      description: 'Versatile Backpack for Everyday Use',
      price: 499,
      image:
        'https://imgs.search.brave.com/nFsy51mzZ30pz6AReTgJ2lCroxuBnwhMmeBr5eW0SgU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTU0/NjkxMTcvcGhvdG8v/Y2hpbGRzLWJhY2tw/YWNrLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz14UWxfRHo0/V0pKdlhRVUI2bVhU/UmVjZjdmbVZVaFE3/WURUT0Y3QmdTUVdB/PQ',
      isFavorite: false,
      category: 'accessories',
      showDetails: false,
    },
    {
      id: 20,
      name: 'Sunglasses',
      description: 'Stylish UV Protection Sunglasses',
      price: 299,
      image:
        'https://imgs.search.brave.com/0haaKoXxQmk36n0opf7_qaXYtrRdOpCTYJUd_IUpRPQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTU3/NDI0MjQ3L3Bob3Rv/L2Zhc2hpb25hYmxl/LXN1bmdsYXNzZXMu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PTRqMUxWTk5pendE/bDByVC1YZkxibEZE/UXU4V1NMS1lubkZu/QWYtT1RsQzg9',
      isFavorite: false,
      category: 'accessories',
      showDetails: false,
    },
    {
      id: 21,
      name: 'Leather Shoes',
      description: 'Best Leather Shoes',
      price: 5199,
      image:
        'https://imgs.search.brave.com/WOzmQg47yABEdgeRUej4PNdvnDJ-keqsKBFfCFByRT4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTg1/MDExNzYzL3Bob3Rv/L3Nob2VzLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1peVJn/aWR6eDN6cWNGX1hT/UzlrY3JLYW0xaXkw/VVg5bE1GTUlCS3c3/WDJZPQ',
      isFavorite: false,
      category: 'shoes',
      showDetails: false,
    },
  ];
  // Add more products here

  toggleFavorite(product: Product) {
    product.isFavorite = !product.isFavorite;
    if (!product.isFavorite) {
      this.removeToFav(product);
    } else {
      this.addToFavorites(product);
    }
  }

  toggelDetails(product: Product) {
    product.showDetails = !product.showDetails;
  }
}
