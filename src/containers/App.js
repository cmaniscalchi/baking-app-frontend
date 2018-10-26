import React, { Fragment } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import NavBar from '../components/NavBar'
import LogInSignUpForm from '../components/LogInSignUpForm'
import RecipeConverter from './RecipeConverter'

const App = () => {

  return (
    <Fragment>
      <NavBar />
      <div>
        <Switch>
          <Route exact path="/login" component={LogInSignUpForm} />
          <Route exact path="/" component={RecipeConverter} />
        </Switch>
      </div>
    </Fragment>
  )
}

export default withRouter(App)
