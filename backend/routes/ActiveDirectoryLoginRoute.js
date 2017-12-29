'use strict';
let express = require('express');
var app = express.Router();
let cPool = require('./../config/ConnectionPool');
let logger = require('./../logger/LogConfig');
let messages = require('./../config/MessageFactory');
let ActiveDirectory = require('activedirectory');
var session = require('express-session');
var sess;
	app.use(session({secret: 'sc-123', cookie: { maxAge: 60000 }}));
// authenticate
app.post('/login', function (req, res, app) {
	var config = {
		url: 'ldap://10.11.2.190',
		baseDN: 'dc=ctepl,dc=com',
		username: req.body.email,
		password: req.body.password
	};
    new ActiveDirectory(config).authenticate(config.username, config.password, function (err) {
		if (err) {
			return res.json({ status: 0, response: messages.LOGIN_ERROR_MSG });
		}
		cPool(res,(con)=> {
			
				con.query('call sp_select_validate_user_login(?);',req.body.email,(errs, rows)=> {
				con.release();
				sess=req.session;
				sess.sid = req.sessionID
				console.log('Authenticated!');
				if(sess){
					return res.json({status: ( errs == null && rows[0].length > 0 )?1:0, response:(errs)?errs:rows[0], session:sess});
				}
					return res.json({status: ( errs == null && rows[0].length > 0 )?1:0, response:(errs)?errs:rows[0]});
				});
		});
	});
});

app.get('/logout', function (req, res) {
	req.session.destroy(function(){
		sess =null;
	 });
	 res.send({status:0, res:"logout"});
});

app.post('/getSession', function(req, res){
	if(sess){
		if(req.body.authToken == null || req.body.authToken == undefined || req.body.authToken == ''){
			req.session.regenerate(function(err) {
				// will have a new session here
				sess.sid = req.sessionID;
			});
			res.send({token:req.body.authToken == sess.sid});
		}else{
			res.send({token:req.body.authToken == sess.sid});
		}
	}else{
		console.log("Session Expaired!");
		res.send({token:false});		
	}
})

module.exports = app;