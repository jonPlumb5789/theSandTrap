// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import SignIn from './components/SignIn';
import Menu from './components/Menu';
import MapComponent from './components/Map';
import About from './components/About';
import ContactInfo from './components/ContactInfo';
import { Box, Container, Typography, Divider, Button, CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import logo from './components/the_sandtrap_logo.png';
import background from './components/sandtrapFront.jpg';

// Custom theme for admin mode
const adminTheme = createTheme({
  palette: {
    background: {
      default: '#333',
    },
    text: {
      primary: '#ffffff',
      secondary: '#cccccc',
    },
  },
});

const publicTheme = createTheme({
  palette: {
    background: {
      default: '#f9f9f9',
    },
    text: {
      primary: '#4b4b4b',
      secondary: '#2f4f4f',
    },
  },
});

// Main page layout with all components
const MainPage = ({ isAuthenticated, onLogout }) => (
  <Box sx={{ fontFamily: 'Georgia, serif', color: isAuthenticated ? 'black' : '#4b4b4b', backgroundColor: isAuthenticated ? '#333' : '#f9f9f9' }}>
    <Navbar />
    
    {/* Admin View Banner and Logout Button */}
    <Box sx={{ backgroundColor: isAuthenticated ? '#444' : '#eeeeee', color: isAuthenticated ? '#fff' : '#4b4b4b', py: 2, textAlign: 'center', marginTop: isAuthenticated ? '10vh' : '' }}>
      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
        {isAuthenticated ? "ADMIN VIEW" : ""}
      </Typography>
      {isAuthenticated && (
        <Button variant="contained" color="secondary" onClick={onLogout} sx={{ mt: 1 }}>
          Logout
        </Button>
      )}
    </Box>

    <Box
      className="hero-section"
      sx={{
        height: '50vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'black',
        overflow: 'hidden',
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Box sx={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></Box>
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
        <Menu isAuthenticated={isAuthenticated} />
      </section>
      <Divider sx={{ my: 4, borderColor: isAuthenticated ? '#777' : '#ccc' }} />

      <section id="about">
        <About />
      </section>
      <Divider sx={{ my: 4, borderColor: isAuthenticated ? '#777' : '#ccc' }} />

      <section id="map">
        <MapComponent />
        <Divider sx={{ my: 4, borderColor: isAuthenticated ? '#777' : '#ccc' }} />
        <ContactInfo />
      </section>
    </Container>
  </Box>
);

// Login page layout with Navbar and SignIn
const LoginPage = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    navigate("/"); // Redirect to main page after successful login
  };

  return (
    <Box>
      <Navbar />
      <SignIn onLoginSuccess={handleLoginSuccess} />
    </Box>
  );
};

// App component with routing and authentication handling
const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if the token exists in local storage on initial load
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  // Handle logout by clearing token and setting isAuthenticated to false
  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <ThemeProvider theme={isAuthenticated ? adminTheme : publicTheme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route
            path="/"
            element={<MainPage isAuthenticated={isAuthenticated} onLogout={handleLogout} />}
          />
          <Route
            path="/managerlogin"
            element={isAuthenticated ? <Navigate to="/" /> : <LoginPage setIsAuthenticated={setIsAuthenticated} />}
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
