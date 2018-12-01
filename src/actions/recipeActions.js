import { ADD_INGREDIENT, REMOVE_INGREDIENT, REPLACE_INGREDIENT, SET_UNIT, SAVE_RECIPE, SET_RECIPES } from '../types'

export const addIngredientToRecipe = (volumeObj, unit, ingredient) => ({ type: ADD_INGREDIENT, payload: [volumeObj, unit, ingredient] })

export const editRecipeIngredient = (volumeObj, unit, ingredient) => ({ type: REPLACE_INGREDIENT, payload: [volumeObj, unit, ingredient] })

export const removeIngredient = selectedIngredient => ({ type: REMOVE_INGREDIENT, payload: selectedIngredient })

export const setConversionUnit = unit => ({ type: SET_UNIT, payload: unit })

const BASE_URL = `http://localhost:3000/api/v1/`

const HEADERS = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
}

export const saveRecipe = (conversionUnit, id, recipeIngredients) => {

  let mappedIngredients = recipeIngredients.map(ingredient => {
    return ({
      recipe_ingredient_volume: ingredient.ingredient_volume.text,
      recipe_ingredient_unit: ingredient.ingredient_unit.name.plural,
      recipe_ingredient_ounces: ingredient.ingredient_ounces,
      recipe_ingredient_grams: ingredient.ingredient_grams,
      ingredient_id: ingredient.ingredient_id
    })
  })

  let params = { recipe_name: "TEST", user_id: id, recipe_ingredients_attributes: mappedIngredients }

  return dispatch => {
    let urlSuffix = `recipes`
    let postConfig = {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify({ recipe: params })
    }

    fetch(`${BASE_URL}${urlSuffix}`, postConfig)
    .then(res => res.json())
    .then(recipe => dispatch({ type: SAVE_RECIPE, payload: recipe }))
  }
}

export const fetchRecipes = () => {
  return dispatch => {
    let urlSuffix = `recipes`
    let getConfig = {
      method: "GET",
      headers: HEADERS
    }

    fetch(`${BASE_URL}${urlSuffix}`, getConfig)
    .then(res => res.json())
    .then(recipes => dispatch({ type: SET_RECIPES, payload: recipes }))
  }
}
