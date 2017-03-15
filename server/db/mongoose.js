const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/cureit');
module.exports = {mongoose};


/*

// model for the collection
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
// date for the collection
var newUser = new Users({
	Name: 'Shubam',
	Age: 21,
	Email: 'shubam@sds.com',
	Password: 'sss'
});

newUser.save().then(
	(doc)=>{
	console.log('Saved user', doc);
},(e)=> {
	console.log("unable to save")
});

*/