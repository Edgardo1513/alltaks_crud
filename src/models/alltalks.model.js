

const { DataTypes } = require('sequelize');


const db = require('../utils/database');

const AllTalks = db.define('alltalks', {
    // por defecto sequelize crea el id como pk y autoincrementable
    
    title: {
      type: DataTypes.STRING(30), 
      unique: true,
      allowNull: false,            
    },
    description: {
      type: DataTypes.STRING(30),
      unique: true,
      allowNull: false,       
    },
    completed: {
      type: DataTypes.STRING(50), 
      unique: false,      
      allowNull: false,           
    }
  }, {
    timestamps: true,
  });

module.exports = AllTalks;