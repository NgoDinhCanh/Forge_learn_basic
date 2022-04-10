const path = require('path');
const express = require('express');
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000;
const config = require('./config');
const Account = require('./Controller/accountcontroller')
const admin = require('./Controller/admincontroller')
const user = require('./Controller/usercontroller')
const staff = require('./Controller/staffcontroller')


if (config.credentials.client_id == null || config.credentials.client_secret == null) {
    console.error('Missing FORGE_CLIENT_ID or FORGE_CLIENT_SECRET env. variables.');
    return;
}

let app = express();
app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json({ limit: '50mb' }));
app.use('/api/forge/oauth', require('./routes/oauth'));
app.use('/api/forge/oss', require('./routes/oss'));
app.use('/api/forge/modelderivative', require('./routes/modelderivative'));
app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.statusCode).json(err);
});
app.use('/login', Account);
app.use('/admin', admin);
app.use('/staff', staff);
app.use('/user', user);
app.listen(PORT, () => { console.log(`Server listening on port ${PORT}`); });