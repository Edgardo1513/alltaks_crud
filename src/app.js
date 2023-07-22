
const express = require("express");
const db = require("./utils/database");
db.sync().then(() => console.log("Base de dato sincronizada"));
const cors = require("cors");
const userRoutes = require("../src/routes/alltalks.router");
require('dotenv').config();
const initModels = require('./models/initModels');

initModels();

const PORT = process.env.PORT ?? 8000; 

const app = express();

app.use(express.json());
app.use(cors());
app.use(userRoutes);


app.get('/', (req, res) => {
    res.send('Bienvenido a mi servidor');
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});





