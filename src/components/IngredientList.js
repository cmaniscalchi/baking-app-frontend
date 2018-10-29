import React from 'react'
import { connect } from 'react-redux'

const IngredientList = ({ ingredientChoices }) => {

  return (
    <ul>
      {ingredientChoices.map(ingredient => <li key={ingredient.ingredient_name}>{ingredient.ingredient_name}</li>)}
    </ul>
  )
}

const mapStateToProps = ({ ingredients: { ingredientChoices }}) => ({ ingredientChoices })

export default connect(mapStateToProps)(IngredientList)
