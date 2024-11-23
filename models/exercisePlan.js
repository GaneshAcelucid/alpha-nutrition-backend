const { DataTypes } = require('sequelize');
const sequelize = require('../config'); // Your Sequelize instance

const ExercisePlan = sequelize.define('ExercisePlan', {
    userID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    dateTime: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    exerciseID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    isCompleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
}, {
    tableName: 'exercise_plan',
    timestamps: true, // Adds createdAt and updatedAt fields
});

module.exports = ExercisePlan;
