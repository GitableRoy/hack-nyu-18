var mongoose = require('mongoose');

var TestSchema = new mongoose.Schema({
  first: String,
  last: String,
  email: String,
  username: String
});

module.exports = mongoose.model('Test', TestSchema);
