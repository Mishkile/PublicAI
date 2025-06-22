const express = require('express');
const router = express.Router();

// Import specific route modules
const usersRoutes = require('./users');
const aiRoutes = require('./ai');

// API info endpoint
router.get('/', (req, res) => {
  res.json({
    message: 'PublicAI API v1',
    version: '1.0.0',
    description: 'RESTful API for PublicAI project',
    endpoints: {
      users: '/api/v1/users',
      ai: '/api/v1/ai',
      health: '/health'
    },
    documentation: 'https://github.com/Mishkile/PublicAI#api-documentation'
  });
});

// Mount route modules
router.use('/users', usersRoutes);
router.use('/ai', aiRoutes);

// API status endpoint
router.get('/status', (req, res) => {
  res.json({
    api_version: '1.0.0',
    status: 'operational',
    timestamp: new Date().toISOString(),
    services: {
      authentication: 'operational',
      database: 'not_configured',
      ai_services: 'operational'
    }
  });
});

module.exports = router;