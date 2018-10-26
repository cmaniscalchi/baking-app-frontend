import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { logoutUser } from '../actions'

const NavBar = ({ loggedIn, logoutUser, user, location: { pathname } }) => {

  return (
    <Navbar collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          My Baking Conversion App
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        {loggedIn ? (
          <Nav>
            <LinkContainer to="/">
              <NavItem eventKey={1}>Convert Recipes</NavItem>
            </LinkContainer>
            <LinkContainer to="/recipes">
              <NavItem eventKey={2}>My Saved Recipes</NavItem>
            </LinkContainer>
          </Nav>
        ) : null
        }
        <Nav pullRight>
          {loggedIn ? (
            <LinkContainer to="/login">
              <NavItem eventKey={1}>Log Out</NavItem>
            </LinkContainer>
          ) : (
            <LinkContainer to="/login">
              <NavItem eventKey={1}>Log In or Sign Up</NavItem>
            </LinkContainer>)
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

const mapStateToProps = ({ users: { loggedIn, user } }) => ({ loggedIn, user })

export default withRouter(connect(mapStateToProps, { logoutUser })(NavBar))
