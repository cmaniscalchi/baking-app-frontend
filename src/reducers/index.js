import { combineReducers } from 'redux'
import ingredientReducer from './ingredientReducer'
import recipeReducer from './recipeReducer'
import userReducer from './userReducer'

export default combineReducers({
  ingredients: ingredientReducer,
  recipes: recipeReducer,
  users: userReducer
})
