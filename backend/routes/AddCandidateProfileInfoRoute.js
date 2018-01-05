'use strict';
let express = require('express');
let router = express.Router();
let cPool = require('./../config/ConnectionPool');
let logger = require('./../logger/LogConfig');


/* GET candidate assesment skills. */
router.post('/getRecruitmentAssessmentSkills', (req, res)=> {
  logger.info('getRecruitmentAssessmentSkills get request started.');
  cPool(res,(con)=> {
		con.query('call sp_select_recruitment_skill_set(?);',[req.body.recruitmentId],(errs, rows)=> {
    con.release();
    let response ={};
    response.personalAssesment = rows[0];
    response.jdSkillSet = rows[1];
    response.location = rows[2];
    response.sourceOfResume = rows[3];
    
    return res.json({status: ( errs == null && rows[0].length > 0 )?1:0, response:(errs)?errs:response});
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

/* GET candidate assesment skills. */
router.post('/addCandidateProfile', (req, res)=> {
  logger.info('addCandidateProfile post request started.');
  let resumePath = 'naukriuser.doc';
  let data = [
    req.body.recruitmentId,
    req.body.firstName,
    req.body.lastName,
    req.body.middleName,
    req.body.phone,
    req.body.email,
    req.body.designationId,
    req.body.createdBy,
    req.body.exp,
    req.body.relevantExp,
    req.body.sourceId,
    resumePath,
    req.body.fixedSalary,
    req.body.variablePay,
    req.body.bonus,
    req.body.options,
    req.body.anyOtherOffers,
    req.body.totalSalary,
    req.body.expectedCtc,
    req.body.salaryNegotiable,
    req.body.noticePeriod,
    req.body.isItBuyable,
    req.body.reasonForChange,
    req.body.finalComments,
    req.body.overallRating,
    req.body.professionalExperience,
    req.body.personalAssesmentRatings
  ];
  
  
  
  console.log(data)
  cPool(res,(con)=> {
		con.query('call sp_insert_candidate_info(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);',data,(errs, rows)=> {
    con.release();
    console.log(rows)
    return res.json({status: ( errs == null && rows[0].length > 0 )?1:0, response:(errs)?errs:rows});
    });
});
  
});
module.exports = router;
