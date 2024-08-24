const mongoose = require('mongoose');
require('dotenv').config();

//funcion coneccion base de datos
const conectarBD = () => {

    mongoose
    .connect(process.env.DB_MONGO)
    .then(() => console.log('Estamos conectados con mongo DB'))
    .catch((err) => console.error(err));
}

module.exports = conectarBD;