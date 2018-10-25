import { AUTHENTICATING_USER, FAILED_LOGIN, REMOVE_CURRENT_USER, SET_CURRENT_USER } from '../types'

export const authenticatingUser = () => ({ type: AUTHENTICATING_USER })

export const failedLogin = error => ({ type: FAILED_LOGIN, payload: error })

export const setCurrentUser = userData => ({ type: SET_CURRENT_USER, payload: userData })

// const BASE_URL = `${process.env.REACT_APP_API_ENDPOINT}/api/v1/`
const BASE_URL = `http://localhost:3000/api/v1/`

export const fetchCurrentUser = () => {
  return dispatch => {
    let urlSuffix = `profile`
    let getConfig = {
      method: "GET",
      headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` },
    }
    dispatch(authenticatingUser())

    fetch(`${BASE_URL}${urlSuffix}`, getConfig)
    .then(res => res.json())
    .then(userData => dispatch(setCurrentUser(userData.user)))
  }
}

export const loginUser = (email, password) => {
  let urlSuffix = `login`
  let postConfig = {
    method: "POST",
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify({ user: { email, password } })
  }

  return dispatch => {
    dispatch({ type: AUTHENTICATING_USER })
    fetch(`${BASE_URL}${urlSuffix}`, postConfig)
    .then(res => {
      if (res.ok) { return res.json() }
      else { throw res }
    })
    .then(userData => {
      console.log('%c INSIDE YE OLDE .THEN', 'color: navy')
      localStorage.setItem('jwt', userData.jwt)
      dispatch({ type: SET_CURRENT_USER, payload: userData.user})
    })
    .catch(res => res.json().then(error => dispatch({
      type: FAILED_LOGIN,
      payload: error })
    ))
  }
}

export const logoutUser = email => {
  let urlSuffix = `logout`
  let postConfig = {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user: { email } })
  }

  return dispatch => {
    dispatch({ type: AUTHENTICATING_USER })
    fetch(`${BASE_URL}${urlSuffix}`, postConfig)
    .then(res => {
      localStorage.removeItem('jwt')
      dispatch({ type: REMOVE_CURRENT_USER })
    })
  }
}

export const signUpUser = (email, password) => {
  debugger
  let urlSuffix = `users`
  let postConfig = {
    method: "POST",
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify({ user: { email, password } })
  }

  return dispatch => {
    dispatch({ type: AUTHENTICATING_USER })
    fetch(`${BASE_URL}${urlSuffix}`, postConfig)
    .then(res => {
      if (res.ok) { return res.json()}
      else { throw res }
    })
    .then(userData => {
      localStorage.setItem('jwt', userData.jwt)
      dispatch({ type: SET_CURRENT_USER, payload: userData.user})
    })
    .catch(res => res.json().then(error => dispatch({
      type: FAILED_LOGIN,
      payload: error.message })
    ))
  }
}
