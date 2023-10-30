export default function initScrollSuave() {

  const linkInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    

    // different way
    // const topo=section.offsetTop;

    // window.scrollTo({
    //   top: topo,
    //   behavior: 'smooth',
    // });
  }

  linkInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  }
  );
}

