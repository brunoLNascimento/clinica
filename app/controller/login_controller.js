const {auth} = require("../service/login_service");

module.exports = {
    async login(req, res){
        try {
            const { login, password } = req.body;

            if( !login || !password ){
                throw { status: StatusCodes.BAD_REQUEST}
            };

            let resp = await auth(login, password);            
            return res.status(200).send(resp)
        } catch (error) {
            console.log(error);
            return res.status(400).send(error.message || error);
        }
    }
}