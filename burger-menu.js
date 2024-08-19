const burgerMenu = document.getElementById("burger-menu");
const burgerIcon = document.getElementById("burger-icon");

burgerIcon.addEventListener('click', () => {
  burgerMenu.classList.toggle('show');
  burgerIcon.classList.toggle('active');
  document.body.classList.toggle('no-scroll', burgerMenu.classList.contains('show'));
});