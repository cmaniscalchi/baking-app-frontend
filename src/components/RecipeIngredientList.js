import React from 'react'
import { connect } from 'react-redux'
import RecipeIngredient from './RecipeIngredient'
import { Segment, Table } from 'semantic-ui-react'

const RecipeIngredientList = ({ recipeIngredients }) => {
  // console.log("RecipeIngredientList:", recipeIngredients)

  if (recipeIngredients.length > 0) {

    return (
      <Segment>
      <Table unstackable>
      <Table.Header>
      <Table.Row>
      <Table.HeaderCell>Ingredient</Table.HeaderCell>
      <Table.HeaderCell>Quantity</Table.HeaderCell>
      <Table.HeaderCell textAlign='right'>Unit</Table.HeaderCell>
      </Table.Row>
      </Table.Header>
      <Table.Body>
      {recipeIngredients.map(ingredient => <RecipeIngredient ingredient={ingredient} key={ingredient.ingredient_name} />)}
      </Table.Body>
      </Table>
      </Segment>

    )
  } else {
    return null
  }
}


const mapStateToProps = ({ recipes: { recipeIngredients }}) => ({ recipeIngredients })

export default connect(mapStateToProps)(RecipeIngredientList)
