var express = require('express');
var router = express.Router();
var axios = require('axios')


router.get('/compras/nova',function(req,res){
  res.render('formulario')
})

router.get('/compras', function(req, res) {
  axios.get('http://localhost:4012/api/compras')
    .then(resposta=>  res.render('listaCompras', { compras: resposta.data }))
    .catch(erro=>{
      console.log('Erro ao carregar dados da BD')
      res.render('error',{error:erro,message:'Erro ao carregar dados da BD'})
    })
});


router.get('/compras/:estado', function(req, res) {
  axios.get('http://localhost:4012/api/compras/'+req.params.estado)
    .then(resposta=>  res.render('listaCompras', { compras: resposta.data }))
    .catch(erro=>{
      console.log('Erro ao carregar dados da BD')
      res.render('error',{error:erro,message:'Erro ao carregar dados da BD'})
    })
});


router.post('/compras', function(req, res) {
  axios.post('http://localhost:4012/api/compras',req.body)
    .then(()=>  res.redirect('http://localhost:4012/compras'))
    .catch(erro=>{
      console.log('Erro ao inserir dados na BD')
      res.redirect('http://localhost:4012/compras')
    })
});


router.get('/users/login', function(req,res){
  res.render('login')
})


router.post('/loginEfetuado',function(req,res){
  axios.post('http://localhost:4012/api/users/login',req.body)
    .then(resposta=>  {
      console.log(resposta.data)
      if(resposta.data.length!=0) res.redirect('http://localhost:4012/compras')
      else  res.redirect('http://localhost:4012/users/login')
    })
    .catch(erro=>{
      console.log('Erro ao inserir dados na BD')
      res.redirect('http://localhost:4012/users/login')
    })
})

router.get('/users', function(req,res){
  axios.get('http://localhost:4012/api/users')
    .then(dados=>res.render('users',{usersList:dados.data}))
    .catch(erro => res.render('error',{erro:erro}))
})



module.exports = router;
