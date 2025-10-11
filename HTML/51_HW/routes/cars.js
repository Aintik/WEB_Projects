var express = require("express");
const { findById } = require("../models/Car");
var router = express.Router();
const Car = require('../models/Car')

let isAdmin = false

function admin(req,res,next) {
  if (!isAdmin) {
     res.render("error", {
       message: "u are not admin",
       error: { status: "404" },
     });
  } else {
      next()
    }
}


/* GET home page. */
router.get("/cars", function (req, res) {
  Car.find({}, (err, data1) => {
    if(err) throw err

    res.render("cars", { title: "Cars", data1, isAdmin});
  })
});

router.get("/cars/add", admin, function (req, res) {
  res.render("carsAdd", { title: "Add car" });
});

router.post("/cars/add", function (req, res) {

  const { mark, color, type, key } = req.body

  let newCar = new Car({
    mark,
    color,
    type,
    key,
  });
  newCar.save()
    .then(data2 => {
      res.redirect("/cars");
    })

});

router.get("/cars/carDel/:id", admin, function (req, res) {
  Car.findByIdAndDelete(req.params.id)
    .then(data => res.redirect("/cars"))
});

router.get("/cars/carEdit/:id", admin, function (req, res) {
  Car.findById(req.params.id, (err, dataOld) => {
    if (err) throw err
    res.render('carsUpdate', {dataOld})
  });
});
router.post("/cars/carEdit/:id", function (req, res) {
  const {mark, color, type, key} = req.body
  Car.findByIdAndUpdate(req.params.id,
    {
      mark,
      color,  
      type,
      key,
    },
    (err, data) => {
      if (err) throw err;
      res.redirect("/cars");
    }
  );
});

module.exports = router;