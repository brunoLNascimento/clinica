const Sequelize = require('sequelize')
, sequelize = require('../config/sequelize');

const client = sequelize.define('Client', 
  {
    id: { type: Sequelize.NUMBER, primary: true, generated: true },
    name: { type: Sequelize.STRING, length: 255, allowNull: false },
    gender: { type: Sequelize.STRING, length: 1, allowNull: false },
    phone: { type: Sequelize.STRING, length: 14, allowNull: false },
    birth: { type: Sequelize.DATE, allowNull: false },
    height: { type: Sequelize.NUMBER, allowNull: false },
    weight: { type: Sequelize.NUMBER, allowNull: false }    
  },{
    freezeTableName:true, 
    timestamps:false
  });

  exports.getClient = function() { return client }