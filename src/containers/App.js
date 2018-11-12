import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, withRouter } from 'react-router-dom'
import { Sidebar, Segment } from 'semantic-ui-react'
import NavBar from '../components/NavBar'
import LeftSidebar from '../components/LeftSidebar'
import LogInSignUp from '../components/LogInSignUp'
import RecipeConverter from './RecipeConverter'
import { closeSidebar } from '../actions'

const App = ({ sidebarOpen, closeSidebar }) => {

  return (
    <Fragment>
    <NavBar />

    <Sidebar.Pushable as={Segment} style={{ minHeight: window.innerHeight, height: "100%"}}>
    <LeftSidebar />
    <Sidebar.Pusher>
    <div style={{ minHeight: window.innerHeight, height: "100%"}}>

    <Switch>
    <Route exact path="/login" component={LogInSignUp} />
    <Route exact path="/" component={RecipeConverter} />
    </Switch>

    </div>
    </Sidebar.Pusher>
    </Sidebar.Pushable>

    </Fragment>
  )
}

const mapStateToProps = ({ users: { sidebarOpen } }) => ({ sidebarOpen })

export default withRouter(connect(mapStateToProps, { closeSidebar })(App))
