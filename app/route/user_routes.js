const user = require('../controller/user_controller.js')

module.exports = (server) => {
    server.get('/user/:id', user.findUser, 
        /*
        #swagger.tags = ['User']
        #swagger.summary = 'Consulta usuario pelo id'
        #swagger.description = 'Vai retornar o usuario consultado pelo id'
        */ 
   );

    server.get('/allUser/:pag', user.findAllUser,
        /*
        #swagger.tags = ['User']
        #swagger.summary = 'Consultar todos os usuarios'
        #swagger.description = 'Vai retornar todos os usuarios sempre paginando'
        */ 
    );

    server.post('/user/', user.saveUser,
        /*
        #swagger.tags = ['User']
        #swagger.summary = 'Salvar usuario'
        #swagger.description = 'Sava usuario na basae'
        */ 
    );

    server.put('/user/:id', user.updateUser,
        /*
        #swagger.tags = ['User']
        #swagger.summary = 'Edita o usuario'
        #swagger.description = 'Edita usuario, localizado pelo ID'
        */ 
    );

    server.delete('/user/:id', user.deletUser,
        /*
        #swagger.tags = ['User']
        #swagger.summary = 'Deleta usuario'
        #swagger.description = 'Exclusao logica do usuario no banco de dados'
        */ 
    );

}