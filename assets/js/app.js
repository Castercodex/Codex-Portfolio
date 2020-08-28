let navBar = document.querySelector('nav');

if(window.outerWidth > 768){
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 70) {
            navBar.classList.add('nav');
        } else {
            navBar.classList.remove('nav');
        }
    
    });
}