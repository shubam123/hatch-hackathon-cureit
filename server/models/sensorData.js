var mongoose = require('mongoose');

var sensorData = mongoose.model('Sensordatas',{
	Userid: {
		type:String
	},
	Temprature: {
		type:String
	},
	Humidity: {
		type:String
	},
	Pressure: {
		type: String
	}
});

module.exports = {sensorData};