
const express = require('express');

const route = express.Router();

const backcontrollers = require('../controllers/backcontroller');

route.use('/addpro',backcontrollers.adding);

module.exports = {
    "route": route,
}