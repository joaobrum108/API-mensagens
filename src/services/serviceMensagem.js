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
  // async enviarMensagemWhatsapp(req, res) {
  //   const { mensagem } = req.body;
  //   const ZAPI_INSTANCE = "3E4AC80F98D6D0B9180D42A445172BEF";
  //   const ZAPI_TOKEN = "B23C505B816B90FF6FD9F00F";
  //   const NUMERO_DESTINO = "5511968713163";
  //   try {
  //     const response = await axios.post(
  //       `https://api.z-api.io/instances/${ZAPI_INSTANCE}/token/${ZAPI_TOKEN}/send-text`,
  //       {
  //         phone: NUMERO_DESTINO,
  //         message: mensagem,
  //       }
  //     );
  //     res.status(200).json({
  //       message: "Mensagem enviada com sucesso",
  //       data: response.data,
  //     });
  //   } catch (error) {
  //     res.status(400).json({
  //       message: "Erro ao enviar a mensagem",
  //       error: error.message,
  //     });
  //   }
  // }
}
module.exports = new serviceMensagem();
