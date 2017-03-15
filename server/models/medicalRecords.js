var mongoose = require('mongoose');

var medicalRecords = mongoose.model('medicaldatas',{
	Userid: {
		type:String
	},
	Prediction: {
		type: String
	}
});

module.exports = {medicalRecords};