const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const database = require('./database');
const api = require('./routes/index');

const app = express()

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', api);

app.listen((3001),()=>{
    database.connect();
    console.log('Port is 3001...');
})
