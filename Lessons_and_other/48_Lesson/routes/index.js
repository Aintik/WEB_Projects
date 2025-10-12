const express = require('express');
const router = express.Router();
const User = require('../model/user')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get('/add', (req, res) => {
//   const user = new User({
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 23,
//     password: '1234',
//     email: 'john@example.com'
//   })
//   user.save((err, data) => {
//     if (err) throw err;
//     res.send(data)
//   })
// })

router.get('/adduser', (req, res) => { 
  res.render('adduser', { title: 'Add User' });
})



module.exports = router;
