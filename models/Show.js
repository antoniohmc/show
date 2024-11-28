const mongoose = require('mongoose');

const showSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    data: {
        type: Date,
        required: true,
    }, 
    cidade: {
        type: String,
        required: true,
    },
    estadio: {
        type: String,
    },
    ingressosDisponiveis: {
        type: Number,
        default: 0,
    }
});

const Show = mongoose.model('Show', showSchema);

module.exports = Show;