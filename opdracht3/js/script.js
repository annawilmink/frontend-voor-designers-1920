/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

// ----- DECLARATIES
var main = document.querySelector('main');
var lightmode = document.querySelector('.lightmode');

// ----- JSON FILE
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

//Een aantal elementen hebben de class remove. Hiermee worden al deze elementen geselecteerd en wordt de class remove verwijderd zodat je de pagina weer kunt zien
function doneloading() {
  Array.from(document.getElementsByClassName("remove")).forEach((elementenVerwijderen) => {
    elementenVerwijderen.classList.remove("remove");
  });
}

//Aangeven wat hij moet doen wanneer hij geladen is.
request.onload = function () {
  // LOADING STATE -- Een functie aan maken voor de loading state
  // bron: https://www.w3schools.com/jsref/met_win_settimeout.asp
  setTimeout(function () {
    // voer deze functie uit
    doneloading();
    // aangeven welke class hij moet laden zien tijdens het laden
    document.querySelector(".loading").classList.add("remove");
    // aangeven wat hij daarna moet laten zien
    showMovies(request.response);
    // aangeven hoelang hij moet laden
  }, 2000);
  //Zo noem ik het json bestand
  var alleFilms = request.response;
  //in console alle films laten tonen
  console.log(alleFilms);
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
  //Een aantal elementen zijn images. Hiermee worden al deze images geselecteerd en eventlistener aan toegevoegd met een functie. Deze functie roept steeds het element op dat direct na de afbeelding komt, waardoor de bijbehorende div van een film wordt opgeroepen.
  Array.from(document.getElementsByTagName("img")).forEach(img => img.addEventListener("click", function () {
    img.nextElementSibling.classList.toggle('show');
    img.classList.toggle('show');
  }));
}

// FILTER FUNCTIE (hulp mee gehad)
function hideOrShowImages(target) {
  //  console.log(target.classList);
  //  console.log(Array.from(document.getElementsByClassName("films")));
  //Een aantal elementen hebben de class movie. Hiermee selecteer je alle movies en geef je het een eigen naam.
  Array.from(document.getElementsByClassName("movie")).forEach((films) => {
    //    console.log(target.classList[1], Array.from(element.classList));
    // als het lijstje movies en niet het gekozen genre bevat toggle je de classe remove;
    if (!Array.from(films.classList).includes(target.classList[1])) {
      console.log(Array.from(films.classList));
      //toggle dan die bepaalde movies
      films.classList.toggle('remove');
      // als het lijstje movies de class remove bevat;
    } else if (films.classList.includes("remove")) {
      //toggle dan die bepaalde movies
      films.classList.toggle('remove');
    }
  });
}

//Een aantal elementen hebben de class button. Hiermee worden al deze elementen geselecteerd en een eventlistener aan toegevoegd met de functie hideorshowimages.
Array.from(document.getElementsByClassName("button")).forEach(genres => genres.addEventListener("click", function () {
  hideOrShowImages(event.target)
}));

// DARK EN LIGHT MODE FUNCTIE
// idee van Sanne. Alleen klein beetje aangepast.

// var aanmaken selecteren p in header, om later tekst te veranderen
var defaultText = document.querySelector('header div p');

// vullen van de content - automatisch darkmode, dus dit is default
defaultText.innerHTML = 'Darkmode - Druk op L';

// aanroepen wat hij moet gaan doen als keypress d & L plaats vindt
window.addEventListener("keydown", event => {

  if (event.key == "d") {
    //Wanneer key event gelijk is aan D ; wordt het volgende gedaan;
    //Tekst in console log
    console.log('darkmode is aan');
    //Verwijderd class lightmode aan body
    document.querySelector('body').classList.remove('lightmode');
    //Voegt class darkmode toe aan body
    document.querySelector('body').classList.add('darkmode');
    //Tekst veranderen in de button
    defaultText.innerHTML = 'Darkmode - Druk op L';
  } else if (event.key == "l") {
    //Wanneer key event gelijk is aan L ; wordt het volgende gedaan;
    //Tekst in console log
    console.log('lightmode is aan');
    //Verwijderd class darkmode aan body
    document.querySelector('body').classList.remove('darkmode');
    //Voegt class lightmode toe aan body
    document.querySelector('body').classList.add('lightmode');
    //Tekst veranderen in de button
    defaultText.innerHTML = 'Lightmode - Druk op D';
  }
});
