import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getRecipeById } from '../services/api'
import { Recipe } from '../types'
import IngredientsList from './IngredientsList'
import CategorySidebar from './CategorySidebar'

const RecipeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [recipe, setRecipe] = useState<Recipe | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchRecipeDetail = async () => {
      if (!id) return

      setLoading(true)
      const data = await getRecipeById(id)
      setRecipe(data)
      setLoading(false)
    }

    fetchRecipeDetail()
  }, [id])

  if (loading) {
    return <div className="loading">Loading recipe details...</div>
  }

  if (!recipe) {
    return <div className="error">Recipe not found</div>
  }

  return (
    <div className="recipe-detail-container">
      <div className="recipe-detail-main">
        <div className="recipe-detail-header">
          <div className="recipe-image-container">
            {recipe.strMealThumb && (
              <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                className="recipe-detail-image"
              />
            )}
          </div>

          <div className="recipe-title-container">
            <h1 className="recipe-title">{recipe.strMeal}</h1>
            {recipe.strArea && (
              <p className="recipe-country">
                Country:
                <Link to={`/?country=${encodeURIComponent(recipe.strArea)}`}>
                  {recipe.strArea}
                </Link>
              </p>
            )}
          </div>
        </div>

        {recipe.ingredients && recipe.ingredients.length > 0 && (
          <IngredientsList ingredients={recipe.ingredients} />
        )}

        {recipe.strInstructions && (
          <div className="recipe-instructions">
            <h3>Instructions</h3>
            <p>{recipe.strInstructions}</p>
          </div>
        )}
      </div>

      {recipe.strCategory && (
        <div className="recipe-detail-sidebar">
          <CategorySidebar
            category={recipe.strCategory}
            currentRecipeId={recipe.idMeal}
          />
        </div>
      )}
    </div>
  )
}

export default RecipeDetail
