const menuOpen = document.querySelector(".menu-btn");
const menuClose = document.querySelector(".menu-close");
const menuContainer = document.querySelector(".menu-container");
const pageMask = document.querySelector(".page-mask");

menuOpen.addEventListener("click", () => {
    menuContainer.style.display = "flex";
    pageMask.style.display = "block";
})

menuClose.addEventListener("click", () => {
    menuContainer.style.display = "none";
    pageMask.style.display = "none";

})