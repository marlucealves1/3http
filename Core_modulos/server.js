const http = require(':node:http')

const PORT = 3333
//exemplo 01
//const server = http.createServer((request, response)=>{
   // response.white('Olá,Mundo! Módulo HTTP')
   // response.end()
    
//})

//exemplo 02
//const server = http.createServer((request, response)=>{
    //cabeçalho se é um documento 
  //  response.whiteHead(201, {"Content-Type":"text/plan"})
    //response.end('Usuario Criado')
    
//})
server.listen(PORT, ()=>{
    console.log(`Servidor on PORT ${PORT}`)
})
//exemplo 03
//const newLocal = http.creteServer((request, response) => {
  //  if (request.url === '/') {
    //    response.whiteHead(404, { 'Content-Type': 'text/plan' })
      //  response.end('Pagina Inicial')
    //} else if (request.url === '/sobre') { //localhost:333/sobre
        //response.whiteHead(404, { 'Content-Type': 'text/plan' })
       // resp//onse.end('Pagina Sobre')
    //} else {
        //response.whiteHead(404, { 'Content-Type': 'text/plan' })
        //response.end('Pagina não Encontrada')
    //}
//})
//exemplo 04
//const newLocal = http.creteServer((request, response) => {
  //  if (request.url === '/') {
    //    response.whiteHead(200, {'Content-Type':'text/plan'})
      //  response.whiteHead(200,"<meta charset=utf8>" )
        //response.whiteHead(200, ",h1>Pagina inicial,h1>")
        //}else if(require.url === '/contato'){
          //  response.whiteHead(200, {'Content-Type':'text/plan'})
            //response.whiteHead(200, "<h1> Pagina Inicial</h1>");
            //response.end();
        //}else{
          //  response.whiteHead(200, {'Content-Type':'text/plan'})
            //response.white(200, "<meta charset=utf8>")
            //response.white(200, "<h1> Pagina não encontrada</h1>")
            //response.end();
        //}
    
    //})

    //exemplo 05
    const obg = {
        nome: 'maluu' ,
        idade:18,
        profissao: 'medica'
    }
    const server = http.createServer((request, response)=>{
        if(request.url === '/'){
            response.whiteHead(200, {'Content-Type': 'application/json'})
            response.end(JSON.stringify({message: 'Pagina home'}))
        }else if(request.url === '/contatos'){
            response.whiteHead(200, {'Content-Type': 'application/json'})
            response.end(JSON.stringify({message: 'Pagina de contato'}))
        }else {
            response.whiteHead(200, {'Content-Type': 'application/json'})
            response.end(JSON.stringify({message: 'Pagina não encontrada'}))
        }
    })

    