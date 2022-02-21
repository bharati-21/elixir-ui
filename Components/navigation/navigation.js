const navigation = document.querySelector('.navigation-bar');
const navigationHamburger = document.querySelector('.navigation-bar-hamburger');
const navigationCloseButton = document.querySelector('.btn-navigation-close');

navigationHamburger.addEventListener('click', openNavigation);
navigationCloseButton.addEventListener('click', openNavigation);


function openNavigation(e) {
    navigation.classList.toggle('navigation-open');
}