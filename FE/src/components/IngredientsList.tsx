import React from 'react'
import { Link } from 'react-router-dom'

interface IngredientsListProps {
  ingredients: { name: string; measure: string }[]
}

const IngredientsList: React.FC<IngredientsListProps> = ({ ingredients }) => {
  return (
    <div className="ingredients-list">
      <h3>Ingredients</h3>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index} className="ingredient-item">
            <Link to={`/?ingredient=${encodeURIComponent(ingredient.name)}`}>
              {ingredient.name}
            </Link>
            <span className="measure">{ingredient.measure}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default IngredientsList
