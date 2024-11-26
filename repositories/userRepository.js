const User = require('../models/user');
const DailyProgress = require('../models/dailyProgress');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const DietPlan = require('../models/dietPlan');
const Item = require('../models/item');
const Exercise = require('../models/exercise');
const ExercisePlan = require('../models/exercisePlan');
const Reward = require('../models/Reward');
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET;

class UserRepository {
  // Create a new user
  async createUser(data) {
    const { name, email, password, ...otherData } = data;
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({
        name,
        email,
        password: hashedPassword,
        ...otherData,
      });
      await Reward.create({ userID: user.id, reward: 0 });
      return user;
    } catch (error) {
      throw new Error(`Error creating user: ${error.message}`);
    }
  }

  // User Login
  async userLogin(data) {
    try {
      const { email, password } = data;
      const user = await User.findOne({ where: { email: email } }); 

      if (!user) {
          return res.status(400).send('User not found');
      }
      // Compare the password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
          return res.status(400).send('Invalid credentials');
      }
      // Generate JWT token
      const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });
      return token;
    } catch (error) {
      throw new Error(`Error fetching users: ${error.message}`);
    }
  }

  // Get all users
  async getUsers() {
    try {
      const users = await User.findAll();
      return users;
    } catch (error) {
      throw new Error(`Error fetching users: ${error.message}`);
    }
  }

  // Get a user by ID
  async getUserById(id) {
    try {
      const user = await User.findByPk(id);
      if (user) return user;
      else throw new Error('User not found');
    } catch (error) {
      throw new Error(`Error fetching user by ID: ${error.message}`);
    }
  }

  // Update a user
  async updateUser(id, data) {
    try {
      const user = await User.findByPk(id);
      if (user) {
        await user.update(data);
        return user;
      } else throw new Error('User not found');
    } catch (error) {
      throw new Error(`Error updating user: ${error.message}`);
    }
  }

  // Delete a user
  async deleteUser(id) {
    try {
      const user = await User.findByPk(id);
      if (user) {
        await user.destroy();
        return { message: 'User deleted' };
      } else throw new Error('User not found');
    } catch (error) {
      throw new Error(`Error deleting user: ${error.message}`);
    }
  }

  ///////////////////////////////////// DailyProgress //////////////////////////////////
  // Create a new DailyProgress
  async createDailyProgress(data) {
      try {
          const dailyProgress = await DailyProgress.create(data);
          console.log(dailyProgress);
          return dailyProgress;
      } catch (error) {
          throw new Error(`Error creating dailyProgress: ${error.message}`);
      }
  }

  // Get all dailyProgresss
  async getAllDailyProgresss() {
      try {
          const dailyProgresss = await DailyProgress.findAll();
          return dailyProgresss;
      } catch (error) {
          throw new Error(`Error fetching dailyProgresss: ${error.message}`);
      }
  }
  
  // Get a dailyProgress by ID
  async getDailyProgressById(id) {
      try {
          const dailyProgress = await DailyProgress.findByPk(id);
          if (dailyProgress) return dailyProgress;
          else throw new Error('DailyProgress not found');
      } catch (error) {
          throw new Error(`Error fetching dailyProgress by ID: ${error.message}`);
      }
  }
  
  // Update a dailyProgress
  async updateDailyProgressById(id, data) {
      try {
          const dailyProgress = await DailyProgress.findByPk(id);
          if (dailyProgress) {
          await dailyProgress.update(data);
          return dailyProgress;
          } else throw new Error('DailyProgress not found');
      } catch (error) {
          throw new Error(`Error updating dailyProgress: ${error.message}`);
      }
  }
  
  // Delete a dailyProgress
  async deleteDailyProgressById(id) {
      try {
          console.log(id);
          const dailyProgress = await DailyProgress.findByPk(id);
          if (dailyProgress) {
              console.log(dailyProgress)
              await dailyProgress.destroy();
              return { message: 'DailyProgress deleted' };
          } else throw new Error('DailyProgress not found');
      } catch (error) {
          throw new Error(`Error deleting dailyProgress: ${error.message}`);
      }
  }

  ///////////////////////////////////// Update Diet Plan completed //////////////////////////////////
  // Update a DietPlanCompleted
  async updateDietPlanCompletedById(id, userID) {
    try {
        const dietPlan = await DietPlan.findByPk(id);
        const reward = await Reward.findOne({ where: { userID: userID } });

        if (!dietPlan) {
            throw new Error('DietPlan not found');
        }
        if (!reward) {
            throw new Error('Reward not found for the user');
        }

        await dietPlan.update({ isCompleted: true });
        await reward.update({ reward: reward.reward + 10 });

        return { dietPlan, updatedReward: reward };
    } catch (error) {
        throw new Error(`Error updating DietPlan or Reward: ${error.message}`);
    }
  }

  async updateExercisePlanCompletedById(id, userID) {
    try {
        const exercisePlan = await ExercisePlan.findByPk(id);
        const reward = await Reward.findOne({ where: { userID: userID } });

        if (!exercisePlan) {
            throw new Error('ExercisePlan not found');
        }
        if (!reward) {
            throw new Error('Reward not found for the user');
        }

        await exercisePlan.update({ isCompleted: true });
        await reward.update({ reward: reward.reward + 5 });

        return { exercisePlan, updatedReward: reward };
    } catch (error) {
        throw new Error(`Error updating ExercisePlan or Reward: ${error.message}`);
    }
  }

  ///////////////////////////////////// Get Diet and Exercise Plan By UserId //////////////////////////////////
  async getDietPlanByUserId(id) {
    try {
      const dietPlans = await DietPlan.findAll({ where: { userID: id } });

      if (dietPlans.length === 0) {
          throw new Error('No diet plan found for this user.');
      }

      const itemIds = dietPlans.map(plan => plan.itemID);
      const items = await Item.findAll({ where: { id: itemIds } });

      // Combine diet plans with items
      const combinedData = dietPlans.map(plan => {
          const item = items.find(item => item.id === plan.itemID);
          return {
              ...plan.dataValues,
              item: item ? item.dataValues : null,
          };
      });

      return combinedData;
    } catch (error) {
        throw new Error(`Error fetching diet plan and item: ${error.message}`);
    }
  }

  async getExercisePlanByUserId(id) {
    try {
      const exercisePlans = await ExercisePlan.findAll({ where: { userID: id } });

      if (exercisePlans.length === 0) {
          throw new Error('No diet plan found for this user.');
      }

      const itemIds = exercisePlans.map(plan => plan.exerciseID);
      const items = await Exercise.findAll({ where: { id: itemIds } });

      // Combine diet plans with items
      const combinedData = exercisePlans.map(plan => {
          const item = items.find(item => item.id === plan.exerciseID);
          return {
              ...plan.dataValues,
              item: item ? item.dataValues : null,
          };
      });

      return combinedData;
    } catch (error) {
        throw new Error(`Error fetching diet plan and item: ${error.message}`);
    }
  }

}

module.exports = UserRepository;
