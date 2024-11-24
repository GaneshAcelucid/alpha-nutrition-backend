const User = require('../models/user');
const DailyProgress = require('../models/dailyProgress');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
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
      console.log(user);
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
}

module.exports = UserRepository;
