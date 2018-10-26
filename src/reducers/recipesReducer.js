// import {  } from '../types'

const initialRecipesState = {
  recipeIngredients: [],
  recipeMultiplier: null
}

export default function usersReducer(state = initialRecipesState, action) {
  console.log("recipesReducer:", state, action)
  switch (action.type) {
    default:
      return state
  }
}
