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
				con.query('call sp_select_profile_info_for_offer_details(?);',[req.query.candidateRecruitmentId],(errs, rows)=> {
				
					return res.json({status: ( errs == null && rows[0].length > 0 )?1:0, response:(errs)?errs:{profileInfo:rows[0][0],offerDetails:rows[1][0],designations:rows[2],locations:rows[3],companies:rows[4],reporting:rows[5]}});
				});
		});
})

module.exports = app;