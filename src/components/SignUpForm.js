import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Button, Form, Header, Icon, Input, Label } from 'semantic-ui-react'
import { signUpUser } from '../actions'

class SignupForm extends Component {
  state = { signUpEmail: '', signUpUserName: '', signUpPassword: '' }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  validateForm = () => {
    let { signUpEmail, signUpUserName, signUpPassword } = this.state
    return signUpEmail.length > 0 && signUpUserName.length > 0 && signUpPassword.length > 0
  }

  handleSignUpSubmit = () => {
    let { signUpEmail, signUpUserName, signUpPassword } = this.state
    this.props.signUpUser(signUpEmail, signUpUserName, signUpPassword)
    this.setState({ signUpEmail: '', signUpUserName: '', password: '' })
  }

  render() {
    let { signUpEmail, signUpUserName, signUpPassword } = this.state

    const inputs = (
      <div>
      <Label>Email Address</Label>
      <Input onChange={this.handleInputChange} name="signUpEmail" required value={signUpEmail} />
      <Label>User Name</Label>
      <Input onChange={this.handleInputChange} name="signUpUserName" required value={signUpUserName} />
      <Label>Password</Label>
      <Input onChange={this.handleInputChange} name="signUpPassword"  type="password" required value={signUpPassword} />
      </div>
    )

    return (
      <Fragment>
          <Header>Sign Up For an Account</Header>
          <Icon name='lock' />
        <Form onSubmit={this.handleSignUpSubmit} style={{ width: '100%' }}>
          {inputs}
          <Button type="submit" disabled={!this.validateForm()}>Sign Up</Button>
        </Form>
      </Fragment>
    )
  }
}

export default withRouter(connect(null, { signUpUser })(SignupForm))
