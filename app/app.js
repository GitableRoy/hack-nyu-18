const local_app = function () {}

local_app.prototype.init = function (app) {
	// express app available here
	// don't forget these routes will be available on production server server (defaults to localhost:5000)

  var mongoose = require('mongoose');
  mongoose.connect('mongodb://localhost/bahero')
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));;

  var test = require('./routes/test');
  app.use('/test', test);
}

module.exports = new local_app()
