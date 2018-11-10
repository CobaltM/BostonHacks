console.log("Hello! I'm submitting data! Look at me go!!!");
$(document).ready(function() {
	$.getJSON('http://gd.geobytes.com/GetCityDetails?callback=?', function(data) {
	  document.getElementById("ip").innerHTML=(JSON.stringify(data.geobytesipaddress, null, 2)).replace(/"/g,'');
	});
	console.log("I just successfully fetched your ip and now I am going to submit it to a database!");
});