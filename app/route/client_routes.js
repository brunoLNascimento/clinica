const client = require('../controller/client_controller.js')

module.exports = (server) => {
    server.post('/client/', client.saveClient,        
        /*
        #swagger.tags = ['Client']
        #swagger.summary = 'Cadastro de cliente'
        #swagger.description = 'Cadastro de cliente na base'
        */ 
    );

    server.get('/client/:id', client.findClient,
        /*
        #swagger.tags = ['Client']
        #swagger.summary = 'Consultar cliente por iD'
        #swagger.description = 'Vai retornar cliente por iD'
        */ 
    );

    server.get('/allClient/:pag', client.findAllClient,
        /*
        #swagger.tags = ['Client']
        #swagger.summary = 'Consultar todos os clientes'
        #swagger.description = 'Vai retornar todos os clientes sempre paginando'
        */ 
    );

    server.put('/client/:id', client.editClient,
        /*
        #swagger.tags = ['Client']
        #swagger.summary = 'Editar cliente'
        #swagger.description = 'Editar cliente que for passado ID'
        */ 
    );

    server.delete('/client/:id', client.deleteClient,
        /*
        #swagger.tags = ['Client']
        #swagger.summary = 'Deleta cliente'
        #swagger.description = 'Delete físico de cliente na base de dados'
        */ 
    );
}