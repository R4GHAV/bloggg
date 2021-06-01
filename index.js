window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 230 || document.documentElement.scrollTop > 230) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar").style.position="fixed";
  } else {
    document.getElementById("navbar").style.position="relative";
  }
}