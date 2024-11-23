const { DataTypes } = require('sequelize');
const sequelize = require('../config'); // Your Sequelize instance

const Feedback = sequelize.define('Feedback', {
    userID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    dateTime: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    feedbackMessage: {
        type: DataTypes.TEXT, // Feedback message
        allowNull: false,
    },
}, {
    tableName: 'feedback',
    timestamps: true, // Adds createdAt and updatedAt fields
});

module.exports = Feedback;
