import { Component } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent {
  product: Product

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
    ) {

  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || '';
    this.productService.readById(id).subscribe(product => {
      this.product = product
    })
  }

  deleteProduct(): void {
    this.productService.delete(`${this.product.id}`).subscribe(() => {
      this.productService.showMessage("Produto Excluído com Sucesso");
      this.router.navigate(['/products'])

    })

  }

  cancel(): void {
    this.productService.showMessage("Operação cancelada");
    this.router.navigate(['/products'])

  }
}
