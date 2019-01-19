var mongoose = require('mongoose')
var Schema = mongoose.Schema

var Userchema = new Schema({
    email:{type:String},
    password:{type:String},
})


module.exports = mongoose.model('User',Userchema,'users')