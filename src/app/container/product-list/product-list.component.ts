import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductsService } from '../../service/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  categories: string[] = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing"
  ];

  products: Product[] = [];

  filteredProducts: Product[] = [];
  category: string = '';

  constructor(private route: ActivatedRoute, private productsService: ProductsService) {}

  // ngOnInit(): void {
  //     this.productsService.getProducts().subscribe({
  //       next: (data) => this.products = data,
  //       error: (error) => console.error('Error fetching products', error)
  //     });
  // }
  ngOnInit(): void {
    this.route.url.subscribe(url => {
        this.category = url[0].path;
        this.getProductsByCategory(this.category);
    });
  }
  
  getProductsByCategory(category: string): void {
    this.productsService.getProducts().subscribe({
      next: (products: Product[]) => {
        this.filteredProducts = products.filter(product => 
          product.category.toLowerCase() === category.toLowerCase());
      },
      error: (err) => console.error('Error fetching products:', err)
    });
  }

  onSortChange(event: any): void {
    const sortValue = event.target.value;

    if (sortValue === 'lowToHigh') {
      this.filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortValue === 'highToLow') {
      this.filteredProducts.sort((a, b) => b.price - a.price);
    } else {
      this.getProductsByCategory(this.category);
    }
  }
}
