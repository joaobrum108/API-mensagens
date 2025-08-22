/** @format */

const express = require("express");
const router = express.Router();

const controllEnviarMensagem = require("./controll/controllEnviarMensagem");

router.post("/enviar-mensagem", controllEnviarMensagem.enviarMensagem );


module.exports = router;
