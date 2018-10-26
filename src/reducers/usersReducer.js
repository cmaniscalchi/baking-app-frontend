import { AUTHENTICATING_USER, FAILED_LOGIN, REMOVE_CURRENT_USER, SET_CURRENT_USER } from '../types'

const initialUsersState = {
  user: null,
  loggedIn: false,
  authenticatingUser: false,
  failedLogin: false,
  error: null
}

export default function usersReducer(state = initialUsersState, action) {
  console.log("usersReducer:", state, action)
  switch (action.type) {
    case SET_CURRENT_USER:
      return { ...state, user: action.payload, loggedIn: true, authenticatingUser: false }
    case AUTHENTICATING_USER:
      return { ...state, authenticatingUser: true }
    case FAILED_LOGIN:
      return { ...state, failedLogin: true, error: action.payload, authenticatingUser: false }
    case REMOVE_CURRENT_USER:
      return initialUsersState
    default:
      return state
  }
}
