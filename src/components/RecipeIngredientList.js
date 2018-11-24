import React, { Component } from 'react'
import { connect } from 'react-redux'
import RecipeIngredient from './RecipeIngredient'
import { Grid, Header, Radio, Button, Segment, Table } from 'semantic-ui-react'
import { setConversionUnit } from '../actions'

class RecipeIngredientList extends Component {

  state = {}

  handleChange = (event, { value }) => this.setState({ value })

  handleUnitSelect = () => {
    let { value } = this.state
    let { setConversionUnit } = this.props
    setConversionUnit(value)
  }

  validateRadio = () => {
    let { conversionUnit } = this.props
    let { value } = this.state
    return value !== conversionUnit
  }

  conversionRadios = () => {
    let { conversionUnit } = this.props
    let grams = () => <Radio label='Grams' value='grams' checked={this.state.value === 'grams'} onChange={this.handleChange} />
    let disabledGrams = () => <Radio disabled label='Grams' value='grams' checked={this.state.value === 'grams'} onChange={this.handleChange} />
    let ounces = () => <Radio label='Ounces' value='ounces' checked={this.state.value === 'ounces'} onChange={this.handleChange} />
    let disabledOunces = () => <Radio disabled label='Ounces' value='ounces' checked={this.state.value === 'ounces'} onChange={this.handleChange} />
    let volume = () => <Radio label='Volume' value='volume' checked={this.state.value === 'volume'} onChange={this.handleChange} />
    let disabledVolume = () => <Radio disabled label='Volume' value='volume' checked={this.state.value === 'volume'} onChange={this.handleChange} />

    return (
      <div>
      <Header size='medium' style={{textAlign:'center'}}>Select Unit for Conversion:</Header>
      <Grid columns={3} doubling stackable style={{textAlign:'center'}}>
      <Grid.Column>
      {conversionUnit === 'grams' ? disabledGrams() : grams()}
      </Grid.Column>
      <Grid.Column>
      {conversionUnit === 'ounces' ? disabledOunces() : ounces()}
      </Grid.Column>
      <Grid.Column>
      {conversionUnit === 'volume' ? disabledVolume() : volume()}
      </Grid.Column>
      </Grid>
      </div>
    )
  }

  render() {
    console.log("RecipeIngredientList:", this.props, this.state)
    if (this.props.recipeIngredients.length > 0) {

      return (
        <div style={{display: 'flex', margin:'5%', width:'90%', position: 'relative'}}>
        <Segment style={{width:'100%'}}>
        <Table>
        <Table.Header>
        <Table.Row style={{textAlign:'center'}}>
        <Table.HeaderCell style={{width:'5%'}}></Table.HeaderCell>
        <Table.HeaderCell style={{width:'5%'}}></Table.HeaderCell>
        <Table.HeaderCell style={{width:'50%'}}>Ingredient</Table.HeaderCell>
        <Table.HeaderCell style={{width:'20%'}}>Quantity</Table.HeaderCell>
        <Table.HeaderCell style={{width:'20%'}}>Unit</Table.HeaderCell>
        </Table.Row>
        </Table.Header>
        <Table.Body>
        {this.props.recipeIngredients.map(ingredient => <RecipeIngredient ingredient={ingredient} key={ingredient.ingredient_name} />)}
        </Table.Body>
        </Table>
        {this.conversionRadios()}
        <br />
        <Button fluid onClick={this.handleUnitSelect}>Convert Recipe</Button>
        </Segment>
        </div>
      )
    } else {
      return null
    }
  }
}


const mapStateToProps = ({ recipes: { conversionUnit, recipeIngredients }}) => ({ conversionUnit, recipeIngredients })

export default connect(mapStateToProps, { setConversionUnit })(RecipeIngredientList)
