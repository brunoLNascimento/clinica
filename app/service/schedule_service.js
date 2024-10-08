const { findAllScheduleRepository, saveScheduleRepository, findScheduleByIdRepository, deleteScheduleRepository, findScheduleRepository } = require("../repository/schedule_repository");
const { dateformat, timeFormat, dateNowFormat, addMinuteFormat } = require("../helper/date");

module.exports = {
    async saveScheduleService(daySchedule, timeSchedule, clientId, status){
        try {
            let day = dateformat(daySchedule);
            let time = timeFormat(timeSchedule);
            let addMinutes = addMinuteFormat(time);

            let [ found ] = await findScheduleRepository(day, time, addMinutes);
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
            let resp = await findScheduleByIdRepository(id);
            return resp
        } catch (error) {
            throw error;
        }
    },

    async findAllScheduleService(pag){
        try {
            pag = parseInt(pag);
            let resp = await findAllScheduleRepository(pag);
            return resp
        } catch (error) {
            throw error;;
        }
    },

    async deleteScheduleService(id){
        try {
            let resp = await deleteScheduleRepository(id);
            return resp
        } catch (error) {
            throw error;
        }
    },
}