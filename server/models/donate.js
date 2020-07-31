var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Donor = new Schema({
  name:{
    type:String,
    required:true
  },
  username:{
    type:String,
    required:true
  },
  contactNumber:{
    type:String,
    required:true
  },
  date:String,
  people:Number,
  type:{
    type:String,
    required:true
  },
  camp:{
    type:String,
    required:true
  },
  comment:String
});
module.exports = mongoose.model('Donor', Donor);