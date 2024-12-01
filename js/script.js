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

// Get modal elements
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const captionText = document.getElementById("caption");
const closeBtn = document.querySelector(".close");


const images = document.querySelectorAll(".clickable-image");

images.forEach((img) => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImage.src = img.src;
    captionText.textContent = img.alt;
  });
});


closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});


modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
