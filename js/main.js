const menuBtn = document.querySelector(".menu-btn");
const menuMobile = document.querySelector(".menu-mobile");
const navItems = document.querySelectorAll(".navItem");

const body = document.getElementsByTagName("body")[0];

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

navItems.forEach(function (elem) {
  elem.addEventListener("click", toggleMenu);
});

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menuMobile.classList.add("show");
    body.classList.add("fixedPos");
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menuMobile.classList.remove("show");
    body.classList.remove("fixedPos");
    showMenu = false;
  }
}
