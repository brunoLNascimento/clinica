const {mysql , limit } = require("../config/config");
const { schedule }  = require("../model/schedule");

const Sequelize = require('sequelize')
  , sequelize = new Sequelize(mysql.database, mysql.user, mysql.password, {
	host: mysql.host,
	dialect: "mysql",
    log: console.log
});
  
module.exports = {
    async saveSchedule(build){
        try {
            return await schedule().create(build);
        } catch (error) {
           throw error;
        }
    },

    async findScheduleBy(where){
        try {
            return await schedule().find(where)
        } catch (error) {           
            throw error
        }
    },

    async findAllSchedule(pag){  
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

    async findSchedule(day, time, addMinutes, subMinutes){  
        try {
            return await sequelize.query(                
                `SELECT * FROM schedule WHERE daySchedule = '${day}' AND timeSchedule = '${time}' ` +
                `OR daySchedule = '${day}' AND timeSchedule >= '${subMinutes}' AND timeSchedule <= '${addMinutes}'`,
                { type: sequelize.QueryTypes.SELECT }
            )
        } catch (error) {
            throw error;
        }
    },

    async deleteSchedule(id){
        try {
            return await schedule().destroy({ where: { id: id }});
        } catch (error) {           
            throw error
        }
    },

    async updateSchedule(build, id){
        try {
            return await schedule().update(
                build,
                {
                    where: { id: id }
                }
            );
        } catch (error) {
            throw error;
        }
    }
}