const { StatusCodes } = require("http-status-codes");
const { saveClientService, findClientService, findAllClientService } = require("../service/client_service");

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
    
}