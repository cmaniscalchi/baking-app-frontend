import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Checkbox, List, ListItem, ListItemText } from '@material-ui/core'
import { removeIngredients } from '../actions'

class IngredientList extends Component {

  state = { checked: [] }

  handleToggle = ingred => () => {
    let { checked } = this.state
    let currentIndex = checked.indexOf(ingred)
    let newChecked = [...checked]

    if (currentIndex === -1) {
      newChecked.push(ingred)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    this.setState({ checked: newChecked })
  }

  handleIngredientRemove = () => {
    let { removeIngredients } = this.props
    let { checked } = this.state
    removeIngredients(checked)
    this.setState({ checked: [] })
  }

  render() {
    console.log("IngredientList:", this.props, this.state)
    if (this.props.recipeIngredients.length > 0) {
      let { recipeIngredients } = this.props
      let { checked } = this.state

      return (
        <div>
          <div style={{display: 'flex', margin:'5%'}}>
            <List>
              {recipeIngredients.map(ingred => (
                <ListItem key={ingred.ingredient_name} role={undefined} dense button onClick={this.handleToggle(ingred)}>
                  <Checkbox
                    checked={this.state.checked.indexOf(ingred) !== -1}
                    tabIndex={-1}
                    disableRipple
                  />
                  <ListItemText primary={ingred.ingredient_name} />
                </ListItem>
              ))}
            </List>
          </div>
          <div style={{display: 'flex', margin:'5%'}}>
            {checked.length > 0 ? <Button onClick={this.handleIngredientRemove} fullWidth variant="contained" color="primary">Remove Checked Ingredients</Button> : null}
          </div>
        </div>
      )
    } else {
      return null
    }
  }
}

const mapStateToProps = ({ recipes: { recipeIngredients }}) => ({ recipeIngredients })

export default connect(mapStateToProps, { removeIngredients })(IngredientList)
