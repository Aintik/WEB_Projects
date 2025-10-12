var express = require("express");
var router = express.Router();
const Admin = require('../models/Admin')

/* GET home page. */
router.get("/admins", function (req, res) {
  Admin.find({}, (err, data) => {
    if (err) throw err
    res.render("admins", { title: "Admins", data});
  })
});

router.get("/admins/add", function (req, res) {
  res.render("adminAdd", { title: "Add admin" });
});

router.post("/admins/add", function (req, res) {
  const { first, last, email, password } = req.body;

  let newAdmin = new Admin({
    first,
    last,
    email,
    password,
  });
  newAdmin.save().then((data2) => {
    res.redirect("/admins");
  });
});

router.get('/admins/adminDel/:_id', (req, res) => {
  Admin.findByIdAndDelete(req.params._id)
    .then(data => res.redirect("/admins"))
  })



module.exports = router;
