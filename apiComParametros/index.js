const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log(req.query);
    res.json({mensagem: 'Parâmetro recebido pelo servidor'});
})

app.listen(8080, () =>{
    console.log('Servidor node iniciado com sucesso');
})