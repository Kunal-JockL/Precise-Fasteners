import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../products/product-card/product-card.component';

interface Product {
  name: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-featured-products',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './featured-products.component.html',
  styleUrl: './featured-products.component.scss'
})
export class FeaturedProductsComponent {
  featuredProducts: Product[] = [
    { 
      name: 'Machine Screws', 
      description: 'Precision-threaded screws for metal-to-metal fastening applications', 
      image: '/product-images/machine.webp' 
    },
    { 
      name: 'Self Tapping & Drilling Screws', 
      description: 'Fastening screws designed for direct installation without pre-drilling', 
      image: '/product-images/self tapping.webp' 
    },
    { 
      name: 'Socket Product', 
      description: 'High-strength socket head fasteners for secure assemblies', 
      image: '/product-images/socket.webp' 
    },
    { 
      name: 'Wood Screws', 
      description: 'Precision-threaded screws for metal-to-metal fastening applications', 
      image: '/product-images/wood screw (1).webp' 
    }
  ];
}
