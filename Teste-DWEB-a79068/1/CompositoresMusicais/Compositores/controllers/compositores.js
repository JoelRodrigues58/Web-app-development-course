var Compositores = require("../models/compositores")


//Todos os compositores
module.exports.listar = () =>{
    return Compositores
        .find({},{id:true,nome:true,dataNasc:true})
        .exec()
}

//Um compositores por id
module.exports.compositor = id =>{
    return Compositores
        .find({id:id})
        .exec()
}

//Compositores por periodo
module.exports.compositoresPeriodo = periodo =>{
    return Compositores
        .find({periodo:periodo})
        .exec()
}

//Compositores por periodo e data
module.exports.compositoresPeriodoData = (periodo,data) => {
    return Compositores
        .find({dataNasc: {$gt: data}, periodo: periodo})
        .exec()
}