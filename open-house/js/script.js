
const navbars = document.querySelectorAll("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 5) {
    navbars.forEach(navbar => {
      navbar.classList.add("scroll");
    });
  } else {
    navbars.forEach(navbar => {
      navbar.classList.remove("scroll");
    });
  }
});



function smoothScroll(target) {
  const targetElement = document.querySelector(target);
  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop - 75,
      behavior: 'smooth'
    });
  }
}

// Menambahkan event listener ke setiap tautan dengan href #
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    smoothScroll(this.getAttribute('href'));
  });
});
