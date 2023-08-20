const express = require('express');
const app = new express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('morgan');
const cors = require('cors');
const tasksRoute = require('./routes/taskRoute');
const path = require('path');

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
});

app.use(tasksRoute);

app.use(express.static(path.join(__dirname, 'frontend')));

// last route
app.get('*', async(req, res)=>{
    res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

mongoose.connect('mongodb+srv://VaisakhVijayan:Nowuseeme@cluster0.9dpttcy.mongodb.net/Database3?retryWrites=true&w=majority').then(result =>{  
    console.log('Connected');
    app.listen(3000);
}).catch(err => {
    console.log(err);
});