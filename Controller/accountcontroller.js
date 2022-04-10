const express = require('express');
const db = require('./database')
const Account = express.Router();
const path = require('path');
const accountmodel = require('../Models/accountmodel')
Account.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../Views') + '/login.html');
})

module.exports = Account;