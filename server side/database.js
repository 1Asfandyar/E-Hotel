
const mongoose = require('mongoose');

const connect = () => {
    const url = 'mongodb://localhost:27017/e_hotel';
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    var db = mongoose.connection;
    db.on('error', err => {
        console.log(err);
    });
    db.once('open', () => {
        console.log('Database Connected Successfuly')
    })
}

module.exports = { connect };