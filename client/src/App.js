import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AppBar, Box, Container, CssBaseline, Grid, Grow, TableContainer } from '@mui/material';
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import Form from './components/Form';
import LeftBar from './components/LeftBar';
const App = () => {
  return (
    <Box>
      <CssBaseline />
      <Navbar />
      <Grow in>
        <Box>
          <Grid container justifyContent='space-between' alignItems='stretch' spacing={2}>
            <Grid item xs={12} sm={2} sx={{ marginTop: 4, marginLeft: 6 }}>
              <LeftBar />
            </Grid>
            <Grid item xs={12} sm={4} sx={{ marginTop: 4 }}>
              <Feed />
            </Grid>
            <Grid item xs={12} sm={4} sx={{ marginTop: 4 }}>
              <Form />
            </Grid>
          </Grid>
        </Box>
      </Grow>
    </Box>
  );
};

export default App;
