import React from 'react'
import { connect } from 'react-redux'
import RecipeIngredient from './RecipeIngredient'
import { List, Container } from 'semantic-ui-react'

const RecipeIngredientList = ({ recipeIngredients }) => {
  // console.log("RecipeIngredientList:", recipeIngredients)

  if (recipeIngredients.length > 0) {

    return (
      <div style={{display: 'flex', margin:'5%'}}>
        <Container elevation={1} style={{ width: '100%' }}>
          <h5>
            My Recipe Ingredients
          </h5>
          <List>
            {recipeIngredients.map(ingredient => <RecipeIngredient ingredient={ingredient} key={ingredient.ingredient_name} />)}
          </List>
        </Container>
      </div>
    )
  } else {
    return null
  }
}

const mapStateToProps = ({ recipes: { recipeIngredients }}) => ({ recipeIngredients })

export default connect(mapStateToProps)(RecipeIngredientList)
