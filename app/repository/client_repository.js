const { limit } = require("../config/config");
const { getClient }  = require("../model/client");


module.exports = {
    async saveClient(build){
        try {
            return await getClient().create(build);
        } catch (error) {
            return console.log(error);
        }
    },

    async findClientById(where){
        try {
            return await getClient().findOne(where);
        } catch (error) {
            return console.log(error);
        }
    },

    async findAllClient(pag){
        try {
            let skip = pag * limit.pag;
            return await getClient().findAll({ limit: [(skip), limit.pag] });
        } catch (error) {
            return console.log(error);
        }
    }
    
}