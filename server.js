const express = require('express');

const app = express();

const db = require('./db.js');

require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json())

const PORT = process.env.PORT || 5000;

const userRoutes = require('./routes/userRoutes.js');
const candidateRoutes = require('./routes/candidateRoutes.js');

app.use('/user', userRoutes);
app.use('/candidate', candidateRoutes);

app.listen(PORT, ()=>{
    console.log("Listening on port: 5000")
});