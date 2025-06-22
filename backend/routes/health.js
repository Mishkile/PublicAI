const express = require('express');
const router = express.Router();

// Health check endpoint
router.get('/', (req, res) => {
  const healthCheck = {
    uptime: process.uptime(),
    message: 'OK',
    timestamp: new Date().toISOString(),
    status: 'healthy',
    version: process.env.npm_package_version || '1.0.0',
    environment: process.env.NODE_ENV || 'development',
    memory: {
      used: Math.round((process.memoryUsage().heapUsed / 1024 / 1024) * 100) / 100,
      total: Math.round((process.memoryUsage().heapTotal / 1024 / 1024) * 100) / 100,
      external: Math.round((process.memoryUsage().external / 1024 / 1024) * 100) / 100
    }
  };
  
  res.status(200).json(healthCheck);
});

// Detailed health check
router.get('/detailed', (req, res) => {
  const detailedHealth = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    version: process.env.npm_package_version || '1.0.0',
    environment: process.env.NODE_ENV || 'development',
    system: {
      platform: process.platform,
      nodeVersion: process.version,
      cpuUsage: process.cpuUsage(),
      memory: process.memoryUsage(),
      pid: process.pid
    },
    services: {
      database: 'not_configured', // Update when database is added
      cache: 'not_configured', // Update when cache is added
      external_apis: 'not_configured' // Update when external APIs are added
    }
  };
  
  res.status(200).json(detailedHealth);
});

module.exports = router;