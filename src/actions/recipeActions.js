import { ADD_INGREDIENT, REMOVE_INGREDIENT } from '../types'

export const addIngredientToRecipe = (ingredient_name, volumeObj, unit) => ({ type: ADD_INGREDIENT, payload: [ingredient_name, volumeObj, unit] })

export const removeIngredients = selectedIngredients => ({ type: REMOVE_INGREDIENT, payload: selectedIngredients })
