import axios from 'axios'
import { ApiResponse, Recipe } from '../types'

const API_URL = 'http://localhost:8000/api'

export const getRecipes = async (
  filterType?: string,
  filterValue?: string
): Promise<Recipe[]> => {
  try {
    let endpoint = `${API_URL}/recipes`

    if (filterType && filterValue) {
      endpoint += `?${filterType}=${encodeURIComponent(filterValue)}`
    }

    const response = await axios.get<ApiResponse<Recipe[]>>(endpoint)
    return response.data.data
  } catch (error) {
    console.error('Error fetching recipes:', error)
    return []
  }
}

export const getRecipeById = async (id: string): Promise<Recipe | null> => {
  try {
    const response = await axios.get<ApiResponse<Recipe>>(`${API_URL}/recipes/${id}`)
    return response.data.data
  } catch (error) {
    console.error('Error fetching recipe details:', error)
    return null
  }
}

export const getRecipesByCategory = async (category: string): Promise<Recipe[]> => {
  return getRecipes('category', category)
}

export const getRecipesByIngredient = async (
  ingredient: string
): Promise<Recipe[]> => {
  return getRecipes('ingredient', ingredient)
}

export const getRecipesByCountry = async (country: string): Promise<Recipe[]> => {
  return getRecipes('country', country)
}
