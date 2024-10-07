const clientH = require('../controller/clientHistory_controller.js')

module.exports = (server) => {
    server.post('/clientHistory/', clientH.saveClientH);
    server.get('/findOneHistory/:id', clientH.findOneHistory);
    server.get('/findAllHistory/:pag', clientH.findAllHistory);
}