const swaggerAutogen = require('swagger-autogen')()

swaggerAutogen('./swagger-output.json', ['app/route/**.js']);