/** @format */
const servicePegarToken = require("../services/servicePegarToken");
const axios = require("axios");

class ServiceMensagem {

  async enviarMensagemTelegram(req, res) {

    const token = servicePegarToken.getToken();
    const chatId = servicePegarToken.getChatId();

    if (!token) {
      return res.status(500).json({
        message: "Token do Telegram não configurado",
      });
    }

    if (!chatId) {
      return res.status(500).json({
        message: "Chat ID não encontrado. Verifique se o id esta na api.",
      });
    }

    const API_TELEGRAM_URL = `https://api.telegram.org/bot${token}/sendMessage`;
    const mensagem = "Essa mensagem é um teste";

    try {
      const response = await axios.post(API_TELEGRAM_URL, {
        chat_id: chatId,
        text: mensagem,
      });

      return res.status(200).json({
        message: "Mensagem enviada com sucesso",
        data: response.data,
      });
    } catch (error) {
      console.error(
        "Erro ao enviar mensagem:",
        error.response ? error.response.data : error.message
      );

      return res.status(500).json({
        message: "Erro ao enviar mensagem para o Telegram",
        error: error.response ? error.response.data : error.message,
      });
    }
  }
}

module.exports = new ServiceMensagem();
