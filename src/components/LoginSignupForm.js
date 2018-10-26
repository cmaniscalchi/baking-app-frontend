import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import LogInForm from './LogInForm'
import SignUpForm from './SignUpForm'
import { Tabs, Tab } from 'react-bootstrap';

const LogInSignUpForm = ({ loggedIn }) => {

  if (loggedIn) {
    return <Redirect to="/" />
  } else {
    return (
      <Tabs id='logInSignUpForm' defaultActiveKey={1} style={{width:'90%', margin: 'auto'}}>
        <Tab eventKey={1} title="Log In">
          <LogInForm />
        </Tab>
        <Tab eventKey={2} title="Sign Up">
          <SignUpForm />
        </Tab>
      </Tabs>
    )
  }
}

const mapStateToProps = ({ users: { loggedIn } }) => ({ loggedIn })

export default withRouter(connect(mapStateToProps)(LogInSignUpForm))
