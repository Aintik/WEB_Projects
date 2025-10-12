const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index',
    {
      title: 'Express',
      links: [
        { title: 'admins page', link: '/admins' },
        { title: 'users page', link: '/users' }
      ]
    });
});
router.get('/users', function (req, res, next) {
  res.render('index',
    {
      title: 'User page',
      links: [
        { title: 'index page', link: '/' },
        { title: 'admins page', link: '/admins' }
      ]
    });
});
router.get('/admins', function (req, res, next) {
  res.render('index',
    {
      title: 'Admin page',
      links: [
        { title: 'index page', link: '/' },
        { title: 'users page', link: '/users' }
      ]
    });
});

module.exports = router;
