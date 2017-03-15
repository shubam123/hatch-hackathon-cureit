var express = require('express');
var bodyParser = require('body-parser');
var {ObjectId} = require('mongodb');
var {mongoose} = require('./db/mongoose');
//adding models
var {Users} = require('./models/users.js');
var {sensorData} = require('./models/sensorData.js');
var {medicalRecords} = require('./models/medicalRecords.js');
//var {dataSet} = require('./models/dataSet.js');
//models ends
var app = express();
const port = 3000;
// middleware to let express use json data
app.use(bodyParser.json());


//----------morgan ------//

//middleware to CORS
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(allowCrossDomain);

//---------------user starts ---------------//
//POST reguest to create user
app.post('/users', (req,res)=> {
//defining values
	var newUser = new Users({
	Name: req.body.Name,
	Age: req.body.Age,
	Email: req.body.Email,
	Password: req.body.Password
});
// saving data
newUser.save().then((doc)=>{
	res.send(doc);
},(e)=> {
	res.status(400).send(e);
});
});
//POST request to creat e user ends here

//GET a user 


app.get('/users/:id', (req,res)=> {
	var id = req.params.id;
	Users.findById(id).then((values)=> {
		res.send({values});
	} ,(e) => {
		res.status(400).send(e); 
	})
});
//GET user ends here

//-------------- User ends ----------//

/* 
--------------------------------------------
--------------------------------------------
											*/
//------------ Sensor starts ------------//

//POST request to create new sensor data collection
app.post('/sensor', (req,res)=> {
//defining values
	var newSensor = new sensorData({
	Userid: req.body.Userid,
	Temprature: req.body.Temprature,
	Humidity: req.body.Humidity,
	Pressure: req.body.Pressure
});
// saving data
newSensor.save().then((doc)=>{
	res.send(doc);
},(e)=> {
	res.status(400).send(e);
});
});
//POST request to creat e user ends here



//GET all sensor values
app.get('/sensor', (req,res)=> {
	sensorData.find().then((values)=> {
		res.send({values});
	} ,(e) => {
		res.status(400).send(e); 
	})
});
//GET sensor values ends here

//GET sensor values of a user
app.get('/sensor/:id', (req,res)=> {
	var id = req.params.id;
	sensorData.find({'Userid':id}).then((values)=> {
		res.send({values});
	} ,(e) => {
		res.status(400).send(e); 
	})
});
//GET sensor values ends here


//------------- Sensor ends --------------//



/* 
--------------------------------------------
--------------------------------------------
											*/




//------------ Medical starts ------------//

//POST request to create new sensor data collection
app.post('/records', (req,res)=> {
//defining values
	var newRecord = new medicalRecords({
	Userid: req.body.Userid,
	Prediction: req.body.Prediction,
});
// saving data
newRecord.save().then((doc)=>{
	res.send(doc);
},(e)=> {
	res.status(400).send(e);
});
});
//POST request to creat e user ends here



//GET all sensor values
app.get('/records', (req,res)=> {
	medicalRecords.find().then((values)=> {
		res.send({values});
	} ,(e) => {
		res.status(400).send(e); 
	})
});
//GET sensor values ends here

//GET sensor values of a user
app.get('/record/:id', (req,res)=> {
	var id = req.params.id;
	medicalRecords.find({'Userid':id}).then((values)=> {
		res.send({values});
	} ,(e) => {
		res.status(400).send(e); 
	})
});
//GET sensor values ends here


//------------- Medical ends --------------//







app.listen(port, () => {
	console.log('Started on port 3000');
})

module.exports = {app};