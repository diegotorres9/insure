var menuIcon = document.querySelector('.mobile-icon');
var mobileMenu = document.querySelector('.mobile-menu');
var body= document.querySelector('body');
menuIcon.addEventListener('click', function() {
    // console.log('icon clicked');
    mobileMenu.classList.toggle('hide');
    body.classList.toggle('noscroll');
});
// console.log(menuIcon);