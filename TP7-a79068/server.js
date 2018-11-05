var http = require('http')
var pug = require('pug')
var fs = require('fs')
var express = require('express')
var logger = require('morgan')
var formidable = require('formidable')
var jsonfile =require('jsonfile')
var app = express()

var myBD = "ficheiros.json"

app.use(express.static('uploaded'))

app.use(logger('combined'))

app.all('*',(req,res,next)=>{
    if(req.url!='/w3.css' && req.url!='/home.jpg'){
        res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'})
    }
    next()
})

app.get('/',(req,res)=>{
    res.write(pug.renderFile('pug/home.pug'))
    res.end()
})

app.get('/home.jpg',(req,res)=>{
    fs.readFile('home.jpg', function(err, data) {
        res.writeHead(200, {'Content-Type': 'image/jpg'});
        if (err) throw err;
        else {
           res.write(data)
        }
        res.end()
    })
})


app.get('/formulario',(req,res)=>{
    jsonfile.readFile(myBD,(erro,t)=>{
        if(!erro){
            res.write(pug.renderFile('pug/form-ficheiro.pug',{ficheiros:t}))
            
        }
        else{
        res.write(pug.renderFile('pug/erro.pug',{e: erro}))}
        res.end()
    })

})


app.get('/w3.css',(req,res)=>{
    res.writeHead(200,{'Content-Type':'text/css; charset=utf-8'})
    fs.readFile('stylesheets/w3.css',(erro,dados)=>{
        if(!erro){
            res.write(dados)
        }
        else throw err;
        res.end()
    })
})


app.post('/formulario',(req,res)=>{
    var form = new formidable.IncomingForm()
    form.parse(req,(erro,fields,files)=>{
        var fenviado= files.ficheiro.path
        var fnovo = './uploaded/' + files.ficheiro.name

        var date = new Date();
        var dia = +date.getFullYear() + "-" + (date.getUTCMonth()+1) + "-" +date.getDate() + " " 
        + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
 
        var f  = { path:'./uploaded/'+files.ficheiro.name,
                    name:files.ficheiro.name,
                    desc:fields.desc,
                    date:dia}

        jsonfile.readFile(myBD,(erro,t)=>{
            if(!erro){
                t.push(f)
                jsonfile.writeFile(myBD,t,erro=>{
                    if(erro){console.log(erro)}
                })
                fs.rename(fenviado,fnovo,erro=>{
                    if(!erro){
                        res.write(pug.renderFile('pug/form-ficheiro.pug',{ficheiros:t}))
                        res.end()
                    }
                    else{
                        res.write(pug.renderFile('pug/erro.pug',{e:'Ocorreram erros no armazenamento do ficheiro'}))
                        res.end()
                    }
                })
            }
        })
    })
})

var Myserver= http.createServer(app)
Myserver.listen(4007,()=>{
    console.log('Servidor à escuta na porta 4007......')
})