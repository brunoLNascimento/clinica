const { StatusCodes } = require("http-status-codes");
const { findUser, saveUser , findAllUser, deleteUserService, updateUserService } = require("../service/user_service");

module.exports = {
    async saveUser(req, res){
        try {
            let { name, login, password } = req.body;

            if( !name || !login || !password ){
                throw { status: StatusCodes.BAD_REQUEST}
            }

            let resp = await saveUser(name, login, password);
            return res.status(200).send(resp);
            } catch (error) {
            console.log(error);
            return res.status(400).send(error.message || error);
        }
    },

    async findUser(req, res){
        try {
            let id = req.params.id;
            let resp = await findUser(id);
            return  res.status(200).send(resp);
        } catch (error) {
            console.log(error);
            return res.status(400).send(error.message || error);
        }
    },
    
    async findAllUser(req, res){
        try {
            let pag = req.params.pag;
            let resp = await findAllUser(pag);
            return  res.status(200).send(resp);
        } catch (error) {
            console.log(error);
            return res.status(400).send(error.message || error);
        }
    },
    async deletUser(req, res){
        try {
            let id = req.params.id;
            let resp = await deleteUserService(id);
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

    async updateUser(req, res){
        try {
            let resp = await updateUserService(req.params.id, req.body);
            return res.status(200).send(resp)
        } catch (error) {
            console.log(error);
            return res.status(400).send(error.message || error);
        }
    },
}