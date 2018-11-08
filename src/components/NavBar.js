import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
// import NavDrawer from './NavDrawer'
import { Menu, Toolbar, Typography, Button, IconButton } from 'semantic-ui-react'
import { logoutUser, openDrawer, closeDrawer } from '../actions'

class NavBar extends Component {

  componentDidMount() {
    let { closeDrawer, drawerOpen } = this.props
    if (drawerOpen) {
      return closeDrawer()
    } else {
      return null
    }
  }

  handleLogoutUser = () => {
    let { logoutUser, loggedIn, user } = this.props
    if (loggedIn) {
      return logoutUser(user.email)
    } else {
      return null
    }
  }

  render() {
    let { loggedIn, openDrawer, drawerOpen } = this.props

    return (
      <div style={{ flexGrow: 1 }}>
        <Menu stackable>
        <Menu.Item>
          <h6 component={Link} to="/">My Baking App</h6>
          </Menu.Item>
            { loggedIn ? (
              <Menu.Item onClick={ this.handleLogoutUser } color="inherit">Log Out</Menu.Item>
            ) : (
              <Menu.Item component={Link} to="/login">Log In or Sign Up</Menu.Item>
            )}
          </Menu>
      </div>
    )
  }
}
// { drawerOpen === true ? <NavDrawer /> : null }

const mapStateToProps = ({ users: { loggedIn, user, drawerOpen } }) => ({ loggedIn, user, drawerOpen })

export default withRouter(connect(mapStateToProps, { logoutUser, closeDrawer, openDrawer })(NavBar))
