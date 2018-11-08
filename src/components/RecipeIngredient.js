import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List, Button } from 'semantic-ui-react'
import { removeIngredients } from '../actions'

class RecipeIngredient extends Component {

  state = { checked: [] }

  handleToggle = ingredient => () => {
    let { checked } = this.state
    let currentIndex = checked.indexOf(ingredient)
    let newChecked = [...checked]

    if (currentIndex === -1) {
      newChecked.push(ingredient)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    this.setState({ checked: newChecked })
  }

  handleIngredientRemove = () => {
    let { removeIngredients } = this.props
    let { checked } = this.state
    removeIngredients(checked)
    this.setState({ checked: [] })
  }

  render() {
    console.log("RecipeIngredient:", this.props, this.state)
    if (this.props.ingredient) {
      let { ingredient } = this.props
      let { ingredient_name } = this.props.ingredient
      let { checked } = this.state

      return (
        <div>
        <List.Item key={ingredient_name} onClick={this.handleToggle(ingredient)}>
        {ingredient_name}
        </List.Item>
        {checked.length > 0 ? <Button onClick={this.handleIngredientRemove}>Remove Checked Ingredients</Button> : null}
        </div>
      )
    } else {
      return null
    }
  }
}

// const mapStateToProps = ({ recipes: { recipeIngredients }}) => ({ recipeIngredients })

export default connect(null, { removeIngredients })(RecipeIngredient)
