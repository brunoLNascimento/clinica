const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger-output.json');
const login = require("../controller/login_controller")

module.exports = (server) => {
    server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    server.post('/login', login.login,
            /*
        #swagger.tags = ['Login']
        #swagger.summary = 'Fazer login'
        #swagger.description = 'Fazer login para ter acesso as outras funcionalidades, será necessário pegar o token para as demais funcionalidades'
        */ 
    )

}

