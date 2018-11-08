import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { SwipeableDrawer, List, ListItem, ListItemText, IconButton, Divider } from '@material-ui/core'
import { closeDrawer, openDrawer } from '../actions'

const NavDrawer = ({ closeDrawer, drawerOpen, loggedIn, openDrawer }) => {

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

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)

  const theme = createMuiTheme({ typography: { useNextVariants: true } })

  if (loggedIn) {
    return (
      <MuiThemeProvider theme={theme}>
      <SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS} anchor="left" open={drawerOpen} onOpen={openDrawer} onClose={closeDrawer}>
      <div style={{ display: 'flex', alignItems: 'center', padding: '0 8px', justifyContent: 'flex-start'}}>
            <IconButton onClick={closeDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
        <div
          tabIndex={0}
          role="button"
          onClick={closeDrawer}
          onKeyDown={closeDrawer}
        >
          {sideList}
        </div>
      </SwipeableDrawer>
      </MuiThemeProvider>
      )
    } else {
      return null
    }
  }


const mapStateToProps = ({ users: { drawerOpen , loggedIn } }) => ({ drawerOpen, loggedIn })

export default withRouter(connect(mapStateToProps, { closeDrawer, openDrawer })(NavDrawer))
