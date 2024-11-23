const { DataTypes } = require('sequelize');
const sequelize = require('../config');  // Your Sequelize instance

const Exercise = sequelize.define('Exercise', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    exerciseName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    duration: {
        type: DataTypes.INTEGER, // Duration in minutes
        allowNull: false,
    },
    caloriesBurnt: {
        type: DataTypes.FLOAT, // Calories burnt in kcal
        allowNull: false,
    },
}, {
    tableName: 'exercises',
    timestamps: true, // Adds createdAt and updatedAt fields
});

module.exports = Exercise;
