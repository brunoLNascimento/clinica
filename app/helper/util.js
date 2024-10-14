module.exports = {
    cpfFormat(cpf){
        let cpfI = cpf.substr(0, 3);
        let cpfF = cpf.slice(-2);

        return `${cpfI}**${cpfF}`
    },

    cpfCheck(cpf){
        if(cpf.length == 11) return true
        else return false
    }
}