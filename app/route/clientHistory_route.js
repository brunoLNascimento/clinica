const clientH = require('../controller/clientHistory_controller.js')

module.exports = (server) => {
    server.post('/clientHistory/', clientH.saveClientH,
        /*
        #swagger.tags = ['History']
        #swagger.summary = 'Cadastro de historico'
        #swagger.description = 'Cadastro de historico de cliente na base'
        */ 
    );

    server.get('/findOneHistory/:id', clientH.findOneHistory,
        /*
        #swagger.tags = ['History']
        #swagger.summary = 'Consultar historico do  cliente por iD'
        #swagger.description = 'Vai retornar todo o historico do cliente por iD'
        */ 
    );

    server.get('/findAllHistory/:pag', clientH.findAllHistory,
        /*
        #swagger.tags = ['History']
        #swagger.summary = 'Consultar todos os historicos'
        #swagger.description = 'Vai retornar todos os historicos sempre paginando'
        */
    );
}