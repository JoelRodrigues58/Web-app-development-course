var express = require('express');
var router = express.Router();
var User = require('../../controllers/api/users')

//listar utilizadores
router.get('/',(req,res)=>{
    User.listar()
        .then(dados=>res.jsonp(dados))
        .catch(erro => res.status(500).send('Erro na listagem de user.'))
})

//Inserir utilizador
router.post('/',(req,res)=>{
    User.inserir(req.body)
        .then(dados=>res.jsonp(dados))
        .catch(erro => res.status(500).send('Erro na inserção de um user.'))
})

//Listar nome e pass
router.post('/login',(req,res)=>{
    User.listarNP(req.body.email,req.body.password)
        .then(dados=>res.jsonp(dados))
        .catch(erro => res.status(500).send('Erro na listagem de user.'))
})

module.exports=router;