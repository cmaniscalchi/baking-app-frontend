import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import { loginUser, signUpUser } from '../actions'

class LoginSignupForm extends Component {
  state = { email: '', password: '' }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleLoginSubmit = event => {
    event.preventDefault()
    this.props.loginUser(this.state.email, this.state.password)
    this.setState({ email: '', password: '' })
  }

  handleSignUpSubmit = event => {
    event.preventDefault()
    this.props.signUpUser(this.state.email, this.state.password)
    this.setState({ email: '', password: '' })
  }

  render() {
    console.log("LoginSignupForm props:", this.props)
    let { failedLogin, error, loggedIn } = this.props
    let { email, password } = this.state

    const emailInput = (
      <input
        type="text"
        placeholder="Email"
        name="email"
        onChange={this.handleInputChange}
        value={email}
      />
    )

    const passwordInput = (
      <input
        type="password"
        placeholder="Password"
        name="password"
        onChange={this.handleInputChange}
        value={password}
      />
    )

    const logInForm = (
      <div>
        <h2>Log In to Your Account</h2>
        <br />
        <form onSubmit={this.handleLoginSubmit}>
          {failedLogin ? error : null}
          <div>
            {emailInput}
            {passwordInput}
          </div>
          <button type="submit">Log In</button>
        </form>
      </div>
    )

    const signUpForm = (
      <div>
        <form onSubmit={this.handleSignUpSubmit}>
          <h2>Sign Up for an Account</h2>
          <br />
          {failedLogin ? console.log(error) : null}

          {emailInput}
          {passwordInput}

          <input type="submit" value="Submit" />
        </form>
      </div>
    )

    if (loggedIn) {
      return <Redirect to="/" />
    } else {
      return (
        <Fragment>
          <div>
            {logInForm}
            {signUpForm}
          </div>
        </Fragment>
      )
    }
  }
}

const mapStateToProps = ({ users: { authenticatingUser, error, failedLogin, loggedIn, user } }) => ({ authenticatingUser, error, failedLogin, loggedIn, user })

export default withRouter(connect(mapStateToProps, { loginUser, signUpUser })(LoginSignupForm))
