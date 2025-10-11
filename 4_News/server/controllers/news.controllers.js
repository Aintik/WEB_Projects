const News = require('../model/News')

// Create a new
const create = (req, res, next) => {
    News.create(req.body).then(data => {
        res.json({ message: 'New craeted', data }).status(201)
    })
}

// Get All News
const all = async (req, res, next) => {
    let data = await News.find({}).populate([{ path: "location" }, { path: "categories" }])
    res.json({ message: 'All News', data }).status(201)
}

// Delete New by id
const del = async (req, res, next) => {
    const id = req.params.id

    let data = await News.findByIdAndDelete(id)
    res.json({ message: 'New deleted', data }).status(201)
}

// Update New
const update = async (req, res, next) => {
    const id = req.params.id
    // const { title, img, description, addCategory, removeCategory, location, addInfo, removeInfo } = req.body;
    // News.findById(id, "categories", (err, item) => {
    //     if (err) throw err;
    //     item.categories.map(one => {
    //         if (one == addCategory) res.send('This category already added')
    //     })
    // })
    // let data = await News.findByIdAndUpdate(id, {
    //     title,
    //     img,
    //     description,
    //     $push: { categories: addCategory, informations: addInfo },
    //     $pull: { categories: removeCategory, informations: removeInfo },
    //     location,
    // })
    let data = await News.findByIdAndUpdate(id, req.body)

    res.json({ message: 'New updated', data }).status(201)
}

// Show one New
const show = async (req, res, next) => {
    const id = req.params.id

    let data = await News.findById(id)
    let viewed = await News.findByIdAndUpdate(id, { viewed: ++data.viewed })
        .populate([{ path: "location" }, { path: "categories" }])

    res.json({ message: 'New Show', viewed }).status(201)
}

// last days news
const lastDays = async (req, res, next) => {
    let lastdays = req.params.num
    let dayDate = new Date(Date.now() - lastdays * 24 * 60 * 60 * 1000);
    let data = await News.find(
        {
            "createdAt": {
                "$gte": dayDate
            }
        }
    )
        .populate([{ path: "location" }, { path: "categories" }])

    res.json({ message: `last ${lastdays} days news`, data }).status(201)
}

// one Category news
const byCateg = async (req, res, next) => {
    const categId = req.params.categId
    let data = await News.find({ categories: categId })
        .populate([{ path: "location" }, { path: "categories" }])

    res.json({ message: 'News by Category', data }).status(201)
}

// one location news
const byLocal = async (req, res, next) => {
    const localId = req.params.localId
    let data = await News.find({
        location: localId
    })
        .populate([{ path: "location" }, { path: "categories" }])

    res.json({ message: 'New by location', data }).status(201)
}

// by category and location
const byBoth = async (req, res, next) => {
    const { localId, categId } = req.params
    let data = await News.find({ categories: categId, location: localId })
        .populate([{ path: "location" }, { path: "categories" }])

    res.json({ message: 'new by category and location', data }).status(201)
}





module.exports = {
    create,
    all,
    del,
    update,
    show,
    lastDays,
    byCateg,
    byLocal,
    byBoth,
}