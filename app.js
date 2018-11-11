var express = require('express');
var app = express();
var path    = require("path");
var bodyParser     = require("body-parser");
var mongo = require('mongodb');
var valid;
var data = "test";
//
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
 
var cloud = true;
 
var mongodbHost = '127.0.0.1';
var mongodbPort = '27017';
 
var authenticate ='';
//cloud
//mongodb://<dbuser>:<dbpassword>@ds045087.mlab.com:45087/secondoath
if (cloud) {
 mongodbHost = 'ds045087.mlab.com';
 mongodbPort = '45087';
 authenticate = 'CobaltM:thepassword1!@'
}
 
var mongodbDatabase = 'secondoath';
 
// connect string for mongodb server running locally, connecting to a database called test
var url = 'mongodb://'+authenticate+mongodbHost+':'+mongodbPort + '/' + mongodbDatabase;
 
 
// find and CRUD: http://mongodb.github.io/node-mongodb-native/2.0/tutorials/crud_operations/
// aggregation: http://mongodb.github.io/node-mongodb-native/2.0/tutorials/aggregation/
 
MongoClient.connect(url, function(err, db) {
   assert.equal(null, err);
   console.log("Connected correctly to server.");
  // db.collection('userdata');
//var cursor = collection.find({});
    // find top 20 countries by  size
   
 
}) //connect()
//
app.set('views', __dirname + '/public');
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, '/scripts')));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get('/',function(req,res) {
	res.sendFile(path.join(__dirname+'/index.html'));
});
app.get('/map',function(req,res) {
	res.sendFile(path.join(__dirname+'/testmap.html'));
});
app.post('/', function (req, res) {
  console.log(req.body.test);
  res.sendFile(path.join(__dirname+'/test.html'));
});









/* Server Configuration Section */ 
app.set('port',(process.env.PORT || 5000))
var server = app.listen(app.get('port'), function () {
	console.log("Example app listening at http://", app.get('port'));
}); 

