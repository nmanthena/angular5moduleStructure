'use strict';
const mysql = require('mysql');
const db=require('./Database');
const messages = require('./../config/MessageFactory');

const pool      =    mysql.createPool({
    host     : db.host,
    user     : db.user,
    password : db.password,
    database : db.database,
    connectionLimit : db.connections,
    debug    :  false,
    multipleStatements: true
});  
/* This function retuns connection from connection pool*/
const getConnection = function(res,callback) {
    pool.getConnection(function(err, conn) {
    if (err != null) {
        return res.json({status: 0, response: messages.DATABASE_ERROR});
    }
    callback(conn);
    });
};
module.exports = getConnection;
//connection.release();