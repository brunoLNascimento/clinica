const clientH = require('../controller/clientHistory_controller.js');
const authentication = require('../middleware/auth');

module.exports = (server) => {
    server.post('/clientHistory/', authentication, clientH.saveClientH,
        /*
        #swagger.tags = ['History']
        #swagger.summary = 'Cadastro de historico'
        #swagger.description = 'Cadastro de historico de cliente na base'
        */ 
    );

    server.get('/findOneHistory/:id', authentication, clientH.findOneHistory,
        /*
        #swagger.tags = ['History']
        #swagger.summary = 'Consultar historico do  cliente por iD'
        #swagger.description = 'Vai retornar todo o historico do cliente por iD'
        */ 
    );

    server.get('/findAllHistory/:pag', authentication, clientH.findAllHistory,
        /*
        #swagger.tags = ['History']
        #swagger.summary = 'Consultar todos os historicos'
        #swagger.description = 'Vai retornar todos os historicos sempre paginando'
        */
    );

    server.delete('/clientHistory/:id', authentication, clientH.deleteHistory,
        /*
        #swagger.tags = ['User']
        #swagger.summary = 'Deleta usuario'
        #swagger.description = 'Exclusao logica do usuario no banco de dados'
        */ 
    );
}