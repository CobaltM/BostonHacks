var startPos;
  var x;
  var y;
  var z;
  var nudge = document.getElementById("nudge");
  var map;
async function go(){
  

  var showNudgeBanner = function() {
    nudge.style.display = "block";
  };

  var hideNudgeBanner = function() {
    nudge.style.display = "none";
  };

  var nudgeTimeoutId = setTimeout(showNudgeBanner, 5000);

  var geoSuccess = function(position) {
  	var finalPos;
    hideNudgeBanner();
    // We have the location, don't display banner
    clearTimeout(nudgeTimeoutId);

    // Do magic with location
    startPos = position;
    try{
    	x = startPos.coords.latitude;
    	y = startPos.coords.latitude;
    }
    catch(error){
    	console.log(error);
    }
    
  };
  var geoError = function(error) {
    switch(error.code) {
      case error.TIMEOUT:
        // The user didn't accept the callout
        showNudgeBanner();
        break;
    }
  };

  navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
  }
/*


VVV  ACTUAL MAP VVV



*/
go();

      async function initMap() {
      	
      	finalPos = await go();
      	console.log(startPos);
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      }