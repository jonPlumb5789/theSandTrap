// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import MapComponent from './components/Map';
import About from './components/About';
import ContactInfo from './components/ContactInfo';
import { Box, Container, Typography, Divider } from '@mui/material';
import logo from './components/the_sandtrap_logo.png';
import background from './components/sandtrapFront.jpg'; // Import the background image

const App = () => (
  <Box sx={{ fontFamily: 'Georgia, serif', color: '#4b4b4b', backgroundColor: '#f9f9f9' }}>
    <Navbar />
    
    {/* Hero Section with Sliding Background */}
    <Box
      className="hero-section"
      sx={{
        height: '50vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#fff',
        overflow: 'hidden',
        backgroundImage: `url(${background})`, // Set background image here
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        animation: 'slideBackground 20s ease-in-out infinite',
      }}
    >
      {/* Overlay */}
      <Box sx={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></Box>
      
      {/* Logo and Overlay Text */}
      <Box sx={{ position: 'relative', zIndex: 1, px: 2 }}>
        <Box
          component="img"
          src={logo}
          alt="The Sandtrap Logo"
          sx={{ height: { xs: '180px', sm: '12em' }, marginTop: '46px', mb: 2 }}
        />
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            fontSize: { xs: '1.4rem', sm: '2.2rem' },
            fontFamily: 'Georgia, serif',
            color: 'white',
            fontWeight: 'bold',
          }}
        >
          Dine in, group parties, catering and entertainment!
        </Typography>
      </Box>
    </Box>

    <Container maxWidth="md" sx={{ mt: 4, mb: 8 }}>
      <section id="menu">
        <Menu />
      </section>
      <Divider sx={{ my: 4 }} />

      <section id="about">
        <About />
      </section>
      <Divider sx={{ my: 4 }} />

      <section id="map"> 
        <MapComponent />
        <Divider sx={{ my: 4 }} />
        <ContactInfo />
      </section>
    </Container>
  </Box>
);

export default App;
