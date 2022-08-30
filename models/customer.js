const connection = require('../config/mysqlConfg.js');
const appConfig = require('../config/appConfig.js');




let findAll = function(callback) {
    connection.query("SELECT * FROM " + appConfig.deviceTable, function(err, res) {
        if (err) {
            callback(err, null);
        } else {
            callback(null, res);
        }
    });
};


let findById = function(custId, callback) {

    let sql = "SELECT * FROM  " + appConfig.logTable + "  WHERE qslogv2.custId = ? ORDER BY date DESC LIMIT 6;"
    connection.query(sql, custId, function(err, res) {
        if (err) {
            console.log('error: ', err);
            callback(err, null)
        } else {
            callback(null, res);
    
        }
    });
};


module.exports.findAll = findAll;
module.exports.findById = findById;

