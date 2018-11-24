import React, { Component } from 'react'
import { connect } from 'react-redux'
import RecipeIngredient from './RecipeIngredient'
import { Grid, Header, Radio, Button, Segment, Table } from 'semantic-ui-react'

class RecipeIngredientList extends Component {

  state = {}

  handleChange = (event, { value }) => this.setState({ value })

  handleConversion = () => {
    console.log("handling conversion")
    return null
  }

  validateSelection = () => {
    let { value } = this.state
    return value === 'ounces' || value === 'grams'
  }

  conversionRadios = () => {
    return (
      <Grid columns={3} doubling stackable style={{textAlign:'center'}}>
      <Grid.Column>
      <Header size='medium'>Select unit for conversion:</Header>
      </Grid.Column>
      <Grid.Column>
      <Radio label='Grams' value='grams' checked={this.state.value === 'grams'} onChange={this.handleChange} />
      </Grid.Column>
      <Grid.Column>
      <Radio label='Ounces' value='ounces' checked={this.state.value === 'ounces'} onChange={this.handleChange} />
      </Grid.Column>
      </Grid>
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
        <Button fluid disabled={!this.validateSelection()} onClick={this.handleConversion}>Convert Recipe</Button>
        </Segment>
        </div>

      )
    } else {
      return null
    }
  }
}


const mapStateToProps = ({ recipes: { recipeIngredients }}) => ({ recipeIngredients })

export default connect(mapStateToProps)(RecipeIngredientList)
