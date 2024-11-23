const express = require('express');
const userService = require('../services/userService');
const verifyToken = require('../middleware/verifyToken');
const router = express.Router();

// Define routes for user operations
router.post('/userSignup', userService.createUser);
router.post('/userLogin', userService.userLogin);
router.get("/getUsers", verifyToken, userService.getUsers);
router.get('/getUserById/:id', verifyToken, userService.getUserById);
router.put('/updateUser/:id', verifyToken, userService.updateUser);
router.delete('/deleteUser/:id', verifyToken, userService.deleteUser);

module.exports = router;
