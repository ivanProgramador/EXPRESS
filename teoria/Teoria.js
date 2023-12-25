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


app.get('/',function(req,res){
    res.send('Bem vindo a pagina inicial');
})

*/

/*
 Rotas que recebenm parametros

  Os parametros são necessarios em rotas que mosttram os dados de um porduto,usuario ou artigo especifico,
  os parametros servem pra rota saber qoue deve mostrar ao usuario, digamos que estamois em um site de compras
  eu vejo uma pagina com varios produtos, mas eu quero saber mais, sobre um produto especifico.
  
  quando clico sobre ele o site tem que nme levar a uma pagina de detalhes desse produto e com as opções de 
  compra possiveis.mas para que isso aconteça a rota tem que receber os dados desse produto pra poder mostrar.

 


*/