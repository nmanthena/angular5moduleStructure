'use strict';
let express = require('express');
var app = express.Router();
let cPool = require('./../config/ConnectionPool');
let logger = require('./../logger/LogConfig');

app.get('/interviewerFeedback', (req, res) => {
  logger.info('interviewer Feedback post request started.');
  cPool(res, (conn) => {
    conn.query('call sp_select_profile_info_for_interview_feedback(?)',[2], (errs, rows) => {
      //req.query.candidateRecruitmentId
      conn.release();
      logger.info('interviewer Feedback post request ended.');
      return res.json({ status: (errs == null ) ? 1 : 0, response: (errs) ? errs : rows});
    });
  });
});

// jobRouter.post('/createNewJob', (req, res) => {
//   logger.info('jobinfo post request started.');
//   logger.info('Resp'+ console.log(Object.values(req.body)));
//   //return res.json({ status:0, response: {}});
//   cPool(res, (conn) => {
//     conn.query('call sp_insert_create_new_job(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',Object.values(req.body), (errs, rows) => {
//       conn.release();
//       logger.info('jobinfo post request ended.');
//       return res.json({ status: (errs == null ) ? 1 : 0, response: (errs) ? errs : rows});
//     });
//   });
// });




module.exports =app;