/** @format */

const express = require("express");
const router = express.Router();

const controllEnviarMensagem = require("./controll/controllEnviarMensagem");
const controllerPegarToken = require("./controll/controllerPegarToken");

// rota de envio de mensagem
router.post("/enviar-mensagem", controllEnviarMensagem.enviarMensagem );

router.get("/pegar-token" , controllerPegarToken.pegarToken);


module.exports = router;
