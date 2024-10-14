const { limit } = require("../config/config");
const  { getUser }  = require("../model/user");

module.exports = {
    async findUserBy(where){
        try {
            return await getUser().findOne(where);
        } catch (error) {
            throw error
        }
    },

    async findAllUser(pag){
        try {
            let skip = pag * limit.pag;
            return await getUser().findAll({ limit: [ (skip), limit.pag ]});
        } catch (error) {
            throw error
        }
    },

    async saveUser(build){
        try {
            return await getUser().create(build);
        } catch (error) {
            throw error
        }
    },

    async deleteUser(id){
        try {
            return await getUser().destroy({ where: { id: id }});
        } catch (error) {
            console.log(error);
            throw error
        }
    },

    async updateUser(build, id){
        try {
            return await getUser().update(
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