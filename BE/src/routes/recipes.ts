import { Router } from 'express'
import { getAvailableRecipes, getRecipeInfo } from '../utils/recipeController'

const router = Router()

// Get available recipes with optional filtering
router.get('/recipes', getAvailableRecipes)

// Get detailed information about a specific recipe
router.get('/recipes/:id', getRecipeInfo)

export default router
