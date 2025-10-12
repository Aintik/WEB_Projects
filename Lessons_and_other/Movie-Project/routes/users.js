const express = require("express");
const User = require("../model/Users");
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



/* GET users listing. */
router.get("/user", function (req, res, next) {
  User.find({}, (err, user) => { 
    if (err) throw err;
    res.json(user);
  })
});

router.get("/register", function (req, res, next) {
  res.send('Create a new user');
});
router.post("/register", function (req, res, next) {
  const { username, password } = req.body;
  User.findOne({ username }, (err, user) => { 
    if (err) throw err;
    if (user) res.send('This username already exists');
    else {
      bcrypt.hash(password, 10, (err, hash) => {
        if (err) throw err;
        new User({
          username,
          password: hash
        }).save(errSave => {
          if (errSave) throw errSave;
          res.send('Success of creation')
        })
      })
    }
  })
});


router.get("/authenticate", function (req, res, next) {
  res.send('Send user');
});
router.post("/authenticate", function (req, res, next) {
  const { username, password } = req.body;
  User.findOne({ username }, (err, data) => {
    if (err) throw err;
    if (!data) res.send("there no user with this username")
    else {
      bcrypt.compare(password, data.password, (error, result) => {
        if (error) throw error;
        if (!result) res.send("Password is wrong")
        else {
          // Success........
          const token = jwt.sign({ username }, 'key');
          res.send('succsess')
        }
      })
    }
  })
});


module.exports = router;