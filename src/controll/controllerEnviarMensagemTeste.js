const serviceTesteMensagem = require("../services/serviceTesteMensagem");
class testeDeEnvio {
  async envios(req, res) {
    try{
        const resposta = await serviceTesteMensagem.enviarMensagemTelegram(req, res);
        if (resposta.status === 200) {
                console.log("Mensagem enviada com sucesso de teste");
            }
    } catch (error) {
         res.status(400).json({
                message: "Erro ao enviar a mensagem de teste",
                error: error.message,
            });
    }
  }
}
module.exports = new testeDeEnvio();