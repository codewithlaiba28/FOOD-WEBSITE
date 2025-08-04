  const openBtn = document.querySelector('.small_button');
  const closeBtn = document.querySelector('.close_button');
  const navBar = document.querySelector('.nav-bar');

  openBtn.addEventListener('click', () => {
    navBar.classList.add('show');
  });

  closeBtn.addEventListener('click', () => {
    navBar.classList.remove('show');
  });






  const cards = document.querySelectorAll('.card');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show'); // immediate trigger
        observer.unobserve(entry.target); // animate only once
      }
    });
  }, {
    threshold: 0.2
  });

  cards.forEach(card => observer.observe(card));



  const serviceCards = document.querySelectorAll('.services_card');

const observerServices = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

serviceCards.forEach(card => observerServices.observe(card));



  