const menuOpen = document.querySelector(".menu-btn");
const menuClose = document.querySelector(".menu-close");
const menuContainer = document.querySelector(".menu-container");
const pageMask = document.querySelector(".page-mask");
const menuFeatures = document.querySelector(".features")
const menuCompany = document.querySelector(".company");
const navFeatures = document.querySelector(".nav-features-btn");
const navCompany = document.querySelector(".nav-company-btn");


menuOpen.addEventListener("click", () => {
    menuContainer.style.display = "flex";
    pageMask.style.display = "block";
})

menuClose.addEventListener("click", () => {
    menuContainer.style.display = "none";
    pageMask.style.display = "none";

})

function openMenuList(list){
    if(list.parentElement.children[1].style.display === "" || list.parentElement.children[1].style.display === "none"){
        list.children[0].src = "./images/icon-arrow-up.svg";
        console.log(list.parentElement.children[1].style.display)
        list.parentElement.children[1].style.display = "flex";
    } else {
        list.children[0].src = "./images/icon-arrow-down.svg";
        list.parentElement.children[1].style.display = "none";
    }
}
menuFeatures.addEventListener("click", () => {openMenuList(menuFeatures)})
menuCompany.addEventListener("click", () => {openMenuList(menuCompany)})
navFeatures.addEventListener("click", () => {openMenuList(navFeatures)})
navCompany.addEventListener("click", () => {openMenuList(navCompany)})

