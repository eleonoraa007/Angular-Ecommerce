import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-shop-now',
  templateUrl: './shop-now.component.html',
  styleUrls: ['./shop-now.component.css']
})
export class ShopNowComponent implements OnInit {
  products: Product[] = [];

  constructor(private productsService: ProductsService) {}

    ngOnInit(): void {
      this.productsService.getProducts().subscribe({
        next: (data) => this.products = data,
        error: (error) => console.error('Error fetching products', error)
      });
  }
}
