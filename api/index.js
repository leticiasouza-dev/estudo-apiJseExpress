const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json({mensagem: 'hello, world'});
});

app.listen(8080, () => {
    let data = new Date();

    console.log('Servido node iniciando em: ' + data);
});