import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { CssBaseline, Avatar, FormControl, Input, InputLabel, Button, Typography } from '@material-ui/core'
import LockIcon from '@material-ui/icons/LockOutlined'
import { signUpUser } from '../actions'

class SignupForm extends Component {
  state = { signUpEmail: '', signUpUserName: '', signUpPassword: '' }

  handleInputChange = event => {
    this.setState({ [event.target.id]: event.target.value })
  }

  validateForm = () => {
    return this.state.signUpEmail.length > 0 && this.state.signUpUserName.length && this.state.signUpPassword.length > 0
  }

  handleSignUpSubmit = event => {
    event.preventDefault()
    this.props.signUpUser(this.state.signUpEmail, this.state.signUpPassword)
    this.setState({ signUpEmail: '', signUpUserName: '', password: '' })
  }

  render() {
    let { signUpEmail, signUpUserName, signUpPassword } = this.state

    const emailInput = (
      <FormControl onChange={this.handleInputChange} margin="normal" required fullWidth>
        <InputLabel htmlFor="signUpEmail">Email Address</InputLabel>
        <Input id="signUpEmail" name="email" value={signUpEmail} autoFocus />
      </FormControl>
    )

    const userNameInput = (
      <FormControl onChange={this.handleInputChange} margin="normal" required fullWidth>
        <InputLabel htmlFor="signUpUserName">User Name</InputLabel>
        <Input id="signUpUserName" name="email" value={signUpUserName} />
      </FormControl>
    )

    const passwordInput = (
      <FormControl onChange={this.handleInputChange} margin="normal" required fullWidth>
        <InputLabel htmlFor="signUpPassword">Password</InputLabel>
        <Input id="signUpPassword" name="password" type="password" value={signUpPassword}  />
      </FormControl>
    )

    return (
      <Fragment>
        <CssBaseline />
        <Avatar>
          <LockIcon />
        </Avatar>
        <Typography component="h1" variant="h5">Sign Up For an Account</Typography>
        <form onSubmit={this.handleSignUpSubmit} style={{ width: '100%' }}>
          {emailInput}
          {userNameInput}
          {passwordInput}
          <Button type="submit" fullWidth variant="contained" color="primary" disabled={!this.validateForm()}>Sign Up</Button>
        </form>
      </Fragment>
    )
  }
}

export default withRouter(connect(null, { signUpUser })(SignupForm))
