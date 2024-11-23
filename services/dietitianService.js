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

}

module.exports = new dietitianService();
