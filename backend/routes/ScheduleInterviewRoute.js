'use strict';
let scheduleInterview = require('express').Router();
let cPool = require('./../config/ConnectionPool');
let logger = require('./../logger/LogConfig');

scheduleInterview.get('/getInterviewers', (req, res) => {
  logger.info('getInterviewers post request started.');
  cPool(res, (conn) => {
    conn.query('call sp_select_interviewers()', (errs, rows) => {
      conn.release();
      logger.info('getInterviewers post request ended.');
      return res.json({ status: (errs == null ) ? 1 : 0, response: (errs) ? errs : rows[0]});
    });
  });
});
 




module.exports =scheduleInterview;