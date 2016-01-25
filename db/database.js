var mongoose = require('mongoose');
var connectionString = 'mongodb://localhost/survey';

mongoose.connect(connectionString);

mongoose.connection.on('connected', function(){
  console.log('Mongoose has connected');
});

mongoose.connection.on('error', function(err){
  console.log("There was an error: " + err);
});
mongoose.connection.on('disconnected', function(){
  console.log('Disconnecting...');
});
