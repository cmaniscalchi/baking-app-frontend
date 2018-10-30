import React, { Component } from 'react'
import { connect } from 'react-redux'
// import IngredientList from './IngredientList'
import { FormControl, TextField, MenuItem } from '@material-ui/core'
import { addIngredientToRecipe, fetchIngredients } from '../actions'

class IngredientSelector extends Component {

  state = { input: '' }

  componentDidMount() {
    let { ingredientChoices, fetchIngredients } = this.props
    if (ingredientChoices.length === 0) {
      return fetchIngredients()
    } else {
      return null
    }
  }

  handleChange = event => {
    this.setState({ input: event.target.value })
  }

  selectIngredient = ingredient => {
    this.props.addIngredientToRecipe(ingredient)
    this.setState({ input: '' })
  }

  render() {
    // console.log("IngredientSelector:", this.props, this.state)
    if (this.props.ingredientChoices) {
      let filteredIngredients = this.props.ingredientChoices
      let input = this.state
      return (
        <div style={{width:'90%', margin: 'auto', position: 'relative'}}>
          <FormControl>
            <TextField
              onChange={this.handleChange}
              value={input}
              id="ingredient-search"
              label="Search Ingredients"
              style={{ margin: 8 }}
              helperText="Search to Filter Ingredients"
              fullWidth
              margin="normal"
            />
          </FormControl>
          { input !== '' ? filteredIngredients.filter(ingredient => ingredient.ingredient_name.toLowerCase().includes(input)).map(ingredient => <MenuItem key={ingredient.ingredient_name} value={ingredient.ingredient_name} onClick={() => this.selectIngredient(ingredient)}>{ingredient.ingredient_name}</MenuItem>) : null }
        </div>
        )
      } else {
        return null
      }
    }
  }

  const mapStateToProps = ({ ingredients: { ingredientChoices }}) => ({ ingredientChoices })

  export default connect(mapStateToProps, { addIngredientToRecipe, fetchIngredients })(IngredientSelector)
