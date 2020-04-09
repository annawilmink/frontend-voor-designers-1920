/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

// ----- Declaraties

// Hier declareer ik alle foto's
var foto1 = document.querySelector('#foto1');
var foto2 = document.querySelector('#foto2');
var foto3 = document.querySelector('#foto3');
var foto4 = document.querySelector('#foto4');

// Hier declareer ik alle titels
var titel1 = document.querySelector('#titel1');
var titel2 = document.querySelector('#titel2');
var titel3 = document.querySelector('#titel3');
var titel4 = document.querySelector('#titel4');

// Hier declareer ik alle plots
var plot1 = document.querySelector('#plot1');
var plot2 = document.querySelector('#plot2');
var plot3 = document.querySelector('#plot3');
var plot4 = document.querySelector('#plot4');

// Hier declareer ik alle genres per film
var alleHorror = document.querySelectorAll(".horror");
var alleComedy = document.querySelectorAll(".comedy");
var alleDrama = document.querySelectorAll(".drama");
var alleActie = document.querySelectorAll(".actie");

// Hier declareer ik buttons
var ButtonAlleFilms = document.querySelector(".alleFilmsbutton");
var buttonHorror = document.querySelector(".horrorButton");
var ButtonComedy = document.querySelector(".comedyButton");
var buttonDrama = document.querySelector(".dramaButton");
var ButtonActie = document.querySelector(".actieButton");

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
  //hierbij laat ik alle gegevens van json zien in de console log
  console.log(request.response);
  
  showTitles(request.response);
  showCovers(request.response);
  showPlots(request.response);
}


// ----- Eventhandlers


//Hier zorg ik dat je alle films weer kunt zien als je op 'alle films' button klikt
function herstel() {
  for (i = 0; i < alleHorror.length; i++) {
    alleHorror[i].classList.remove("remove");
  }
  for (i = 0; i < alleComedy.length; i++) {
    alleComedy[i].classList.remove("remove");
  }
  for (i = 0; i < alleDrama.length; i++) {
    alleDrama[i].classList.remove("remove");
  }
  for (i = 0; i < alleActie.length; i++) {
    alleActie[i].classList.remove("remove");
  }
}

//Hier zorg ik dat je alleen de horror films ziet
function horror() {
  for (i = 0; i < alleHorror.length; i++) {
    if (!alleHorror[i].classList.contains("remove")) {
      alleComedy[i].classList.add("remove")
      alleDrama[i].classList.add("remove")
      alleActie[i].classList.add("remove")
      ;
    } else {
      alleHorror[i].classList.remove("remove");
    }
  }
}

//Hier zorg ik dat je alleen de comedy films ziet
function comedy() {
  for (i = 0; i < alleComedy.length; i++) {
    if (!alleComedy[i].classList.contains("remove")) {
      alleHorror[i].classList.add("remove")
      alleDrama[i].classList.add("remove")
      alleActie[i].classList.add("remove")
      ;
    } else {
      alleComedy[i].classList.remove("remove");
    }
  }
}

//Hier zorg ik dat je alleen de drama films ziet
function drama() {
  for (i = 0; i < alleDrama.length; i++) {
    if (!alleDrama[i].classList.contains("remove")) {
      alleHorror[i].classList.add("remove")
      alleComedy[i].classList.add("remove")
      alleActie[i].classList.add("remove")
      ;
    } else {
      alleDrama[i].classList.remove("remove");
    }
  }
}

//Hier zorg ik dat je alleen de actie films ziet
function actie() {
  for (i = 0; i < alleActie.length; i++) {
    if (!alleActie[i].classList.contains("remove")) {
      alleHorror[i].classList.add("remove")
      alleComedy[i].classList.add("remove")
      alleDrama[i].classList.add("remove")
      ;
    } else {
      alleActie[i].classList.remove("remove");
    }
  }
}

//Hier zorg ik dat de foto's worden weergegeven uit json
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

//Hier zorg ik dat de titels worden weergegeven uit json
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

//Hier zorg ik dat de plots worden weergegeven uit json
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

// ----- Declaraties

// Hier declareer ik alle details
var details1 = document.querySelector(".dropdownsection1");
var details2 = document.querySelector(".dropdownsection2");
var details3 = document.querySelector(".dropdownsection3");
var details4 = document.querySelector(".dropdownsection4");

// Hier declareer ik alle pijlen
var pijl1 = document.querySelector(".pijl1");
var pijl2 = document.querySelector(".pijl2");
var pijl3 = document.querySelector(".pijl3");
var pijl4 = document.querySelector(".pijl4");

// ----- Eventhandlers

// hier zorg ik dat je de tekst onderaan de foto ziet staan
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

// hier zorg ik dat de details weergeven worden
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

// ----- Eventlisteners

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

buttonHorror.addEventListener('click', horror);
ButtonComedy.addEventListener('click', comedy);
buttonDrama.addEventListener('click', drama);
ButtonActie.addEventListener('click', actie);

ButtonAlleFilms.addEventListener('click', herstel);