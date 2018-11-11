
$(document).ready(function() {
	console.log("Hello! I'm submitting data! Look at me go!!!");
	//$.getJSON('http://gd.geobytes.com/GetCityDetails?callback=?', function(data) {
	//  document.getElementById("ip").innerHTML=(JSON.stringify(data.geobytesipaddress, null, 2)).replace(/"/g,'');
	//});
});
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

setCookie("score1",0,100);
setCookie("score2",0,100);
console.log(getCookie("score2"));
setCookie("score3",0,100);
setCookie("score4",0,100);
setCookie("score5",0,100);
setCookie("score6",0,100);