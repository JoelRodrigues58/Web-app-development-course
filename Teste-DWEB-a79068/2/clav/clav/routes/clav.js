var express = require('express');
var router = express.Router();
var axios = require("axios")

//Pagina principal
router.get('/', function(req, res) {
  axios.get("http://clav-test.di.uminho.pt/api/classes/nivel/1")
  .then(dados=>{
    res.render("index",{nivel1:dados.data})})
  .catch(erro => {res.jsonp(erro)})
});

//descendencia do nivel 1 para um codigo
router.get("/codigo/:codigo", function(req,res){
  axios.get("http://clav-test.di.uminho.pt/api/classes/c"+req.params.codigo +"/descendencia")
  .then(dados=>{
    res.render("descendencia1",{nivel2:dados.data})})
  .catch(erro => {res.jsonp(erro)})
})

//descendencia do nivel 2 para um codigo
router.get("/codigo2/:codigo", function(req,res){
  axios.get("http://clav-test.di.uminho.pt/api/classes/c"+req.params.codigo +"/descendencia")
  .then(dados=>{
    res.render("descendencia_2",{nivel2:dados.data})})
  .catch(erro => {res.jsonp(erro)})
})


//descendencia nivel 3 para um codigo
router.get("/codigo3/:id2", function(req,res){
  axios.get("http://clav-test.di.uminho.pt/api/classes/c"+req.params.id2)
  .then(dados=>{
    console.log(dados)
    res.render("descendencia_3",{nivel3:dados.data[0]})})
  .catch(erro => {res.jsonp(erro)})
})


module.exports = router;
