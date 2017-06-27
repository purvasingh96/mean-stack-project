var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var studentSchema = new Schema({
  name: {type: String,  required: true, unique: true},
  regno: {type: String,  required: true, unique: true}
});

studentSchema.pre('save', function(next) {
  var student = this;
  	next();
  });

module.exports = mongoose.model('Student', studentSchema); 

