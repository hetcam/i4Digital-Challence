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

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    // Search canadian meal list
    this.api.consultCanadianMeals().subscribe((data: Items) => {
      this.meals = data.meals;
    });
  }

}
