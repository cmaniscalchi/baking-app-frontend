import { ADD_INGREDIENT, REPLACE_INGREDIENT, REMOVE_INGREDIENT, SET_UNIT } from '../types'
import { volumeMeasures } from '../volumeMeasures.js'

const initialRecipesState = {
  recipeIngredients: [],
  recipeMultiplier: null,
  conversionUnit: 'volume',
  volumeMeasures: volumeMeasures
}

export default function recipeReducer(state = initialRecipesState, action) {
  console.log("recipeReducer:", state, action)
  let { payload } = action
  switch (action.type) {
  case ADD_INGREDIENT:
    return { ...state, recipeIngredients: state.recipeIngredients
      .concat({
        ingredient_name: payload[2].ingredient_name,
        ingredient_volume: payload[0],
        ingredient_unit: state.volumeMeasures[payload[1]],
        ingredient_grams: Math.round(state.volumeMeasures[payload[1]].ratioToCups * payload[2].ingredient_grams * payload[0].value),
        ingredient_ounces: state.volumeMeasures[payload[1]].ratioToCups * payload[2].ingredient_ounces * payload[0].value
      })
    }
  case REPLACE_INGREDIENT:
  let ingredientIndex = state.recipeIngredients.findIndex(ingredient => ingredient.ingredient_name === payload[2].ingredient_name)
    return { ...state, recipeIngredients: state.recipeIngredients
      .slice(0, ingredientIndex)
      .concat({
        ingredient_name: payload[2].ingredient_name,
        ingredient_volume: payload[0],
        ingredient_unit: state.volumeMeasures[payload[1]],
        ingredient_grams: Math.round(state.volumeMeasures[payload[1]].ratioToCups * payload[2].ingredient_grams * payload[0].value),
        ingredient_ounces: state.volumeMeasures[payload[1]].ratioToCups * payload[2].ingredient_ounces * payload[0].value
       })
      .concat(state.recipeIngredients.slice(ingredientIndex + 1))
    }
  case REMOVE_INGREDIENT:
    if (state.recipeIngredients.length === 1) {
      return { ...state, recipeIngredients: [] }
    } else {
      let filteredIngredients = state.recipeIngredients.filter(ingredient => payload !== ingredient)
      return { ...state, recipeIngredients: filteredIngredients }
    }
  case SET_UNIT:
    return { ...state, conversionUnit: payload }
  default:
    return state
  }
}
