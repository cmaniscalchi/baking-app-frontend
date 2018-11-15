import { ADD_INGREDIENT, REMOVE_INGREDIENT, REPLACE_INGREDIENT } from '../types'

export const addIngredientToRecipe = (ingredient_name, volumeObj, unit) => ({ type: ADD_INGREDIENT, payload: [ingredient_name, volumeObj, unit] })

export const editRecipeIngredient = (ingredient_name, volumeObj, unit) => ({ type: REPLACE_INGREDIENT, payload: [ingredient_name, volumeObj, unit] })

export const removeIngredient = selectedIngredient => ({ type: REMOVE_INGREDIENT, payload: selectedIngredient })
