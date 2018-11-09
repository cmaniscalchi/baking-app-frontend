import { SELECT_INGREDIENT, SET_INGREDIENT_CHOICES, UNSELECT_INGREDIENT } from '../types'

export const selectIngredient = ingredient => ({ type: SELECT_INGREDIENT, payload: ingredient })

export const unselectIngredient = () => ({ type: UNSELECT_INGREDIENT })

// const BASE_URL = `${process.env.REACT_APP_API_ENDPOINT}/api/v1/`
const BASE_URL = `http://localhost:3000/api/v1/`

const HEADERS = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
}

export const fetchIngredients = () => {
  return dispatch => {
    let urlSuffix = `ingredients`
    let getConfig = {
      method: "GET",
      headers: HEADERS,
    }

    fetch(`${BASE_URL}${urlSuffix}`, getConfig)
    .then(res => res.json())
    .then(ingredients => dispatch({ type: SET_INGREDIENT_CHOICES, payload: ingredients }))
  }
}
