const express = require('express');
const user = express.Router();
const path = require('path');

user.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../VIews'))
})

module.exports = user;