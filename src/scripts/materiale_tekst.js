const text = document.querySelector(".text");
const opened = document.querySelector(".text.open");

/* toggler "open" for hvert element med ".text" class */
document.querySelectorAll(".text").forEach((text) => {
  text.addEventListener("click", () => {
    text.classList.toggle("open");
  });
/* fjerner "open" class når man klikker andet sted end elementet med "open" class */
document.addEventListener('click', function (event) {
  if (event.target !== text)
  text.classList.remove('open');
 });

});
