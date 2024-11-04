// src/components/About.js
import React from 'react';
import { Box, Typography, Divider, Button } from '@mui/material';

const About = () => (
  <Box
    sx={{
      bgcolor: '#f9f9f9',
      p: 3,
      borderRadius: 2,
      boxShadow: 2,
      textAlign: 'center',
      maxWidth: '600px',
      margin: 'auto',
    }}
  >
    

    {/* Operating Hours */}
    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
      Operating Hours
    </Typography>
    <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
      Sunday: 10:00 AM - 9:00 PM <br />
      Monday - Thursday: 11:00 AM - 11:00 PM <br />
      Friday: 11:00 AM - 11:00 PM <br />
      Saturday: 10:00 AM - 11:00 PM <br />
      Saturday and Sunday Brunch: 10:00 AM - 2:00 PM
    </Typography>

  </Box>
);

export default About;
