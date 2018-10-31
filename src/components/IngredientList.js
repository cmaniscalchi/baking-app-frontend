import React from 'react'
import { connect } from 'react-redux'
import { List, ListItem, ListItemText } from '@material-ui/core'

const IngredientList = ({ recipeIngredients }) => {
  console.log("IngredientList props:", recipeIngredients)

  if (recipeIngredients.length > 0) {
    return (
      <div style={{display: 'flex', margin:'5%'}}>
        <List>
          {recipeIngredients.map(ingred => {
            return (
              <ListItem button key={ingred.ingredient_name}>
                <ListItemText primary={ingred.ingredient_name} />
              </ListItem>
            )
          })}
        </List>
      </div>
    )
  } else {
    return null
  }
}

const mapStateToProps = ({ recipes: { recipeIngredients }}) => ({ recipeIngredients })

export default connect(mapStateToProps)(IngredientList)
