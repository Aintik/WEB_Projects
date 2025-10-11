const express = require('express');
const router = express.Router();
const {
    create,
    all,
    del,
    update,
    show,
    lastDays,
    byCateg,
    byLocal,
    byBoth
} = require('../controllers/news.controllers');


// Get All News
router.get('/', all);

// News in last week
router.get('/lastdays/:num', lastDays);

// new by category
router.get('/byCategory/:categId', byCateg);

// new by location
router.get('/byLocation/:localId', byLocal);

// new by Both
router.get('/byBoth/:localId/:categId', byBoth);

// Get one New
router.get('/:id', show);

/* Create new */
router.post('/', create);

// Update New 
router.put('/:id', update);

//Delete New by id
router.delete('/:id', del);



module.exports = router;