const schedule = require('../controller/schedule_controller.js')

module.exports = (server) => {
    server.post('/schedule/', schedule.saveSchedule);
    server.get('/findSchedule/:id', schedule.findSchedule);
    server.get('/allSchedule/:pag', schedule.findAllSchedule);
    server.delete('/schedule/:id', schedule.deleteSchedule);
}