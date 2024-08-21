const burgerMenu = document.getElementById("burger-menu");
const burgerIcon = document.getElementById("burger-icon");

burgerIcon.addEventListener('click', () => {
  burgerMenu.classList.toggle('show');
  burgerIcon.classList.toggle('active');
  document.body.classList.toggle('no-scroll', burgerMenu.classList.contains('show'));
});

const burgerLinks = document.querySelectorAll('.burger-menu a');

burgerLinks.forEach(link => {
  link.addEventListener('click', () => {
    burgerMenu.classList.remove('show');
    burgerIcon.classList.remove('active');
    document.body.classList.remove('no-scroll');
  });
});