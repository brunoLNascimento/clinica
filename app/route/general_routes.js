const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger-output.json');
const login = require("../controller/login_controller")

module.exports = (server) => {
    server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    server.post('/login', login.login)

}

