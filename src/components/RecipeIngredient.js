import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Checkbox, ListItem, ListItemText } from '@material-ui/core'
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

  // handleIngredientRemove = () => {
  //   let { removeIngredients } = this.props
  //   let { checked } = this.state
  //   removeIngredients(checked)
  //   this.setState({ checked: [] })
  // }

  render() {
    console.log("RecipeIngredient:", this.props, this.state)
    if (this.props.ingredient) {
      let { ingredient } = this.props
      let { ingredient_name } = this.props.ingredient
      let { checked } = this.state

      return (
        <div>
          <ListItem key={ingredient_name} role={undefined} dense button onClick={this.handleToggle(ingredient)}>
            <Checkbox
              checked={this.state.checked.indexOf(ingredient) !== -1}
              tabIndex={-1}
              disableRipple
            />
            <ListItemText primary={ingredient_name} />
          </ListItem>
          {/* {checked.length > 0 ? <Button onClick={this.handleIngredientRemove} color="primary">Remove Checked Ingredients</Button> : null} */}
        </div>
      )
    } else {
      return null
    }
  }
}

  // const mapStateToProps = ({ recipes: { recipeIngredients }}) => ({ recipeIngredients })

  export default connect(null, { removeIngredients })(RecipeIngredient)
