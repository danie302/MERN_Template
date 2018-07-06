// Dependencies
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  user_id: String,
  title: String,
  body: String,
  complete: Boolean,
});

const Task = module.exports = mongoose.model('Task', TaskSchema);

module.exports.addTask = (newTask, callback) =>{
  newTask.save(callback);
}

module.exports.userTasks = (userId, callback) => {
  const query = { user_id: userId };
  Task.find(query, callback)
}
