var User = require('../../models/users')

//Lista de utilizadores
module.exports.listar =() =>{
    return User
        .find()
        .exec()
}

//Lista de utilizadores pelo nome e id
module.exports.listarNP =(email,password) =>{
    return User
        .find({email:email,password:password})
        .exec()
}

//Insere um utilizador
module.exports.inserir = user =>{
    return User.create(user)
}


