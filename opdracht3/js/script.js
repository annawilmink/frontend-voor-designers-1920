/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

//var header = document.querySelector('header');
//var section = document.querySelector('section');
var foto1 = document.querySelector('#foto1');
var foto2 = document.querySelector('#foto2');
var foto3 = document.querySelector('#foto3');
var foto4 = document.querySelector('#foto4');

var titel1 = document.querySelector('#titel1');
var titel2 = document.querySelector('#titel2');
var titel3 = document.querySelector('#titel3');
var titel4 = document.querySelector('#titel4');

var plot1 = document.querySelector('#plot1');
var plot2 = document.querySelector('#plot2');
var plot3 = document.querySelector('#plot3');
var plot4 = document.querySelector('#plot4');

//Url van de json
var requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';

//Een verzoek aanvragen
var request = new XMLHttpRequest();

//Het verzoek open zetten
request.open('GET', requestURL);

//bestandstype kiezen
request.responseType = 'json';

//verzoek versturen
request.send();

//Aangeven wat hij moet doen wanneer hij geladen is.
request.onload = function () {
  console.log(request.response);
  
  showTitles(request.response);
  showCovers(request.response);
  showPlots(request.response);
//  titels(alleFilms);
//  plots(alleFilms);
}

function showCovers(movies){
  var cover = document.createElement('img');
  cover.src = movies[0].cover;
  foto1.appendChild(cover);
  
  var cover = document.createElement('img');
  cover.src = movies[1].cover;
  foto2.appendChild(cover);
  
  var cover = document.createElement('img');
  cover.src = movies[2].cover;
  foto3.appendChild(cover);
  
  var cover = document.createElement('img');
  cover.src = movies[3].cover;
  foto4.appendChild(cover);
}

function showTitles(movies) {
  var titel = document.createElement('h1');
  titel.textContent = movies[0].title;
  titel1.appendChild(titel);
  
  var titel = document.createElement('h1');
  titel.textContent = movies[1].title;
  titel2.appendChild(titel);
  
    var titel = document.createElement('h1');
  titel.textContent = movies[2].title;
  titel3.appendChild(titel);
  
  var titel = document.createElement('h1');
  titel.textContent = movies[3].title;
  titel4.appendChild(titel);
}

function showPlots(movies) {
  var plot = document.createElement('plot');
  plot.textContent = movies[0].plot;
  plot1.appendChild(plot);
  
  var plot = document.createElement('plot');
  plot.textContent = movies[1].plot;
  plot2.appendChild(plot);
  
  var plot = document.createElement('plot');
  plot.textContent = movies[2].plot;
  plot3.appendChild(plot);
  
  var plot = document.createElement('plot');
  plot.textContent = movies[3].plot;
  plot4.appendChild(plot);
}


//
//

//als het element foto1 bestaat dan maakt hij er een eventlistener aan vast, anders niet.

//var foto1 = document.querySelector("foto1");
var details1 = document.querySelector(".dropdownsection1");
//var foto2 = document.querySelector(".foto2");
var details2 = document.querySelector(".dropdownsection2");
//var foto3 = document.querySelector(".foto3");
var details3 = document.querySelector(".dropdownsection3");
//var foto4 = document.querySelector(".foto4");
var details4 = document.querySelector(".dropdownsection4");
var pijl1 = document.querySelector(".pijl1");
var pijl2 = document.querySelector(".pijl2");
var pijl3 = document.querySelector(".pijl3");
var pijl4 = document.querySelector(".pijl4");
var selectbutton = document.querySelector(".button");

function togglePijl1() {
  pijl1.classList.toggle("pijlshow");
}

function togglePijl2() {
  pijl2.classList.toggle("pijlshow");
}

function togglePijl3() {
  pijl3.classList.toggle("pijlshow");
}

function togglePijl4() {
  pijl4.classList.toggle("pijlshow");
}

function toggleDetails1() {
  details1.classList.toggle("show");
}

function toggleDetails2() {
  details2.classList.toggle("show");
}

function toggleDetails3() {
  details3.classList.toggle("show");
}

function toggleDetails4() {
  details4.classList.toggle("show");
}

function selectall() {
  selectbutton.classList.toggle("show");
  //details1.classList.contains("show");
  
  if(selectbutton.classList.contains("show")){
    console.log("laat maar zien die details");

    details1.classList.add("show");
    details2.classList.add("show");
    details3.classList.add("show");
    details4.classList.add("show");
    
  }else{
    console.log("weghalen !");

    details1.classList.remove("show");
    details2.classList.remove("show");
    details3.classList.remove("show");
    details4.classList.remove("show");
  }
}

selectbutton.addEventListener('click', selectall);

foto1.addEventListener('click', toggleDetails1);
foto2.addEventListener('click', toggleDetails2);
foto3.addEventListener('click', toggleDetails3);
foto4.addEventListener('click', toggleDetails4);

foto1.addEventListener('mouseover', togglePijl1);
foto1.addEventListener('mouseout', togglePijl1);

foto2.addEventListener('mouseover', togglePijl2);
foto2.addEventListener('mouseout', togglePijl2);

foto3.addEventListener('mouseover', togglePijl3);
foto3.addEventListener('mouseout', togglePijl3);

foto4.addEventListener('mouseover', togglePijl4);
foto4.addEventListener('mouseout', togglePijl4);

selectbutton.addEventListener('click', selectall);
