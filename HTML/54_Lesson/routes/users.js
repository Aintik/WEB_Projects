const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require('../model/User');
const { routes } = require("../app");

/* GET users listing. */
router.get("/signup", function (req, res, next) {
  res.render('users/signup', { title: 'Sign up' });
});
router.post("/signup", function (req, res, next) {
  const { login, password } = req.body;
  if (!login) res.render('users/signup', { title: 'Sign up failed', message: 'Please enter a login' });
  if (login) {
    bcrypt.hash(password, 10, (err, data) => {
      if (err) throw err
      const person = new User({ login, password: data }); 
      person.save((err, data) => {
        if (err) {
          if (err.code === 11000) res.render('users/signup', { title: 'Sign up', message: 'This login already exists' })
          else throw err;
        } else res.redirect('/')
      })
    })
  }
});

router.get("/signin", function (req, res, next) {
  res.render("users/signin", { title: "Sign in" });
});
router.post("/signin", function (req, res, next) {
  const { login, password } = req.body;
  User.findOne({ login }, (errOfFind, data) => {
    if (errOfFind) throw errOfFind
    if (!data) res.render("users/signin", {
      title: "Sign in",
      message: "there no user with that login",
    });
    else {
      bcrypt.compare(password, data.password, (error, hash) => {
        if (error) throw error;
        if (hash) {
          res.render("index", { title: 'Express', message: 'Success' });
        } else res.render("users/signin", { title: "Sign in", message: "Password is wrong" });
      });
    }
  })

});


module.exports = router;