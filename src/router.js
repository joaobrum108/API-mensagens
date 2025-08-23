

const express = require("express");
const router = express.Router();

const controllEnviarMensagem = require("./controll/controllEnviarMensagem");
const controllerPegarToken = require("./controll/controllerPegarToken");

// rota de envio de mensagem
router.post("/enviar-mensagem", controllEnviarMensagem.enviarMensagem );

router.post("/pegar-token-telegram" , controllerPegarToken.pegarToken);


module.exports = router;
