const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const showRoutes = require ('./routes/show.js')

dotenv.config();

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,})
    .then(() => {
        console.log('Conectado ao MongoDB!');
    })
    .catch((err) => {
        console.log('Erro ao conectar ao MongoDB!');
    })

    app.use('/shows', showRoutes);

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    })