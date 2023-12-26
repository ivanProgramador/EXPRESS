const express = require('express');

const app = express();


app.get('/',function(req,res){
    res.send('Bem vindo a pagina inicial');
})

app.get('/ola/:nome?/:estado?',function(req,res){
    var nome = req.params.nome;
    var estado = req.params.estado;
    res.end(`<h1>nome: ${nome} <br> estado: ${estado}<h1>`)

})


app.get('/blog/:artigo?',function(req,res){

    var artigo = req.params.artigo;

    if(artigo){
        res.end(`<h1>O artigo de hoje e: ${artigo} </h1>`)
    }else{
        res.end(`<h1>Não tem artigo hoje</h1>`)

    }
    res.send('Bem vindo a o meu blog');
})

app.listen(4000,function(erro){
    if(erro){
        console.log('Ocorreu um erro');
    }else{
        console.log('Servidor iniciado com sucesso !');
    }
})