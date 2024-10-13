const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger-output.json');

module.exports = (server) => {
    server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}

