const express = require('express');
const router = express.Router();
const createLoginController = require('./login');

createLoginController(router);

module.exports = router;
