import React, { Component, Fragment } from 'react'
import withAuth from '../hocs/withAuth'
import IngredientDetailModal from '../components/IngredientDetailModal'
import IngredientSelector from '../components/IngredientSelector'
import RecipeIngredientList from '../components/RecipeIngredientList'

class RecipeConverter extends Component {

  render() {
    return (
      <Fragment>
        <IngredientDetailModal />
        <IngredientSelector />
        <RecipeIngredientList />
      </Fragment>
    )
  }
}

export default withAuth(RecipeConverter)
