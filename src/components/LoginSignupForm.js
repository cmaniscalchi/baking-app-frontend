import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
// import LogInForm from './LogInForm'
// import SignUpForm from './SignUpForm'

const LogInSignUpForm = ({ loggedIn }) => {

  if (loggedIn) {
    return <Redirect to="/" />
  } else {
    return (
      <Tabs id='logInSignUpForm' defaultActiveKey={1} style={{width:'90%', margin: 'auto'}}>
        <Tab fullWidth label="Log In">
          {/* <LogInForm /> */}
        </Tab>
        <Tab fullWidth label="Sign Up">
          {/* <SignUpForm /> */}
        </Tab>
      </Tabs>
    )
  }
}

const mapStateToProps = ({ users: { loggedIn } }) => ({ loggedIn })

export default withRouter(connect(mapStateToProps)(LogInSignUpForm))
