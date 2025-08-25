const axios = require("axios");

class ServicePegarToken {
    constructor() {
        this.userToken = null;
        this.chatId = null;
    }

    async buscarToken(req, res) {
        try {
            const { token } = req.body;

            if (!token) {
                return res.status(400).json({
                    success: false,
                    message: "Token do usuário não informado."
                });
            }

            this.userToken = token;
            process.env.USER_TOKEN = token;
            const response = await axios.get(`https://api.telegram.org/bot${token}/getUpdates`);

           if (response.data.result.length > 0) {
                this.chatId = response.data.result[0].message.from.id; 
                const fromIds = response.data.result.map(item => item.message.from.id);
                console.log(fromIds);
            }   else {
            this.chatId = null;
            }

            return res.status(200).json({
                success: true,
                message: "Token e ChatId obtidos com sucesso.",
                token: this.userToken,
                chatId: this.chatId
            });

        } catch (error) {
            console.error("Erro ao buscar token/chatId:", error.response?.data || error.message);
            return res.status(500).json({
                success: false,
                message: "Erro interno ao buscar token/chatId."
            });
        }
    }

    getToken() {
        return this.userToken;
    }

    getChatId() {
        return this.chatId;
    }
}

module.exports = new ServicePegarToken();

