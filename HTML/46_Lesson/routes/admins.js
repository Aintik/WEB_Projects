var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index.hbs',
        {
            title: 'Admin',
            links: [
                {
                    link: '/admin/add',
                    name: 'Add Admin',
                },
                {
                    link: '/',
                    name: 'Main'
                }
            ]
        });
});
router.get('/add', function (req, res, next) {
    res.render('index.hbs',
        {
            title: 'Admin add',
            links: [
                {
                    link: '/',
                    name: 'Main',
                },
                {
                    link: '/admin',
                    name: 'admin page'
                }
            ]
        });
});


module.exports = router;