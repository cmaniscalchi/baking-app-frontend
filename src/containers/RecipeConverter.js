import React, { Component, Fragment } from 'react'
import withAuth from '../hocs/withAuth'
import IngredientModal from '../components/IngredientModal'
import IngredientSelector from '../components/IngredientSelector'
import RecipeIngredientList from '../components/RecipeIngredientList'
import ConversionOptions from '../components/ConversionOptions'

class RecipeConverter extends Component {

  render() {
    return (
      <Fragment>
        <IngredientModal />
        <IngredientSelector />
        <RecipeIngredientList />
        <ConversionOptions />
      </Fragment>
    )
  }
}

export default withAuth(RecipeConverter)
