const { StatusCodes } = require("http-status-codes");
const { saveClientService, findClientService, findAllClientService, editClientService, deleteClientService } = require("../service/client_service");

module.exports = {
    async saveClient(req, res){
        try {
            let { name, gender, phone, birth, height, weight } = req.body;

            if( !name || !gender || !phone || !birth || !height || !weight){
                throw { status: StatusCodes.BAD_REQUEST};;
            };

            let resp = await saveClientService(name, gender, phone, birth, height, weight);
            return  res.status(200).send(resp);
        } catch (error) {
            console.log(error);
            return res.status(400).send(error.message || error);
        }
    },

    async findClient(req, res){
        try {
            let { id } = req.params;
            let resp = await findClientService(id);
            return  res.status(200).send(resp)
        } catch (error) {
            console.log(error);
            return res.status(400).send(error.message || error);
        }
    },

    async findAllClient(req, res){
        try {
            let pag = req.params.pag;
            let resp = await findAllClientService(pag);
            return  res.status(200).send(resp)
        } catch (error) {
            console.log(error);
            return res.status(400).send(error.message || error);
        }
    },

    async editClient(req, res){
        try {
            let resp = await editClientService(req.params.id, req.body);
            return  res.status(200).send(resp)
        } catch (error) {
            console.log(error);
            return res.status(400).send(error.message || error);
        }
    },

    async deleteClient(req, res){
        try {
            let id = req.params.id;
            let resp = await deleteClientService(id);
            if(resp){
                return res.status(200).send("Deletado com sucesso!");
            }else{
                throw "Não encontrou dado a ser deletado!";
            }
        } catch (error){
            console.log(error);
            return res.status(400).send(error.message || error);
        }
    },
}