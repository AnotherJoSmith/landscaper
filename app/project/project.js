var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var projectSchema = new Schema({
  name: {type: String, min: 8},
  description: {type: String},
  created: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Project', projectSchema);
