import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductsService } from '../../service/products.service';
import { FavoritesService } from 'src/app/service/favorites.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;

  constructor(private route: ActivatedRoute, private productsService: ProductsService, private favoritesService: FavoritesService, private router: Router) {}

  ngOnInit(): void {
      const productId = this.route.snapshot.paramMap.get('id');
      if(productId) {
      this.productsService.getProductById(productId).subscribe({
        next: (product : Product) => {
          this.product = product;
        },
        error: (err) => console.error("Error fetching product by id: ", err)
      })
    }
  }

  toggleFavorite(): void {
    if(this.product?.id) {
      if (this.isFavorite()) {
        this.favoritesService.removeFavorite(this.product.id);
      } else {
        this.favoritesService.addFavorite(this.product);
        this.router.navigate(['/favorite']);
      }
    }
  }

  isFavorite(): boolean {
    if(this.product?.id) {
    return this.favoritesService.isFavorite(this.product.id);
    }
    return false;
  }
}
