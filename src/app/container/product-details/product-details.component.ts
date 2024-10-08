import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;

  constructor(private route: ActivatedRoute, private productsService: ProductsService) {}

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
}
