// Hamburger Menü Toggle
document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('active');
});

// Sabit Butonlar
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.querySelector('.fixed-buttons').style.opacity = '1';
    } else {
        document.querySelector('.fixed-buttons').style.opacity = '0.7';
    }
};
