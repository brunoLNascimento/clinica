module.exports = {
    mysql: {
        host: 'rds-mysql-hmg.sinopticoplus.com',
        database: 'testee',
        user: 'frota',
        password: 'frota'
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