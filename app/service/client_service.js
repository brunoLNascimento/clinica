const { saveClient, findClientById, findAllClient, updateClient } = require("../repository/client_repository");
const { dateformat } = require('../helper/date')

module.exports = {
    async saveClientService(name, gender, phone, birth, height, weight){
        try {
            let where = {
                name: name,
                gender: gender,
                phone: phone,
                birth: dateformat(birth),
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
            let where = { clientId: id };
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

    async editClientService(id, body){
        try {            
            const foundClient = await findClientById( where = { clientId: parseInt(id) } );
            if(!foundClient) throw "Nenhum cliente encontrado!";

            let build = {
                    name: body.name,
                    gender: body.gender,
                    phone: body.phone,
                    birth: body.birth ? dateformat(body.birth) : body.birth,
                    height: body.height,
                    weight: body.weight
            };

            let saved = await updateClient(build, id);
            
            if(!saved[0]) return "Nenhum dado foi atualizado!";
            else return "Dados atualizados com sucesso!"
        } catch (error) {
            throw error;;
        }
    },
}