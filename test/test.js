const request = require('supertest')
const app = require('../app');

const user = {
    name: 'usuario teste',
    login: '99999999999',
    password: 'testeUsuario'
};

const editUser = {
    name: 'teste teste',
};

let { idUser, clienteId } = {};


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
}

let realizado = { "status": "Realizado" };


describe( 'Testando api de afyaClinica', () => {
    setTimeout( function () {
        process.exit()
      }, 4000);
    
      //inicio Validando rotas user
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

    it('#2 - Busca usuario pelo id', done => {
        request(app)
        .get(`/user/${idUser}`)
        .timeout(3000)
        .expect(200)
        .end(done)
    })

    it('#3 - Busca usuario sem passar o id', done => {
        request(app)
        .get(`/user/`)
        .timeout(3000)
        .expect(404)
        .end(done)
    })

    it('#4 - Busca todos os usuario', done => {
        request(app)
        .get(`/allUser/0`)
        .timeout(3000)
        .expect(200)
        .end(done)
    })

    it('#5 - Edita usuario com sucesso', done => {
        request(app)
        .put(`/user/${idUser}`)
        .send(editUser)
        .timeout(3000)
        .expect(200)
        .end(done)
    })

    it('#5 - Salva cliente com sucesso', done => {
        request(app)
        .put(`/user/${idUser}`)
        .send(editUser)
        .timeout(3000)
        .expect(200)
        .end(done)
    })

    it('#6 - Salvar cliente', done => {
        request(app)
        .post(`/client/`)
        .send(client)
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

    it('#7 - Busca cliente sem passar o id', done => {
        request(app)
        .get(`/client/`)
        .timeout(3000)
        .expect(404)
        .end(done)
    })

    it('#8 - Busca cliente pelo o id', done => {
        request(app)
        .get(`/client/${clienteId}`)
        .timeout(3000)
        .expect(200)
        .end(done)
    })

    it('#9 - Busca todos os cliente', done => {
        request(app)
        .get(`/allClient/0`)
        .timeout(3000)
        .expect(200)
        .end(done)
    })

    it('#10 - Edita cliente com sucesso', done => {
        request(app)
        .put(`/client/${clienteId}`)
        .send(editClient)
        .timeout(3000)
        .expect(200)
        .end(done)
    })

    it('#11 - Salvar historico do cliente', done => {
        request(app)
        .post(`/clientHistory/`)
        .send(saveHistory)
        .timeout(3000)
        .expect(200)
        .end(done)
    })

    it('#12 - Busca historico do cliente pelo o id', done => {
        request(app)
        .get(`/findOneHistory/${clienteId}`)
        .timeout(3000)
        .expect(200)
        .end(done)
    })

    it('#13 - Busca todos os historicos', done => {
        request(app)
        .get(`/findAllHistory/${0}`)
        .timeout(3000)
        .expect(200)
        .end(done)
    })

    it('#14 - Salvar agenda do cliente', done => {
        request(app)
        .post(`/schedule/`)
        .send(saveSchedule)
        .timeout(3000)
        .expect(200)
        .end(done)
    })

    it('#14 - Mudar status da agenda do cliente', done => {
        request(app)
        .put(`/schedule/`)
        .send(realizado)
        .timeout(3000)
        .expect(200)
        .end(done)
    })

    it('#15 - Busca agenda do cliente', done => {
        request(app)
        .get(`/findSchedule/${clienteId}`)
        .timeout(3000)
        .expect(200)
        .end(done)
    }),

    it('#16 - delete agenda do cliente', done => {
        request(app)
        .delete(`/schedule/${clienteId}`)
        .timeout(3000)
        .expect(200)
        .end(done)
    })

    it('#17 - delete historico do cliente', done => {
        request(app)
        .delete(`/clientHistory/${clienteId}`)
        .timeout(3000)
        .expect(200)
        .end(done)
    })

    it('#18 - delete cliente', done => {
        request(app)
        .delete(`/client/${clienteId}`)
        .timeout(3000)
        .expect(200)
        .end(done)
    })

    it('#19 - delete usuario', done => {
        request(app)
        .delete(`/user/${idUser}`)
        .timeout(3000)
        .expect(200)
        .end(done)
    })
})
