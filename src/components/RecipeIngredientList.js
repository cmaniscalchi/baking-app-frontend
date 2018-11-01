import React from 'react'
import { connect } from 'react-redux'
import RecipeIngredient from './RecipeIngredient'
import { List, Paper, Typography } from '@material-ui/core'

const RecipeIngredientList = ({ recipeIngredients }) => {
  console.log("RecipeIngredientList:", recipeIngredients)

  if (recipeIngredients.length > 0) {

    return (
      <div style={{display: 'flex', margin:'5%'}}>
        <Paper elevation={1} style={{ width: '100%' }}>
          <Typography variant="h5" component="h3">
            My Recipe Ingredients
          </Typography>
          <List>
            {recipeIngredients.map(ingredient => <RecipeIngredient ingredient={ingredient} key={ingredient.ingredient_name} />)}
          </List>
        </Paper>
      </div>
    )
  } else {
    return null
  }
}

const mapStateToProps = ({ recipes: { recipeIngredients }}) => ({ recipeIngredients })

export default connect(mapStateToProps)(RecipeIngredientList)
