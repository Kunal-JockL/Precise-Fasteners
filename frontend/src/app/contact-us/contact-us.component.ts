import { Component } from '@angular/core';
import { ContactHeaderComponent } from './contact-header/contact-header.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { MapSectionComponent } from './map-section/map-section.component';

@Component({
  selector: 'app-contact-us',
  imports: [ContactHeaderComponent, ContactFormComponent, MapSectionComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {

}
