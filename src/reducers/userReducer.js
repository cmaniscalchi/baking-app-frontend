import { AUTHENTICATING_USER, FAILED_LOGIN, REMOVE_CURRENT_USER, SET_CURRENT_USER, OPEN_SIDEBAR, CLOSE_SIDEBAR, OPEN_MODAL, CLOSE_MODAL } from '../types'

const initialUsersState = {
  user: null,
  loggedIn: false,
  authenticatingUser: false,
  failedLogin: false,
  error: null,
  sidebarOpen: false,
  modalOpen: false
}

export default function userReducer(state = initialUsersState, action) {
  // console.log("userReducer:", state, action)
  switch (action.type) {
    case SET_CURRENT_USER:
      return { ...state, user: action.payload, loggedIn: true, authenticatingUser: false }
    case AUTHENTICATING_USER:
      return { ...state, authenticatingUser: true }
    case FAILED_LOGIN:
      return { ...state, failedLogin: true, error: action.payload, authenticatingUser: false }
    case REMOVE_CURRENT_USER:
      return initialUsersState
    case OPEN_SIDEBAR:
      return { ...state, sidebarOpen: true }
    case CLOSE_SIDEBAR:
      return { ...state, sidebarOpen: false }
    case OPEN_MODAL:
      return { ...state, modalOpen: true }
    case CLOSE_MODAL:
      return { ...state, modalOpen: false }
    default:
      return state
  }
}
