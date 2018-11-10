import React, { Component } from "react"
import { connect } from 'react-redux'
import { Button, Header, Modal, Form, Icon, Dropdown } from 'semantic-ui-react'
import { addIngredientToRecipe, closeModal, unselectIngredient } from '../actions'

class IngredientDetailModal extends Component {

  state = { input: '', selection: '' }

  handleInputChange = event => {
    this.setState({ ...this.state, input: event.target.value })
  }

  handleSelect = event => {
    this.setState({ ...this.state, selection: event.target.innerText })
  }

  handleSubmit = () => {
    let { addIngredientToRecipe, closeModal, selectedIngredient } = this.props
    let { input, selection } = this.state
    if (input !== '') {
      addIngredientToRecipe(selectedIngredient.ingredient_name, input, selection)
      this.setState({ input: '', selection: '' })
      closeModal()
    }
  }

  handleModalClose = () => {
    let { unselectIngredient, closeModal } = this.props
    this.setState({ input: '', selection: '' })
    closeModal()
    unselectIngredient()
  }

  render() {
    console.log("IngredientDetailModal:", this.props, this.state )
    let { modalOpen, selectedIngredient } = this.props
    let { input } = this.state
    let units = ['Teaspoons', 'Tablespoons', 'Ounces', 'Cups', 'Pints', 'Quarts', 'Gallons']
    let mappedUnits = units.map(unit => ({key: unit, value: unit, text: unit }))

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
      <Form.Input
      value={input}
      onChange={this.handleInputChange}
      placeholder="Quantity"
      />
      <Dropdown placeholder='State' onChange={this.handleSelect} search selection options={mappedUnits} />

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
