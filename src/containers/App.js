import React, { Fragment } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import NavBar from '../components/NavBar'
import LogInSignUp from '../components/LogInSignUp'
import RecipeConverter from './RecipeConverter'

const App = () => {

  return (
    <Fragment>
      <NavBar />
      <div>
        <Switch>
          <Route exact path="/login" component={LogInSignUp} />
          <Route exact path="/" component={RecipeConverter} />
        </Switch>
      </div>
    </Fragment>
  )
}

export default withRouter(App)
