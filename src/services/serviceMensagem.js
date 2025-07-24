/** @format */

const axios = require("axios");

class serviceMensagem {
  async enviarMensagemTelegram(req, res) {
    const TELEGRAM_TOKEN = "8242308166:AAEZerdu9hWC46EtZTPajCwhRnOhyyNlQNw";
    const API_TELEGRAM_URL = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;

    const { chatId, mensagem } = req.body;
    if (!chatId || !mensagem) {
      return res.status(400).json({
        message: "chatId e mensagem são obrigatórios",
      });
    }
    try {
      const response = await axios.post(API_TELEGRAM_URL, {
        chat_id: chatId,
        text: mensagem,
      });

      res.status(200).json({
        message: "Mensagem enviada com sucesso",
        data: response.data,
      });
    } catch (error) {
      res.status(400).json({
        message: "Erro ao enviar a mensagem",
        error: error.message,
      });
    }
  }
}

module.exports = new serviceMensagem();
