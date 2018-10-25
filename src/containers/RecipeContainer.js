import React, { Fragment } from 'react'
import WithAuth from '../hocs/WithAuth'

const RecipeContainer = () => {

  return (
    <Fragment>
      <p>Recipe Container</p>
    </Fragment>
  )
}

export default WithAuth(RecipeContainer)
