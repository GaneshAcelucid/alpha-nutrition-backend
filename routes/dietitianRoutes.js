const express = require('express');
const dietitianService = require('../services/dietitianService');
const verifyToken = require('../middleware/verifyToken');
const router = express.Router();

// Define routes for dietitian operations
router.post('/dietitianLogin', dietitianService.dietitianLogin);

///////////////////////////////////// Item //////////////////////////////////
router.post("/createItem", verifyToken, dietitianService.createItem);
router.get("/getAllItems", verifyToken, dietitianService.getAllItems);
router.get("/getItemById/:id", verifyToken, dietitianService.getItemById);
router.put("/updateItemById/:id", verifyToken, dietitianService.updateItemById);
router.delete("/deleteItemById/:id", verifyToken, dietitianService.deleteItemById);

///////////////////////////////////// Exercise //////////////////////////////////
router.post("/createExercise", verifyToken, dietitianService.createExercise);
router.get("/getAllExercises", verifyToken, dietitianService.getAllExercises);
router.get("/getExerciseById/:id", verifyToken, dietitianService.getExerciseById);
router.put("/updateExerciseById/:id", verifyToken, dietitianService.updateExerciseById);
router.delete("/deleteExerciseById/:id", verifyToken, dietitianService.deleteExerciseById);

///////////////////////////////////// Diet Plan //////////////////////////////////
router.post("/createDietPlan", verifyToken, dietitianService.createDietPlan);
router.get("/getAllDietPlans", verifyToken, dietitianService.getAllDietPlans);
router.get("/getDietPlanById/:id", verifyToken, dietitianService.getDietPlanById);
router.put("/updateDietPlanById/:id", verifyToken, dietitianService.updateDietPlanById);
router.delete("/deleteDietPlanById/:id", verifyToken, dietitianService.deleteDietPlanById);

///////////////////////////////////// Exercise Plan //////////////////////////////////
router.post("/createExercisePlan", verifyToken, dietitianService.createExercisePlan);
router.get("/getAllExercisePlans", verifyToken, dietitianService.getAllExercisePlans);
router.get("/getExercisePlanById/:id", verifyToken, dietitianService.getExercisePlanById);
router.put("/updateExercisePlanById/:id", verifyToken, dietitianService.updateExercisePlanById);
router.delete("/deleteExercisePlanById/:id", verifyToken, dietitianService.deleteExercisePlanById);

///////////////////////////////////// Reward system //////////////////////////////////
router.post("/createReward", verifyToken, dietitianService.createReward);
router.get("/getAllRewards", verifyToken, dietitianService.getAllRewards);
router.get("/getRewardById/:id", verifyToken, dietitianService.getRewardById);
router.put("/updateRewardById/:id", verifyToken, dietitianService.updateRewardById);
router.delete("/deleteRewardById/:id", verifyToken, dietitianService.deleteRewardById);

///////////////////////////////////// Feedback system //////////////////////////////////
router.post("/createFeedback", verifyToken, dietitianService.createFeedback);
router.get("/getAllFeedbacks", verifyToken, dietitianService.getAllFeedbacks);
router.get("/getFeedbackById/:id", verifyToken, dietitianService.getFeedbackById);
router.put("/updateFeedbackById/:id", verifyToken, dietitianService.updateFeedbackById);
router.delete("/deleteFeedbackById/:id", verifyToken, dietitianService.deleteFeedbackById);


module.exports = router;
