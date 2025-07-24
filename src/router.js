/** @format */

const express = require("express");
const router = express.Router();
const serviceMensagem = require("./services/serviceMensagem");

router.post("/enviar-mensagem", serviceMensagem.enviarMensagemTelegram);

module.exports = router;
