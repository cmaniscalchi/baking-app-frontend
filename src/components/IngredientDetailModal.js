import React, { Component } from "react"
import { connect } from 'react-redux'
import { Button, Header, Modal, Icon, Dropdown, Grid } from 'semantic-ui-react'
import { addIngredientToRecipe, closeModal, unselectIngredient } from '../actions'

class IngredientDetailModal extends Component {

  state = { integer: '', fraction: '', unit: '' }

  handleIntegerSelect = event => {
    this.setState({ ...this.state, integer: event.target.innerText })
  }
  handleFractionSelect = event => {
    this.setState({ ...this.state, fraction: event.target.innerText })
  }
  handleUnitSelect = event => {
    this.setState({ ...this.state, unit: event.target.innerText })
  }

  handleSubmit = () => {
    let { addIngredientToRecipe, closeModal, selectedIngredient } = this.props
    let { integer, fraction, unit } = this.state

    //all three selections made
    if (integer !== '' && fraction !== '' && unit !== '') {
      let split = fraction.split("/")
      let float = split[0]/split[1]
      let total = parseInt(integer) + float

      if (integer !== '0') {
        let quantity = { key: total, value: total, text: `${integer} ${fraction}` }
        addIngredientToRecipe(selectedIngredient.ingredient_name, quantity, unit)
      } else {
        let quantity = { key: float, value: float, text: fraction }
        addIngredientToRecipe(selectedIngredient.ingredient_name, quantity, unit)
      }

    } else if (integer !== '' && integer !== '0' && fraction === '' && unit !== '') {
        let quantity = { key: parseInt(integer), value: parseInt(integer), text: integer }
        addIngredientToRecipe(selectedIngredient.ingredient_name, quantity, unit)
    } else {
      return null
    }
    this.setState({ integer: '', fraction: '', unit: '' })
    closeModal()
  }

  handleModalClose = () => {
    let { unselectIngredient, closeModal } = this.props
    unselectIngredient()
    this.setState({ integer: '', fraction: '', unit: '' })
    closeModal()
  }

  render() {
    console.log("IngredientDetailModal:", this.props, this.state )
    let { modalOpen, selectedIngredient } = this.props

    let units = ['Teaspoons', 'Tablespoons', 'Ounces', 'Cups', 'Pints', 'Quarts', 'Gallons']
    let mappedUnits = units.map(unit => ({ key: unit, value: unit, text: unit }))

    let integers = [...Array(11).keys()]
    let mappedIntegers = integers.map(int => ({ key: int, value: int, text: int }))

    let fractions = ['', '1/8', '1/6', '1/4', '1/3', '3/8', '1/2', '5/8', '2/3', '3/4', '5/6', '7/8']
    let mappedFractions = fractions.map(fraction => ({ key: fraction, value: fraction, text: fraction }))

    if (selectedIngredient) {

      return (
        <div>
        <Modal open={modalOpen} onClose={this.handleModalClose} closeIcon >
          <Modal.Header className='modal'>{selectedIngredient.ingredient_name}</Modal.Header>
          <Modal.Content>
            <Modal.Description>
            <Header as='h2'>
            <Icon name='food' />
            <Header.Content>
            Select Amount
              <Header.Subheader>Example: 1 1/2 Cups</Header.Subheader>
            </Header.Content>
            </Header>
            </Modal.Description>
            <br />
            <Grid columns={3} doubling stackable>
            <Grid.Column>
              <Header size='medium'>Quantity: Whole Number</Header>
              <Dropdown placeholder='Select Whole Number' onChange={this.handleIntegerSelect} search selection options={mappedIntegers} />
              </Grid.Column>
              <Grid.Column>
              <Header size='medium'>Quantity: Fraction (Optional)</Header>
              <Dropdown placeholder='Select Fraction' onChange={this.handleFractionSelect} search selection options={mappedFractions} />
              </Grid.Column>
              <Grid.Column>
              <Header size='medium'>Measurement Unit</Header>
              <Dropdown placeholder='Select Unit' onChange={this.handleUnitSelect} search selection options={mappedUnits} />
              </Grid.Column>
            </Grid>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={this.handleModalClose}>
              <Icon name='remove' /> Cancel
            </Button>
            <Button onClick={this.handleSubmit}>
              <Icon name='checkmark' /> Save Ingredient
            </Button>
          </Modal.Actions>
        </Modal>
        </div>
      )
    } else {
      return null
    }
  }
}




const mapStateToProps = ({ users: { modalOpen }, ingredients: { selectedIngredient } }) => ({ modalOpen, selectedIngredient })

export default connect(mapStateToProps, { closeModal, addIngredientToRecipe, unselectIngredient })(IngredientDetailModal)
