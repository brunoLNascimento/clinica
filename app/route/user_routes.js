const user = require('../controller/user_controller.js')

module.exports = (server) => {
    server.get('/user/:id', user.findUser);
    server.get('/allUser/:pag', user.findAllUser);
    server.post('/saveUser/', user.saveUser);
}