'use strict';
let express = require('express');
var app = express.Router();
let cPool = require('./../config/ConnectionPool');
let logger = require('./../logger/LogConfig');
let messages = require('./../config/MessageFactory');
let ActiveDirectory = require('activedirectory');
var session = require('express-session');


app.get('/get-offer-details', function (req, res, app) {
cPool(res,(con)=> {
			
				con.query('call sp_select_offer_details();',(errs, rows)=> {
				
					return res.json({status: ( errs == null && rows[0].length > 0 )?1:0, response:(errs)?errs:{offerDetails:rows[0],companies:rows[1],locations:rows[2]}});
				});
		});
})

module.exports = app;