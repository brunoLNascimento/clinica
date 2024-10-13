const { limit } = require("../config/config");
const { getClient }  = require("../model/client");


module.exports = {
    async saveClient(build){
        try {
            return await getClient().create(build);
        } catch (error) {
            throw error;
        }
    },

    async findClientBy(where){
        try {
            return await getClient().findOne({where});
        } catch (error) {
            throw error;
        }
    },

    async findAllClient(pag){
        try {
            let skip = pag * limit.pag;
            return await getClient().findAll({ limit: [(skip), limit.pag] });
        } catch (error) {
            throw error;
        }
    },

    async updateClient(build, id){
        try {
            return await getClient().update(
                build,
                {
                    where: { clientId: id }
                }
            );
        } catch (error) {
            throw error;
        }
    },

    async deleteClient(id){
        try {
            return await getClient().destroy({ where: { id: id }});
        } catch (error) {
            console.log(error);
            throw error
        }
    }
}