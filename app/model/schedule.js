
const Sequelize = require('sequelize')
, sequelize = require('../config/sequelize');

const schedule = sequelize.define( 
    'schedule',
    {
        id: { type: Sequelize.NUMBER, primaryKey: true, allowNull: false, autoIncrement: true },
        dateCreated: { type: Sequelize.DATE, allowNull: false },
        daySchedule: { type: Sequelize.DATE, allowNull: false },
        timeSchedule: { type: Sequelize.TIME, allowNull: false },
        clientId: { type: Sequelize.NUMBER, allowNull: false},
        status: { type: Sequelize.STRING, allowNull: false}
    },{
        freezeTableName:true, 
        timestamps:false
    });
    
exports.schedule = function() { return schedule }