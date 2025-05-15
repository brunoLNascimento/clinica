module.exports = {
    mysql: {
        host: 'localhost',
        database: 'clinicalinica',
        user: 'root',
        password: 'root'
    },

    limit: {
        pag: 15
    },

    configJwt: {
        user: {
          secret: "afya",
          expire: 9986400,
        },
      },
};