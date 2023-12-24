const express = require('express');

const app = express();

/*
  Atraves do express e possivel criar rotas de manira rapida
  a rota abaixo e do tipo get a função get pode receber 2 
  parametros 1 eo link de requisição que vem do usuario
  para acessar ela 
  
  eo segundo parametro é um função anonima que recebe 2 parametros 
  req(requisição)
  res(resposta)
  dependendo do link de rsuisição acionaod a função vai decidir oque fazer
  no caso se o cliente requisitar / ela vai mandar um texto de boas vindas a pagina de inicio   
*/

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