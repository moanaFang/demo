const hamburgerOpen = document.getElementById("hamburger-open");
const hamburgerClose = document.getElementById("hamburger-close");
const sidebarNav = document.getElementById("sidebarNav");
const handpickedProduct = document.querySelectorAll("#handpicked > .products > .product");
const handpickedImg = document.querySelectorAll("#handpicked > .products > .product .img");
const handpickedInfo = document.querySelectorAll("#handpicked > .products > .product > .info");
hamburgerOpen.addEventListener("click", () => {
    sidebarNav.style.display = "block";
});
hamburgerClose.addEventListener("click", () => {
    sidebarNav.style.display = "none";
});

for(let i=0; i<handpickedProduct.length; i++) {
    handpickedInfo[i].style.transition = "transform .5s";
    handpickedImg[i].addEventListener("mouseover", () => {
        handpickedInfo[i].style.transform = "translateY(0px)";
    });
    handpickedInfo[i].addEventListener("mouseleave", () => {
        handpickedInfo[i].style.transform = "translateY(138px)";
        handpickedProduct[i].style.height = "auto";
    });
}
