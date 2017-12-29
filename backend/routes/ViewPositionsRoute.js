'use strict';
let express = require('express');
let router = express.Router();
let cPool = require('./../config/ConnectionPool');
let logger = require('./../logger/LogConfig');

/* GET candidate assesment skills. */
router.get('/getJdCandidateInfo', (req, res)=> {
  logger.info('getJdCandidateInfo get request started.');
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
      logger.info('getJdCandidateInfo get request end.');
      return res.json({ status: 1, response: rows[0] });
    });
  });
  
});
 
module.exports = router;
