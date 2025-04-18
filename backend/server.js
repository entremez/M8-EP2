const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const path = require('path');
const fs = require('fs');

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
  }));

  app.get("/", (req, res) => {
    const filePath = path.join(__dirname, 'specialty.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error("Error leyendo el archivo:", err);
        return res.status(500).json({ error: "Error interno del servidor" });
      }
  
      try {
        const jsonData = JSON.parse(data);
        res.json(jsonData);
      } catch (parseErr) {
        console.error("Error parseando JSON:", parseErr);
        res.status(500).json({ error: "Error al interpretar JSON" });
      }
    });
  });

app.listen(PORT, () => {
    console.log(`Servidor corriendo en
http://localhost:${PORT}`);
});
