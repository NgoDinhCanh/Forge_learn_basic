const express = require('express');
const staff = express.Router();
const path = require('path');

staff.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../Views'))
})

module.exports = staff;