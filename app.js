var express = require('express');
var app = express();
var path    = require("path");
var valid;




//room page
app.get('/',function(req,res) {
	res.sendFile(path.join(__dirname+'/index.html'));
});









/* Server Configuration Section */ 
app.set('port',(process.env.PORT || 5000))
var server = app.listen(app.get('port'), function () {
	console.log("Example app listening at http://%s:%s", host, port)
}); 

