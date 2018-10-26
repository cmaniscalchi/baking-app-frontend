import React, { Fragment } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import NavBar from '../components/NavBar'
import LogInSignUpForm from '../components/LogInSignUpForm'
import RecipeContainer from './RecipeContainer'

const App = () => {

  return (
    <Fragment>
      <NavBar />
      <div>
        <Switch>
          <Route exact path="/login" component={LogInSignUpForm} />
          <Route exact path="/" component={RecipeContainer} />
        </Switch>
      </div>
    </Fragment>
  )
}

export default withRouter(App)
