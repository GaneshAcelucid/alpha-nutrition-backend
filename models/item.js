const { DataTypes } = require('sequelize');
const sequelize = require('../config'); // Your Sequelize instance

const Nutrition = sequelize.define('Nutrition', {
    itemName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    portionSizeNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    portionQuantity: {
        type: DataTypes.ENUM('kg', 'gm', 'litre', 'ml', 'piece'),
        allowNull: false,
    },
    caloriesPerServing: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    dietaryPreference: {
        type: DataTypes.ENUM('veg', 'nonveg', 'vegan', 'egg'),
        allowNull: false,
    },
    nutritionContent: {
        type: DataTypes.JSONB,
        allowNull: true,
    },
    isRecipe: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    recipeDescription: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
}, {
    tableName: 'nutrition',
    timestamps: true, // CreatedAt and UpdatedAt fields
});

module.exports = Nutrition;
