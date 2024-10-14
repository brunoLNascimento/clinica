const bcrypt = require('bcrypt');

module.exports = {
  encrypt(password) {
    return bcrypt.hashSync(password, 10);
  },
  
  async compare(password, encryptedPass) {
    return await bcrypt.compare(password, encryptedPass);
  },
};
