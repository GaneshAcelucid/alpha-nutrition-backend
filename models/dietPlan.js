const { DataTypes } = require('sequelize');
const sequelize = require('../config'); // Your Sequelize instance

const DietPlan = sequelize.define('DietPlan', {
    userID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    dateTime: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    itemID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    isCompleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
}, {
    tableName: 'diet_plan',
    timestamps: true, // Adds createdAt and updatedAt fields
});

module.exports = DietPlan;
