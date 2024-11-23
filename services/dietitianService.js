const DietitianRepository = require('../repositories/dietitianRepository');
const dietitianRepository = new DietitianRepository();

class dietitianService {

    async dietitianLogin(req, res) {
        try {
            const token = await dietitianRepository.dietitianLogin(req.body);
            res.status(201).json(token);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async createItem(req, res) {
        try {
            const item = await dietitianRepository.createItem(req.body);
            res.status(201).json(item);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    // Get all items
    async getAllItems(req, res) {
        try {
            const items = await dietitianRepository.getAllItems();
            res.status(200).json(items);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    
    // Get a item by ID
    async getItemById(req, res) {
        try {
            const item = await dietitianRepository.getItemById(req.params.id);
            res.status(200).json(item);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    // Update a item
    async updateItemById(req, res) {
        try {
            const item = await dietitianRepository.updateItemById(req.params.id, req.body);
            res.status(200).json(item);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }
    
    // Delete a item
    async deleteItemById(req, res) {
        try {
            const result = await dietitianRepository.deleteItemById(req.params.id);
            res.status(200).json(result);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    ///////////////////////////////////// Exercise //////////////////////////////////
    async createExercise(req, res) {
        try {
            const exercise = await dietitianRepository.createExercise(req.body);
            res.status(201).json(exercise);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    // Get all exercises
    async getAllExercises(req, res) {
        try {
            const exercises = await dietitianRepository.getAllExercises();
            res.status(200).json(exercises);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    
    // Get a exercise by ID
    async getExerciseById(req, res) {
        try {
            const exercise = await dietitianRepository.getExerciseById(req.params.id);
            res.status(200).json(exercise);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    // Update a exercise
    async updateExerciseById(req, res) {
        try {
            const exercise = await dietitianRepository.updateExerciseById(req.params.id, req.body);
            res.status(200).json(exercise);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }
    
    // Delete a exercise
    async deleteExerciseById(req, res) {
        try {
            const result = await dietitianRepository.deleteExerciseById(req.params.id);
            res.status(200).json(result);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    ///////////////////////////////////// Diet Plan //////////////////////////////////
    async createDietPlan(req, res) {
        try {
            const dietPlan = await dietitianRepository.createDietPlan(req.body);
            res.status(201).json(dietPlan);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    // Get all dietPlans
    async getAllDietPlans(req, res) {
        try {
            const dietPlans = await dietitianRepository.getAllDietPlans();
            res.status(200).json(dietPlans);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    // Get a dietPlan by ID
    async getDietPlanById(req, res) {
        try {
            const dietPlan = await dietitianRepository.getDietPlanById(req.params.id);
            res.status(200).json(dietPlan);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    // Update a dietPlan
    async updateDietPlanById(req, res) {
        try {
            const dietPlan = await dietitianRepository.updateDietPlanById(req.params.id, req.body);
            res.status(200).json(dietPlan);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    // Delete a dietPlan
    async deleteDietPlanById(req, res) {
        try {
            const result = await dietitianRepository.deleteDietPlanById(req.params.id);
            res.status(200).json(result);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }


    ///////////////////////////////////// Exercise Plan //////////////////////////////////
    async createExercisePlan(req, res) {
        try {
            const exercisePlan = await dietitianRepository.createExercisePlan(req.body);
            res.status(201).json(exercisePlan);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    // Get all exercisePlans
    async getAllExercisePlans(req, res) {
        try {
            const exercisePlans = await dietitianRepository.getAllExercisePlans();
            res.status(200).json(exercisePlans);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    // Get a exercisePlan by ID
    async getExercisePlanById(req, res) {
        try {
            const exercisePlan = await dietitianRepository.getExercisePlanById(req.params.id);
            res.status(200).json(exercisePlan);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    // Update a exercisePlan
    async updateExercisePlanById(req, res) {
        try {
            const exercisePlan = await dietitianRepository.updateExercisePlanById(req.params.id, req.body);
            res.status(200).json(exercisePlan);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    // Delete a exercisePlan
    async deleteExercisePlanById(req, res) {
        try {
            const result = await dietitianRepository.deleteExercisePlanById(req.params.id);
            res.status(200).json(result);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

       ///////////////////////////////////// Reward //////////////////////////////////
       async createReward(req, res) {
        try {
            const reward = await dietitianRepository.createReward(req.body);
            res.status(201).json(reward);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    // Get all rewards
    async getAllRewards(req, res) {
        try {
            const rewards = await dietitianRepository.getAllRewards();
            res.status(200).json(rewards);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    // Get a reward by ID
    async getRewardById(req, res) {
        try {
            const reward = await dietitianRepository.getRewardById(req.params.id);
            res.status(200).json(reward);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    // Update a reward
    async updateRewardById(req, res) {
        try {
            const reward = await dietitianRepository.updateRewardById(req.params.id, req.body);
            res.status(200).json(reward);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    // Delete a reward
    async deleteRewardById(req, res) {
        try {
            const result = await dietitianRepository.deleteRewardById(req.params.id);
            res.status(200).json(result);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    ///////////////////////////////////// Feedback //////////////////////////////////
    async createFeedback(req, res) {
        try {
            const feedback = await dietitianRepository.createFeedback(req.body);
            res.status(201).json(feedback);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    // Get all feedbacks
    async getAllFeedbacks(req, res) {
        try {
            const feedbacks = await dietitianRepository.getAllFeedbacks();
            res.status(200).json(feedbacks);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    // Get a feedback by ID
    async getFeedbackById(req, res) {
        try {
            const feedback = await dietitianRepository.getFeedbackById(req.params.id);
            res.status(200).json(feedback);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    // Update a feedback
    async updateFeedbackById(req, res) {
        try {
            const feedback = await dietitianRepository.updateFeedbackById(req.params.id, req.body);
            res.status(200).json(feedback);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    // Delete a feedback
    async deleteFeedbackById(req, res) {
        try {
            const result = await dietitianRepository.deleteFeedbackById(req.params.id);
            res.status(200).json(result);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }


}

module.exports = new dietitianService();
