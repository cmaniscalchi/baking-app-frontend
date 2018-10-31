import React, { Component, Fragment } from 'react'
import withAuth from '../hocs/withAuth'
import IngredientSelector from '../components/IngredientSelector'
import IngredientList from '../components/IngredientList'

class RecipeConverter extends Component {

  render() {
    return (
      <Fragment>
        <IngredientSelector />
        <IngredientList />
      </Fragment>
    )
  }
}

export default withAuth(RecipeConverter)
