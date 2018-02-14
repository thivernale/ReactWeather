// create a variable
// require - node keyword to load the module
// 'express' - module name
var express = require('express');
// now we have access to the entire Express API

// create a new app:
// call express library as a function with no args
var app = express();

// tell the server which folder to serve
// 'use' adds functionality to an Express app
// specify a folder name that we want to expose to the web server
app.use(express.static('public'));

// start the server:
// specify port and a function that gets called when the server is up
app.listen(3000, function() {
    console.log('Express server is up on port 3000');
});
