const { saveClient, findClientById, findAllClient } = require("../repository/client_repository");

module.exports = {
    async saveClientService(name, gender, phone, birth, height, weight){
        try {
            let where = {
                name: name,
                gender: gender,
                phone: phone,
                birth: birth,
                height: height,
                weight: weight
            };

            return await saveClient(where);
        } catch (error) {
            throw error;;
        }
    },

    async findClientService(id){
        try {
            let where = { id: id };
            let resp = await findClientById(where);
            return resp
        } catch (error) {
            throw error;;
        }
    },

    async findAllClientService(pag){
        try {
            pag = parseInt(pag);
            let resp = await findAllClient(pag);
            return resp
        } catch (error) {
            throw error;;
        }
    },
}