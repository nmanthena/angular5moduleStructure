'use strict';
let express = require('express');
let router = express.Router();
let cPool = require('./../config/ConnectionPool');
let logger = require('./../logger/LogConfig');
/* GET home page. */
router.get('/', (req, res)=> {
  logger.info('first logger message');
  cPool((con, err)=> {
    if (err != null) {
      return res.json({status: 0, resp: 'Database connection failure'});
    }
    con.query('SELECT DATE_FORMAT("2017-06-15", "%Y") as dt;', (errs, rows)=> {
      con.release();
      if (errs) {
        logger.error(errs);
      }
      logger.info(rows[0]);
    });
  });
  res.render('index', { title: 'Express' });
});
module.exports = router;
