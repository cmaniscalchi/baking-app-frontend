import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Segment, Label, Input, List } from 'semantic-ui-react'
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
      <div style={{display: 'flex', margin:'5%', width:'90%', position: 'relative'}}>
      <Segment style={{width:'100%'}}>
      <Label attached='top' style={{width:'100%', position: 'relative'}}>Search to Add Recipe Ingredients</Label>
      <Input placeholder='Search' onChange={this.handleChange('input')} value={input} style={{width:'100%', position: 'relative'}}/>
      </Segment>
      </div>
    )
  }

  filteredList = () => {
    let { input } = this.state
    let { ingredientChoices } = this.props
    let filteredIngredients = ingredientChoices.filter(ingred => ingred.ingredient_name.toLowerCase().includes(input))

    return (
      <div style={{display: 'flex', margin:'5%', width:'90%', position: 'relative'}}>
      <List divided relaxed style={{width:'100%'}}>
      {filteredIngredients.map(ingred => {
        return (
          <List.Item onClick={() => this.selectIngredient(ingred)} key={ingred.ingredient_name}>
          <List.Content>
          <List.Description>{ingred.ingredient_name}</List.Description>
          </List.Content>
          </List.Item>
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
