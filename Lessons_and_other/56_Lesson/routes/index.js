const express = require('express');
const router = express.Router();
const User = require('../model/User')

const multer = require('multer');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads')
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now() + file.originalname}`)
  }
})
const upload = multer({ storage })

/* GET home page. */
router.get('/', function (req, res, next) {
  User.find({}, (err, data) => {
    if (err) return err;
    res.render('index', { title: 'Express', data });
  })
});

router.post('/', upload.array('file', 12), function (req, res, next) {
  let arrOfFiles = [];
  req.files.forEach(file => arrOfFiles.push(file.filename));
  new User({
    first: req.body.first,
    file: arrOfFiles
  }).save((err) => {
    if (err) return err;
    res.redirect("/");
  });
});





module.exports = router;