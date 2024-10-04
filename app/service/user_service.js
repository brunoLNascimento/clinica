const { findAllUser, findUserById, saveUser } = require("../repository/user_repository");

module.exports = {
    async findUser(id){
        try {
            let where =  { id: id };
            return await findUserById(where);
        } catch (error) {
            return error;
        }
    },

    async findAllUser(pag){
        try {
            pag = parseInt(pag);
            return await findAllUser(pag);
        } catch (error) {
            return error;
        }
    },


    async saveUser(name, gender, phone, birth, height, weight){
        try {
            let where = {
                name: name,
                gender: gender,
                phone: phone,
                birth: birth,
                height: height,
                weight: weight
            };

            return await saveUser(where);
        } catch (error) {
            return error;
        }
    }
}