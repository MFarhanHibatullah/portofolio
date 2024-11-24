const nav = document.getElementById('nav');

window.addEventListener('scroll', function () {
    scrollposition = window.scrollY;

    if ( scrollposition >= 60 ) {
        nav.classList.add('nav-light');
    } else if ( scrollposition <= 60 ) {
        nav.classList.remove('nav-light');
    }
})

var icon = document.getElementById("mode");
icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }

    });

});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));