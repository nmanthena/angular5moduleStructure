'use strict';
let express = require('express');
let router = express.Router();
let cPool = require('./../config/ConnectionPool');
let logger = require('./../logger/LogConfig');

/* GET candidate assesment skills. */
router.get('/getRecruitmentAssessmentSkills', (req, res)=> {
  logger.info('getRecruitmentAssessmentSkills get request started.');
  cPool((con, err)=> {
    if (err != null) {
      return res.json({status: 0, resp: 'Database connection failure'});
    }
    con.query('CALL sp_select_recruitment_skill_set(?)',[req.body.recruitmentId], (errs, rows)=> {
      con.release();
      if (errs) {
        logger.error(errs);
        return res.json({ status: 0, response: [] });
      }
      logger.info('data .' + rows[0]);
      logger.info('getRecruitmentAssessmentSkills get request end.');
      return res.json({ status: 1, response: rows[0] });
    });
  });
  
});

/* GET candidate assesment skills. */
router.post('/approveCandidateByManager', (req, res)=> {
  logger.info('approveCandidateByManager post request started.');
  cPool((con, err)=> {
    if (err != null) {
      return res.json({status: 0, response: 'Database connection failure'});
    }
    //req.body.recruitmentId,req.body.candidateId,req.body.status - 0 1 2 3
    //req.body.comment
    //req.body.interviewType,req.body.interviewerId,req.body.conveinentSlots.
      let requiredData = [];
      
    con.query('call sp_update_approve_candidate_interview_status(?,?,?,?,?,?,?,?)', requiredData,(errs, rows)=> {
      con.release();
      if (errs) {
        logger.error(errs);
        return res.json({ status: 0, response: [] });
      }
      logger.info('approveCandidateByManager post request end.');
      return res.json({ status: 1, response: rows[0] });
    });
  });
});
 
module.exports = router;
