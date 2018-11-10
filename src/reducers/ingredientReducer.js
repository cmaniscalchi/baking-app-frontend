import { SELECT_INGREDIENT, SET_INGREDIENT_CHOICES, UNSELECT_INGREDIENT } from '../types'

const initialIngredientsState = {
  ingredientChoices: [],
  selectedIngredient: null
}

export default function ingredientReducer(state = initialIngredientsState, action) {
  // console.log("ingredientReducer:", state, action)
  switch (action.type) {
    case SET_INGREDIENT_CHOICES:
      return { ...state, ingredientChoices: action.payload }
    case SELECT_INGREDIENT:
      return { ...state, selectedIngredient: action.payload }
    case UNSELECT_INGREDIENT:
      return { ...state, selectedIngredient: null }
    default:
      return state
  }
}
