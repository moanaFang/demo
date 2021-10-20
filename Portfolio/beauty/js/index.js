let hamburgerOpen = document.getElementById("hamburger-open");
let hamburgerClose = document.getElementById("hamburger-close");
let sideList = document.getElementById("sideList");
hamburgerOpen.addEventListener('click', () => {
    sideList.style.display = "block";
});
hamburgerClose.addEventListener('click', () => {
    sideList.style.display = "none";
});