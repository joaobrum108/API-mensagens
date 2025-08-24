const axios = require("axios");

class ServicePegarToken {

    async buscarToken(req, res) {
        try {
            const { token } = req.body;
            if (!token) {
                console.error("Token do usuário não informado.");
                return res.status(400).json({
                    success: false,
                    message: "Token do usuário não informado."
                });
            }

            process.env.USER_TOKEN = token;
            console.log("Token seguro");

            return res.status(200).json({
                success: true,
                message: "Token seguro"
            });

        } catch (error) {
            console.error("Erro ao buscar token:", error);
            return res.status(500).json({
                success: false,
                message: "Erro interno ao buscar token."
            });
        }
    }

    async mostrarToken(req, res) {
        // const url = https://api.telegram.org/bot${process.env.USER_TOKEN}/getUpdates

    }
}

module.exports = new ServicePegarToken();
