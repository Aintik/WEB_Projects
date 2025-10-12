const express = require("express");
const router = express.Router();


/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});


router.get("/logout", function (req, res, next) {
  req.session.destroy((err) => {
    if (err) throw err
    res.render("index", { title: "Express" });
  })
});

module.exports = router;
