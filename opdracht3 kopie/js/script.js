/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var header = document.querySelector('header');
var section = document.querySelector('section');

//Url van de json
var requestURL = 'HTTPS: https://api.worldweatheronline.com/premium/v1/weather.ashx';

//Een verzoek aanvragen
var request = new XMLHttpRequest();

//Het verzoek open zetten
request.open('GET', requestURL);

//Responsetype zeg je wat voor bestand het is en bij send zeg je dat hij het verstuurd
request.responseType = 'json';
request.send();

//Aangeven wat hij moet doen wanneer hij geladen is.
request.onload = function () {
  //zo noem ik het bestand
  var weather = request.response;
 // titelHeader(films);
  city(weather);
    console.log (weather);
}

function city(weather) {
  var h1 = document.createElement('h1');
  h1.textContent = weather[0].city;
  header.appendChild(h1);
  
}