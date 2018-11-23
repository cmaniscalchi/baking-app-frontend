import { ADD_INGREDIENT, REPLACE_INGREDIENT, REMOVE_INGREDIENT } from '../types'
import { volumeMeasures } from '../volumeMeasures.js'

const initialRecipesState = {
  recipeIngredients: [],
  recipeMultiplier: null,
  volumeMeasures: volumeMeasures
}

export default function recipeReducer(state = initialRecipesState, action) {
  console.log("recipeReducer:", state, action)
  let { payload } = action
  switch (action.type) {
  case ADD_INGREDIENT:
    return { ...state, recipeIngredients: state.recipeIngredients
      .concat({ ingredient_name: payload[2].ingredient_name, ingredient_volume: payload[0], ingredient_unit: state.volumeMeasures[payload[1]] })
    }
  case REPLACE_INGREDIENT:
  let ingredientIndex = state.recipeIngredients.findIndex(ingredient => ingredient.ingredient_name === payload[2].ingredient_name)
    return { ...state, recipeIngredients: state.recipeIngredients.slice(0, ingredientIndex)
      .concat({ ingredient_name: payload[2].ingredient_name, ingredient_volume: payload[0], ingredient_unit: state.volumeMeasures[payload[1]] })
      .concat(state.recipeIngredients.slice(ingredientIndex + 1))
    }

  case REMOVE_INGREDIENT:
    if (state.recipeIngredients.length === 1) {
      return { ...state, recipeIngredients: [] }
    } else {
      let filteredIngredients = state.recipeIngredients.filter(ingredient => payload !== ingredient)
      return { ...state, recipeIngredients: filteredIngredients }
    }
  default:
    return state
  }
}
