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

///////////////////////////////////// Daily Progress //////////////////////////////////
router.post("/createDailyProgress", verifyToken, userService.createDailyProgress);
router.get("/getAllDailyProgress", verifyToken, userService.getAllDailyProgress);
router.get("/getDailyProgressById/:id", verifyToken, userService.getDailyProgressById);
router.put("/updateDailyProgressById/:id", verifyToken, userService.updateDailyProgressById);
router.delete("/deleteDailyProgressById/:id", verifyToken, userService.deleteDailyProgressById);

///////////////////////////////////// Update Diet and Exercise Plan completed //////////////////////////////////
router.put("/updateDietPlanCompletedById/:id", verifyToken, userService.updateDietPlanCompletedById);
router.put("/updateExercisePlanCompletedById/:id", verifyToken, userService.updateExercisePlanCompletedById);

///////////////////////////////////// Get Diet Plan By UserId //////////////////////////////////
router.post("/getDietPlanByUserId/", verifyToken, userService.getDietPlanByUserId);


module.exports = router;
