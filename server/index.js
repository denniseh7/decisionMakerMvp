const express = require('express');
require('dotenv').config();
const path = require('path');

const router = require('./router');
const db = require('../database');

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// router
app.use('/', router);

// serve frontend
app.use(express.static(path.join(__dirname, '/../client/dist')));

// listener
const PORT = process.env.PORT || 3000;
app.listen(PORT);
console.log(`Server listening at http:/localhost: ${PORT}`);
