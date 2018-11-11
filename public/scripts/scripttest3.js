function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
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
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
var check = [];
console.log(getCookie("score1"));
console.log(getCookie("score2"));
console.log(getCookie("score3"));
console.log(getCookie("score4"));
console.log(getCookie("score5"));
console.log(getCookie("score6"));
/*
var check.push( getCookie("score1"));
var check.push( getCookie("score2"));
var check.push( getCookie("score3"));
var check.push( getCookie("score4"));
var check.push( getCookie("score5"));
var check.push( getCookie("score6"));
var i;
for(i=0;i<check.length;i++){
    console.log(check[i]);
}
*/