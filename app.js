const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');  // Import CORS middleware
const sequelize = require('./config');  // Your Sequelize instance
const userRoutes = require('./routes/userRoutes');
const dietitianRoutes = require('./routes/dietitianRoutes');

const app = express();

// Allow all CORS requests
app.use(cors());

app.use(bodyParser.json());

// Use user routes
app.use('/api/users', userRoutes);
app.use('/api/dietitian', dietitianRoutes);

// Sync database and start server
sequelize.sync({ force: false }) // { force: true } drops tables
  .then(() => {
    console.log('Database synced');
    app.listen(3000, () => {
      console.log('Server running on port 3000');
    });
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });
