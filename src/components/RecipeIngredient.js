import React from 'react'
import { connect } from 'react-redux'
import { Table, Icon } from 'semantic-ui-react'
import { openModal, removeIngredient, selectIngredient } from '../actions'

const RecipeIngredient = ({ ingredient, openModal, recipeIngredients, removeIngredient, selectIngredient }) => {

  const handleSelect = ingredient => {
    selectIngredient(ingredient)
    openModal()
  }


  // console.log("RecipeIngredient:", ingredient, recipeIngredients, removeIngredient )
  if (ingredient) {
    let { ingredient_name, ingredient_unit, ingredient_volume } = ingredient

    return (
      <Table.Row style={{textAlign: 'center'}}>
      <Table.Cell onClick={() => removeIngredient(ingredient)}><Icon name='delete' /></Table.Cell>
      <Table.Cell onClick={() => handleSelect(ingredient)}><Icon name='edit' /></Table.Cell>
      <Table.Cell>{ingredient_name}</Table.Cell>
      <Table.Cell>{ingredient_volume.text}</Table.Cell>
      <Table.Cell>{ingredient_unit}</Table.Cell>
      </Table.Row>
    )
  } else {
    return null
  }
}

const mapStateToProps = ({ recipes: { recipeIngredients } }) => ({ recipeIngredients })

export default connect(mapStateToProps, { openModal, removeIngredient, selectIngredient })(RecipeIngredient)
