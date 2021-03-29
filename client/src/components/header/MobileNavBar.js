import React, { useState } from 'react'
import { SNavLink, SMobileNavBar } from 'components'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Button from '@material-ui/core/Button'
import MenuIcon from '@material-ui/icons/Menu'
import ListItemText from '@material-ui/core/ListItemText'

const MobileNavBar = () => {
  const [drawerState, toggleDrawer] = useState(false)
  return (
    <SMobileNavBar>
      <Button onClick={() => toggleDrawer(true)}>
        <MenuIcon />
      </Button>
      <Drawer anchor={'left'} open={drawerState} onClose={() => toggleDrawer(false)}>
        <List>
          <ListItem button key="Portfolio">
            <SNavLink activeClassName={'active'} to="/portfolio">
              Portfolio
            </SNavLink>
          </ListItem>
          <ListItem button key="About">
            <SNavLink activeClassName={'active'} to="/about">
              About
            </SNavLink>
          </ListItem>
          <ListItem button key="Contact">
            <SNavLink activeClassName={'active'} to="/contact">
              Contact
            </SNavLink>
          </ListItem>
        </List>
        {/* <SNavLink className="drawerLink" activeClassName={'active'} to="/portfolio">
          Portfolio
        </SNavLink>
        <SNavLink className="drawerLink" activeClassName={'active'} to="/about">
          About
        </SNavLink>
        <SNavLink className="drawerLink" activeClassName={'active'} to="/contact">
          Contact
        </SNavLink> */}
      </Drawer>
    </SMobileNavBar>
  )
}

export default MobileNavBar
