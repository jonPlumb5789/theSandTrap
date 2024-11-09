// src/components/Navbar.js
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import CloseIcon from '@mui/icons-material/Close';
import logo from './the_sandtrap_logo.png';

const navItems = [
  { label: 'Home', section: 'home' },
  { label: 'Browse Menu', section: 'menu' },
  { label: 'Store Info', section: 'about' },
  { label: 'Contact Us', section: 'map' },
];

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleScrollToSection = (sectionId) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: -10, behavior: 'smooth' });
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setDrawerOpen(false);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#333' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontFamily: 'Georgia, serif', fontSize: '1.5rem', marginLeft: '6px' }}>
          The Sandtrap
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {navItems.map((item) => (
            <Button
              key={item.section}
              color="inherit"
              onClick={() => handleScrollToSection(item.section)}
              sx={{ fontFamily: 'Georgia, serif' }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
        <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
          <IconButton color="inherit" onClick={() => setDrawerOpen(true)}>
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{ '& .MuiDrawer-paper': { backgroundColor: '#1b1b1b', color: '#fff' } }}
      >
        <Box sx={{ p: 2, textAlign: 'center' }}>
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: '#fff' }}>
            <CloseIcon />
          </IconButton>
          <List>
            {navItems.map((item) => (
              <ListItem key={item.section} disablePadding>
                <ListItemButton onClick={() => handleScrollToSection(item.section)} sx={{ textAlign: 'center' }}>
                  <ListItemText primary={item.label} primaryTypographyProps={{ fontFamily: 'Georgia, serif', fontSize: '1.2rem' }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}

export default Navbar;
