var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');
var User = new Schema({
  name: {
    type: String,
    required:true
  },
  username:String,
  password: {
    type: String,
    required:true
  },
  contactNumber:{
    type:Number,
    required:true
  }
});
User.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', User);