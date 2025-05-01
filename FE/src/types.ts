export interface Recipe {
  idMeal: string
  strMeal: string
  strCategory?: string
  strArea?: string
  strInstructions?: string
  strMealThumb?: string
  strTags?: string
  strYoutube?: string
  ingredients?: {
    name: string
    measure: string
  }[]
}

export interface ApiResponse<T> {
  success: boolean
  data: T
  message?: string
}
