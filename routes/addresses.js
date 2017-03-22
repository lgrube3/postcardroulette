var express = require('express');
var router = express.Router();

var Address = require('../models/address');

router.get('/', function (req, res, next) {
    Address
        .find()
        .count(function(err, count) {
            var n = count;
            var r = Math.floor(Math.random() * n);
            Address
                .find()
                .limit(1)
                .skip(r)
                .exec(function(err, address) {
                    if (err) {
                        return res.status(500).json({
                            title: 'error!',
                            error: err
                        });
                    }
                    res.status(200).json({
                        message: 'Successfully retrieved',
                        obj: address
                    });
                });
        })
});

router.post('/', function (req, res, next) {
    var address = new Address({
    	name: req.body.name,
    	address1: req.body.address1,
    	address2: req.body.address2,
    	city: req.body.city,
    	state: req.body.state,
    	zip: req.body.zip
    });
    address.save (function(err, result){
    	if (err) {
    		return res.status(500).json({
    			title: 'error!',
    			error: err
    		});
    	}
    	res.status(201).json({
    		message: 'Saved address!',
    		obj: result
    	});
    });
});

module.exports = router;
