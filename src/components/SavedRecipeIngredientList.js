import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { Segment, Table } from 'semantic-ui-react'
import { fetchRecipes } from '../actions'

class SavedRecipeIngredientList extends Component {

  componentDidMount() {
    if (this.props.savedRecipes.length === 0) {
      return this.props.fetchRecipes()
    } else {
      return null
    }
  }

  render() {
    console.log("SavedRecipeIngredientList:", this.props.savedRecipes)
    if (this.props.savedRecipes.length > 0) {
      return "SavedRecipeIngredientList"
    } else {
      return null
    }
  }
}

const mapStateToProps = ({ recipes: { savedRecipes } }) => ({ savedRecipes })

export default connect(mapStateToProps, { fetchRecipes })(SavedRecipeIngredientList)
