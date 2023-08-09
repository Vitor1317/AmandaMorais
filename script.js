const nav = document.querySelector(".navigation");
const body = document.querySelector("body");

function openMenu() {
    body.classList.add("overlay");
    nav.classList.add("open");
}

function closeMenu() {
    body.classList.remove("overlay");
    nav.classList.remove("open");
}