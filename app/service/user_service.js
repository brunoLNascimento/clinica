const { findAllUser, findUserBy, saveUser, deleteUser, updateUser } = require("../repository/user_repository");

module.exports = {
    async findUser(id){
        try {
            let where = { id: id };
            return await findUserBy({where});
        } catch (error) {
            throw error;;
        }
    },

    async findAllUser(pag){
        try {
            return await findAllUser(parseInt(pag));
        } catch (error) {
            throw error;;
        }
    },

    async saveUser(name, login, password){
        try {
            let where = { login: login };
            let found = await findUserBy({where});
            
            if(found) throw "Já existe usuário com esses parâmetros"

            let build = {
                name: name,
                login: login,
                password: password
            };

            return await saveUser(build);
        } catch (error) {
            throw error;;
        }
    },
    
    async deleteUserService(id){
        try {
           return await deleteUser(parseInt(id));
        } catch (error) {
            throw error;
        }
    },

    async updateUserService(id, body){
        try {
            let where =  { id: id };
            let found = await findUserBy(where);
            if(!found) throw "Nenhum schedule encontrado!";

            let build = {
                name: body.name,
                login: body.login,
                password: body.password
            };

            let saved = await updateUser(build, id);
            
            if(!saved[0]) return "Nenhum dado foi atualizado!";
            else return "Dados atualizados com sucesso!"
        } catch (error) {
            throw error;
        }
    }
}