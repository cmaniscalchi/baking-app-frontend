import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Checkbox, ControlLabel, FieldGroup, FormControl, FormGroup, Radio } from 'react-bootstrap'

class IngredientSelector extends Component {

  render() {
    return (
      <div style={{ width:'90%', margin: 'auto' }}>
        <FormGroup controlId="formControlsSelect">
          <ControlLabel>Select</ControlLabel>
          <FormControl componentClass="select" placeholder="select">
            <option value="select">select</option>
            <option value="other">...</option>
          </FormControl>
        </FormGroup>
        <FormGroup>
          <Radio name="radioGroup" inline>
            Ounces
          </Radio>{' '}
          <Radio name="radioGroup" inline>
            Grams
          </Radio>{' '}
        </FormGroup>
      </div>
    )
  }
}


const mapStateToProps = state => state

export default connect(mapStateToProps)(IngredientSelector)
