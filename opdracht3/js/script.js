/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var header = document.querySelector('header');
var section = document.querySelector('section');
var button = document.querySelector('button');
var foto1 = document.querySelector('#foto1');
var foto2 = document.querySelector('#foto2');
var foto3 = document.querySelector('#foto3');
var foto4 = document.querySelector('#foto4');
var titel = document.querySelector('#titel');

//Url van de json
var requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';

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
  var alleFilms = request.response;
 // titelHeader(films);
  titels(alleFilms);
    console.log (alleFilms);
}

new Glider(document.querySelector('.glider'), {
  slidesToShow: 1,
  dots: '.dots',
  scrollLock:true,
  draggable: true,
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next'
  }
});

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 39) {
        var buttonRight = document.querySelector('.glider-next');
        console.log(buttonRight);
        buttonRight.click();
    }

});
  
document.addEventListener('keydown', function(event) {
    if(event.keyCode == 37) {
        var buttonLeft = document.querySelector('.glider-prev');
        console.log(buttonLeft);
        buttonLeft.click();
      
    }

});

function titels(movies) {
  var h1 = document.createElement('h1');
  h1.textContent = movies[0].title;
  header.appendChild(h1);
  
  var plot = document.createElement('plot');
  plot.textContent = movies[3].plot;
  header.appendChild(plot);
  
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