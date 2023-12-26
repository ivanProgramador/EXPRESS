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
  compra possiveis más para que isso aconteça a rota tem que receber os dados desse produto pra poder mostrar.

  req e res são dois objetos um parametro passado pela requisição fica dentro do obejto req 
  pra acessar o valor do dado eu tenho que accessar os parametro do onjeto req e dedpoiss esqpecificar qual 
  eo indice que eu quero, na rota abaixo eu criei a variavel :nome então tudo oque vier na requisição vai pra 
  dentro dela e ela por sua vez va pra dentro do objeto de requisição
   
  então pra acessar ela 

  req.params.nome


  
  app.get('/ola/:nome',function(req,res){
    var nome = req.params.nome;
    res.end(`<h1>ola:${nome}<h1>`)

})

Rota com mais de 1 parametro na rita abaixo eu recebo o nome eo estado 

app.get('/ola/:nome/:estado',function(req,res){
    var nome = req.params.nome;
    var estado = req.params.estado;
    res.end(`<h1>nome: ${nome} <br> estado: ${estado}<h1>`)

})

Rota com parametro opcional  basta colocar a interrogação no final do nome do parametro 

app.get('/ola/:nome?/:estado?',function(req,res){
    var nome = req.params.nome;
    var estado = req.params.estado;
    res.end(`<h1>nome: ${nome} <br> estado: ${estado}<h1>`)

})

Mas caso a exibição de parte do conteudo dependa desses dados vai ficar o nome undefined 
escrito na tela porque o js não vai ter um valor para mostrar 
como resolver aqui eu criei respostas condicionais com base no valor da variavel artigo 

se ela vier com conteudo o nome dela é exibido

se não eu coloco outro retorno 

app.get('/blog/:artigo?',function(req,res){

    var artigo = req.params.artigo;

    if(artigo){
        res.end(`<h1>O artigo de hoje e: ${artigo} </h1>`)
    }else{
        res.end(`<h1>Não tem artigo hoje</h1>`)

    }
    res.send('Bem vindo a o meu blog');
})







  


*/