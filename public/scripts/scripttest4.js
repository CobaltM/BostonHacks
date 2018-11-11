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

var one = parseInt(getCookie("score1",0,100));
var two = parseInt(getCookie("score2",0,100));
var three = parseInt(getCookie("score3",0,100));
var four = parseInt(getCookie("score4",0,100));
var five = parseInt(getCookie("score5",0,100));
var six = parseInt(getCookie("score6",0,100));
console.log(five);
console.log(six);

if(one>2){
    document.getElementById("one").innerHTML='Work<img src="img/red.svg">';
}
else if(one==0){
    document.getElementById("one").innerHTML='Work<img src="img/green.svg" >';
}
else{
    document.getElementById("one").innerHTML='Work<img src="img/yellow.svg" >';
}
if(two>2){
    document.getElementById("two").innerHTML='Finances<img src="img/red.svg">';
}
else if(two==0){
    document.getElementById("two").innerHTML='Finances<img src="img/green.svg" >';
}
else{
    document.getElementById("two").innerHTML='Finances<img src="img/yellow.svg" >';
}
if(three>2){
    document.getElementById("three").innerHTML='Health<img src="img/red.svg">';
}
else if(three==0){
    document.getElementById("three").innerHTML='Health<img src="img/green.svg" >';
}
else{
    document.getElementById("three").innerHTML='Health<img src="img/yellow.svg" >';
}

if(four>2){
    document.getElementById("four").innerHTML='Life Skills<img src="img/red.svg">';
}
else if(four==0){
    document.getElementById("four").innerHTML='Life Skills<img src="img/green.svg" >';
}
else{
    document.getElementById("four").innerHTML='Life Skills<img src="img/yellow.svg" >';
}
if(five>2){
    document.getElementById("five").innerHTML='Social<img src="img/red.svg">';
}
else if(five==0){
    document.getElementById("five").innerHTML='Social<img src="img/green.svg" >';
}
else{
    document.getElementById("five").innerHTML='Social<img src="img/yellow.svg" >';
}
if(six>2){
    document.getElementById("six").innerHTML='Housing<img src="img/red.svg">';
}
else if(six==0){
    document.getElementById("six").innerHTML='Housing<img src="img/green.svg" >';
}
else{
    document.getElementById("six").innerHTML='Housing<img src="img/yellow.svg" >';
}


