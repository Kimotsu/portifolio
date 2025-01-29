onst animateOnScroll = () => {
  const elements = document.querySelectorAll('.animate-on-scroll');
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (elementTop < windowHeight * 0.75) {
      element.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);