import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent {

  @Input() currentRating = 0;
  @Output() ratingClicked = new EventEmitter<number>();

  maxRating = 5;

  rateStar(rating: number): void {
    this.currentRating = rating;
    this.ratingClicked.emit(this.currentRating);
  }

}
