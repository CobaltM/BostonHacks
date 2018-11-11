var startPos;
  var x;
  var y;
  var z;
  var nudge = document.getElementById("nudge");
  var map;
/*function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
	  center: {lat: usrlat, lng: usrlong},
	  zoom: 8
	});
*/
window.onload = function() {
  var startPos;
  var geoSuccess = function(position) {
    startPos = position;
    document.getElementById('startLat').innerHTML = startPos.coords.latitude;
    document.getElementById('startLon').innerHTML = startPos.coords.longitude;
    var coords = new google.maps.LatLng(startPos.coords.latitude,startPos.coords.longitude);
    var mapOptions = {
        zoom: 13,
        center: coords,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var testcoords = {lat: 42.352860, lng:  -71.062230};
    var center = testcoords;
    map = new google.maps.Map(
        document.getElementById("map"), mapOptions
        );
    var marker = new google.maps.Marker({
    	position : testcoords,
    	map : map,
    	title : "Test Marker"});
    var marker2 = new google.maps.Marker({
    	position : coords ,
    	map : map,
    	title : "YOU ARE HERE"});
  };
  
	var geoError = function(error) {
    console.log('Error occurred. Error code: ' + error.code);
    // error.code can be:
    //   0: unknown error
    //   1: permission denied
    //   2: position unavailable (error response from location provider)
    //   3: timed out
  };
  navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
  
};
