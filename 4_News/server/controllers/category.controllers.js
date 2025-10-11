const Category = require('../model/Category')

// Create Category
const create = async (req, res, next) => {
    let data = await Category.create(req.body)
    res.json({ message: 'Category craeted', data }).status(201)
}

// Get All Categories
const all = async (req, res, next) => {
    let data = await Category.find({})
    res.json({ message: 'All Categories', data }).status(201)
}

// Delete Category by id
const del = async (req, res, next) => {
    const id = req.params.id

    let data = await Category.findByIdAndDelete(id)
    res.json({ message: 'Category deleted', data }).status(201)
}

// Update Category
const update = async (req, res, next) => {
    const id = req.params.id
    let data = await Category.findByIdAndUpdate(id, req.body)
    res.json({ message: 'Category updated', data }).status(201)
}


module.exports = {
    create,
    all,
    del,
    update
}