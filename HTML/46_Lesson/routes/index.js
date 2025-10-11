var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',
    {
      title: 'Express',
      links: [
        {
          link: '/contact',
          name: 'Contact',
        },
        {
          link: '/admin',
          name: 'admin page'
        }
      ]
    });
});
router.get('/contact', function (req, res, next) {
  res.render('index',
    {
      title: 'Contact',
      links: [
        {
          link: '/',
          name: 'Main page'
        },
        {
          link: '/admin',
          name: 'admin page'
        }
      ]
    });
});


module.exports = router;