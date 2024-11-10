// src/components/Menu.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  Box,
  Divider,
  TextField,
  Button,
  IconButton,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

const Menu = ({ isAuthenticated }) => {
  const [menuData, setMenuData] = useState({});
  const [editingItem, setEditingItem] = useState(null);
  const [newCategory, setNewCategory] = useState(''); // State for new category name
  const [newItem, setNewItem] = useState({
    name: '',
    description: '',
    price: '',
    add_ons: [{ name: '', price: '' }],
  });

  // Fetch menu data
  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await axios.get('https://sandtrap-backend.onrender.com/api/menu');
        const formattedData = response.data.reduce((acc, item) => {
          const { category } = item;
          if (!acc[category]) acc[category] = [];
          acc[category].push(item);
          return acc;
        }, {});
        setMenuData(formattedData);
      } catch (error) {
        console.error('Error fetching menu data:', error);
      }
    };
    fetchMenuData();
  }, []);

  // Handle adding a new category
  const handleAddCategory = async () => {
    if (newCategory.trim() === '') return;
    setMenuData((prevData) => ({
      ...prevData,
      [newCategory]: [], // Create an empty category
    }));
    setNewCategory(''); // Reset the input field
  };

  // Handle adding a new item to a specific category
  const handleAddItem = async (category) => {
    try {
      const response = await axios.post('https://sandtrap-backend.onrender.com/api/admin/menu', { ...newItem, category }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setMenuData((prevData) => ({
        ...prevData,
        [category]: [...(prevData[category] || []), response.data],
      }));
      setNewItem({ name: '', description: '', price: '', add_ons: [] }); // Reset new item fields
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  const handleUpdateItem = async (updatedItem) => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.put(
        `https://sandtrap-backend.onrender.com/api/admin/menu/${updatedItem._id}`,
        updatedItem,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setMenuData((prevData) => ({
        ...prevData,
        [updatedItem.category]: prevData[updatedItem.category].map((item) =>
          item._id === updatedItem._id ? response.data : item
        ),
      }));
      setEditingItem(null);
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  const handleDeleteItem = async (id, category) => {
    try {
      await axios.delete(`https://sandtrap-backend.onrender.com/api/admin/menu/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setMenuData((prevData) => ({
        ...prevData,
        [category]: prevData[category].filter((item) => item._id !== id),
      }));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const handleDeleteCategory = async (category) => {
    const token = localStorage.getItem('token');
    try {
      for (const item of menuData[category]) {
        await axios.delete(`https://sandtrap-backend.onrender.com/api/admin/menu/${item._id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
      }
      setMenuData((prevData) => {
        const newData = { ...prevData };
        delete newData[category];
        return newData;
      });
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  return (
    <Container sx={{ py: 4, maxWidth: '600px', backgroundColor: '#f8f8f8', borderRadius: '8px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontSize: { xs: '1.8rem', sm: '2.2rem' }, fontFamily: 'Georgia, serif', color: '#4b4b4b', fontWeight: 'bold' }}>
        {isAuthenticated ? 'Admin View - Editable Menu' : 'Our Menu'}
      </Typography>
      <Divider sx={{ my: 2, borderColor: '#ccc' }} />

      {Object.keys(menuData).map((category) => (
        <Accordion key={category} sx={{ mb: 2, boxShadow: 'none', backgroundColor: 'inherit' }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ backgroundColor: '#ffffff', borderRadius: '4px', padding: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', fontFamily: 'Georgia, serif', fontSize: '1.2rem', color: '#2f4f4f' }}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Typography>
            {isAuthenticated && (
              <IconButton onClick={() => handleDeleteCategory(category)} color="secondary" sx={{ marginLeft: 'auto' }}>
                <DeleteIcon />
              </IconButton>
            )}
          </AccordionSummary>
          <AccordionDetails sx={{ padding: 2, backgroundColor: '#f2f2f2', borderRadius: '4px' }}>
            {menuData[category].map((item, index) => (
              <Box key={index} sx={{ mb: 2 }}>
                {editingItem && editingItem._id === item._id ? (
                  <>
                    <TextField label="Name" value={editingItem.name} onChange={(e) => setEditingItem({ ...editingItem, name: e.target.value })} fullWidth InputProps={{ style: { color: 'black' } }} />
                    <TextField label="Description" value={editingItem.description} onChange={(e) => setEditingItem({ ...editingItem, description: e.target.value })} fullWidth InputProps={{ style: { color: 'black' } }} />
                    <TextField label="Price" value={editingItem.price} onChange={(e) => setEditingItem({ ...editingItem, price: e.target.value })} fullWidth InputProps={{ style: { color: 'black' } }} />
                    <Button onClick={() => handleUpdateItem(editingItem)}>Save</Button>
                    <Button onClick={() => setEditingItem(null)}>Cancel</Button>
                  </>
                ) : (
                  <>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#2f4f4f', display: 'flex', justifyContent: 'space-between' }}>
                      {item.name}
                      <span>{item.price}</span>
                      {isAuthenticated && (
                        <Box>
                          <IconButton onClick={() => setEditingItem(item)}><EditIcon /></IconButton>
                          <IconButton onClick={() => handleDeleteItem(item._id, category)}><DeleteIcon /></IconButton>
                        </Box>
                      )}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#4b4b4b', fontStyle: 'italic' }}>{item.description}</Typography>
                  </>
                )}
              </Box>
            ))}

            {/* Add New Item within Category */}
            {isAuthenticated && (
              <Box sx={{ mt: 2 }}>
                <Divider sx={{ my: 2, borderColor: '#ccc' }} />
                <Typography variant="h6" align="center" sx={{ mb: 1, color:'black' }}>Add New Item</Typography>
                <TextField label="Name" value={newItem.name} onChange={(e) => setNewItem({ ...newItem, name: e.target.value })} fullWidth InputProps={{ style: { color: 'black' } }} />
                <TextField label="Description" value={newItem.description} onChange={(e) => setNewItem({ ...newItem, description: e.target.value })} fullWidth InputProps={{ style: { color: 'black' } }} />
                <TextField label="Price" value={newItem.price} onChange={(e) => setNewItem({ ...newItem, price: e.target.value })} fullWidth InputProps={{ style: { color: 'black' } }} />
                <Button startIcon={<AddIcon />} onClick={() => handleAddItem(category)}>Add Item</Button>
              </Box>
            )}
          </AccordionDetails>
        </Accordion>
      ))}

      {/* Add New Category Section */}
      {isAuthenticated && (
        <Box sx={{ mt: 4, color:'black' }}>
          <Divider sx={{ my: 2, borderColor: '#ccc' }} />
          <Typography variant="h6" align="center">Add New Category</Typography>
          <TextField label="Category Name" value={newCategory} onChange={(e) => setNewCategory(e.target.value)} fullWidth InputProps={{ style: { color: 'black' } }} />
          <Button startIcon={<AddIcon />} onClick={handleAddCategory}>Add Category</Button>
        </Box>
      )}
    </Container>
  );
};

export default Menu;
