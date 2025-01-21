//requerir el modulo de express
require('dotenv').config();

const express = require('express');
const conectarDB = require('./config/db');
const router = require('./routes/nota');
const cors = require('cors');


const app = express();

conectarDB();
//definimos un puerto para el servidor 3000

app.use(cors());

const PORT = 3000;

//definimos una ruta para el servidor

app.use(express.json()); //middleware para leer datos en formato json

app.use('/api', router);


app.get('/', (req, res) => {
    res.send('Hola mundo desde mi primer servidor en express');
})



//iniciar el servidor y escuchar en el puerto indicado

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})

