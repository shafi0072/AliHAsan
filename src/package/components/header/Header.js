import React from 'react';
import {AppBar, Toolbar, IconButton, Typography, Button} from '@material-ui/core'
import {Menu} from '@material-ui/icons';

const Header = () => {
  return (
    <div>
        <AppBar position='static'>
          <Toolbar>
              <IconButton color='white' edge='start' aria-labe='menu'>
                  <Menu/>
              </IconButton>
          </Toolbar>
        </AppBar>
    </div>
  );
};

export default Header;