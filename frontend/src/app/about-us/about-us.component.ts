import { Component } from '@angular/core';
import { HeroStatsComponent } from './hero-stats/hero-stats.component';
import { PrecisionProtocolComponent } from './precision-protocol/precision-protocol.component';
import { IndustrialStandardsComponent } from './industrial-standards/industrial-standards.component';
import { TrustedByComponent } from './trusted-by/trusted-by.component';
import { CeoVisionComponent } from './ceo-vision/ceo-vision.component';
import { CompanyGalleryComponent } from './company-gallery/company-gallery.component';
import { CtaSectionComponent } from '../shared/cta-section/cta-section.component';

@Component({
  selector: 'app-about-us',
  imports: [HeroStatsComponent, PrecisionProtocolComponent, IndustrialStandardsComponent, TrustedByComponent, CeoVisionComponent, CompanyGalleryComponent, CtaSectionComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

}
