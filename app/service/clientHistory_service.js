const { saveClientHistory, findHistoryById, findAllHistory } = require("../repository/clientHistory_repository");

module.exports = {
    async saveClientHistoryService(clientId, date, description){
        try {
            let where = {
                clientId: clientId, 
                date: date,
                description: description
            };

            return await saveClientHistory(where);
        } catch (error) {
            throw error;;
        }
    },

    async findHistory(id){
        try {
            let resp = await findHistoryById(id);
            return resp
        } catch (error) {
            throw error;
        }
    },

    async findAll(pag){
        try {
            pag = parseInt(pag);
            let resp = await findAllHistory(pag);
            return resp
        } catch (error) {
            throw error;;
        }
    },
}