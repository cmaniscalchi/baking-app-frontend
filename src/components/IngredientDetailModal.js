import React, { Component } from "react"
import { connect } from 'react-redux'
import { Button, Header, Modal, Form, Icon } from 'semantic-ui-react'
import { addIngredientToRecipe, closeModal, unselectIngredient } from '../actions'

class IngredientDetailModal extends Component {

  state = { input: '' }

  handleInputChange = event => {
    this.setState({ input: event.target.value })
  }

  handleSubmit = () => {
    let { addIngredientToRecipe, closeModal } = this.props
    let { input } = this.state
    if (input !== '') {
      // addIngredientToRecipe(ingredient)
      this.setState({ input: '' })
      closeModal()
    }
  }

  handleModalClose = () => {
    let { unselectIngredient, closeModal } = this.props
    closeModal()
    unselectIngredient()
  }

  render() {
    let { modalOpen } = this.props
    let { input } = this.state
    return (
      <div>
      <Modal open={modalOpen} onClose={this.handleModalClose} closeIcon >
      <Modal.Header className='modal'>Ingredient Name Here</Modal.Header>
      <Modal.Content>
      <Modal.Description>
      <Header as='h3'>Header Here</Header>
      </Modal.Description>
      <br />
      <Form.Input
      value={input}
      onChange={this.handleInputChange}
      placeholder="Quantity"
      />
      </Modal.Content>
      <Modal.Actions>
      <Button onClick={this.handleModalClose}>
      <Icon name='remove' /> Cancel
      </Button>
      <Button onClick={this.handleFormSubmit}>
      <Icon name='checkmark' /> Save Ingredient
      </Button>
      </Modal.Actions>
      </Modal>
      </div>
    )
  }
}


const mapStateToProps = ({ users: { modalOpen } }) => ({ modalOpen })

export default connect(mapStateToProps, { closeModal, addIngredientToRecipe, unselectIngredient })(IngredientDetailModal)
