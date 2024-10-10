const { StatusCodes } = require("http-status-codes");
const { saveScheduleService, findAllScheduleService, findScheduleService, deleteScheduleService, updateScheduleService } = require("../service/schedule_service");

module.exports = {
    async saveSchedule(req, res){
        try {
            let { daySchedule, timeSchedule, clientId, status } = req.body;

            if( !daySchedule || !timeSchedule || !clientId || !status ){
                throw { status: StatusCodes.BAD_REQUEST};;
            };

            let resp = await saveScheduleService(daySchedule, timeSchedule, clientId, status);
            return  res.status(200).send(resp);
        } catch (error) {
            console.log(error);
            return res.status(400).send(error.message || error);
        }
    },

    async findSchedule(req, res){
        try {
            let id = req.params.id;
            let resp = await findScheduleService(id);
            return  res.status(200).send(resp);
        } catch (error) {
            console.log(error);
            return res.status(400).send(error.message || error);
        }
    },
    
    async findAllSchedule(req, res){
        try {
            let pag = req.params.pag;
            let resp = await findAllScheduleService(pag);
            return  res.status(200).send(resp);
        } catch (error) {
            console.log(error);
            return res.status(400).send(error.message || error);
        }
    },

    async deleteSchedule(req, res){
        try {
            let id = req.params.id;
            let resp = await deleteScheduleService(id);
            if(resp){
                return res.status(200).send("Deletado com sucesso!");
            }else{
                throw "Não encontrou dado a ser deletado!";
            }
        } catch (error) {
            console.log(error);
            return res.status(400).send(error.message || error);
        }
    },

    async editSchedule(req, res){
        try {
            let resp = await updateScheduleService(req.params.id, req.body);
            return res.status(200).send(resp)
        } catch (error) {
            console.log(error);
            return res.status(400).send(error.message || error);
        }
    },

}