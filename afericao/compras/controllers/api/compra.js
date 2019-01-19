var Compra = require('../../models/compra')

//Lista de compras
module.exports.listar =() =>{
    return Compra
        .find()
        .sort({sort:-1})
        .exec()
}

//Lista as compras do estado X
module.exports.listarEstado = estado =>{
    return Compra 
        .find({estado:estado})
        .exec()
}


//Insere uma compra
module.exports.inserir = compra =>{
    return Compra.create(compra)
}

