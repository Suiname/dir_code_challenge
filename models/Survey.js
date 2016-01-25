var mongoose = require('mongoose');
var SurveySchema = new mongoose.Schema({
  age: Number,
  gender: String,
  software: String,
  otherSoftware: String,
  features: String,
  wish: String
});

module.exports = mongoose.model("Surveys", SurveySchema);
