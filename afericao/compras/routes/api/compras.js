var express = require('express');
var router = express.Router();
var Compra = require('../../controllers/api/compra')


//Compra segundo o estado
router.get('/:estado',(req,res)=>{
    Compra.listarEstado(req.params.estado)
        .then(dados=>res.jsonp(dados))
        .catch(erro => res.status(500).send('Erro na listagem da compra segundo o estado.'))
})


//listar compras
router.get('/',(req,res)=>{
    Compra.listar()
        .then(dados=>res.jsonp(dados))
        .catch(erro => res.status(500).send('Erro na listagem de compras.'))
})

//Inserir compra
router.post('/',(req,res)=>{
    Compra.inserir(req.body)
        .then(dados=>res.jsonp(dados))
        .catch(erro => res.status(500).send('Erro na inserção de uma compra.'))
})


module.exports=router;