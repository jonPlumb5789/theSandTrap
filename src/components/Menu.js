// src/components/Menu.js
import React from 'react';
import menuData from '../data/menuData';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  Box,
  Divider,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Menu = () => (
  <Container sx={{ py: 4, maxWidth: '600px', backgroundColor: '#f8f8f8', borderRadius: '8px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}>
    <Typography
      variant="h4"
      align="center"
      gutterBottom
      sx={{ fontSize: { xs: '1.8rem', sm: '2.2rem' }, fontFamily: 'Georgia, serif', color: '#4b4b4b', fontWeight: 'bold' }}
    >
      Our Menu
    </Typography>
    <Divider sx={{ my: 2, borderColor: '#ccc' }} />

    {Object.keys(menuData).map((category) => (
      <Accordion key={category} sx={{ mb: 2, boxShadow: 'none', backgroundColor: 'inherit' }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ backgroundColor: '#ffffff', borderRadius: '4px', padding: 1 }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 'bold', fontFamily: 'Georgia, serif', fontSize: '1.2rem', color: '#2f4f4f' }}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: 2, backgroundColor: '#f2f2f2', borderRadius: '4px' }}>
          {menuData[category].map((item, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  color: '#2f4f4f',
                  fontFamily: 'Georgia, serif',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                {item.name}
                <span style={{ fontWeight: 'normal', fontSize: '1rem' }}>{item.price}</span>
              </Typography>
              <Typography variant="body2" sx={{ color: '#4b4b4b', fontStyle: 'italic', fontFamily: 'Arial, sans-serif' }}>
                {item.description}
              </Typography>
              {item.add_ons && (
                <Box sx={{ mt: 1, pl: 2 }}>
                  <Typography variant="body2" fontStyle="italic" sx={{ color: '#4b4b4b' }}>
                    Add-ons:
                  </Typography>
                  {item.add_ons.map((addon, addonIndex) => (
                    <Typography key={addonIndex} variant="body2" color="textSecondary">
                      {addon.name} - {addon.price}
                    </Typography>
                  ))}
                </Box>
              )}
              {index < menuData[category].length - 1 && <Divider sx={{ my: 1, borderColor: '#ccc' }} />}
            </Box>
          ))}
        </AccordionDetails>
      </Accordion>
    ))}
  </Container>
);

export default Menu;
