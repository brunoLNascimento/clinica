const env = require('./config');

const Sequelize = require('sequelize')
  , sequelize = new Sequelize(env.mysql.database, env.mysql.user, env.mysql.password, {
	host: env.mysql.host,
	dialect: "mysql",
    log: console.log
});


module.exports = sequelize;