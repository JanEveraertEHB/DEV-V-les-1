const express = require('express');
const knex = require('knex');
const bodyParser = require('body-parser');


// require and manage database connection
const knexfile = require('./db/knexfile'); // Import your Knex configuration
const db = knex(knexfile.development);


// initialise app and routes;
const app = express();
app.use(bodyParser.json());

// export app
module.exports = app;