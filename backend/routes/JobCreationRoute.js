'use strict';
let jobRouter = require('express').Router();
let cPool = require('./../config/ConnectionPool');
let logger = require('./../logger/LogConfig');

jobRouter.post('/jobinfo', (req, res) => {
  logger.info('jobinfo post request started.');
  cPool(res, (conn) => {
    conn.query('call sp_select_create_job_info()', (errs, rows) => {
      conn.release();
      logger.info('jobinfo post request ended.');
      return res.json({ status: (errs == null ) ? 1 : 0, response: (errs) ? errs : rows});
    });
  });
});

jobRouter.post('/createNewJob', (req, res) => {
  logger.info('jobinfo post request started.');
  cPool(res, (conn) => {
    conn.query('call sp_insert_create_new_job(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',Object.values(req.body), (errs, rows) => {
      conn.release();
      logger.info('jobinfo post request ended.');
      return res.json({ status: (errs == null ) ? 1 : 0, response: (errs) ? errs : rows});
    });
  });
});

jobRouter.post('/getJobInfo', (req, res) => {
  logger.info('getJobInfo post request started.');
  cPool(res, (conn) => {
    conn.query('call sp_select_recruitment_info(?)',req.body.recruitementId, (errs, rows) => {
      conn.release();
      logger.info('getJobInfo post request ended.');
      return res.json({ status: (errs == null ) ? 1 : 0, response: (errs) ? errs : rows});
    });
  });
});
jobRouter.post('/updateJobInfo', (req, res) => {
  logger.info('updateJobInfo post request started.');
  cPool(res, (conn) => {
    conn.query('call sp_update_recruitment_info(?,?,?)',Object.values(req.body), (errs, rows) => {
      conn.release();
      logger.info('updateJobInfo post request ended.');
      return res.json({ status: (errs == null ) ? 1 : 0, response: (errs) ? errs : rows});
    });
  });
});

module.exports =jobRouter;