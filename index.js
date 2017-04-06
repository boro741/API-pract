const express = require('express');
const routes = require('./route/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Setting up express app
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;

// Middlewares

app.use(express.static('public'));

app.use(bodyParser.json());
// Initialize routes
app.use('/api',routes);

// Error Handling Middleware
app.use(function(err, req, res, next){
  res.status(422).send({error: err.message});
});
// Listen for request
app.get('/api', function(req,res){
  res.send({name: 'Yash'});
});

app.listen(process.env.port || 4000, function() {
  console.log('now listening for request');
});
