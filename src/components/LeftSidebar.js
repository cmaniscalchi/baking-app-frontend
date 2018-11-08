import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Sidebar, Menu, Icon } from 'semantic-ui-react'
import { closeSidebar, openSidebar } from '../actions'

const LeftSidebar = ({ closeSidebar, loggedIn, openSidebar, sidebarOpen }) => {

  if (loggedIn) {
    return (
      <Sidebar
      as={Menu}
      animation='slide along'
      direction='left'
      icon='labeled'
      vertical
      onHide={closeSidebar}
      visible={sidebarOpen}
      width='thin'
      >
      <Menu.Item as='a'>
      <Icon name='home' />
      Home
      </Menu.Item>
      <Menu.Item as='a'>
      <Icon name='pin' />
      My Saved Recipes
      </Menu.Item>
      <Menu.Item as='a'>
      <Icon name='log out' />
      Log Out
      </Menu.Item>
      </Sidebar>
    )
  } else {
    return null
  }
}

const mapStateToProps = ({ users: { sidebarOpen , loggedIn } }) => ({ sidebarOpen, loggedIn })

export default withRouter(connect(mapStateToProps, { closeSidebar, openSidebar })(LeftSidebar))
