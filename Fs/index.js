

const http = require('node:http')
const fs = require('node:fs')

const PORT = 3333
const server = http.createServer((request, response)=>{
     //(arquivo e funçao) antes de mexer precisa validar
    fs.readFile('mensagem.html', (err, data)=>{

        if(err){
            response.writeHead(500, {"Content-Tpe":"text/html"});
            response.end(JSON.stringify({mensagem:"Erro ao ler o arquivo"}))
            return
        }
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(data);
        response.end();
    });
});
server.listen(PORT, ()=>{
    console.log('Servidor on PORT ${PORT}')
})
