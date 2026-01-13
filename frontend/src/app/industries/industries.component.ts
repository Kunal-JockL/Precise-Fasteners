import { Component } from '@angular/core';
import { IndustriesHeaderComponent } from './industries-header/industries-header.component';
import { IndustriesGridComponent } from './industries-grid/industries-grid.component';
import { QuoteSectionComponent } from '../shared/quote-section/quote-section.component';

@Component({
  selector: 'app-industries',
  imports: [IndustriesHeaderComponent, IndustriesGridComponent, QuoteSectionComponent],
  templateUrl: './industries.component.html',
  styleUrl: './industries.component.scss'
})
export class IndustriesComponent {

}
