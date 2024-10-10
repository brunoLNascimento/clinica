const { findAllScheduleRepository, saveScheduleRepository, findScheduleByIdRepository, deleteScheduleRepository, findScheduleRepository, updateScheduleRepository, findScheduleById } = require("../repository/schedule_repository");
const { dateformat, timeFormat, dateNowFormat, addMinuteFormat, subMinuteFormat } = require("../helper/date");

module.exports = {
    async saveScheduleService(daySchedule, timeSchedule, clientId, status){
        try {
            let day = dateformat(daySchedule);
            let time = timeFormat(timeSchedule);
            let addMinutes = addMinuteFormat(time);
            let subMinutes = subMinuteFormat(time);

            let [ found ] = await findScheduleRepository(day, time, addMinutes, subMinutes, subMinutes);
            if(found) throw "Já existe um agendamento para esse horário.";

            let build = {
                daySchedule: day,
                timeSchedule: time,
                clientId: clientId,
                status: status,
                dateCreated: dateNowFormat()
            };

            return await saveScheduleRepository(build);
        } catch (error) {
            throw error;;
        }
    },

    async findScheduleService(id){
        try {
            return await findScheduleByIdRepository(id);
        } catch (error) {
            throw error;
        }
    },

    async findAllScheduleService(pag){
        try {
            return await findAllScheduleRepository(parseInt(pag));
        } catch (error) {
            throw error;;
        }
    },

    async deleteScheduleService(id){
        try {
           return await deleteScheduleRepository(parseInt(id));
        } catch (error) {
            throw error;
        }
    },

    async updateScheduleService(id, body){
        try {            
            let found = await findScheduleById(id);
            if(!found) throw "Nenhum schedule encontrado!";

            let build = {
                daySchedule: dateformat(body.daySchedule) ? dateformat(body.daySchedule) : body.daySchedule,
                timeSchedule: timeFormat(body.timeSchedule) ? timeFormat(body.timeSchedule) : body.timeSchedule,
                clientId: body.clientId,
                status: body.status
            };

            let saved = await updateScheduleRepository(build, id);
            
            if(!saved[0]) return "Nenhum dado foi atualizado!";
            else return "Dados atualizados com sucesso!"
        } catch (error) {
            throw error;
        }
    }
}