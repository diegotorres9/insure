// Debounce Function
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}
// -------------------------------------------------
// toggle menu on mobile devices and stop scrolling while menu is shown
// toggle between open and close img buttons
var menuIcon = document.querySelector('.mobile-icon');
var mobileMenu = document.querySelector('.mobile-menu');
var body = document.querySelector('body');
menuIcon.addEventListener('click', function() {
    // console.log('icon clicked');
    mobileMenu.classList.toggle('hide');
    body.classList.toggle('noscroll');
    if(mobileMenu.classList.contains('hide')){
        menuIcon.src = "./images/icon-hamburger.svg";
    } else {
        menuIcon.src = "./images/icon-close.svg";
    }
    
});
// ------------------------------------------------------
// switch between menu icon and desktop menu when greater than 540px;
// hide svg from h1 on small screens
var removeMenuIconOnScroll = debounce(function() {
    var fullscreenMenu = document.querySelector('.menu');
    var heroLine = document.querySelector('.hero-line');
    if (window.innerWidth >= 540) {
        menuIcon.classList.add('hide');
        fullscreenMenu.classList.remove('hide');
        heroLine.classList.remove('hide');
    } else {
        menuIcon.classList.remove('hide');
        fullscreenMenu.classList.add('hide');
        heroLine.classList.add('hide');
    }
});
window.addEventListener('resize', removeMenuIconOnScroll);
// ---------------------------------------------------------
// hide desktop patters unless window size is greater than 1100px
var desktopBackgroundImg = debounce(function() {
    var leftDesktopImage = document.querySelector('.bg-pattern-left-desktop');
    var rightDesktopImage = document.querySelector('.bg-pattern-right-desktop');
    var leftMobileImg = document.querySelector('.bg-pattern-left-mobile');
    var rightMobileImg = document.querySelector('.bg-pattern-right-mobile');
    if (window.innerWidth >= 1100) {
        leftDesktopImage.classList.remove('hide');
        rightDesktopImage.classList.remove('hide');
        leftMobileImg.classList.add('hide');
        rightMobileImg.classList.add('hide');
    } else {
        leftDesktopImage.classList.add('hide');
        rightDesktopImage.classList.add('hide');
        leftMobileImg.classList.remove('hide');
        rightMobileImg.classList.remove('hide');
    }
});
window.addEventListener('resize', desktopBackgroundImg);
// --------------------------------------------------------------