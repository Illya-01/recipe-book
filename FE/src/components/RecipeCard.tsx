import React from 'react'
import { Link } from 'react-router-dom'
import { Recipe } from '../types'

interface RecipeCardProps {
  recipe: Recipe
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <Link to={`/recipe/${recipe.idMeal}`} className="recipe-card">
      <div className="recipe-card-image">
        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      </div>
      <div className="recipe-card-content">
        <h3>{recipe.strMeal}</h3>
        {recipe.strCategory && (
          <p className="recipe-category">Category: {recipe.strCategory}</p>
        )}
        {recipe.strArea && <p className="recipe-area">Country: {recipe.strArea}</p>}
      </div>
    </Link>
  )
}

export default RecipeCard
