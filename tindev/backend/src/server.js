const express = require('express');
const mongoose =  require('mongoose');
const cors =  require('cors');

const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://tindev:tindev01@cluster0-xghod.mongodb.net/omnistack8?retryWrites=true&w=majority',{
    useNewUrlParser: true
});

server.use(cors());
server.use(express.json()); 
server.use(routes);

server.listen(8081);