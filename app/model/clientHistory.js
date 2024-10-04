const Sequelize = require('sequelize')
, sequelize = require('../config/sequelize');

const clientHistory = sequelize.define( 'ClientHistory',
  {
    id: { type: Sequelize.NUMBER, primary: true, generated: true},
    clientId: { type: Sequelize.NUMBER, allowNull: false},
    date: { type: Sequelize.DATE, allowNull: false },
    description: { type: String, length: 500, allowNull: false }
  },{
    freezeTableName:true, 
    timestamps:false
});

exports.getClientHistory = function() { return clientHistory }