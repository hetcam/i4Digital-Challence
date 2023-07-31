import { Component, OnInit } from '@angular/core';
import { MealItem, Items } from '../../models/meal.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  meals: MealItem[] = [];
  selectedRating = 0;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    // Search canadian meal list
    this.api.consultCanadianMeals().subscribe((data: Items) => {
      this.meals = data.meals;
    });
  }

  onRatingClicked(rating: number) {
    this.selectedRating = rating;
    console.log('Rating selected:', rating);
  }

  toggleLike(idMealSelected: string): void {

    let meal = this.meals.find((m) => m.idMeal === idMealSelected);

    if(meal) {
      meal.liked = !meal.liked
    }
    //this.meals[index].liked = !this.likedImages[index];
    console.log('Liked selected:', idMealSelected);
  }

}
