const { makeToken } = require('../helper/jwtToken');
const bcrypt = require('../helper/bcrypt');
const { findUserBy } = require("../repository/user_repository");

module.exports = {
  async auth(login, password) {
    let where = { login: login}
    let user = await findUserBy({ where });
    const pass = await bcrypt.encrypt(password, 10)

    if (user && bcrypt.compare(pass, user.password)) {
      let token = await makeToken(user);
      return token;
    }
    throw 'Usuário não autenticado.';
  },
};
