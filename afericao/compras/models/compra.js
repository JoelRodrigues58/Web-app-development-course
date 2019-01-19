var mongoose = require('mongoose')
var Schema = mongoose.Schema

var CompraSchema = new Schema({
    produto:{type:String},
    quantidade:{type:String},
    quem:{type:String},
    data:{type:String},
    estado:{type:String}
})

module.exports = mongoose.model('Compra',CompraSchema,'compras')