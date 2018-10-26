import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Form, FormGroup, Col, ControlLabel, FormControl, Button, Well } from 'react-bootstrap';
import { signUpUser } from '../actions'

class SignupForm extends Component {
  state = { signUpEmail: '', signUpUserName: '', password: '' }

  handleInputChange = event => {
    this.setState({ [event.target.id]: event.target.value })
  }

  validateForm() {
    return this.state.signUpEmail.length > 0 && this.state.signUpUserName.length && this.state.password.length > 0
  }

  handleSignUpSubmit = event => {
    event.preventDefault()
    this.props.signUpUser(this.state.signUpEmail, this.state.password)
    this.setState({ signUpEmail: '', signUpUserName: '', password: '' })
  }

  render() {
    // console.log("SignupForm props:", this.state, this.props)
    let { signUpEmail, signUpUserName, signUpPassword } = this.state

    const emailInput = (
      <FormGroup controlId="signUpEmail">
        <Col componentClass={ControlLabel} sm={2}>
          Email
        </Col>
        <Col sm={10}>
          <FormControl
            type="email"
            value={signUpEmail}
            placeholder="Email"
            onChange={this.handleInputChange}
          />
        </Col>
      </FormGroup>
    )

    const userNameInput = (
      <FormGroup controlId="signUpUserName">
        <Col componentClass={ControlLabel} sm={2}>
          User Name
        </Col>
        <Col sm={10}>
          <FormControl
            type="text"
            value={signUpUserName}
            placeholder="User Name"
            onChange={this.handleInputChange}
          />
        </Col>
      </FormGroup>
    )

    const passwordInput = (
      <FormGroup controlId="signUpPassword">
        <Col componentClass={ControlLabel} sm={2}>
          Password
        </Col>
        <Col sm={10}>
          <FormControl
            type="password"
            value={signUpPassword}
            placeholder="Password"
            onChange={this.handleInputChange}
          />
        </Col>
      </FormGroup>
    )

    return (
      <Well bsSize="large">
        <Form onSubmit={this.handleSignUpSubmit} horizontal>
          {emailInput}
          {userNameInput}
          {passwordInput}
          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button block type="submit" disabled={!this.validateForm()}>Sign Up for an Account</Button>
            </Col>
          </FormGroup>
        </Form>
      </Well>
    )
  }
}

export default withRouter(connect(null, { signUpUser })(SignupForm))
