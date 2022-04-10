const express = require('express');
const admin = express.Router();
const path = require('path');

admin.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../Views'))
})

module.exports = admin;