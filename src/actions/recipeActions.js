import { ADD_INGREDIENT, REMOVE_INGREDIENT, REPLACE_INGREDIENT } from '../types'

export const addIngredientToRecipe = (volumeObj, unit, ingredient) => ({ type: ADD_INGREDIENT, payload: [volumeObj, unit, ingredient] })

export const editRecipeIngredient = (volumeObj, unit, ingredient) => ({ type: REPLACE_INGREDIENT, payload: [volumeObj, unit, ingredient] })

export const removeIngredient = selectedIngredient => ({ type: REMOVE_INGREDIENT, payload: selectedIngredient })
