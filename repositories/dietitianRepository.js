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

}

module.exports = DietitianRepository;
