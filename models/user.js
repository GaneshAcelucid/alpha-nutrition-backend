const { DataTypes, INTEGER } = require('sequelize');
const sequelize = require('../config'); // Your Sequelize instance

const User = sequelize.define(
  'User',
  {
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    dob: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    pregnancy: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    goal: {
      type: DataTypes.ENUM('lose weight', 'gain muscle', 'maintain weight', 'custom'),
      allowNull: false,
    },
    allergens: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    dietary: {
      type: DataTypes.ENUM('veg', 'nonveg', 'vegan', 'egg', 'pescatarian'),
      allowNull: false,
    },
    disorders: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    common_conditions: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    weight: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    height: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    bmi: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    sleep_duration: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    occupation: {
      type: DataTypes.ENUM('unemployed', 'studying', 'employee', 'entrepreneur', 'other'),
      allowNull: false,
    },
    daily_activity_duration: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    physical_activities_preferred: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    created_by: {
      type: INTEGER,
      allowNull: false,
    },
    created_by: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false
    },
    updated_by: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      onUpdate: DataTypes.NOW,
      allowNull: false
    }
  },
  {
    tableName: 'users',
    timestamps: true, // Automatically manages createdAt and updatedAt
  }
);

module.exports = User;
