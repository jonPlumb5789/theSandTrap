// src/components/ContactInfo.js
import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const ContactInfo = () => {
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
>Contact Us</Typography>
      <Typography>15001 Sibley Rd, Riverview, MI 48193</Typography>
      <Typography>Phone: (734) 479-4800</Typography>
      <Typography>Email: info@thesandtrap.com</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, gap: 2 }}>
        <Link href="https://www.facebook.com/sandtrapriverview" target="_blank" rel="noopener" color="inherit">
          <FacebookIcon fontSize="large" />
        </Link>
        <Link href="https://instagram.com" target="_blank" rel="noopener" color="inherit">
          <InstagramIcon fontSize="large" />
        </Link>
        <Link href="https://twitter.com" target="_blank" rel="noopener" color="inherit">
          <TwitterIcon fontSize="large" />
        </Link>
      </Box>
</Box>
  );
};

export default ContactInfo;
