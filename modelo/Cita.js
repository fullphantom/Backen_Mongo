const mongoose = require('mongoose');

// el modelo que hacemos aqui es el el que vamos a montar en postman

const citasSchema = mongoose.Schema({

fecha:{
    type: Date,
    required:true
},
especialidad:{
    type: String,
    required:true
},
consultorio:{
    type: Number,
    required: true
},
doctor:{
    type: String,
    required:true
},

}, {versionkey:false});

module.exports = mongoose.model('Cita', citasSchema); 