const {mysql , limit } = require("../config/config");
const { schedule }  = require("../model/schedule");

const Sequelize = require('sequelize')
  , sequelize = new Sequelize(mysql.database, mysql.user, mysql.password, {
	host: mysql.host,
	dialect: "mysql",
    log: console.log
});
  
module.exports = {
    async saveScheduleRepository(build){
        try {
            return await schedule().create(build);
        } catch (error) {
           throw error;
        }
    },

    async findScheduleByIdRepository(id){
        try {
            return await sequelize.query(
                `Select * from client c, schedule s where s.clientId = ${id} and s.clientId = c.clientId`,
                { type: sequelize.QueryTypes.SELECT }
            )
        } catch (error) {
            console.log(error);
            throw error
        }
    },

    async findAllScheduleRepository(pag){  
        try {
            let skip = pag * limit.pag;
            return await schedule().findAll(
                {
                    order: [[ 'id', 'DESC' ]],
                    limit: [ (skip), limit.pag ]
                });
        } catch (error) {
           throw error;
        }
    },

    async findScheduleRepository(day, time, addMinutes){  
        try {
            return await sequelize.query(                
                `SELECT * FROM schedule WHERE daySchedule = '${day}' AND timeSchedule >= '${time}' AND timeSchedule <= '${addMinutes}'`,
                { type: sequelize.QueryTypes.SELECT }
            )
        } catch (error) {
            throw error;
        }
    },

    async deleteScheduleRepository(id){
        try {
            return await schedule().destroy();
        } catch (error) {
            console.log(error);
            throw error
        }
    },
}