const express = require('express');
const router = express.Router();
const createLoginController = require('./login');
const createDepartmentUserController = require('./department-user');

createLoginController(router);
createDepartmentUserController(router);

module.exports = router;
