'use strict';
let express = require('express');
let router = express.Router();
let cPool = require('./../config/ConnectionPool');
let logger = require('./../logger/LogConfig');

/* GET candidate assesment skills. */
router.get('/getAllPositions', (req, res)=> {
  logger.info('getting all positions get request started.');
 
  cPool(res,(con)=> {
			
    con.query('call sp_select_all_positions();',(errs, rows)=> {
    
      return res.json({status: ( errs == null && rows[0].length > 0 )?1:0, 
        response:(errs)?errs: rows[0]});
    });
});
});
  /* GET All positions by type. */
router.post('/getPositionsByType', (req, res)=> {
  cPool(res,(con)=> {			
    con.query('call sp_select_single_type_positions('+req.body.type+');',(errs, rows)=> {    
      return res.json({status: ( errs == null && rows[0].length > 0 )?1:0, 
        response:(errs)?errs: rows[0]});
    });
});
});
  /* GET single positions. */
  router.post('/getSinglePosition', (req, res)=> {
    cPool(res,(con)=> {			
      con.query('call sp_select_single_recruitment('+req.body.type+');',(errs, rows)=> {    
        return res.json({status: ( errs == null && rows[0].length > 0 )?1:0, 
          response:(errs)?errs: rows});
      });
  });
  });


  


module.exports = router;
