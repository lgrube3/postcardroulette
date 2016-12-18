var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function (req, res, next) {
    res.render('index');
});

router.post('/', function(req, res, next){
	var email = req.body.email;
	var user = new User({
		firstName: 'Max',
		lastName: 'Smith',
		password: 'super-secret',
		email: email
	});
	user.save();
	res.redirect('/');
})

module.exports = router;
