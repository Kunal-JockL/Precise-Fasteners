import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface GalleryImage {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-company-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './company-gallery.component.html',
  styleUrl: './company-gallery.component.scss'
})
export class CompanyGalleryComponent {
  galleryImages: GalleryImage[] = [
    { src: '/Bento/image (1).webp', alt: 'Company Gallery Image 1' },
    { src: '/Bento/image (2).webp', alt: 'Company Gallery Image 2' },
    { src: '/Bento/image (3).webp', alt: 'Company Gallery Image 3' },
    { src: '/Bento/image (4).webp', alt: 'Company Gallery Image 4' },
    { src: '/Bento/image (5).webp', alt: 'Company Gallery Image 5' },
    { src: '/Bento/image (6).webp', alt: 'Company Gallery Image 6' },
    { src: '/Bento/image (7).webp', alt: 'Company Gallery Image 7' },
    { src: '/Bento/image (8).webp', alt: 'Company Gallery Image 8' },
    { src: '/Bento/image (9).webp', alt: 'Company Gallery Image 9' }
  ];
}
