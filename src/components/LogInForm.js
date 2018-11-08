import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Button, Form, Header, Icon, Input, Label } from 'semantic-ui-react'
import { loginUser } from '../actions'

class LogInForm extends Component {
  state = { logInEmail: '', logInPassword: '' }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  validateForm = () => {
    let { logInEmail, logInPassword } = this.state
    return logInEmail.length > 0 && logInPassword.length > 0
  }

  handleLoginSubmit = () => {
    let { logInEmail, logInPassword } = this.state
    this.props.loginUser(logInEmail, logInPassword)
    this.setState({ logInEmail: '', logInPassword: '' })
  }

  render() {
    let { logInEmail, logInPassword } = this.state

    const inputs = (
      <div>
      <Label>Email Address</Label>
      <Input onChange={this.handleInputChange} name="logInEmail" required value={logInEmail} />
      <Label>Password</Label>
      <Input onChange={this.handleInputChange} name="logInPassword"  type="password" required value={logInPassword} />
      </div>
    )

    return (
      <Fragment>
      <Header>Log In</Header>
      <Icon name='lock' />
      <Form onSubmit={this.handleLoginSubmit} style={{ width: '100%', marginTop: '10px' }}>
      {inputs}
      <Button type="submit" disabled={!this.validateForm()}>Sign In</Button>
      </Form>
      </Fragment>
    )
  }
}

export default withRouter(connect(null, { loginUser })(LogInForm))
