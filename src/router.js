

const express = require("express");
const router = express.Router();

const controllEnviarMensagem = require("./controll/controllEnviarMensagem");
const controllerPegarToken = require("./controll/controllerPegarToken");
const controllerEnviarMensagemTeste = require("./controll/controllerEnviarMensagemTeste");


router.post("/pegar-token-telegram" , controllerPegarToken.pegarToken);
router.post("/enviar-mensagem", controllEnviarMensagem.enviarMensagem );

// rota de teste de envio
router.post("/rota-teste", controllerEnviarMensagemTeste.envios)



module.exports = router;
