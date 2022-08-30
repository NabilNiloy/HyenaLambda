"use strict";
const moment = require('moment');




exports.findAll = function(req, res) {
    const findAll = require('../models/customer.js').findAll;
    findAll(function(err, customer) {
        // console.log("controller");
         if (err) throw err;
         //console.log("res", customer);
         res.render('home', {title: 'Quickscore Devices', customerData: customer})
         //res.send(customer);
    })

};


exports.findById = function(req, res) {
    const findById = require('../models/customer.js').findById;
    findById(req.params.custId, function(err, logs) {
        //console.log('controller: findById');
        if (err) res.send(err);
        // this decides how to send the data
    
        res.render('dashboard', {logs, customerName: req.params.customerName, moment: moment})

    });

};

