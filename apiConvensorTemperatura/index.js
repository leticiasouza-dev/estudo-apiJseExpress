const express = require('express');
const app = express();

const conversorTemperatura = require('./service/conversorTemperatura'); // variável que armazena a função de serviço

app.get('/', (req, res) => {
    let temperatura = req.query.temperatura; 
    let conversor = req.query.conversor;

    let temperaturaGraus = conversorTemperatura.converteTemperatura(temperatura,conversor);

    let json = {temperatura: temperaturaGraus};

    res.json(json);
})

app.listen(8080, () => {
    let data = new Date();

    console.log("Servidor Node iniciado em " + data);
})