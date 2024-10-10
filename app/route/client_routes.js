const client = require('../controller/client_controller.js')

module.exports = (server) => {
    server.post('/client/', client.saveClient);
    server.get('/client/:id', client.findClient);
    server.get('/allClient/:pag', client.findAllClient);
    server.put('/client/:id', client.editClient);
}