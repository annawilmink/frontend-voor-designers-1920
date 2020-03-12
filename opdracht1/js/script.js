/*
  Wat doe je ook alweer in Javascript voor een micro-interactie?
  1. Gebruik de querySelector om een element in je html te selecteren
  2. Koppel een evenListener aan het element om een mouse-event te detecteren
  3. Gebruik het Classlist object om een css class aan een element toe te voegen of weg te halen.
*/

/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/


console.log('test');

//als het element .categorien bestaat (dus knop) dan maakt hij er een eventlistener aan vast, anders niet.

var foto1 = document.querySelector(".foto1");
var details1 = document.querySelector(".dropdownsection1");
var foto2 = document.querySelector(".foto2");
var details2 = document.querySelector(".dropdownsection2");
var foto3 = document.querySelector(".foto3");
var details3 = document.querySelector(".dropdownsection3");
var foto4 = document.querySelector(".foto4");
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
    console.log("laat maar zien die details")

    details1.classList.add("show");
    details2.classList.add("show");
    details3.classList.add("show");
    details4.classList.add("show");
    
  }else{
    console.log("weghalen !")

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

console.log('test');
