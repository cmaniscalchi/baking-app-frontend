import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import NavDrawer from './NavDrawer'
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { logoutUser, openDrawer, closeDrawer } from '../actions'

class NavBar extends Component {

  componentDidMount() {
    let { closeDrawer, left } = this.props
    if (left) {
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
    let { loggedIn, openDrawer, left } = this.props

    return (
      <div style={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton style={{ marginLeft: -12, marginRight: 20 }} color="inherit" aria-label="Menu" onClick={openDrawer}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" style={{ flexGrow: 1, textDecoration:'none' }} component={Link} to="/">My Baking App</Typography>
            { loggedIn ? (
              <Button onClick={ this.handleLogoutUser } color="inherit">Log Out</Button>
            ) : (
              <Button color="inherit" component={Link} to="/login">Log In or Sign Up</Button>
            )}
          </Toolbar>
        </AppBar>
        { left === true ? <NavDrawer /> : null }
      </div>
    )
  }
}

const mapStateToProps = ({ users: { loggedIn, user, left } }) => ({ loggedIn, user, left })

export default withRouter(connect(mapStateToProps, { logoutUser, closeDrawer, openDrawer })(NavBar))
