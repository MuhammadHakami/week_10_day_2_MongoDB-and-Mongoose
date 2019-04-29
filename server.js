require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT;
const Company = require('./models/company');
const app = express();
app.get('/company', (req, res) => {
    res.send('index');
});
app.listen(() => console.log("Server is working at port 7000"));
