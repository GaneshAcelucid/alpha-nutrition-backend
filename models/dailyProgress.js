const { DataTypes } = require('sequelize');
const sequelize = require('../config'); // Your Sequelize instance

const DailyProgress = sequelize.define('DailyProgress', {
    dateTime: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    weight: {
        type: DataTypes.FLOAT, // Weight in kg
        allowNull: false,
    },
    caloriesBurnt: {
        type: DataTypes.FLOAT, // Calories burnt in kcal
        allowNull: false,
    },
    waterConsumed: {
        type: DataTypes.FLOAT, // Water consumed in litres
        allowNull: false,
    },
}, {
    tableName: 'daily_progress_reports',
    timestamps: true, // Adds createdAt and updatedAt fields
});

module.exports = DailyProgress;
