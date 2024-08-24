const express = require('express');
const conectarBD = require('../configdb/db');
const cors = require('cors');


const app = express();
const puerto = process.env.PORT || 5000;

// llamamos conectarBD

conectarBD();
app.use(cors());
app.use(express.json());

// rutas del proyecto
app.use('/api/clientes',require('../routers/clientesRutas'));
app.use('/api/citas',require('../routers/citasRutas'));

// ruta desde la web
app.get('/',(req,res)=>{
    res.send('Bienvenidos estamos desde el navegador');
});

app.listen(puerto,() => console.log('Estamos conectados desde el servidor', puerto));