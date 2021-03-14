import React from 'react';
import {AppBar, Toolbar, IconButton, Typography, Button} from '@material-ui/core'
import {Menu} from '@material-ui/icons';

const Header = () => {
  return (
    <div>
        <AppBar position='static'>
          <Toolbar>
              <IconButton color='inherit' edge='start' aria-labe='menu'>
                  <Menu/>
              </IconButton>
              <Typography variant='h6'>
                Ali Hasan
              </Typography>
              <Button color='inherit'>
                  Login
              </Button>
          </Toolbar>
        </AppBar>
    </div>
  );
};

export default Header;