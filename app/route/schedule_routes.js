const schedule = require('../controller/schedule_controller.js')

module.exports = (server) => {
    server.post('/schedule/', schedule.saveSchedule,
        /*
        #swagger.tags = ['Schedule']
        #swagger.summary = 'Cadastro de agendamento'
        #swagger.description = 'Cadastro de agendamento de cliente'
        */ 
    );

    server.get('/findSchedule/:id', schedule.findSchedule,
         /*
        #swagger.tags = ['Schedule']
        #swagger.summary = 'Consultar agendamento por iD'
        #swagger.description = 'Consultar agendamento do cliente por iD'
        */ 
    );

    server.get('/allSchedule/:pag', schedule.findAllSchedule,
                /*
        #swagger.tags = ['Schedule']
        #swagger.summary = 'Consultar todos os agendamentos'
        #swagger.description = 'Vai retornar todos os agendamentos sempre paginando'
        */ 
    );

    server.delete('/schedule/:id', schedule.deleteSchedule
          /*
        #swagger.tags = ['Schedule']
        #swagger.summary = 'Deleta agendamento'
        #swagger.description = 'Delete fisico de agendamento de cliente na base de dados'
        */ 
    );
    
    server.put('/schedule/:id', schedule.editSchedule,
          /*
        #swagger.tags = ['Schedule']
        #swagger.summary = 'Edita agendamento'
        #swagger.description = 'Edita agedanemento de cliente na base de dados'
        */ 
    );
}