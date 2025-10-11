const express = require("express");
const user = require("../model/user");
const router = express.Router();
const User = require('../model/user');



/* GET home page. */
router.get("/", function (req, res, next) {
  User.find({}, (e, data) => {
    if (e) throw e;
    res.render("index", { title: "Express", data });
  });
});

router.get("/add", function (req, res, next) {
  res.render("adduser", { title: "Add user" });
});
router.post('/add', (req, res) => {
  const {firstName, lastName, age, email, password} = req.body
  const user = new User({
    firstName,
    lastName,
    age,
    email,
    password,
  });
  user.save()
  res.redirect('/')
})



module.exports = router;