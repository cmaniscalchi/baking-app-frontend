import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import { AppBar, Tabs, Tab } from '@material-ui/core'
import LogInForm from './LogInForm'
import SignUpForm from './SignUpForm'

class LogInSignUp extends Component {

  state = { value: 0 }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  render() {
    // console.log("LogInSignUp:", this.state, this.props)
    let { value } = this.state
    if (this.props.loggedIn) {
      return <Redirect to="/" />
    } else {
      return (
        <div style={{ flexGrow: 1, width:'90%', margin: 'auto', position: 'relative', padding:'5%'}}>
          <AppBar position="static">
            <Tabs value={value} onChange={this.handleChange}>
              <Tab value={0} label="Log In" />
              <Tab value={1} label="Sign Up" />
            </Tabs>
          </AppBar>
          {value === 0 ? <LogInForm /> : <SignUpForm />}
        </div>
      )
    }
  }
}

const mapStateToProps = ({ users: { loggedIn } }) => ({ loggedIn })

export default withRouter(connect(mapStateToProps)(LogInSignUp))