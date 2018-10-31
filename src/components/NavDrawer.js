import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Drawer, List, ListItem, ListItemText } from '@material-ui/core'
import { closeDrawer } from '../actions'

class NavDrawer extends Component {

  //this.props.left is a prop required by Material UI, it indicates which side the drawer component should open on
  //the values for "left" are either true or false for drawer open and closed

  componentDidMount() {
    let { closeDrawer, left } = this.props
    if (left) {
      return closeDrawer()
    } else {
      return null
    }
  }

  sideList = (
    <div>
      <List style={{ width: 250 }}>
        <ListItem button key={1} component={Link} to="/">
          <ListItemText primary={"Home"} />
        </ListItem>
        <ListItem button key={2} component={Link} to="/">
          <ListItemText primary={"Saved Recipes"} />
        </ListItem>
      </List>
    </div>
  )

render() {
  if (this.props.loggedIn) {
    let { closeDrawer, left } = this.props

    return (
      <Drawer open={left} onClose={closeDrawer}>
        <div
          tabIndex={0}
          role="button"
          onClick={closeDrawer}
          onKeyDown={closeDrawer}
        >
          {this.sideList}
        </div>
      </Drawer>
      )
    } else {
      return null
    }
  }
}

const mapStateToProps = ({ users: { left , loggedIn } }) => ({ left, loggedIn })

export default withRouter(connect(mapStateToProps, { closeDrawer })(NavDrawer))
