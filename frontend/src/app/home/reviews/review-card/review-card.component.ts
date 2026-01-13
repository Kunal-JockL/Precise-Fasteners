import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-review-card',
  imports: [CommonModule],
  templateUrl: './review-card.component.html',
  styleUrl: './review-card.component.scss'
})
export class ReviewCardComponent {
  @Input() companyLogo: string = '';
  @Input() review: string = '';
  @Input() personImage: string = '';
  @Input() personName: string = '';
  @Input() personPosition: string = '';
}
