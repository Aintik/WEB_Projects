const express = require('express');
const router = express.Router();
const {
    all,
    create,
    update,
    del
} = require('../controllers/category.controllers');


// Get All Categories
router.get('/', all);

// Create Category
router.post('/', create);

// Update Category 
router.put('/:id', update);

//Delete Categories by id
router.delete('/:id', del);


module.exports = router;