/** @format */

const axios = require("axios");

class ServiceMensagem {
  async enviarMensagemTelegram(req, res) {
    const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;
    if (!TELEGRAM_TOKEN) {
      return res.status(500).json({
        message: "Token do Telegram não configurado",
      });
    }

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

      return res.status(200).json({
        message: "Mensagem enviada com sucesso",
        data: response.data,
      });
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error.response ? error.response.data : error.message);

      return res.status(500).json({
        message: "Erro ao enviar mensagem para o Telegram",
        error: error.response ? error.response.data : error.message,
      });
    }
  }
}

module.exports = new ServiceMensagem();
