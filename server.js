const port = 3000
const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const consign = require('consign')

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

consign().include('app/model')
        .then('app/controller')
        .then('app/route')
        .then('app/service')
        .then('app/config')
        .then('app/helper')
        .into(server);

server.listen(port, function(){
    console.log(`Servidor rodando na porta: ${port}.`)
})

module.exports = server