import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { StatsComponent } from './stats/stats.component';
import { AboutComponent } from './about/about.component';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { GlobalExportComponent } from './global-export/global-export.component';
import { ContactFormComponent } from '../contact-us/contact-form/contact-form.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, StatsComponent, AboutComponent, FeaturedProductsComponent, ReviewsComponent, GlobalExportComponent, ContactFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
