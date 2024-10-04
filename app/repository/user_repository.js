const { limit } = require("../config/config");
const  { getUser }  = require("../model/user");

module.exports = {
    async findUserById(where){
        try {
            return await getUser().findOne(where);
        } catch (error) {
            return console.log(erro);
        }
    },

    async findAllUser(pag){
        try {
            let skip = pag * limit.pag;
            return await getUser().findAll({ limit: [ (skip), limit.pag ]});
        } catch (error) {
            return console.log(error);
        }
    },

    async saveUser(build){
        try {
            return await getUser().save(build);
        } catch (error) {
            return console.log(error);
        }

    }
}