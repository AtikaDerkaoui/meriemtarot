const menuToggle = document.getElementById("menu-toggle");
const menuClose = document.getElementById("menu-close");
const navLinks = document.querySelector(".nav-links-container");

function openMenu(){
    navLinks.classList.add("active");
}
function closeMenu(){
    navLinks.classList.remove("active");
}

menuToggle.addEventListener("click", openMenu);
menuClose.addEventListener("click", closeMenu);

navLinks.querySelectorAll("li").forEach((li) => {
    li.addEventListener("click", closeMenu);
});