// Dependencies
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const User = require('../Model/User');
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

router.get('/addTask', passport.authenticate('jwt', { session: false }), (req, res) => {
  User.addTask(req.body.task, req.user._id, (err, isUpdate) => {
    if(err) throw err;
    if(isUpdate){
      return res.json({success: true, msg: "Tweet Post"});
    }
  });
});

module.exports = router;
