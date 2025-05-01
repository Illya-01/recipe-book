import axios from 'axios'
import { MEAL_DB_API_URL } from '../config'

export const fetchAvailableRecipes = async (
  filterType: string | null,
  filterValue: string | null
) => {
  try {
    let endpoint = 'search.php?s='

    if (filterType && filterValue) {
      switch (filterType) {
        case 'ingredient':
          endpoint = `filter.php?i=${filterValue}`
          break
        case 'category':
          endpoint = `filter.php?c=${filterValue}`
          break
        case 'country':
          endpoint = `filter.php?a=${filterValue}`
          break
      }
    }

    const response = await axios.get(`${MEAL_DB_API_URL}${endpoint}`)
    return response.data.meals || []
  } catch (error) {
    console.error('Error fetching recipes:', error)
    throw new Error('Failed to fetch recipes')
  }
}

export const fetchRecipeById = async (id: string) => {
  try {
    const response = await axios.get(`${MEAL_DB_API_URL}/lookup.php?i=${id}`)
    return response.data.meals?.[0] || null
  } catch (error) {
    console.error('Error fetching recipe by ID:', error)
    throw new Error('Failed to fetch recipe by ID')
  }
}
