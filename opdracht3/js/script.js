/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

// ----- Declaraties
var main = document.querySelector('main');
var darkmode = document.querySelector('.darkmode');
var lightmode = document.querySelector('.lightmode');
// JSON FILE 

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

// een functie voor het begin laden van de pagina
function doneloading() {
  Array.from(document.getElementsByClassName("remove")).forEach((element) => {
    //    console.log(target.classList[1], Array.from(element.classList));
    element.classList.remove("remove");
  });
}

//Aangeven wat hij moet doen wanneer hij geladen is.
request.onload = function () {
  // hierbij laat ik alle gegevens van json zien in de console log
//  ????
  // LOADING STATE -- Een functie aan maken voor de loading state
  // bron: https://www.w3schools.com/jsref/met_win_settimeout.asp
  setTimeout(function () {
    doneloading();
    document.querySelector(".loading").classList.add("remove");
    showMovies(request.response);
  }, 2000);
  //  showTitles(request.response);
  //  showCovers(request.response);
  //  showPlots(request.response);
}


// HTML ELEMENTEN VULLEN
function showMovies(moviesjson) {

  //door de json nodes te loopen
  for (item of moviesjson) {
    //maak een section aan
    var section = document.createElement('section');
    section.classList.add("movie");
    //Voor elk item in item.genres de variable genre vullen met het genre.
    for (let genre of item.genres) {
      section.classList.add(genre);
    }
    //maak een h1 aan voor de titel
    var titel = document.createElement('h1');
    titel.textContent = item.title;
    //maak een img aan voor de cover
    var cover = document.createElement('img');
    cover.src = item.cover;
    //maak een div aan voor het plot
    var plot = document.createElement('div');
    plot.textContent = item.plot;

    //koppel de titel, img en p aan de section
    section.appendChild(titel);
    section.appendChild(cover);
    section.appendChild(plot);
    //koppel de section aan de main
    main.appendChild(section);
  }

  // Bron code: Nino Schelcher
  // Voor iedere img wordt een eventlistener en een functie gemaakt. Deze functie roept steeds het element op dat direct na de afbeelding komt, waardoor de bijbehorende div van een film wordt opgeroepen.
  Array.from(document.getElementsByTagName("img")).forEach(img => img.addEventListener("click", function () {
    img.nextElementSibling.classList.toggle('show');
    img.classList.toggle('show');
  }));

}

// ----- Eventhandlers

function hideOrShowImages(target) {
  //  console.log(target.classList);
  //  console.log(Array.from(document.getElementsByClassName("movie")));
  Array.from(document.getElementsByClassName("movie")).forEach((element) => {
    //    console.log(target.classList[1], Array.from(element.classList));
    if (!Array.from(element.classList).includes(target.classList[1])) {
      console.log(Array.from(element.classList));
      element.classList.toggle('remove');
    } else if (element.classList.includes("remove")) {
      element.classList.toggle('remove');
    }
  });

}


Array.from(document.getElementsByClassName("button")).forEach(genres => genres.addEventListener("click", function (event) {
  hideOrShowImages(event.target)
}));

// DARK EN LIGHT MODE FUNCTIE
// idee van Sanne. Alleen klein beetje aangepast.

// var aanmaken selecteren img en p in header
var defaultText = document.querySelector('header div p');

// vullen van de content - automatisch darkmode, dus dit is default
defaultText.innerHTML = 'Darkmode - Druk op L';

// aanroepen wat hij moet gaan doen als keypress d plaatst vindt
window.addEventListener("keydown", event => {

  if (event.key == "d") {
    console.log('darkmode is aan');
    document.querySelector('body').classList.remove('lightmode');
    //als je op darkmode wilt maar de class voor lightmode staat nog aan wordt het verwijdert door deze functie, doordat de website al in darkmode is gestijlt komt er geen class bij
    defaultText.innerHTML = 'Darkmode - Druk op L';
  }
  
  else if (event.key == "l"){
    console.log('lightmode is aan');
    // Tekst veranderen
    document.querySelector('body').classList.add('lightmode');
    // Tekst veranderen
    defaultText.innerHTML = 'Lightmode - Druk op D';
  }
});

