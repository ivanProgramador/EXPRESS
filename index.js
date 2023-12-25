const express = require('express');

const app = express();


app.get('/',function(req,res){
    res.send('Bem vindo a pagina inicial');
})


app.get('/blog',function(req,res){
    res.send('Bem vindo a o meu blog');
})

app.listen(4000,function(erro){
    if(erro){
        console.log('Ocorreu um erro');
    }else{
        console.log('Servidor iniciado com sucesso !');
    }
})