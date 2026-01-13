import { Component } from '@angular/core';
import { ProductCatalogHeaderComponent } from './product-catalog-header/product-catalog-header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [ProductCatalogHeaderComponent, RouterOutlet],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

}
