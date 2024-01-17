document.addEventListener('scroll', function() {
    var wave = document.getElementById('navbarpc');
    var scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

    if (scrollPercentage >= 4) {
        wave.classList.add('backdrop-filter-on');
    } else {
        wave.classList.remove('backdrop-filter-on');
    }
});