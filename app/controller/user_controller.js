const { StatusCodes } = require("http-status-codes");
const { findUser, saveUser , findAllUser } = require("../service/user_service");

module.exports = {

    async saveUser(req, res){
        try {
            let { name, gender, phone, birth, height, weight } = req.body;

            if( !name || !gender || !phone || !birth || !height || !weight){
                throw { status: StatusCodes.BAD_REQUEST}
            }

            let resp = await saveUser(name, gender, phone, birth, height, weight);
            return  res.status(200).send(resp)
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
    }
}