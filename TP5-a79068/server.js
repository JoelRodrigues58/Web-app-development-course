var http = require('http')
var url = require('url')
var fs = require('fs')
var pug = require('pug')

var musicasurl = /\/musicas\//
var estilo = /w3\.css/

http.createServer((req,res)=>{
    var murl = url.parse((req.url),true)

    if((murl.pathname =='/')|| (murl.pathname =='/index')){
        res.writeHead(200,{'Content-Type':'text/html'})
        fs.readFile('./website/json/index.json', 'utf8',(erro,dados)=>{
            if(!erro){
                res.write(pug.renderFile('website/index.pug',{ind:JSON.parse(dados)}))
            }  
            else
                res.write('<p><b>Erro:</b>' + erro + '</p>')

        res.end()
        }) 
    }
    else if(musicasurl.test(murl.pathname)){
        var ficheiro = murl.pathname.split('/')[2]
        res.writeHead(200,{'Content-Type':'text/html'})
        fs.readFile('website/json/'+ficheiro +'.json', (erro,dados)=>{
            if(!erro){
                res.write(pug.renderFile('website/template.pug',{musicas:JSON.parse(dados)}))
            }    
            else
                res.write('<p><b>Erro:</b>' + erro + '</p>')
        res.end()
        })
    }
    else if(estilo.test(murl.pathname)){
        res.writeHead(200,{'Content-Type':'text/css'})
        fs.readFile('website/estilo/w3.css', (erro,dados)=>{
            if(!erro)
                res.write(dados)
            else
                res.write('<p><b>Erro:</b>' + erro + '</p>')
        res.end()
        })
    }
    else{
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('<p><b>Erro, pedido desconhecido:</b>' + murl.pathname + '</p>')
        res.end()
    }

}).listen(5000,()=>{
    console.log('Servidor à escuta na porta 5000')
})
