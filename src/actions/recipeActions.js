import { ADD_INGREDIENT, REMOVE_INGREDIENT } from '../types'

export const addIngredientToRecipe = ingredient => ({ type: ADD_INGREDIENT, payload: ingredient })

export const removeIngredients = ingredients => ({ type: REMOVE_INGREDIENT, payload: ingredients })
