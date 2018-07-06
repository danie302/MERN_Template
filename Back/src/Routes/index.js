// Dependencies
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

// Models
const User = require('../Model/User');
const Task = require('../Model/Tasks');

const config = require('../Config/database');

router.post('/register', (req, res, next) => {
  let newUser = new User({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  })
  User.addUser(newUser, (err, user) => {
    if (err) {
      res.json({
        success: false,
        msg: "Error in the register of the user",
      });
    }
    if (user) {
      res.json({
        success: true,
        msg: "User register succeed"
      });
    }
  });
});

router.post('/login', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err, user) => {
    if(err) throw err;
    if (!user) {
      return res.json({success: false, msg: 'User not found'});
    }
    if(user){
      User.checkPassword(password, user.password, (err, isMatch) => {
        if(err) throw err;
        if(isMatch){

          const token = jwt.sign({data: user}, config.secret, {
            expiresIn: 604800 //1 week login
          });

          res.json({
            success: true,
            token: 'Bearer '+token,
            user: {
              id: user._id,
              name: user.name,
              username: user.username,
              email: user.email
            }
        });
      }else {
        return res.json({success: false, msg: 'Wrong password'});
      }
    });
    }
  });
});

router.post('/profile', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({user: req.user});
});

router.post('/addTask', passport.authenticate('jwt', { session: false }), (req, res) => {
  Tasks.addTask(req.body.task, (err, task) => {
    if (err) {
      res.json({
        success: false,
        msg: "Error creating the task",
      });
    }
    if (user) {
      res.json({
        success: true,
        msg: "Task created"
      });
    }
  });
});

router.post('/findTasks', passport.authenticate('jwt', { session: false }), (req, res) => {
  const userId = req.user._id;
  Tasks.userTasks(userId, (err, tasks) => {
    if(err) throw err;
    res.json(tasks);
  });
});

module.exports = router;
