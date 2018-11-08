import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, NavLink } from 'react-router-dom'
import { Menu, Icon } from 'semantic-ui-react'
import { logoutUser, openSidebar, closeSidebar } from '../actions'

class NavBar extends Component {

  componentDidMount() {
    let { closeSidebar, sidebarOpen } = this.props
    if (sidebarOpen) {
      return closeSidebar()
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
    let { loggedIn, openSidebar } = this.props

    return (
      <Menu borderless attached='top' style={{width:'100%'}}>
      <Menu.Item onClick={openSidebar}>
      <Icon name='bars' />
      </Menu.Item>
      <Menu.Item header as={NavLink} to="/">My Baking App</Menu.Item>
      <Menu.Menu position='right'>
      { loggedIn ? (
        <Menu.Item onClick={ this.handleLogoutUser }>Log Out</Menu.Item>
      ) : (
        <Menu.Item as={NavLink} to="/login">Log In or Sign Up</Menu.Item>
      )}
      </Menu.Menu>
      </Menu>
    )
  }
}

const mapStateToProps = ({ users: { loggedIn, user, sidebarOpen } }) => ({ loggedIn, user, sidebarOpen })

export default withRouter(connect(mapStateToProps, { logoutUser, closeSidebar, openSidebar })(NavBar))
