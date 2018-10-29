var http = require('http')
var url = require('url')
var pug = require('pug')
var fs = require('fs')
var {parse} = require('querystring')
var jsonfile =require('jsonfile')
var myBD = "tarefas.json"

var myServer = http.createServer((req,res)=>{
    var purl = url.parse(req.url,true)
    var query = purl.query
    
    console.log('Recebi o pedido: '+purl.pathname)


    if(req.method=='GET'){
        if(purl.pathname =='/'){
            res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'})
            res.write(pug.renderFile('pug/home.pug'))
            res.end()   
        }
        else if(purl.pathname =='/home.png'){
            fs.readFile('home.png', function(err, data) {
                if (err) throw err;
                else {
                    res.writeHead(200, {'Content-Type': 'image/png'});
                    res.end(data) 
                }
            });
        }
        else if(purl.pathname =='/registo'){
            res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'})
            res.write(pug.renderFile('pug/registar-tarefa.pug'))
            res.end()   
        }
        else if(purl.pathname=='/lista'){
            jsonfile.readFile(myBD,(erro,t)=>{
                if(!erro){
                    res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'})
                    res.write(pug.renderFile('pug/lista-tarefas.pug',{tarefas:t}))
                    res.end()
                }
                else{
                    res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'})
                    res.write(pug.renderFile('pug/erro.pug',{e: "Erro: na leitura da base de dados"}))
                    res.end()
                }
            })
        }
        else if(purl.pathname=='/remover'){
            jsonfile.readFile(myBD,(erro,t)=>{
                if(!erro){
                    res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'})
                    res.write(pug.renderFile('pug/remover.pug',{tarefas:t}))
                    res.end()
                }
                else{
                    res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'})
                    res.write(pug.renderFile('pug/erro.pug',{e: "Erro: na leitura da base de dados"}))
                    res.end()
                }
            })
        }
        else if(purl.pathname=='/w3.css'){
            res.writeHead(200,{'Content-Type':'text/css; charset=utf-8'})
            fs.readFile('stylesheets/w3.css',(erro,dados)=>{
                if(!erro){
                    res.write(dados)
                }
                else res.write(pug.renderFile('erro.pug',{e: erro}))
                res.end()
            })
        }
        else {
            res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'})
            res.write(pug.renderFile('pug/erro.pug',{e: "Erro: "+purl.pathname+" não está implementado!"}))
            res.end()
        }
    }
    else if(req.method=='POST'){
        if(purl.pathname=='/registoSucesso'){
            recuperaInfo(req,resultado =>{
                jsonfile.readFile(myBD,(erro,t)=>{
                    if(!erro){
                        resultado['apagado']= '0'
                        resultado['id']= t.length+1
                        var date = new Date();
                        var dia = +date.getFullYear() + "-" + (date.getUTCMonth()+1) + "-" +date.getDate()
                        resultado['data'] = dia
                        t.push(resultado)
                        jsonfile.writeFile(myBD,t,erro=>{
                            if(erro){console.log(erro)}
                            else{
                                res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'})
                                res.write(pug.renderFile('pug/lista-tarefas.pug',{tarefas:t}))
                                res.end()
                                console.log('Registo gravado com sucesso!')
                        }
                        })
                    }
                })
            })
        }
        else if(purl.pathname=='/removerSucesso'){
            recuperaInfo(req,resultado =>{
                jsonfile.readFile(myBD,(erro,t)=>{
                    if(!erro){
                        for(var i=0;i<t.length;i++){
                            if(t[i].id==resultado.Remover){
                                t[i].apagado='1'
                            }
                        }
                        jsonfile.writeFile(myBD,t,erro=>{
                            if(erro){console.log(erro)}
                            else{
                                res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'})
                                res.write(pug.renderFile('pug/lista-tarefas.pug',{tarefas:t}))
                                res.end()
                        }
                        })
                    }
                })
            })
            
        }
        else {
            res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'})
            res.write(pug.renderFile('pug/erro.pug',{e: "Erro: "+purl.pathname+" não está implementado!"}))
            res.end()
        }
    }
    else {
        res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'})
        res.write(pug.renderFile('pug/erro.pug',{e: "Método: "+purl.method+" não suportado!"}))
        res.end()
    }
})


myServer.listen(4006, ()=>{
    console.log('Servidor à escuta na porta 4006...')
})

function recuperaInfo(request,callback){
    if(request.headers['content-type']== 'application/x-www-form-urlencoded'){
        let body = ''
        request.on('data',bloco =>{
            body+=bloco.toString()
        })
        request.on('end',()=>{
            callback(parse(body))
        })
    }
    else {
        callback(null)
    }
}
