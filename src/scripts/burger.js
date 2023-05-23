const burger = document.querySelector(".burger_menu");
const navMenu = document.querySelector(".navmenu");

burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    navMenu.classList.toggle("open");

})

document.querySelectorAll(".menu_item").forEach(n => n.addEventListener("click", () => {
    burger.classList.remove("open");
    navMenu.classList.remove("open");
}))


