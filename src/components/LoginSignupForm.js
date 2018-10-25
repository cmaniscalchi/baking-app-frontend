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
    debugger;
    event.preventDefault()
    this.props.signUpUser(this.state.email, this.state.password)
    this.setState({ email: '', password: '' })
  }

  render() {
    let { failedLogin, error, loggedIn } = this.props
    let { email, password } = this.state

    const emailInput = (
      <input
        label="Email"
        placeholder="Email"
        name="email"
        onChange={this.handleInputChange}
        value={email}
      />
    )

    const passwordInput = (
      <input
        type="password"
        label="Password"
        placeholder="Password"
        name="password"
        onChange={this.handleInputChange}
        value={password}
      />
    )

    // const logInForm = (
    //   <div>
    //     <h2>Log In to Your Account</h2>
    //     <br />
    //     <form onSubmit={this.handleLoginSubmit}>
    //       {failedLogin ? error : null}
    //       <div>
    //         {emailInput}
    //         {passwordInput}
    //       </div>
    //       <button type="submit">Log In</button>
    //     </form>
    //   </div>
    // )

    const signUpForm = (
      <div>
        <h2>Sign Up for an Account</h2>
        <br />
        <form onSubmit={this.handleLoginSubmit}>
          <p>
            {failedLogin ? error : null}
          </p>
          <div>
            {emailInput}
            {passwordInput}
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    )

    if (loggedIn) {
        return <Redirect to="/profile" />
      } else {
      return (
        <Fragment>
          <div>
            {/* {logInForm} */}
            {signUpForm}
          </div>
        </Fragment>
      )
    }
  }
}

const mapStateToProps = ({ users: { authenticatingUser, error, failedLogin, loggedIn, user } }) => ({ authenticatingUser, error, failedLogin, loggedIn, user })

export default withRouter(connect(mapStateToProps, { loginUser, signUpUser })(LoginSignupForm))
