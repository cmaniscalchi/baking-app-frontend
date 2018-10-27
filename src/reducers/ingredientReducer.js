import { SET_INGREDIENT_CHOICES } from '../types'

const initialIngredientsState = {
  ingredientChoices: []
}

export default function ingredientReducer(state = initialIngredientsState, action) {
  console.log("ingredientReducer:", state, action)
  switch (action.type) {
    case SET_INGREDIENT_CHOICES:
      return { ...state, ingredientChoices: action.payload }
    default:
      return state
  }
}
