import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getRecipes } from '../services/api'
import { Recipe } from '../types'
import RecipeCard from './RecipeCard'

const RecipeList: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [title, setTitle] = useState<string>('All Recipes')

  const location = useLocation()
  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true)

      const queryParams = new URLSearchParams(location.search)
      const ingredient = queryParams.get('ingredient')
      const category = queryParams.get('category')
      const country = queryParams.get('country')

      let filterType: string | undefined
      let filterValue: string | undefined
      let pageTitle = 'All Recipes'

      if (ingredient) {
        filterType = 'ingredient'
        filterValue = ingredient
        pageTitle = `Recipes with ${ingredient}`
      } else if (category) {
        filterType = 'category'
        filterValue = category
        pageTitle = `${category} Recipes`
      } else if (country) {
        filterType = 'country'
        filterValue = country
        pageTitle = `${country} Recipes`
      }

      setTitle(pageTitle)
      const data = await getRecipes(filterType, filterValue)
      setRecipes(data)
      setLoading(false)
    }

    fetchRecipes()
  }, [location.search])

  if (loading) {
    return <div className="loading">Loading recipes...</div>
  }

  return (
    <div className="recipe-list-container">
      <h1 className="page-title">{title}</h1>

      {recipes.length === 0 ? (
        <div className="no-recipes">No recipes found</div>
      ) : (
        <div className="recipe-grid">
          {recipes.map(recipe => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  )
}

export default RecipeList
