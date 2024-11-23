const UserRepository = require('../repositories/userRepository');
const userRepository = new UserRepository();

class userService {
  // Create a new user
  async createUser(req, res) {
    try {
      const user = await userRepository.createUser(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async userLogin(req, res) {
    try {
      const token = await userRepository.userLogin(req.body);
      res.status(201).json(token);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // Get all users
  async getUsers(req, res) {
    try {
      const users = await userRepository.getUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // Get a user by ID
  async getUserById(req, res) {
    try {
      const user = await userRepository.getUserById(req.params.id);
      res.status(200).json(user);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  // Update a user
  async updateUser(req, res) {
    try {
      const user = await userRepository.updateUser(req.params.id, req.body);
      res.status(200).json(user);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  // Delete a user
  async deleteUser(req, res) {
    try {
      const result = await userRepository.deleteUser(req.params.id);
      res.status(200).json(result);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
}

module.exports = new userService();
