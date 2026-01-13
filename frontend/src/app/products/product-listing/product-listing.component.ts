import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CatalogDownloadComponent } from '../../catalog-download/catalog-download.component';

interface Product {
  name: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-product-listing',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, CatalogDownloadComponent],
  templateUrl: './product-listing.component.html',
  styleUrl: './product-listing.component.scss'
})
export class ProductListingComponent {
  products: Product[] = [
    { name: 'Machine Screws', description: 'Precision-threaded screws for metal-to-metal fastening applications', image: '/product-images/machine.webp' },
    { name: 'Self Tapping & Drilling Screws', description: 'Fastening screws designed for direct installation without pre-drilling', image: '/product-images/self tapping.webp' },
    { name: 'Socket Product', description: 'High-strength socket head fasteners for secure assemblies', image: '/product-images/socket.webp' },
    { name: 'Wood Screws', description: 'Precision-threaded screws for metal-to-metal fastening applications', image: '/product-images/wood screw (1).webp' },
    { name: 'Grub / Set Screws', description: 'Headless screws for locking components on shafts', image: '/product-images/Grub screw.webp' },
    { name: 'Hex Key Wrenches', description: 'Durable hex keys for tightening socket fasteners', image: '/product-images/hex key.webp' },
    { name: 'Bolts', description: 'High-tensile bolts for structural and mechanical assemblies', image: '/product-images/bolt.webp' },
    { name: 'Bolts / Studs', description: 'Threaded fasteners for heavy-duty load-bearing applications', image: '/product-images/studs.webp' },
    { name: 'Anchor Fasteners', description: 'Expansion anchors for secure fixing into concrete surfaces', image: '/product-images/anchor.webp' },
    { name: 'Nuts', description: 'Precision nuts for secure and vibration-resistant fastening', image: '/product-images/nuts.webp' },
    { name: 'Washers', description: 'Flat washers for load distribution and surface protection', image: '/product-images/washers.webp' },
    { name: 'Special Washers', description: 'Custom washers designed for specific industrial requirements', image: '/product-images/special washers.webp' },
    { name: 'Star Lock Washers', description: 'Multi-tooth washers for enhanced grip and vibration resistance', image: '/product-images/star lock washer.webp' },
    { name: 'Threaded Rod / Bars', description: 'Fully threaded rods for versatile fastening and support', image: '/product-images/rod.webp' },
    { name: 'Cotter Pin (Split Pin)', description: 'Safety pins used to lock fasteners in place', image: '/product-images/cottor pin.webp' },
    { name: 'Rivets', description: 'Permanent fastening solution for sheet metal applications', image: '/product-images/rivet.webp' },
    { name: 'Pressure Plugs', description: 'Quick-fit plugs for sealing and fastening applications', image: '/product-images/pressure plugs.webp' },
    { name: 'Hooks', description: 'Metal hooks designed for hanging and load support', image: '/product-images/hooks.webp' },
    { name: 'Turned Components', description: 'Precision-machined components with tight dimensional tolerances', image: '/product-images/turned components.webp' },
    { name: 'Pipe Fittings', description: 'Connectors designed for secure and leak-free piping', image: '/product-images/pipe fitting.webp' },
    { name: 'Press & Sheet Metal', description: 'Formed metal parts for industrial assembly systems', image: '/product-images/press sheet metal.webp' },
    { name: 'Spring Steel Fasteners', description: 'Flexible fasteners offering high strength and retention', image: '/product-images/spring steel.webp' },
    { name: 'Metric OD Pipes', description: 'Pipes manufactured to metric outside diameter standards', image: '/product-images/Metric OD Pipe.webp' },
    { name: 'Inch OD Pipes', description: 'Pipes manufactured to inch-based outside diameter standards', image: '/product-images/inch od pipe.webp' },
    { name: 'Inch Nominal Bore Pipes', description: 'Pipes manufactured to inch-based outside diameter standards', image: '/product-images/Inch Nominal Bore Pipe.webp' },
    { name: 'Tolerance on Outside Diameters', description: 'Specified dimensional limits for pipe outside diameters', image: '/product-images/Tolerance on Outside Diameters.webp' }
  ];
}
