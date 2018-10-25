import React, { Fragment } from 'react'
import withAuth from '../hocs/WithAuth'

const RecipeContainer = () => {

  return (
    <Fragment>
      <p>Recipe Container</p>
    </Fragment>
  )
}

export default withAuth(RecipeContainer)
