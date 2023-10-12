const express = require('express');
const knex = require('knex');
const bodyParser = require('body-parser');


// initialise app and routes;
const app = express();
app.use(bodyParser.json());

// export app
module.exports = app;