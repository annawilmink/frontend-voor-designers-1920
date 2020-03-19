var header = document.querySelector('header');
var section = document.querySelector('section');

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

function titels(movies) {
  var h1 = document.createElement('h1');
  h1.textContent = movies[3].title;
  header.appendChild(h1);
  
  var plot = document.createElement('plot');
  plot.textContent = movies[3].plot;
  header.appendChild(plot);
  
  var cover = document.createElement('img');
  cover.src = movies[3].cover;
  header.appendChild(cover);
}

//function TitelHeader(jsonObj) {
//  const myH1 = document.createElement('h1');
//  myH1.textContent = jsonObj['squadName'];
//  header.appendChild(myH1);
//}
//  const myPara = document.createElement('p');
//  myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
//  header.appendChild(myPara);


//function showCover(jsonObj) {
//  const heroes = jsonObj['members'];
//      
//  for (let i = 0; i < heroes.length; i++) {
//    const myArticle = document.createElement('article');
//    const myH2 = document.createElement('h2');
//    const myPara1 = document.createElement('p');
//    const myPara2 = document.createElement('p');
//    const myPara3 = document.createElement('p');
//    const myList = document.createElement('ul');
//
//    myH2.textContent = heroes[i].name;
//    myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
//    myPara2.textContent = 'Age: ' + heroes[i].age;
//    myPara3.textContent = 'Superpowers:';
//        
//    const superPowers = heroes[i].powers;
//    for (let j = 0; j < superPowers.length; j++) {
//      const listItem = document.createElement('li');
//      listItem.textContent = superPowers[j];
//      myList.appendChild(listItem);
//    }
//
//    myArticle.appendChild(myH2);
//    myArticle.appendChild(myPara1);
//    myArticle.appendChild(myPara2);
//    myArticle.appendChild(myPara3);
//    myArticle.appendChild(myList);
//
//    section.appendChild(myArticle);
//  }
//}