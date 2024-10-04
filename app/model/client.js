const Sequelize = require('sequelize')
, sequelize = require('../config/sequelize');

const client = sequelize.define('client', 
  {
    id: { type: Sequelize.NUMBER, primaryKey: true, allowNull: false, autoIncrement: true },
    name: { type: Sequelize.STRING, length: 255, allowNull: false },
    gender: { type: Sequelize.STRING, length: 1, allowNull: false },
    phone: { type: Sequelize.STRING, length: 14, allowNull: false },
    birth: { type: Sequelize.DATE, allowNull: false },
    height: { type: Sequelize.DOUBLE, allowNull: false },
    weight: { type: Sequelize.DOUBLE, allowNull: false }    
  },{
    freezeTableName:true, 
    timestamps:false
  });

  exports.getClient = function() { return client }