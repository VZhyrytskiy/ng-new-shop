import { Component } from '@angular/core';
import { ProductService } from "../../services/product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService]
})

export class ProductListComponent {
  getProducts() {
    return this.productService.getProducts();
  }
  constructor(private productService: ProductService) {
  }
}
