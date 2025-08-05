  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  });

  document.querySelectorAll('.animate-on-scroll').forEach((el) => {
    observer.observe(el);
  });


  const openBtn = document.querySelector('.small_button');
const closeBtn = document.querySelector('.close_button');
const navBar = document.querySelector('.nav-bar');

openBtn.addEventListener('click', () => {
  navBar.classList.add('show');
});

closeBtn.addEventListener('click', () => {
  navBar.classList.remove('show');
});

