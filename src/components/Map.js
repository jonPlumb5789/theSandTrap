// src/components/Map.js
import React from 'react';
import { Box, Typography } from '@mui/material';

function Map() {
  return (
    <Box
      sx={{
        bgcolor: '#f9f9f9',
        p: 3,
        borderRadius: 2,
        boxShadow: 2,
        textAlign: 'center',
        maxWidth: '600px',
        margin: 'auto',
        marginTop: '30px'
      }}
    >
      <Typography
  variant="h4"
  align="center"
  gutterBottom
  sx={{ fontSize: { xs: '1.8rem', sm: '2.2rem' }, fontFamily: 'Georgia, serif', color: '#4b4b4b', fontWeight: 'bold' }}
>
        Location:
      </Typography>
      <Box
        sx={{
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          height: '400px',
          width: '100%'
        }}
      >
       <iframe title="the_map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11829.275551804241!2d-83.20931635996826!3d42.16485999733984!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b3972d3b7ec9b%3A0xec1b0de3d33c317f!2sThe%20Sandtrap!5e0!3m2!1sen!2sus!4v1730679331640!5m2!1sen!2sus" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </Box>
    </Box>
  );
}

export default Map;
