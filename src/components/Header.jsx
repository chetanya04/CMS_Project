
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box, TextField } from '@mui/material';

const Header = ({ onFilterChange, onSearch }) => {
  return (
    <AppBar position="static" color="primary">
      <Container>
        <Toolbar>
          <img src="./logo.png" alt="Logo" style={{ marginRight: '15px', width: '50px' }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CMS Projects
          </Typography>
          <Box sx={{ mx: 2 }}>
            <Button color="inherit" onClick={() => onFilterChange('all')}>
              All
            </Button>
            <Button color="inherit" onClick={() => onFilterChange('website')}>
              Website
            </Button>
            <Button color="inherit" onClick={() => onFilterChange('mobile')}>
              Mobile App
            </Button>
          </Box>
          <TextField
            placeholder="Search by title"
            variant="outlined"
            size="small"
            onChange={(e) => onSearch(e.target.value)}
            sx={{ backgroundColor: 'white', borderRadius: '4px' }}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
