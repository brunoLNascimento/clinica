const {mysql , limit } = require("../config/config");
const { getClientHistory }  = require("../model/clientHistory");

const Sequelize = require('sequelize')
  , sequelize = new Sequelize(mysql.database, mysql.user, mysql.password, {
	host: mysql.host,
	dialect: "mysql",
    log: console.log
});
  
module.exports = {
    async saveClientHistory(build){
        try {
            return await getClientHistory().create(build);
        } catch (error) {
           throw error;
        }
    },

    async findHistoryById(id){
        try {
            return await sequelize.query(
                `Select * from client c, clientHistory ch where ch.clientId = ${id} and ch.clientId = c.clientId`,
                { type: sequelize.QueryTypes.SELECT }
            )
        } catch (error) {
            console.log(error);
            throw error
        }
    },

    async findAllHistory(pag){  
        try {
            let skip = pag * limit.pag;
            return await getClientHistory().findAll(
                {
                    order: [[ 'id', 'DESC' ]],
                    limit: [ (skip), limit.pag ]
                });
        } catch (error) {
           throw error;
        }
    },

    async deleteHistoryBy(id){
        try {
            return await getClientHistory().destroy({ where: { id: id }});
        } catch (error) {
            console.log(error);
            throw error
        }
    },
}