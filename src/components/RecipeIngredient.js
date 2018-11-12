import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table } from 'semantic-ui-react'
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
      let { ingredient_name, ingredient_unit, ingredient_volume } = this.props.ingredient
      let { checked } = this.state

      return (
        <Table.Row onClick={this.handleToggle(ingredient)}>
        <Table.Cell>{ingredient_name}</Table.Cell>
        <Table.Cell>{ingredient_volume.text}</Table.Cell>
        <Table.Cell textAlign='right'>{ingredient_unit}</Table.Cell>
        </Table.Row>
      )
    } else {
      return null
    }
  }
}

// const mapStateToProps = ({ recipes: { recipeIngredients }}) => ({ recipeIngredients })

export default connect(null, { removeIngredients })(RecipeIngredient)
