import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Button, Form } from 'semantic-ui-react'
import { loginUser } from '../actions'

class LogInForm extends Component {
  state = { logInEmail: '', logInPassword: '' }

  handleInputChange = event => {
    this.setState({ [event.target.id]: event.target.value })
  }

  validateForm() {
    return this.state.logInEmail.length > 0 && this.state.logInPassword.length > 0
  }

  handleLoginSubmit = event => {
    event.preventDefault()
    this.props.loginUser(this.state.logInEmail, this.state.logInPassword)
    this.setState({ logInEmail: '', logInPassword: '' })
  }

  render() {
    let { logInEmail, logInPassword } = this.state

    const emailInput = (
      <Form.Field onChange={this.handleInputChange} margin="normal" required fullWidth>
        <label htmlFor="email">Email Address</label>
        <input id="logInEmail" name="email" value={logInEmail} autoFocus />
      </Form.Field>
    )

    const passwordInput = (
      <Form.Field onChange={this.handleInputChange} margin="normal" required fullWidth>
        <label htmlFor="password">Password</label>
        <input id="logInPassword" name="password" type="password" value={logInPassword} />
      </Form.Field>
    )

    return (
      <Fragment>
        <h1>Log In</h1>
        <Form onSubmit={this.handleLoginSubmit} style={{ width: '100%', marginTop: '10px' }}>
          {emailInput}
          {passwordInput}
          <Button type="submit" fullWidth variant="contained" color="primary" disabled={!this.validateForm()}>Sign In</Button>
        </Form>
      </Fragment>
    )
  }
}

export default withRouter(connect(null, { loginUser })(LogInForm))
