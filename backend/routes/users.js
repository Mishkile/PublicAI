const express = require('express');
const router = express.Router();

// Sample users data (replace with database integration)
let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'user' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'admin' }
];

// Get all users
router.get('/', (req, res) => {
  const { page = 1, limit = 10, role } = req.query;
  let filteredUsers = users;
  
  // Filter by role if specified
  if (role) {
    filteredUsers = users.filter(user => user.role === role);
  }
  
  // Pagination
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const paginatedUsers = filteredUsers.slice(startIndex, endIndex);
  
  res.json({
    success: true,
    data: paginatedUsers,
    pagination: {
      current_page: parseInt(page),
      total_pages: Math.ceil(filteredUsers.length / limit),
      total_users: filteredUsers.length,
      per_page: parseInt(limit)
    }
  });
});

// Get user by ID
router.get('/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);
  
  if (!user) {
    return res.status(404).json({
      success: false,
      message: 'User not found'
    });
  }
  
  res.json({
    success: true,
    data: user
  });
});

// Create new user
router.post('/', (req, res) => {
  const { name, email, role = 'user' } = req.body;
  
  // Basic validation
  if (!name || !email) {
    return res.status(400).json({
      success: false,
      message: 'Name and email are required'
    });
  }
  
  // Check if email already exists
  const existingUser = users.find(u => u.email === email);
  if (existingUser) {
    return res.status(409).json({
      success: false,
      message: 'User with this email already exists'
    });
  }
  
  const newUser = {
    id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1,
    name,
    email,
    role,
    created_at: new Date().toISOString()
  };
  
  users.push(newUser);
  
  res.status(201).json({
    success: true,
    message: 'User created successfully',
    data: newUser
  });
});

// Update user
router.put('/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex(u => u.id === userId);
  
  if (userIndex === -1) {
    return res.status(404).json({
      success: false,
      message: 'User not found'
    });
  }
  
  const { name, email, role } = req.body;
  
  // Update user fields
  if (name) users[userIndex].name = name;
  if (email) users[userIndex].email = email;
  if (role) users[userIndex].role = role;
  users[userIndex].updated_at = new Date().toISOString();
  
  res.json({
    success: true,
    message: 'User updated successfully',
    data: users[userIndex]
  });
});

// Delete user
router.delete('/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex(u => u.id === userId);
  
  if (userIndex === -1) {
    return res.status(404).json({
      success: false,
      message: 'User not found'
    });
  }
  
  users.splice(userIndex, 1);
  
  res.json({
    success: true,
    message: 'User deleted successfully'
  });
});

module.exports = router;