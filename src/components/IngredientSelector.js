import React, { Component } from 'react'
import { connect } from 'react-redux'
// import IngredientList from './IngredientList'
import { fetchIngredients } from '../actions'

class IngredientSelector extends Component {

  state = { searchedIngredient: '' }

  componentDidMount() {
    let { ingredientChoices, fetchIngredients } = this.props
    if (ingredientChoices.length === 0) {
      return fetchIngredients()
    } else {
      return null
    }
  }

  handleInputChange = event => {
    this.setState({ [event.target.id]: event.target.value })
  }

  // selectIngredient = ingredient => {
  //   debugger
  //   // console.log(ingredient)
  //   return null
  // }

  // onChange={this.filterIngredients}

  render() {
    // console.log(this.state)

    return (
      <div style={{width:'90%', margin: 'auto', position: 'relative'}}>

        <form controlId="searchedIngredient">
          <h1 sm={2}>
            Search for Ingredients:
          </h1>

          <input
            type="text"
            value={this.state.searchedIngredient}
            placeholder="Search for Ingredients"
            onChange={this.handleInputChange}
          />

        </form>
        <ul style={{position: 'relative'}}>
          {this.props.ingredientChoices.map(ingredient => <li key={ingredient.ingredient_name}>{ingredient.ingredient_name}</li>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ ingredients: { ingredientChoices }}) => ({ ingredientChoices })

export default connect(mapStateToProps, { fetchIngredients })(IngredientSelector)
