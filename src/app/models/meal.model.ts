export interface MealItem {
  idMeal: string,
  strMeal: string,
  strMealThumb: string,
  rating: number,
  liked: boolean
}
export interface Items {
  meals: MealItem[],
}

