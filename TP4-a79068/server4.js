var http = require('http')
var fs = require('fs')
var url = require('url')

http.createServer((req,res)=>{
    var myObj = url.parse(req.url,true)
    res.writeHead(200,{'Content-Type':'text/html'})

    if(myObj.pathname=='/'){
        fs.readFile('website/index.html',(erro,dados)=>{
            if(!erro) res.write(dados)
            else res.write('<p><b>ERRO:</b>' + erro +'</p>') 
        res.end()
        })
    }
    
    if(myObj.pathname=='/arqelem'){
        fs.readFile('website/html/'+myObj.query.id+'.html',(erro,dados)=>{
            if(!erro){
                res.write(dados)
            }
            else
                res.write('<p><b>ERRO:</b>' + erro +'</p>') 

                res.end()
        })
    }

    if(myObj.pathname=='/index.html'){
        fs.readFile('website/index.html',(erro,dados)=>{
            if(!erro){
                res.write(dados)
            }
            else
                res.write('<p><b>ERRO:</b>' + erro +'</p>') 

                res.end()
        })
    }



}).listen(4004,()=>{
    console.log('Servidor à escuta na porta 4004...')
})