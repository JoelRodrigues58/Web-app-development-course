var express = require('express');
var router = express.Router();
var Compositores = require("../../controllers/compositores")

//Todos os tweets
router.get("/",(req,res)=>{
    if(req.query.periodo && req.query.data){
        Compositores.compositoresPeriodoData(req.query.periodo,req.query.data)
        .then(dados=>res.jsonp(dados))
        .catch(erro => res.status(500).send('Erro na listagem de compositores.'))
    }else if(req.query.periodo) {
        Compositores.compositoresPeriodo(req.query.periodo)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).send('Erro na listagem de compositores.'))
    }else{
        Compositores.listar()
            .then(dados=>res.jsonp(dados))
            .catch(erro=> res.status(500).send('Erro na listagem de compositores.'))
    }

})

//Compositor por id
router.get("/:id",(req,res)=>{
    Compositores.compositor(req.params.id)
        .then(dados=>res.jsonp(dados))
        .catch(erro=>res.status(500).send("Erro ao listar um compositores."))
})



module.exports=router;