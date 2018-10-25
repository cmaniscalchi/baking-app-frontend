import React, { Component } from 'react'
import * as actions from '../actions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

const WithAuth = WrappedComponent => {
  class AuthorizedComponent extends Component {

    componentDidMount() {
      if (localStorage.getItem('jwt') && !this.props.loggedIn) {
        this.props.fetchCurrentUser()
      }
    }

    render() {
      if (localStorage.getItem('jwt') && this.props.loggedIn) {
        return <WrappedComponent />
      } else if (localStorage.getItem('jwt') && this.props.authenticatingUser) {
        return "Loading Component"
      } else {
        return <Redirect to="/login" />
      }
    }
  }

  const mapStateToProps = state => {
    return {
      loggedIn: state.user.loggedIn,
      authenticatingUser: state.user.authenticatingUser
    }
  }

  return connect(mapStateToProps, actions)(AuthorizedComponent)
}

export default WithAuth
