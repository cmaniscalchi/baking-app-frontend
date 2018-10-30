import { ADD_INGREDIENT } from '../types'

const initialRecipesState = {
  recipeIngredients: [],
  recipeMultiplier: null
}

export default function recipeReducer(state = initialRecipesState, action) {
  console.log("recipeReducer:", state, action)
  switch (action.type) {
  case ADD_INGREDIENT:
  return { ...state, recipeIngredients: state.recipeIngredients.concat(action.payload) }
    default:
      return state
  }
}
