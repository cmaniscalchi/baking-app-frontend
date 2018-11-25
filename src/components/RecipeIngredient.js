
import React from 'react'
import { connect } from 'react-redux'
import { Table, Icon } from 'semantic-ui-react'
import { openModal, removeIngredient, selectIngredient } from '../actions'

const RecipeIngredient = ({ conversionUnit, ingredient, openModal, recipeIngredients, removeIngredient, selectIngredient }) => {

  const handleSelect = ingredient => {
    selectIngredient(ingredient)
    openModal()
  }

  const ingredientVolumes = () => {
    let { ingredient_name, ingredient_unit, ingredient_volume } = ingredient
    return (
      <Table.Row style={{textAlign: 'center'}}>
      <Table.Cell onClick={() => removeIngredient(ingredient)}><Icon name='delete' /></Table.Cell>
      <Table.Cell onClick={() => handleSelect(ingredient)}><Icon name='edit' /></Table.Cell>
      <Table.Cell>{ingredient_name}</Table.Cell>
      <Table.Cell>{ingredient_volume.text}</Table.Cell>
      <Table.Cell>{ingredient_volume.value > 1 ? ingredient_unit.name.plural : ingredient_unit.name.singular}</Table.Cell>
      </Table.Row>
    )
  }

  const ingredientGrams = () => {
    let { ingredient_name, ingredient_grams } = ingredient
    return (
      <Table.Row style={{textAlign: 'center'}}>
      <Table.Cell onClick={() => removeIngredient(ingredient)}><Icon name='delete' /></Table.Cell>
      <Table.Cell onClick={() => handleSelect(ingredient)}><Icon name='edit' /></Table.Cell>
      <Table.Cell>{ingredient_name}</Table.Cell>
      <Table.Cell>{ingredient_grams}</Table.Cell>
      <Table.Cell>{ingredient_grams > 1 ? "Grams" : "Gram"}</Table.Cell>
      </Table.Row>
    )
  }

  const ingredientOunces = () => {
    let { ingredient_name, ingredient_ounces } = ingredient
    return (
      <Table.Row style={{textAlign: 'center'}}>
      <Table.Cell onClick={() => removeIngredient(ingredient)}><Icon name='delete' /></Table.Cell>
      <Table.Cell onClick={() => handleSelect(ingredient)}><Icon name='edit' /></Table.Cell>
      <Table.Cell>{ingredient_name}</Table.Cell>
      <Table.Cell>{Math.round(ingredient_ounces * 10)/10}</Table.Cell>
      <Table.Cell>{ingredient_ounces > 1 ? "Ounces" : "Ounce"}</Table.Cell>
      </Table.Row>
    )
  }

  // console.log("RecipeIngredient:", ingredient, recipeIngredients, removeIngredient )
  if (ingredient) {
    if (conversionUnit === 'volume') {
      return ingredientVolumes()
    } else if (conversionUnit === 'ounces') {
      return ingredientOunces()
    } else if (conversionUnit === 'grams') {
      return ingredientGrams()
    } else {
      return null
    }
  } else {
    return null
  }
}

const mapStateToProps = ({ recipes: { conversionUnit, recipeIngredients } }) => ({ conversionUnit, recipeIngredients })

export default connect(mapStateToProps, { openModal, removeIngredient, selectIngredient })(RecipeIngredient)
