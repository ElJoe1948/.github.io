const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");
hamburger.onclick = function () {
    navbar.classList.toggle("hidden");
}