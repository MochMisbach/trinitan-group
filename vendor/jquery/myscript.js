window.onscroll = function() {
    const header = document.querySelector('#header');
    const navFixed = header.offsetTop;

    if (window.pageYOffset > navFixed) {
        header.classList.add('nav-active');
    } else {
        header.classList.remove('nav-active');
    }
    
}