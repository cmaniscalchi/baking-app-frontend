import React from 'react'
import { connect } from 'react-redux'
import RecipeIngredient from './RecipeIngredient'
import { Segment, Table } from 'semantic-ui-react'

const RecipeIngredientList = ({recipeIngredients}) => {

  if (recipeIngredients.length > 0) {
    return (
      <div style={{display: 'flex', margin:'5%', width:'90%', position: 'relative'}}>
      <Segment style={{width:'100%'}}>
      <Table>
      <Table.Header>
      <Table.Row style={{textAlign:'center'}}>
      <Table.HeaderCell style={{width:'5%'}}></Table.HeaderCell>
      <Table.HeaderCell style={{width:'5%'}}></Table.HeaderCell>
      <Table.HeaderCell style={{width:'50%'}}>Ingredient</Table.HeaderCell>
      <Table.HeaderCell style={{width:'20%'}}>Quantity</Table.HeaderCell>
      <Table.HeaderCell style={{width:'20%'}}>Unit</Table.HeaderCell>
      </Table.Row>
      </Table.Header>
      <Table.Body>
      {recipeIngredients.map(ingredient => <RecipeIngredient ingredient={ingredient} key={ingredient.ingredient_name} />)}
      </Table.Body>
      </Table>
      </Segment>
      </div>
    )
  } else {
    return null
  }
}

const mapStateToProps = ({ recipes: { recipeIngredients } }) => ({ recipeIngredients })

export default connect(mapStateToProps)(RecipeIngredientList)
