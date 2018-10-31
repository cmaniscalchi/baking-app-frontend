import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Drawer, List, ListItem, ListItemText } from '@material-ui/core'
import { closeDrawer } from '../actions'

const NavDrawer = ({ closeDrawer, left, loggedIn }) => {

  const sideList = (
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

  if (loggedIn) {
    return (
      <Drawer open={left} onClose={closeDrawer}>
        <div
          tabIndex={0}
          role="button"
          onClick={closeDrawer}
          onKeyDown={closeDrawer}
        >
          {sideList}
        </div>
      </Drawer>
      )
    } else {
      return null
    }
  }


const mapStateToProps = ({ users: { left , loggedIn } }) => ({ left, loggedIn })

export default withRouter(connect(mapStateToProps, { closeDrawer })(NavDrawer))
