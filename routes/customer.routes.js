const express = require('express');
const connection = require('../config/mysqlConfg.js');
const router = express.Router();

const CustomerController = require('../controllers/customer.controller.js');
const Customer = require('../models/customer.js');
const secondRound = require('../models/customer.js');


//route to search by custId
router.get('/', CustomerController.findAll);
router.get('/dashboard/:customerName/:custId', CustomerController.findById);
//router.get('/dashboard/:custId', CustomerController.findRecentActivity);




module.exports = router;