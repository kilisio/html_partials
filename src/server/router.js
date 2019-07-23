"use strict";

// imports
var express = require('express');
var helmet = require('helmet');
var path = require('path');


// global express server variables
var app = express();

var setContentType = function(type) {
    return function(req, res, next) {
        res.setHeader('Content-Type', 'text/' + type);
        next();
    };
};

// execute helmet before responding to requests
app.use(helmet());

//set default path to web app resources
app.use('/assets',  express.static(path.join( __dirname, '..', 'components/assets' )));
app.use('/db',  express.static(path.join( __dirname,  '..', 'components/db' )));
app.use('/log',  express.static(path.join( __dirname,  '..', 'components/log' )));

// web application routes


// start server
var port = process.env.PORT || 8080;
app.listen(port);
// console.log('listening on port ' + port);
