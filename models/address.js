var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	name: {type: String, required: true},
	address1: {type: String, required: true},
	address2: {type: String},
	city: {type: String, required: true},
	state: {type: String, required: true},
	zip: {type: Number, required: true},
});

module.exports = mongoose.model('Address', schema);