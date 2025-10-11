const express = require('express')
const path = require('path')
const app = express()
const dotenv = require('dotenv')

dotenv.config()
console.log(process.env)

app.set('view engine', "hbs")
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send("Server opened")
})
app.get('/index', (req,res) => {
    res.render('index.hbs')
})






app.listen(3000, () => console.log('3000 port opened'))