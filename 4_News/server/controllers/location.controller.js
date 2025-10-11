const Location = require('../model/Location')

// Create Location
const create = async (req, res, next) => {
    let data = await Location.create(req.body)
    res.json({ message: 'Location craeted', data }).status(201)
}

// Get All Locations
const all = async (req, res, next) => {
    let data = await Location.find({})
    res.json({ message: 'All Locations', data }).status(201)
}

// Delete Location by id
const del = async (req, res, next) => {
    const id = req.params.id

    let data = await Location.findByIdAndDelete(id)
    res.json({ message: 'Location deleted', data }).status(201)
}

// Update Location
const update = async (req, res, next) => {
    const id = req.params.id

    let data = await Location.findByIdAndUpdate(id, req.body)
    res.json({ message: 'Location updated', data }).status(201)
}


module.exports = {
    create,
    all,
    del,
    update,
}