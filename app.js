var express = require('express');
var app = express();
var path    = require("path");
var valid;




//room page
app.get('/',function(req,res) {
	res.sendFile(path.join(__dirname+'/index.html'));
});









/* Server Configuration Section */ 

var server = app.listen(process.env.PORT || 5000, function () {
	var host = server.address().address
	var port = server.address().port
	console.log("Example app listening at http://%s:%s", host, port)
}); 

