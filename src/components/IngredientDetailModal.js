import React, { Component } from "react"
import { connect } from 'react-redux'
import { Button, Header, Modal, Icon, Dropdown } from 'semantic-ui-react'
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
    if (integer !== '' && unit !== '') {
      if (fraction !== '') {
        let split = fraction.split("/")
        let float = split[0]/split[1]
        let total = parseInt(integer) + float
        let quantity = { key: total, value: total, text: `${integer} ${fraction}` }
        addIngredientToRecipe(selectedIngredient.ingredient_name, quantity, unit)
      } else {
        let quantity = { key: parseInt(integer), value: parseInt(integer), text: integer }
        addIngredientToRecipe(selectedIngredient.ingredient_name, quantity, unit)
      }
      this.setState({ integer: '', fraction: '', unit: '' })
      closeModal()
    }
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
        <Header as='h3'>Select Quantity and Unit Measure:</Header>
        </Modal.Description>
        <br />
        <Dropdown placeholder='Select Integer' onChange={this.handleIntegerSelect} search selection options={mappedIntegers} />
        <Dropdown placeholder='Select Fraction' onChange={this.handleFractionSelect} search selection options={mappedFractions} />
        <Dropdown placeholder='Select Unit' onChange={this.handleUnitSelect} search selection options={mappedUnits} />
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
