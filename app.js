const express = require('express');

const UsuariosRouter = require('./routers/UsuariosRouter');

const app = express();

//app.use('/', UsuariosRouter);

app.listen(3000,()=>{console.log('Estou escutando na porta 3000')})