import React, { Fragment } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
// import NavBar from '../components/NavBar'
import LoginSignupForm from '../components/LoginSignupForm'
import RecipeContainer from './RecipeContainer'

const App = () => {

  return (
    <Fragment>
      {/* <NavBar /> */}
      <div>
        <Switch>
          <Route exact path="/login" component={LoginSignupForm} />
          <Route exact path="/profile" component={RecipeContainer} />
        </Switch>
      </div>
    </Fragment>
  )
}

export default withRouter(App)
