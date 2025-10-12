const express = require("express");
const router = express.Router();
const User = require('../model/users')
const bcrypt = require('bcrypt');

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
// Sign Up
router.get("/signup", function (req, res, next) {
  res.render('signup', {title: 'Sign Up'})
});
router.post("/signup", function (req, res, next) {
  const { firstname, lastname, email, password } = req.body;
  if (!firstname || !lastname || !email || !password) { 
    res.render('signup', { title: 'Sign Up', message: 'Fill the form' })
  }
  User.findOne({ email }, (none, user) => {
    if (user) res.render('signup', { title: 'Sign Up', message: 'This email already exists' })
    else {
      bcrypt.hash(password, 10, (err, hash) => {
        if (err) throw err
        else {
          new User({
            firstname, lastname, email, password: hash
          }).save((error, data) => { 
            if (error) throw error
            else res.redirect('/')
        })
        }
      })
    }
  })
});


const jwt = require("jsonwebtoken");


// Sign In
router.get('/signin', (req, res, next) => {
  res.render('signin', { title: 'Sign In'})
})
router.post("/signin", (req, res, next) => {
  const { email, password } = req.body;
  User.findOne({ email }, (none, user) => {
    if (!user) res.render('signin', { title: 'Sign In', message: 'There no user with that email' })
    else {
      bcrypt.compare(password, user.password, (err, data) => {
        if (err) throw err;
        if (!data)
          res.render("signin", {
            title: "Sign In",
            message: "Password is wrong",
          });
        else {
          req.session.isTrue = true;

          /* const token = jwt.sign({ email }, 'Key', (errtoken, token) => {
            if (errtoken) throw errtoken;
            res.render('index', { title:'Express', token})
          }) */
          res.redirect("/");
        }
      });
    }
  })
});




module.exports = router;