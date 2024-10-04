const Sequelize = require('sequelize')
, sequelize = require('../config/sequelize');

const user = sequelize.define( 'user', 
  {
    id: { type: Sequelize.NUMBER, primaryKey: true, allowNull: false, autoIncrement: true },
    name: { type: Sequelize.STRING, length: 255, allowNull: false },
    // login: { type: Sequelize.STRING, length: 20, allowNull: false, unique: true },
    // password: { type: Sequelize.STRING, allowNull: false },
  },{
    freezeTableName:true, 
    timestamps:false
  });

exports.getUser = function() { return user }