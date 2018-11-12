import { ADD_INGREDIENT, REMOVE_INGREDIENT } from '../types'

const initialRecipesState = {
  recipeIngredients: [],
  recipeMultiplier: null
}

export default function recipeReducer(state = initialRecipesState, action) {
  console.log("recipeReducer:", state, action)
  switch (action.type) {
  case ADD_INGREDIENT:
    return { ...state, recipeIngredients: state.recipeIngredients.concat({ ingredient_name: action.payload[0], ingredient_volume: action.payload[1], ingredient_unit: action.payload[2] }) }
  case REMOVE_INGREDIENT:
    if (state.recipeIngredients.length === action.payload.length) {
      return { ...state, recipeIngredients: [] }
    } else {
      let filteredIngredients = state.recipeIngredients.filter(ingredient => !action.payload.includes(ingredient))
      return { ...state, recipeIngredients: filteredIngredients }
    }
  default:
    return state
  }
}
