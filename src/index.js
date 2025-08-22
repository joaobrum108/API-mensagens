const express = require("express");
require("dotenv").config();
const app = express();
const router = require("./router");

app.use(express.json());
app.use("/api", router);
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`);
});
