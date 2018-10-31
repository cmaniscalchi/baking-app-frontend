import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FormControl, List, ListItem, ListItemText, FormLabel, Input } from '@material-ui/core'
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

  handleChange = input => event => {
    this.setState({ [input]: event.target.value })
  }

  selectIngredient = ingredient => {
    this.props.addIngredientToRecipe(ingredient)
    this.setState({ input: '' })
  }

  ingredientInput = () => {
    let { input } = this.state

    return (
      <div style={{display: 'flex', margin:'5%'}}>
        <FormControl style={{width:'90%', position: 'relative'}}>
          <FormLabel>Search to Filter Ingredients</FormLabel>
          <Input type="text" onChange={this.handleChange('input')} value={input} id="ingredient-search" style={{ margin: 8 }} fullWidth />
        </FormControl>
      </div>
    )
  }

  filteredList = () => {
    let { input } = this.state
    let { ingredientChoices } = this.props
    let filteredIngredients = ingredientChoices.filter(ingred => ingred.ingredient_name.toLowerCase().includes(input))

    return (
      <div style={{display: 'flex', margin:'5%'}}>
        <List>
          {filteredIngredients.map(ingred => {
            return (
              <ListItem button onClick={() => this.selectIngredient(ingred)} key={ingred.ingredient_name}>
                <ListItemText primary={ingred.ingredient_name} />
              </ListItem>
            )
          })}
        </List>
      </div>
    )
  }

  render() {
    // console.log("IngredientSelector:", this.props, this.state)
    let { input } = this.state

    if (this.props.ingredientChoices.length > 0) {
      return (
        <div>
          {this.ingredientInput()}
          {input !== '' ? this.filteredList() : null}
        </div>
      )
    } else {
      return null
    }
  }
}

const mapStateToProps = ({ ingredients: { ingredientChoices }}) => ({ ingredientChoices })

export default connect(mapStateToProps, { addIngredientToRecipe, fetchIngredients })(IngredientSelector)
