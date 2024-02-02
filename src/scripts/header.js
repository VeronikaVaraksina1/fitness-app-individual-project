function openOrCloseMobileMenu() {
  const mobileMenu = document.querySelector('.mobile-menu-wrapper');
  const links = document.querySelectorAll('.nav-link');
  const btnOpen = document.querySelector('.btn-open-mobile-menu');
  const btnClose = document.querySelector('.btn-close-mobile-menu');

  btnOpen.addEventListener('click', () => {
    mobileMenu.classList.add('mobile-menu-is-open');
  });

  btnClose.addEventListener('click', () => {
    mobileMenu.classList.remove('mobile-menu-is-open');
  });

  links.forEach(link =>
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('mobile-menu-is-open');
    })
  );
}

openOrCloseMobileMenu();

function changeActiveLink() {
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('load', () => {
    const currentPage = window.location.pathname;

    if (currentPage.includes('/index.html') || currentPage === '/') {
      navLinks[1].classList.remove('active-link');
      navLinks[3].classList.remove('active-link');
      navLinks[0].classList.add('active-link');
      navLinks[2].classList.add('active-link');
    } else if (currentPage.includes('/favorites.html')) {
      navLinks[0].classList.remove('active-link');
      navLinks[2].classList.remove('active-link');
      navLinks[1].classList.add('active-link');
      navLinks[3].classList.add('active-link');
    }
  });
}

changeActiveLink();
