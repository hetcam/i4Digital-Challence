import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-like-meal',
  templateUrl: './like-meal.component.html',
  styleUrls: ['./like-meal.component.css']
})
export class LikeMealComponent {

  @Input() liked: boolean = false;
  toggleLike(): void {
    this.liked = !this.liked;
  }

}
