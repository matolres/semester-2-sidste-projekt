const arrow1 = document.querySelector('#arrow1');
const arrow2 = document.querySelector('#arrow2');

/* Scroller venstre/højre når venstre/højre pil trykkes */ 
document.addEventListener("DOMContentLoaded", documentReady)
function documentReady() {
arrow1.onclick = function () {
  document.querySelector('.scrolling_wrapper').scrollLeft -= 285;
};
arrow2.onclick = function () {
  document.querySelector('.scrolling_wrapper').scrollLeft += 285;
};
}