/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/


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