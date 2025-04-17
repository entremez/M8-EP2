const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
  }));
app.get("/", (req, res) => {
    res.send("¡Holaaaaaa Mundo desde Node.js en Docker! 🚀");
});
app.listen(PORT, () => {
    console.log(`Servidor corriendo en
http://localhost:${PORT}`);
});
