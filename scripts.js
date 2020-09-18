var menuIcon = document.querySelector('.mobile-icon');
var mobileMenu = document.querySelector('.mobile-menu');
menuIcon.addEventListener('click', function() {
    // console.log('icon clicked');
    mobileMenu.classList.toggle('hide');
});
// console.log(menuIcon);