import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getRecipesByCategory } from '../services/api'
import { Recipe } from '../types'

interface CategorySidebarProps {
  category: string
  currentRecipeId: string
}

const CategorySidebar: React.FC<CategorySidebarProps> = ({
  category,
  currentRecipeId,
}) => {
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchCategoryRecipes = async () => {
      if (!category) return

      setLoading(true)
      const data = await getRecipesByCategory(category)
      // Filter out the current recipe
      const filteredRecipes = data.filter(
        recipe => recipe.idMeal !== currentRecipeId
      )
      setRecipes(filteredRecipes)
      setLoading(false)
    }

    fetchCategoryRecipes()
  }, [category, currentRecipeId])

  if (loading) {
    return <div className="sidebar-loading">Loading...</div>
  }

  return (
    <div className="category-sidebar">
      <h3>More {category} Recipes</h3>
      {recipes.length > 0 ? (
        <ul className="sidebar-recipes">
          {recipes.slice(0, 5).map(recipe => (
            <li key={recipe.idMeal}>
              <Link to={`/recipe/${recipe.idMeal}`}>
                <div className="sidebar-recipe-item">
                  {recipe.strMealThumb && (
                    <img
                      src={recipe.strMealThumb}
                      alt={recipe.strMeal}
                      className="sidebar-recipe-image"
                    />
                  )}
                  <span>{recipe.strMeal}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No other recipes in this category</p>
      )}
      <Link to={`/?category=${encodeURIComponent(category)}`} className="view-all">
        View all {category} recipes
      </Link>
    </div>
  )
}

export default CategorySidebar
