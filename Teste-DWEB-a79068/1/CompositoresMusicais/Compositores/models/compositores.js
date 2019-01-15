var mongoose = require('mongoose')
var Schema = mongoose.Schema

var CompositorSchema = new Schema({
   nome : {type:String},
   bio : {type:String},
   dataNasc : {type:String},
   dataObito : {type:String},
   periodo : {type:String},
   id : {type:String}

})

module.exports= mongoose.model("Compositores",CompositorSchema,"compositores")