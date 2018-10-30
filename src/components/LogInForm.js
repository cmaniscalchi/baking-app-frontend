import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { CssBaseline, Avatar, FormControl, Input, InputLabel, Button, Paper, Typography } from '@material-ui/core'
import LockIcon from '@material-ui/icons/LockOutlined'
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
      <FormControl onChange={this.handleInputChange} margin="normal" required fullWidth>
        <InputLabel htmlFor="email">Email Address</InputLabel>
        <Input id="logInEmail" name="email" value={logInEmail} autoFocus />
      </FormControl>
    )

    const passwordInput = (
      <FormControl onChange={this.handleInputChange} margin="normal" required fullWidth>
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input name="password" type="password" value={logInPassword} id="logInPassword" />
      </FormControl>
    )

    return (
      <Fragment>
        <CssBaseline />
        <Avatar>
          <LockIcon />
        </Avatar>
        <Typography component="h1" variant="h5">Log In</Typography>
        <form onSubmit={this.handleLoginSubmit} style={{ width: '100%', marginTop: '10px' }}>
          {emailInput}
          {passwordInput}
          <Button type="submit" fullWidth variant="contained" color="primary" disabled={!this.validateForm()}>Sign In</Button>
        </form>
      </Fragment>
    )
  }
}

export default withRouter(connect(null, { loginUser })(LogInForm))
