const menuOpen = document.querySelector(".menu-btn");
const menuClose = document.querySelector(".menu-close");
const menuContainer = document.querySelector(".menu-container");

menuOpen.addEventListener("click", () => {
    menuContainer.style.display = "flex";
})

menuClose.addEventListener("click", () => {
    menuContainer.style.display = "none";
})