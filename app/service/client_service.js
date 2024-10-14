const { saveClient, findClientBy, findAllClient, updateClient, deleteClientRepository  } = require("../repository/client_repository");
const { dateformat } = require('../helper/date');
const { cpfFormat, cpfCheck } = require('../helper/util');


module.exports = {
    async saveClientService(name, gender, phone, birth, height, weight, cpf){
        try {
            let checkCpf = cpfCheck(cpf);
            if(!checkCpf) throw "CPF deve conter 11 caracteres!";

            let where = { cpf: cpfFormat(cpf) };
            let found = await findClientBy({where});
            
            if(found) throw "Já existe usuário com esses parâmetros"
            let build = {
                name: name,
                cpf: cpfFormat(cpf),
                gender: gender,
                phone: phone,
                birth: dateformat(birth),
                height: height,
                weight: weight
            };

            return await saveClient(build);
        } catch (error) {
            throw error;;
        }
    },

    async findClientService(id){
        try {
            let where = { clientId: id };
            let resp = await findClientBy(where);
            return resp
        } catch (error) {
            throw error;;
        }
    },

    async findAllClientService(pag){
        try {
            let resp = await findAllClient(parseInt(pag));
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

    async deleteClientService(id){
        try {
           return await deleteClientRepository(parseInt(id));
        } catch (error) {
            throw error;
        }
    }
}