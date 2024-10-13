const { findAllSchedule, saveSchedule, deleteSchedule, findSchedule, updateSchedule, findScheduleBy } = require("../repository/schedule_repository");
const { dateformat, timeFormat, dateNowFormat, addMinuteFormat, subMinuteFormat } = require("../helper/date");

module.exports = {
    async saveScheduleService(daySchedule, timeSchedule, clientId, status){
        try {
            let day = dateformat(daySchedule);
            let time = timeFormat(timeSchedule);
            let addMinutes = addMinuteFormat(time);
            let subMinutes = subMinuteFormat(time);

            let [ found ] = await findSchedule(day, time, addMinutes, subMinutes, subMinutes);
            if(found) throw "Já existe um agendamento para esse horário.";

            let build = {
                daySchedule: day,
                timeSchedule: time,
                clientId: clientId,
                status: status,
                dateCreated: dateNowFormat()
            };

            return await saveSchedule(build);
        } catch (error) {
            throw error;;
        }
    },

    async findScheduleService(id){
        try {
            let where =  { id: id };
            return await findScheduleBy(where);
        } catch (error) {
            throw error;
        }
    },

    async findAllScheduleService(pag){
        try {
            return await findAllSchedule(parseInt(pag));
        } catch (error) {
            throw error;;
        }
    },

    async deleteScheduleService(id){
        try {
           return await deleteSchedule(parseInt(id));
        } catch (error) {
            throw error;
        }
    },

    async updateScheduleService(id, body){
        try {            
            let where =  { id: id };
            let found = await findScheduleBy(where);
            if(!found) throw "Nenhum schedule encontrado!";

            let build = {
                daySchedule: dateformat(body.daySchedule) ? dateformat(body.daySchedule) : body.daySchedule,
                timeSchedule: timeFormat(body.timeSchedule) ? timeFormat(body.timeSchedule) : body.timeSchedule,
                clientId: body.clientId,
                status: body.status
            };

            let saved = await updateSchedule(build, id);
            
            if(!saved[0]) return "Nenhum dado foi atualizado!";
            else return "Dados atualizados com sucesso!"
        } catch (error) {
            throw error;
        }
    }
}