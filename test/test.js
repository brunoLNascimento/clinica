const request = require('supertest')
const app = require('../app');

const user = {
    name: 'usuario teste',
    login: '99999999999',
    password: 'testeUsuario'
};

const login = {
    login: '99999999999',
    password: 'testeUsuario'
};

let token = "";

const editUser = {
    name: 'teste teste',
};

let { idUser, clienteId, scheduleId, idHistory } = {};

const client = {
    "name":"cliente teste",
    "cpf": "05755889752",
    "gender": "F", 
    "phone": "21987187348", 
    "birth": "1983/06/19",
    "height": "1.72",
    "weight": "75.45"
};


const editClient = {
    "name":"editado teste"
};

let saveHistory = {
        "clientId": "",
        "date": "12/10/2024",
        "description": "-------------------------------"
};

let saveSchedule = {
    "clientId": "",
    "daySchedule": "01/01/2025",
    "timeSchedule": "14:35",
    "status": "Agendado"
};

let realizado = { 
    "daySchedule": "01/01/2025",
    "timeSchedule": "14:35",
    "status": "Realizado" 
};

describe( 'Testando api de clinica', () => {
    setTimeout( function () {        
        process.exit()
      }, 10000);
    
      it('#1 - Salvar usuario', done => {
        request(app)
        .post(`/user/`)
        .send(user)
        .timeout(3000)
        .expect(function (res) {
            if(res.status == 200){
                idUser = res._body.id;
            }
        })
        .end(done)
    })

    it('#2 - Login usuario', done => {
        request(app)
        .post(`/login/`)
        .send(login)
        .timeout(3000)
        .expect(function (res) {
            if(res.status == 200){
                token = res.text;
                console.log(token)
            }
        })
        .end(done)
    })

    it('#3 - Busca usuario pelo id', done => {
        request(app)
        .get(`/user/${idUser}`)
        .set('Authorization', `Bearer ${token}`)
        .timeout(3000)
        .expect(200)
        .end(done)
    })

    it('#4 - Busca usuario sem passar o id', done => {
        request(app)
        .get(`/user/`)
        .set('Authorization', `Bearer ${token}`)
        .timeout(3000)
        .expect(404)
        .end(done)
    })

        it('#5 - Busca todos os usuario', done => {
            request(app)
            .get(`/allUser/0`)
            .set('Authorization', `Bearer ${token}`)
            .timeout(3000)
            .expect(200)
            .end(done)
        })

        it('#6 - Edita usuario com sucesso', done => {
            request(app)
            .put(`/user/${idUser}`)
            .send(editUser)
            .set('Authorization', `Bearer ${token}`)
            .timeout(3000)
            .expect(200)
            .end(done)
        })

        it('#7 - Salvar cliente', done => {
            request(app)
            .post(`/client/`)
            .send(client)
            .set('Authorization', `Bearer ${token}`)
            .timeout(3000)
            .expect(function (res) {
                if(res.status == 200){
                    clienteId = res._body.clientid;
                    saveHistory.clientId = clienteId;
                    saveSchedule.clientId = clienteId;
                }
            })
            .end(done)
        })

        it('#8 - Busca cliente sem passar o id', done => {
            request(app)
            .get(`/client/`)
            .set('Authorization', `Bearer ${token}`)
            .timeout(3000)
            .expect(404)
            .end(done)
        })

        it('#9 - Busca cliente pelo o id', done => {
            request(app)
            .get(`/client/${clienteId}`)
            .set('Authorization', `Bearer ${token}`)
            .timeout(3000)
            .expect(200)
            .end(done)
        })

        it('#10 - Busca todos os cliente', done => {
            request(app)
            .get(`/allClient/0`)
            .set('Authorization', `Bearer ${token}`)
            .timeout(3000)
            .expect(200)
            .end(done)
        })

        it('#11 - Edita cliente com sucesso', done => {
            request(app)
            .put(`/client/${clienteId}`)
            .send(editClient)
            .set('Authorization', `Bearer ${token}`)
            .timeout(3000)
            .expect(200)
            .end(done)
        })

        it('#12 - Salvar historico do cliente', done => {
            request(app)
            .post(`/clientHistory/`)
            .send(saveHistory)
            .set('Authorization', `Bearer ${token}`)
            .timeout(3000)
            .expect(function(res){
                if(res.status == 200){
                    idHistory = res._body.id;
                }
            })
            .end(done)
        })

        it('#13 - Busca historico do cliente pelo o id', done => {
            request(app)
            .get(`/findOneHistory/${clienteId}`)
            .set('Authorization', `Bearer ${token}`)
            .timeout(3000)
            .expect(200)
            .end(done)
        })

        it('#14 - Busca todos os historicos', done => {
            request(app)
            .get(`/findAllHistory/${0}`)
            .set('Authorization', `Bearer ${token}`)
            .timeout(3000)
            .expect(200)
            .end(done)
        })

        it('#15 - Salvar agenda do cliente', done => {
            request(app)
            .post(`/schedule/`)
            .send(saveSchedule)
            .set('Authorization', `Bearer ${token}`)
            .timeout(3000)
            .expect(function(res){
                if(res.status == 200){
                    scheduleId = res._body.id;
                }
            })
            .end(done)
        })

        it('#16 - Mudar status da agenda do cliente', done => {
            request(app)
            .put(`/schedule/${clienteId}`)
            .send(realizado)
            .set('Authorization', `Bearer ${token}`)
            .timeout(3000)
            .expect(200)
            .end(done)
        })

        it('#17 - Busca agenda do cliente', done => {
            request(app)
            .get(`/findSchedule/${clienteId}`)
            .set('Authorization', `Bearer ${token}`)
            .timeout(3000)
            .expect(200)
            .end(done)
        }),

        it('#18 - delete agenda do cliente', done => {
            request(app)
            .delete(`/schedule/${scheduleId}`)
            .set('Authorization', `Bearer ${token}`)
            .timeout(3000)
            .expect(200)
            .end(done)
        })

        it('#19 - delete historico do cliente', done => {
            request(app)
            .delete(`/clientHistory/${idHistory}`)
            .set('Authorization', `Bearer ${token}`)
            .timeout(3000)
            .expect(200)
            .end(done)
        })

        it('#20 - delete cliente', done => {
            request(app)
            .delete(`/client/${clienteId}`)
            .set('Authorization', `Bearer ${token}`)
            .timeout(3000)
            .expect(200)
            .end(done)
        })

        it('#21 - delete usuario', done => {
            request(app)
            .delete(`/user/${idUser}`)
            .set('Authorization', `Bearer ${token}`)
            .timeout(3000)
            .expect(200)
            .end(done)
        })
})
