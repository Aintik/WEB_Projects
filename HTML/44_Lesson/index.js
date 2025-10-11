//Requiring EXPRESS
const express = require('express')
const app = express()

const path = require('path')

//Requiring HANDLEBARS
const {engine} = require('express-handlebars')
app.engine('.hbs', engine({ extname: '.hbs'}))
app.set('view engine', '.hbs')
//public
app.use(express.static(path.join(__dirname, 'public')))



app.get('/', (req, res) => {
    res.send(' <h1>Welcome to server</h1> ')
})
app.get('/index', (req, res) => {
    res.render('index.hbs', { title: 'Express'})
})
app.get('/contact', (req, res) => {
    res.render('contact.hbs')
})
app.get('/user', (req, res) => {
    res.render('user.hbs')
})
app.get('/error', (req, res) => {
    res.render('error.hbs')
})
app.get('/register', (req, res) => {
    res.render('register.hbs')
})




// which port
app.listen(3000, () => console.log('server 3000 port'))