import { Component, OnInit } from '@angular/core';
import { ProductService } from 'C:/Users/PHD/Documents/GitHub-Desktop-Repositorios/curso-de-angular/frontend/src/app/components/product/product.service';
import { Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit{

  product: Product = {
    name: '',
    price: 0.00
  }

  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {

  }

  createProduct(): void {
      this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto criado');
      this.router.navigate(['/products'])

    })
  }

  cancel(): void {
    this.productService.showMessage('Produto cancelado');

    this.router.navigate(['/products'])
  }
}
