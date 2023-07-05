var mongoose = require("mongoose")

var Schema = mongoose.Schema;

var userSchema = new Schema( {
    name:String,
    age:Number,
    email:String,
    bio:String
},{timeStamp:true})



var User = mongoose.model('User', userSchema);

module.exports = User;