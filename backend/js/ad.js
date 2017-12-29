module.exports = function (app, ActiveDirectory) {


	// authenticate
	app.post('/login', function (req, res) {
		var config = {
			url: 'ldap://10.11.2.190',
			baseDN: 'dc=ctepl,dc=com',
			username: req.body.email,
			password: req.body.password
		}
		var ad = new ActiveDirectory(config);


		ad.authenticate(config.username, config.password, function (err, auth) {
			if (err) {
				console.log('ERROR: ' + JSON.stringify(err));
				res.json("Authentication failed!!");
				return;
			}

			if (auth) {
				console.log('Authenticated!');
			}
			else {
				console.log('Authentication failed!');
				res.json("Authentication failed!!");
			}
		});
	})

}

