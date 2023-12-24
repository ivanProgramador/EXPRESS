/*
 O express é um framework que premite a criação de servidores 
 mas essa não e unica utilidade dele em relação a criação de aplicações
 no Node.
 
 Rotas

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

*/