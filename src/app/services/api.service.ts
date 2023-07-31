import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Items } from '../models/meal.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  canadianMealUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian';

  constructor(private http: HttpClient) { }

  consultCanadianMeals(): Observable<Items> {
    return this.http.get<Items>(this.canadianMealUrl);
  }
}
