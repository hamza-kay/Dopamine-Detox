import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material';
import AddTaskIcon from '@mui/icons-material/AddTask';
import React, { useState } from 'react';
import { AddTask, Mail, Notifications } from '@mui/icons-material';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'center',
});

const Navbar = () => {
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6'>Dopamine Detox</Typography>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
