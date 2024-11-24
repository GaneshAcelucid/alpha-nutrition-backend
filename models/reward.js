const { DataTypes } = require('sequelize');
const sequelize = require('../config'); // Your Sequelize instance

const Reward = sequelize.define('Reward', {
    userID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    reward: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    createdDate: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    updatedDate: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    }
}, {
    tableName: 'rewards',
    timestamps: false, // Disable automatic createdAt and updatedAt fields
});

module.exports = Reward;
