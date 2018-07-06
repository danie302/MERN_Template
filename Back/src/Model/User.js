// Dependencies
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  username: String,
  email: String,
  password: String,
  task: [{
    title: String,
    body: String,
    complete: Boolean
  }]
});

const User = module.exports = mongoose.model('User', UserSchema);
const saltRounds = 10;

module.exports.getUserById = (id, callback) => {
  User.findOne(id, callback);
}

module.exports.getUserByUsername = (username, callback) => {
  const query = { username: username }
  User.findOne(query, callback);
}

module.exports.addUser = (newUser, callback) => {
  bcrypt.genSalt(saltRounds, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if(err) throw err;
      newUser.password = hash;
      newUser.save(callback);
    });
  });
}

module.exports.checkPassword = (TryPassword, hash, callback) => {
  bcrypt.compare(TryPassword, hash, (err, isMatch) => {
    if(err) throw err;
    callback(err, isMatch);
  });
}

module.exports.addTask = (newTask, NewUserId, callback) =>{
  User.updateOne(newUserId, { $push: newTask }, (err, isUpdate) => {
    if(err) throw err;
    callback(null, isUpdate);
  });
}
