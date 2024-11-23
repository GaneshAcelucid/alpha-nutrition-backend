const express = require('express');
const dietitianService = require('../services/dietitianService');
const verifyToken = require('../middleware/verifyToken');
const router = express.Router();

// Define routes for dietitian operations
router.post('/dietitianLogin', dietitianService.dietitianLogin);
// router.get("/getDietitians", verifyToken, dietitianService.getDietitians);
// router.get('/getDietitianById/:id', dietitianService.getDietitianById);
// router.put('/updateDietitian/:id', dietitianService.updateDietitian);
// router.delete('/deleteDietitian/:id', dietitianService.deleteDietitian);

module.exports = router;
