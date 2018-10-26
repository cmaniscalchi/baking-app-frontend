import React, { Component, Fragment } from 'react'
import WithAuth from '../hocs/WithAuth'
import IngredientSelector from '../components/IngredientSelector'

class RecipeConverter extends Component {

  render() {
    return (
      <Fragment>
        <IngredientSelector />
      </Fragment>
    )
  }
}

export default WithAuth(RecipeConverter)
