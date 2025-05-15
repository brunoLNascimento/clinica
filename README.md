# clinicalinica

## Faça o clone
```bash
$ git clone https://github.com/brunoLNascimento/clinicalinica.git 
```

**Banco de dados**
As configurações do banco de dados estão em app\config\config.js

```bash
# Rode o comando para instalar as dependências
$ npm install

# Para rodar o programa
$ npm start

# Para rodar os testes
$ npm test
```

Porta a ser utilizada:
localhost:3000

Rotas via Swagger 
localhost:3000/api-docs


## O que é possível fazer no sistema?
- Cadastro e Login de Usuários
- Cadastro de Clientes
- Cadastro de Agenda
- Cadastro de Histórico do paciente
- Busca por usuários, clientes, agenda e historico de paciente
- Documentação dos endpoints

- OBS: O sistema tem autenticação. Após criar um usuário, será preciso fazer o login. Necessário pegar o token e passar no header

## Ordem para utilização do sistema
- Cadastrar user
- Fazer login
- Cadastrar client
- Cadastrar Agenda
- Cadastrar Historico

