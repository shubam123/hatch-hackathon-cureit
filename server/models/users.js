var mongoose = require('mongoose');

var Users = mongoose.model('Users',{
	Name: {
		type:String
	},
	Age: {
		type:String
	},
	Email: {
		type:String
	},
	Password: {
		type: String
	}
});

module.exports = {Users};