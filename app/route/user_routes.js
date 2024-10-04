const user = require('../controller/user_controller.js')

module.exports = (server) => {
   // server.post('/saveuser', client.saveClient)
    server.get('/user/:id', user.findUser);
    server.get('/allUser/:pag', user.findAllUser);
    server.post('/saveUser/', user.saveUser);

    //server.get('/findAllClient/', client.find)

}