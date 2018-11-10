import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import { Segment, Tab } from 'semantic-ui-react'
import LogInForm from './LogInForm'
import SignUpForm from './SignUpForm'

class LogInSignUp extends Component {

  render() {
    const panes = [
      { menuItem: 'Log In', render: () => <Tab.Pane attached={false}><LogInForm /></Tab.Pane> },
      { menuItem: 'Sign Up', render: () => <Tab.Pane attached={false}><SignUpForm /></Tab.Pane> },
    ]

    // console.log("LogInSignUp:", this.props)
    if (this.props.loggedIn) {
      return <Redirect to="/" />
    } else {
      return (
        <Segment>
        <Tab menu={{ pointing: true }} panes={panes} />
        </Segment>
      )
    }
  }
}

const mapStateToProps = ({ users: { loggedIn } }) => ({ loggedIn })

export default withRouter(connect(mapStateToProps)(LogInSignUp))
