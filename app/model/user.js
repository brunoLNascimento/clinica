const Sequelize = require('sequelize')
, sequelize = require('../config/sequelize');

const User = sequelize.define( 'User', 
  {
    id: { type: DataTypes.NUMBER, primary: true, generated: true },
    name: { type: String, length: 255, allowNull: false },
    login: { type: String, length: 20, allowNull: false, unique: true },
    password: { type: String, allowNull: false },
  },{
    freezeTableName:true, 
    timestamps:false
  });

exports.getUser = function() { return User }