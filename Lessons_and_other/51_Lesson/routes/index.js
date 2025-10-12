const express = require('express');
const router = express.Router();

function admin(req, res, next) {
  if (!isAdmin) {
    res.render('error', { message: 'No way', error: { status: 404 } });
  } else {
    next()
  }
}

let isAdmin = 1;

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.get('/editor', admin, (req, res, next) => {
  res.render('admin', { title: 'Editor' });
});



module.exports = router;
