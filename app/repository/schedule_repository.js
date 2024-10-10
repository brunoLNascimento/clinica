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
                `SELECT c.clientId, c.name, c.phone, c.birth, s.daySchedule, s.timeSchedule, s.status `+
                `from client c, schedule s where s.id = ${id} and s.clientId = c.clientId`,
                { type: sequelize.QueryTypes.SELECT }
            )
        } catch (error) {
            console.log(error);
            throw error
        }
    },

    async findScheduleById(id){
        try {
            return await schedule().find({where: { id: id }});
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

    async findScheduleRepository(day, time, addMinutes, subMinutes){  
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

    async deleteScheduleRepository(id){
        try {
            return await schedule().destroy({ where: { id: id }});
        } catch (error) {
            console.log(error);
            throw error
        }
    },

    async updateScheduleRepository(build, id){
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