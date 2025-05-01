import { Request, Response } from 'express'
import { fetchAvailableRecipes, fetchRecipeById } from './recipeService'

export const getAvailableRecipes = async (req: Request, res: Response) => {
  try {
    const { ingredient, category, country } = req.query

    let filterType: string | null = null
    let filterValue: string | null = null

    if (ingredient) {
      filterType = 'ingredient'
      filterValue = ingredient as string
    } else if (category) {
      filterType = 'category'
      filterValue = category as string
    } else if (country) {
      filterType = 'country'
      filterValue = country as string
    }

    const recipes = await fetchAvailableRecipes(filterType, filterValue)
    console.log('Fetched recipes:', recipes)
    res.json({ success: true, data: recipes })
  } catch (error) {
    console.error('Error in getAvailableRecipes:', error)
    res.status(500).json({ success: false, message: 'Failed to fetch recipes' })
  }
}

export const getRecipeInfo = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params

    if (!id) {
      res.status(400).json({ success: false, message: 'Recipe ID is required' })
      return
    }

    const recipe = await fetchRecipeById(id)

    if (!recipe || recipe === 'I') {
      res.status(404).json({ success: false, message: 'Recipe not found' })
      return
    }
    console.log('Fetched recipe:', recipe)
    res.json({ success: true, data: recipe })
  } catch (error) {
    console.error('Error in getRecipeInfo:', error)
    res
      .status(500)
      .json({ success: false, message: 'Failed to fetch recipe details' })
  }
}
