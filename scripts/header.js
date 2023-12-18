hamburger = document.querySelector('.hamburger');
hamburger.onclick = function() {
    menu = document.querySelector('.menu');
    menu.classList.toggle('active');
    hamburger.classList.toggle('hamburgerActive');
}