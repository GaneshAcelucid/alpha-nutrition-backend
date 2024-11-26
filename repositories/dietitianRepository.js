const Item = require('../models/item');
const Exercise = require('../models/exercise');
const DietPlan = require('../models/dietPlan');
const ExercisePlan = require('../models/exercisePlan');
const Reward = require('../models/reward');
const Feedback = require('../models/feedback');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET;

class DietitianRepository {

    // Dietitian Dietitian
    async dietitianLogin(data) {
        try {
            const { email, password } = data;

            if (!process.env.DIETITIAN_EMAIL == email) {
            return res.status(400).send('Dietitian not found');
            }
            // Compare the password
            const isMatch = await bcrypt.compare(password, process.env.DIETITIAN_PASSWORD);
            if (!isMatch) {
                return res.status(400).send('Invalid credentials');
            }
            // Generate JWT token
            const token = jwt.sign({ dietitianemail: email }, JWT_SECRET, { expiresIn: '1h' });
            return token;
        } catch (error) {
            throw new Error(`Error fetching dietitians: ${error.message}`);
        }
    }

    // Create a new item
    async createItem(data) {
        try {
            const item = await Item.create(data);
            console.log(item);
            return item;
        } catch (error) {
            throw new Error(`Error creating item: ${error.message}`);
        }
    }

    // Get all items
    async getAllItems() {
        try {
            const items = await Item.findAll();
            return items;
        } catch (error) {
            throw new Error(`Error fetching items: ${error.message}`);
        }
    }
    
    // Get a item by ID
    async getItemById(id) {
        try {
            const item = await Item.findByPk(id);
            if (item) return item;
            else throw new Error('Item not found');
        } catch (error) {
            throw new Error(`Error fetching item by ID: ${error.message}`);
        }
    }
    
    // Update a item
    async updateItemById(id, data) {
        try {
            const item = await Item.findByPk(id);
            if (item) {
            await item.update(data);
            return item;
            } else throw new Error('Item not found');
        } catch (error) {
            throw new Error(`Error updating item: ${error.message}`);
        }
    }
    
    // Delete a item
    async deleteItemById(id) {
        try {
            console.log(id);
            const item = await Item.findByPk(id);
            if (item) {
                console.log(item)
                await item.destroy();
                return { message: 'Item deleted' };
            } else throw new Error('Item not found');
        } catch (error) {
            throw new Error(`Error deleting item: ${error.message}`);
        }
    }


    ///////////////////////////////////// Exercise //////////////////////////////////
    // Create a new exercise
    async createExercise(data) {
        try {
            const exercise = await Exercise.create(data);
            console.log(exercise);
            return exercise;
        } catch (error) {
            throw new Error(`Error creating exercise: ${error.message}`);
        }
    }

    // Get all exercises
    async getAllExercises() {
        try {
            const exercises = await Exercise.findAll();
            return exercises;
        } catch (error) {
            throw new Error(`Error fetching exercises: ${error.message}`);
        }
    }
    
    // Get a exercise by ID
    async getExerciseById(id) {
        try {
            const exercise = await Exercise.findByPk(id);
            if (exercise) return exercise;
            else throw new Error('Exercise not found');
        } catch (error) {
            throw new Error(`Error fetching exercise by ID: ${error.message}`);
        }
    }
    
    // Update a exercise
    async updateExerciseById(id, data) {
        try {
            const exercise = await Exercise.findByPk(id);
            if (exercise) {
            await exercise.update(data);
            return exercise;
            } else throw new Error('Exercise not found');
        } catch (error) {
            throw new Error(`Error updating exercise: ${error.message}`);
        }
    }
    
    // Delete a exercise
    async deleteExerciseById(id) {
        try {
            console.log(id);
            const exercise = await Exercise.findByPk(id);
            if (exercise) {
                console.log(exercise)
                await exercise.destroy();
                return { message: 'Exercise deleted' };
            } else throw new Error('Exercise not found');
        } catch (error) {
            throw new Error(`Error deleting exercise: ${error.message}`);
        }
    }

    ///////////////////////////////////// Diet Plan //////////////////////////////////
    // Create a new DietPlan
    async createDietPlan(data) {
        try {
            const dietPlan = await DietPlan.create(data);
            console.log(dietPlan);
            return dietPlan;
        } catch (error) {
            throw new Error(`Error creating dietPlan: ${error.message}`);
        }
    }

    // Get all dietPlans
    async getAllDietPlans() {
        try {
            const dietPlans = await DietPlan.findAll();
            return dietPlans;
        } catch (error) {
            throw new Error(`Error fetching dietPlans: ${error.message}`);
        }
    }
    
    // Get a dietPlan by ID
    async getDietPlanById(id) {
        try {
            const dietPlan = await DietPlan.findByPk(id);
            if (dietPlan) return dietPlan;
            else throw new Error('DietPlan not found');
        } catch (error) {
            throw new Error(`Error fetching dietPlan by ID: ${error.message}`);
        }
    }
    
    // Update a dietPlan
    async updateDietPlanById(id, data) {
        try {
            const dietPlan = await DietPlan.findByPk(id);
            if (dietPlan) {
            await dietPlan.update(data);
            return dietPlan;
            } else throw new Error('DietPlan not found');
        } catch (error) {
            throw new Error(`Error updating dietPlan: ${error.message}`);
        }
    }
    
    // Delete a dietPlan
    async deleteDietPlanById(id) {
        try {
            console.log(id);
            const dietPlan = await DietPlan.findByPk(id);
            if (dietPlan) {
                console.log(dietPlan)
                await dietPlan.destroy();
                return { message: 'DietPlan deleted' };
            } else throw new Error('DietPlan not found');
        } catch (error) {
            throw new Error(`Error deleting dietPlan: ${error.message}`);
        }
    }

    ///////////////////////////////////// Exercise Plan //////////////////////////////////
    // Create a new ExercisePlan
    async createExercisePlan(data) {
        try {
            const exercisePlan = await ExercisePlan.create(data);
            console.log(exercisePlan);
            return exercisePlan;
        } catch (error) {
            throw new Error(`Error creating exercisePlan: ${error.message}`);
        }
    }

    // Get all exercisePlans
    async getAllExercisePlans() {
        try {
            const exercisePlans = await ExercisePlan.findAll();
            return exercisePlans;
        } catch (error) {
            throw new Error(`Error fetching exercisePlans: ${error.message}`);
        }
    }
    
    // Get a exercisePlan by ID
    async getExercisePlanById(id) {
        try {
            const exercisePlan = await ExercisePlan.findByPk(id);
            if (exercisePlan) return exercisePlan;
            else throw new Error('ExercisePlan not found');
        } catch (error) {
            throw new Error(`Error fetching exercisePlan by ID: ${error.message}`);
        }
    }
    
    // Update a exercisePlan
    async updateExercisePlanById(id, data) {
        try {
            const exercisePlan = await ExercisePlan.findByPk(id);
            if (exercisePlan) {
            await exercisePlan.update(data);
            return exercisePlan;
            } else throw new Error('ExercisePlan not found');
        } catch (error) {
            throw new Error(`Error updating exercisePlan: ${error.message}`);
        }
    }
    
    // Delete a exercisePlan
    async deleteExercisePlanById(id) {
        try {
            console.log(id);
            const exercisePlan = await ExercisePlan.findByPk(id);
            if (exercisePlan) {
                console.log(exercisePlan)
                await exercisePlan.destroy();
                return { message: 'ExercisePlan deleted' };
            } else throw new Error('ExercisePlan not found');
        } catch (error) {
            throw new Error(`Error deleting exercisePlan: ${error.message}`);
        }
    }

    ///////////////////////////////////// Reward //////////////////////////////////
    // Create a new Reward
    async createReward(data) {
        try {
            const reward = await Reward.create(data);
            console.log(reward);
            return reward;
        } catch (error) {
            throw new Error(`Error creating reward: ${error.message}`);
        }
    }

    // Get all rewards
    async getAllRewards() {
        try {
            const rewards = await Reward.findAll();
            return rewards;
        } catch (error) {
            throw new Error(`Error fetching rewards: ${error.message}`);
        }
    }
    
    // Get a reward by ID
    async getRewardById(id) {
        try {
            const reward = await Reward.findByPk(id);
            if (reward) return reward;
            else throw new Error('Reward not found');
        } catch (error) {
            throw new Error(`Error fetching reward by ID: ${error.message}`);
        }
    }
    
    // Update a reward
    async updateRewardById(id, data) {
        try {
            const reward = await Reward.findByPk(id);
            if (reward) {
            await reward.update(data);
            return reward;
            } else throw new Error('Reward not found');
        } catch (error) {
            throw new Error(`Error updating reward: ${error.message}`);
        }
    }
    
    // Delete a reward
    async deleteRewardById(id) {
        try {
            console.log(id);
            const reward = await Reward.findByPk(id);
            if (reward) {
                console.log(reward)
                await reward.destroy();
                return { message: 'Reward deleted' };
            } else throw new Error('Reward not found');
        } catch (error) {
            throw new Error(`Error deleting reward: ${error.message}`);
        }
    }

    ///////////////////////////////////// Feedback //////////////////////////////////
    // Create a new Feedback
    async createFeedback(data) {
        try {
            const feedback = await Feedback.create(data);
            console.log(feedback);
            return feedback;
        } catch (error) {
            throw new Error(`Error creating feedback: ${error.message}`);
        }
    }

    // Get all feedbacks
    async getAllFeedbacks() {
        try {
            const feedbacks = await Feedback.findAll();
            return feedbacks;
        } catch (error) {
            throw new Error(`Error fetching feedbacks: ${error.message}`);
        }
    }
    
    // Get a feedback by ID
    async getFeedbackById(id) {
        try {
            const feedback = await Feedback.findByPk(id);
            if (feedback) return feedback;
            else throw new Error('Feedback not found');
        } catch (error) {
            throw new Error(`Error fetching feedback by ID: ${error.message}`);
        }
    }
    
    // Update a feedback
    async updateFeedbackById(id, data) {
        try {
            const feedback = await Feedback.findByPk(id);
            if (feedback) {
            await feedback.update(data);
            return feedback;
            } else throw new Error('Feedback not found');
        } catch (error) {
            throw new Error(`Error updating feedback: ${error.message}`);
        }
    }
    
    // Delete a feedback
    async deleteFeedbackById(id) {
        try {
            console.log(id);
            const feedback = await Feedback.findByPk(id);
            if (feedback) {
                console.log(feedback)
                await feedback.destroy();
                return { message: 'Feedback deleted' };
            } else throw new Error('Feedback not found');
        } catch (error) {
            throw new Error(`Error deleting feedback: ${error.message}`);
        }
    }

}

module.exports = DietitianRepository;
