const burger = document.querySelector(".burger_menu");
const navMenu = document.querySelector(".navmenu");

/* Burger menu åbner og lukker */
burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    navMenu.classList.toggle("open");

})
/* Lukker burger menu, når man klikker på en af menu elementer */
document.querySelectorAll(".menu_item").forEach(n => n.addEventListener("click", () => {
    burger.classList.remove("open");
    navMenu.classList.remove("open");
}))


