import React, { Component, Fragment } from 'react'
import withAuth from '../hocs/withAuth'
import SavedRecipeIngredientList from '../components/SavedRecipeIngredientList'

class SavedRecipes extends Component {

  render() {
    return (
      <Fragment>
        <SavedRecipeIngredientList />
      </Fragment>
    )
  }
}

export default withAuth(SavedRecipes)
