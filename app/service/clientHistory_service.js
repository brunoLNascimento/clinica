const { saveClientHistory, findHistoryById, findAllHistory, deleteHistoryBy } = require("../repository/clientHistory_repository");

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
            let resp = await findAllHistory(parseInt(pag));
            return resp
        } catch (error) {
            throw error;;
        }
    },

    async delHistory(id){
        try {
           return await deleteHistoryBy(parseInt(id));
        } catch (error) {
            throw error;
        }
    },
}