const jwt = require('jsonwebtoken');
const { configJwt } = require('../config/config');

module.exports = {

 async makeToken(user) {
    return jwt.sign({ id: user.id }, configJwt.user.secret,
      { expiresIn: configJwt.user.expire });
  }
};
