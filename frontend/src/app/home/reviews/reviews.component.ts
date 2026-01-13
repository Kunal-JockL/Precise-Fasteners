import { Component } from '@angular/core';
import { ReviewCardComponent } from './review-card/review-card.component';

@Component({
  selector: 'app-reviews',
  imports: [ReviewCardComponent],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent {

}
