// import {  } from '../types'

// const BASE_URL = `${process.env.REACT_APP_API_ENDPOINT}/api/v1/`
const BASE_URL = `http://localhost:3000/api/v1/`

const HEADERS = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
}
