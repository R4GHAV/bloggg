function myFunction(){
    var x = document.querySelector(".appear");
   x.classList.toggle("appear-on");
}
var chg=document.querySelector(".pp");
chg.innerHTML="A DOCTOR WHO IS ALWAYS TRIPPY";

var index=1;
slideShow(1);

function plusSlides(n) {
    slideShow(index += n);
  }


var x;
function slideShow(n) {
    var slides=document.getElementsByClassName("img");
    if(n<1){index=slides.length};
    if(n>slides.length){index=1};
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display="none";
        
    }
    x=index;
    slides[index-1].style.display="block";
}

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("img");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); 
}

