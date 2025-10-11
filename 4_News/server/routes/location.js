const express = require('express');
const {
    all,
    create,
    update,
    del
} = require('../controllers/location.controller');
const router = express.Router();


// Get All Locations
router.get('/', all);

// Create Location
router.post('/', create);

// Update Location
router.put('/:id', update);

//Delete Location by id
router.delete('/:id', del);


module.exports = router;