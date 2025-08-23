const serviceMensagem = require("../services/serviceMensagem");

class postEnviarMensagem {
    
    async enviarMensagem(req, res) {
        try {
            const resp = await serviceMensagem.enviarMensagemTelegram(req, res);
            if (resp.status === 200) {
                console.log("Mensagem enviada com sucesso");
            }
        } catch (error) {
            res.status(400).json({
                message: "Erro ao enviar a mensagem",
                error: error.message,
            });
        }
    }
}

module.exports = new postEnviarMensagem();
