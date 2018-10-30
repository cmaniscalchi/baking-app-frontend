import { ADD_INGREDIENT } from '../types'

export const addIngredientToRecipe = ingredient => ({ type: ADD_INGREDIENT, payload: ingredient })
