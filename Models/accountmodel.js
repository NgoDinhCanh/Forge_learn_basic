const db = require('./database')
const Schema = db.Schema;
const ObjectId = Schema.ObjectId;

const Account = new Schema({
    username: String,
    password: String,
    role: String
}, {
    collection: 'Account'
});
const accountmodel = db.model('Account', Account);
module.exports = accountmodel;