function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
const dataArray = [
    [
        1,
        true,
        true,
        false,
        false,
        false,
        false,
        true,
        true,
        true,
        true,
        false,
        false,
        "Veterans Northeast Outreach Center",
        "www.vneoc.org/",
        42.77247,
        -71.09032
    ],
    [
        2,
        false,
        false,
        true,
        true,
        false,
        false,
        false,
        false,
        false,
        true,
        false,
        false,
        "Wounded Warrior Project",
        "www.woundedwarriorproject.org/"
    ],
    [
        3,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        true,
        false,
        true,
        false,
        false,
        "Statewide Advocacy for Veterans Empowerment",
        "www.mass.gov/service-details/statewide-advocacy-for-veterans-empowerment-save",
        42.35286,
        -71.06223
    ],
    [
        4,
        true,
        true,
        true,
        true,
        false,
        false,
        true,
        true,
        false,
        false,
        true,
        false,
        "Veterans Inc",
        "www.veteransinc.org/",
        42.27399,
        -71.80075
    ],
    [
        5,
        false,
        true,
        false,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        true,
        "Massachusetts Bay Veterans Center",
        "www.voamass.org/our-services/veterans/massachusettsbayveteranscenter/",
        42.4059,
        -71.13129
    ],
    [
        6,
        true,
        true,
        true,
        true,
        true,
        true,
        false,
        false,
        true,
        true,
        false,
        false,
        "New England Center and Home for Veterans",
        "www.nechv.org/",
        42.35929,
        -71.05836
    ],
    [
        7,
        true,
        false,
        false,
        false,
        true,
        false,
        true,
        false,
        false,
        false,
        "AMVETS",
        "amvets.org/",
        42.35788,
        -71.06281
    ],
    [
        8,
        true,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        "Hire Heroes USA",
        "www.hireheroesusa.org/"
    ],
    [
        9,
        false,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        "Hiring Our Heroes",
        "www.hiringourheroes.org/"
    ],
    [
        10,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        "Hire Veterans",
        "hireveterans.com/"
    ],
    [
        11,
        false,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        "Mass Hire for Veterans",
        "mass-veterans.jobs/"
    ],
    [
        12,
        false,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        "My Next Move",
        "www.mynextmove.org/vets/"
    ],
    [
        13,
        false,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        "Mass Veterans Employment Representative",
        "www.mass.gov/service-details/veterans-employment-representatives-list",
        42.33089,
        -71.0795
    ],
    [
        14,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        true,
        false,
        "Mass Home for the Brave Loan Program",
        "www.mass.gov/veterans/housing/home-loans/home-for-the-brave.html"
    ],
    [
        15,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        true,
        "Caritas Communities", "caritascommunities.org/our-programs/veterans-housing/",
        42.22532,
        -71.02735
    ],
    [
        16,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        true,
        "Veteran Homestead", "www.veteranhomestead.org/", 
        42.59855,
        -71.98193
    ],
    [
        17,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        true,
        true,
        "Operation Homefront", "www.operationhomefront.org/custompage?Id=6714"
    ],
    [
        1000,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        "Veterans Administration Boston Office", "www.va.gov",
        42.36134,
        -71.05936
    ]
];

const scoreArray = [
    parseInt(getCookie("score1")),
    parseInt(getCookie("score4")),
    parseInt(getCookie("score2")),
    parseInt(getCookie("score5")),
    parseInt(getCookie("score3")),
    parseInt(getCookie("score6"))
];

let uniqueHash = {};
let outputArray = [];
let x = "";

for (i = 1; i <= 6; i++) {
    if (scoreArray[i - 1] > 0) {
        for (i2 = 0; i2 <= 16; i2++) {
            if (scoreArray[i - 1] < 3 && dataArray[i2][i * 2 - 1] === true) {
                if (uniqueHash[dataArray[i2][0]]) {
                    outputArray.push(dataArray[i2]);
                    x = dataArray[i2][0];
                    uniqueHash[x] = true;
                }
            } else if (
                scoreArray[i - 1] >= 3 &&
                dataArray[i2][i * 2] === true
            ) {
                if (!uniqueHash[dataArray[i2][0]]) {
                    outputArray.push(dataArray[i2]);
                    x = dataArray[i2][0];
                    uniqueHash[x] = true;
                }
            }
        }
    }
}
outputArray.push(dataArray[17]);

/*function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: usrlat, lng: usrlong},
      zoom: 8
    });
*/
window.onload = function() {
    var startPos;
    var geoSuccess = function(position) {
        console.log("confirmed broken???");
        startPos = position;
        var coords = new google.maps.LatLng(
            startPos.coords.latitude,
            startPos.coords.longitude
        );
        var mapOptions = {
            zoom: 10,
            center: coords,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var testcoords = { lat: 42.35286, lng: -71.06223 };
        var center = testcoords;
        map = new google.maps.Map(document.getElementById("map"), mapOptions);
        var marker2 = new google.maps.Marker({
            position: coords,
            map: map,
            title: "YOU ARE HERE"
        });
        console.log(outputArray);
        var objects = new Array();
        for (i = 0; i < outputArray.length; i++) {
            if (outputArray[i][15]) {
                var testcoords = {
                    lat: outputArray[i][15],
                    lng: outputArray[i][16]
                };
                objects[i] = new google.maps.Marker({
                    position: testcoords,
                    map: map,
                    title: outputArray[i][13],
                    optimized: false,
                    test: outputArray[i][14]
                });
                if(outputArray[14]){
                  objects[i].addListener('click', function() {
                    map.setZoom(12);
                    map.setCenter(this.getPosition());
                    var url = this.test;
                    console.log(url);
                    window.open("http://"+url,'','width=,height=,resizable=no');
                  });
                }
            } else continue;
        }
        var startPos;
        var map;
    };

    var geoError = function(error) {
        console.log("Error occurred. Error code: " + error.code);
        // error.code can be:
        //   0: unknown error
        //   1: permission denied
        //   2: position unavailable (error response from location provider)
        //   3: timed out
    };
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
};
