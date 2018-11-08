import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import LogInForm from './LogInForm'
// import SignUpForm from './SignUpForm'

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
        <Menu tabular value={value} onChange={this.handleChange}>
        <Menu.Item value={0} label="Log In" />
        <Menu.Item value={1} label="Sign Up" />
        </Menu>
        {value === 0 ? <LogInForm /> : null}
        </div>
      )
    }
  }
}

const mapStateToProps = ({ users: { loggedIn } }) => ({ loggedIn })

export default withRouter(connect(mapStateToProps)(LogInSignUp))
