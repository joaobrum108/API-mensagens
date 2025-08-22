const servicePegarToken = require("../services/servicePegarToken");

class GetTokenUser {
    async pegarToken(token) {
        try {
            const resposta = await servicePegarToken.servicePegarToken(token);
            if (resposta.status === 200) {
                console.log("Token pegado com sucesso");
                return resposta.data; 
            } else {
                console.log("Falha ao pegar o token");
                return null;
            }
        } catch (error) {
            console.error("Erro ao pegar o token:", error.message);
        }
    }
}

module.exports = new GetTokenUser();
