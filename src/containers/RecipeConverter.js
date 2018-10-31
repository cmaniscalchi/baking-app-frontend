import React, { Component, Fragment } from 'react'
import WithAuth from '../hocs/WithAuth'
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

export default WithAuth(RecipeConverter)
