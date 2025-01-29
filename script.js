const animateOnScroll = () => {
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

const track = document.querySelector('.carousel-track');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
let currentIndex = 0;

nextButton.addEventListener('click', () => {
  const totalCards = document.querySelectorAll('.carousel-card').length;
  if (currentIndex < totalCards - 1) {
    currentIndex++;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
});

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
});