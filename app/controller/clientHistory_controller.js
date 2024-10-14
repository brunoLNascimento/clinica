const { StatusCodes } = require("http-status-codes");
const { saveClientHistoryService, findHistory, findAll, delHistory } = require("../service/clientHistory_service");

module.exports = {
    async saveClientH(req, res){
        try {
            let { clientId, date, description } = req.body;

            if( !clientId || !date || !description ){
                throw { status: StatusCodes.BAD_REQUEST};;
            };

            let resp = await saveClientHistoryService(clientId, date, description);
            return  res.status(200).send(resp);
        } catch (error) {
            console.log(error);
            return res.status(400).send(error.message || error);
        }
    },

    async findOneHistory(req, res){
        try {
            let id = req.params.id;
            let resp = await findHistory(id);
            return  res.status(200).send(resp);
        } catch (error) {
            console.log(error);
            return res.status(400).send(error.message || error);
        }
    },
    
    async findAllHistory(req, res){
        try {
            let pag = req.params.pag;
            let resp = await findAll(pag);
            return  res.status(200).send(resp);
        } catch (error) {
            console.log(error);
            return res.status(400).send(error.message || error);
        }
    },

    async deleteHistory(req, res){
        try {
            let id = req.params.id;
            let resp = await delHistory(id);
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