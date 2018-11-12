var express = require('express');
var router = express.Router();
var jsonfile = require('jsonfile')
var myBD = __dirname + '/ficheiros.json'
var formidable = require('formidable')
var fs = require('fs')

router.get('/', function(req, res, next) {
  res.render('home');
});

router.get('/formulario', function(req, res, next) {
  res.render('index')
});

router.get('/ficheiros',(req,res)=>{
  jsonfile.readFile(myBD,(erro,f)=>{
    if(!erro){
      res.render('lista',{ficheiros:f})
    }
    else{
      res.render('error')
    }
  })
})


router.post('/ficheiros/guardar',(req,res)=>{
  var form = new formidable.IncomingForm();
  
  form.parse(req,(erro,fields,files)=>{

    var fenviado= files.ficheiro.path
    var fnovo = 'public/uploaded/' + files.ficheiro.name

    var f  = {  name:files.ficheiro.name,
                desc:fields.desc,
                date:fields.time}

    jsonfile.readFile(myBD,(erro,files)=>{
        if(!erro){
          files.push(f)
          jsonfile.writeFile(myBD,files,erro2=>{
            if(!erro2)console.log('Ficheiro gravado com sucesso')
            else console.log('Erro: '+ erro2)
          })
        
          fs.rename(fenviado,fnovo,erro=>{
            if(!erro){
              res.end()
            }
          })
        }
    })
  })
})

module.exports = router;
