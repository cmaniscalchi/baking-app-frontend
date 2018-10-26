import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Form, FormGroup, Col, ControlLabel, FormControl, Button, Well } from 'react-bootstrap';
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
    // console.log("LogInForm props:", this.state, this.props)
    let { logInEmail, logInPassword } = this.state

    const emailInput = (
      <FormGroup controlId="logInEmail">
        <Col componentClass={ControlLabel} sm={2}>
          Email
        </Col>
        <Col sm={10}>
          <FormControl
            type="email"
            value={logInEmail}
            placeholder="Email"
            onChange={this.handleInputChange}
          />
        </Col>
      </FormGroup>
    )

    const passwordInput = (
      <FormGroup controlId="logInPassword">
        <Col componentClass={ControlLabel} sm={2}>
          Password
        </Col>
        <Col sm={10}>
          <FormControl
            type="password"
            value={logInPassword}
            placeholder="Password"
            onChange={this.handleInputChange}
          />
        </Col>
      </FormGroup>
    )

    return (
      <Well bsSize="large">
        <Form onSubmit={this.handleLoginSubmit} horizontal>
          {emailInput}
          {passwordInput}
          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button block type="submit" disabled={!this.validateForm()}>Sign In</Button>
            </Col>
          </FormGroup>
        </Form>
      </Well>
    )
  }
}

export default withRouter(connect(null, { loginUser })(LogInForm))
