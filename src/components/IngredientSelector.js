import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ControlLabel, FormControl, FormGroup } from 'react-bootstrap'
import { fetchIngredients } from '../actions'

class IngredientSelector extends Component {

  componentDidMount() {
    let { ingredientChoices, fetchIngredients } = this.props
    if (ingredientChoices.length === 0) {
      return fetchIngredients()
    } else {
      return null
    }
  }

  selectIngredient = ingredient => {
    debugger
    console.log(ingredient)
    return null
  }

  ingredientOptions = () => {
    return this.props.ingredientChoices.map(ingredient => <option value="select" key={ingredient.ingredient_name} onClick={console.log(ingredient)}>{ingredient.ingredient_name}</option>)
  }


  render() {
    return (
      <div style={{ width:'90%', margin: 'auto' }}>
        <FormGroup controlId="formControlsSelect">
          <ControlLabel>Select</ControlLabel>
          <FormControl componentClass="select" onSelect={console.log("selecting an ingredient")} placeholder="select">
            {this.ingredientOptions()}
          </FormControl>
        </FormGroup>
      </div>
    )
  }
}

const mapStateToProps = ({ ingredients: { ingredientChoices }}) => ({ ingredientChoices })

export default connect(mapStateToProps, { fetchIngredients })(IngredientSelector)
