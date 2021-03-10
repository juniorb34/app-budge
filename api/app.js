const express = require('express');

const app = express();
const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/orcamento', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Conexão com o banco de dados efetuada com sucesso!');
  })
  .catch((err) => {
    console.log('Erro ao tentar Conexão com BD. ' + err);
  });

app.get('/home', (req, res) => {
  res.send('API');
});

app.listen(3000, function () {
  console.log('Servidor Ok!');
});
