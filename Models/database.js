const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/WebForge');
// then(() => {
//         console.log('Connect DataBase success');
//     })
//     .catch(() => {
//         console.log('Er')
//     })

module.exports = db;