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
var removeMenuIconOnScroll = debounce(function() {
    var fullscreenMenu = document.querySelector('.menu');
    if (window.innerWidth >= 540) {
        menuIcon.classList.add('hide');
        fullscreenMenu.classList.remove('hide');
    } else {
        menuIcon.classList.remove('hide');
        fullscreenMenu.classList.add('hide');
    }
});
window.addEventListener('resize', removeMenuIconOnScroll);

