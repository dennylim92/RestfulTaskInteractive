var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/RestfulTask', {useFindAndModify: false});

var TaskSchema = new mongoose.Schema({
  title: {type: String},
  description: {type: String, default: " "},
  completed: {type: Boolean, default: false}
}, { timestamps: true });

mongoose.model('Task', TaskSchema);
var Task = mongoose.model('Task');

module.exports = Task;