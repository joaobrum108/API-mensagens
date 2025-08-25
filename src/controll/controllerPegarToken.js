const servicePegarToken = require("../services/servicePegarToken");

class pegarTokenUser {
    async pegarToken(req , res) {
        try {
            const resposta = await servicePegarToken.buscarToken(req, res);
            if (resposta.status === 200) {
                console.log("Token User com sucesso");
                return resposta.data; 
            } 
        } catch (error) {
            console.error("Erro ao pegar o token:", error.message);
        }
    }
}

module.exports = new pegarTokenUser();
