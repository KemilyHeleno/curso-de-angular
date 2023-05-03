import { ProductService } from '../product.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { Product } from '../product.model';

@Component({
  selector: 'app-create.component.ts',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {

  product: Product = {
    name: '',
    price: 0
  }

  constructor(private productService: ProductService,
    private router: Router) {

  }

  ngOnInit(): void {
    
  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage("Produto Criado");
      this.router.navigate(['/products'])

    })

  }

  cancel(): void {
    this.productService.showMessage("Operação cancelada");
    this.router.navigate(['/products'])

  }
}
