const infoButtons = [...document.querySelectorAll(".programs-card__info")];
const closeButtons = [...document.querySelectorAll(".programs-card__close")];
const cardInnerElements = [...document.querySelectorAll(".programs-card__inner")];

infoButtons.forEach((button, index) => {
  button.onclick = () => {
    cardInnerElements[index].classList.remove("unflipped");
    cardInnerElements[index].classList.add("flipped");
  };
});

closeButtons.forEach((button, index) => {
  button.onclick = () => {
    cardInnerElements[index].classList.remove("flipped");
    cardInnerElements[index].classList.add("unflipped");
  };
});

const cardsOptions = {
  root: null,
  rootMargin: "0px 0px -100px 0px",
  threshold: 0,
};

const testimonialOptions = {
  root: null,
  rootMargin: "0px 0px -200px 0px",
  threshold: 0,
};

const addAnimateToCards = (entries) => {
  if (entries[0].isIntersecting) {
    const cards = [...document.querySelectorAll(".programs__card")];
    cards.forEach((card) => card.classList.add("animate"));
  }
};

const addAnimateToTestimonial = (entries) => {
  if (entries[0].isIntersecting) {
    const testimonial = document.querySelector(".programs__testimonial");
    const user = document.querySelector(".programs__user");
    testimonial.classList.add("animate");
    user.classList.add("animate");
  }
};

const cardsTarget = document.querySelector(".programs__card");
const testimonialsTarget = document.querySelector(".programs__testimonial");
const cardsObserver = new IntersectionObserver(addAnimateToCards, cardsOptions);
const testimonialObserver = new IntersectionObserver(
  addAnimateToTestimonial,
  testimonialOptions
);

cardsObserver.observe(cardsTarget);
testimonialObserver.observe(testimonialsTarget);
