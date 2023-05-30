const text = document.querySelector(".text");
const opened = document.querySelector(".text.open");

/* Toggler "open" for hvert element med ".text" class */
document.querySelectorAll(".text").forEach((text) => {
  text.addEventListener("click", () => {
    text.classList.toggle("open");
  });
/* Fjerner "open" class når man klikker andet sted end sidste elementet med "open" class */
document.addEventListener('click', function (event) {
  if (event.target !== text)
  text.classList.remove('open');
 });

});
