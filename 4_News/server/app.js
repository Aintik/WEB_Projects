const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/news')
    .then(data => console.log('Mongo concected'))

const indexRouter = require('./routes/index');
const newsRouter = require('./routes/news');
const categoryRouter = require('./routes/category');
const locationRouter = require('./routes/location');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/news', newsRouter);
app.use('/category', categoryRouter);
app.use('/location', locationRouter);

const port = process.env.PORT || '3000'
app.listen(port, () => console.log('Listenning'));
