const arrow1 = document.querySelector('#arrow1');
const arrow2 = document.querySelector('#arrow2');

arrow1.onclick = function () {
  document.querySelector('.scrolling_wrapper').scrollLeft -= 600;
};
arrow2.onclick = function () {
  document.querySelector('.scrolling_wrapper').scrollLeft += 600;
};