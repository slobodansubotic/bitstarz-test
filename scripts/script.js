const infoButtons = [...document.querySelectorAll(".cards-card__info")];
const closeButtons = [...document.querySelectorAll(".cards-card__close")];
const cardInnerElements = [...document.querySelectorAll(".cards-card__inner")];

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
    const cards = [...document.querySelectorAll(".cards__card")];
    cards.forEach((card) => card.classList.add("animate"));
  }
};

const addAnimateToTestimonial = (entries) => {
  if (entries[0].isIntersecting) {
    const testimonial = document.querySelector(".cards__testimonial");
    const user = document.querySelector(".cards__user");
    testimonial.classList.add("animate");
    user.classList.add("animate");
  }
};

const cardsTarget = document.querySelector(".cards__card");
const testimonialsTarget = document.querySelector(".cards__testimonial");
const cardsObserver = new IntersectionObserver(addAnimateToCards, cardsOptions);
const testimonialObserver = new IntersectionObserver(
  addAnimateToTestimonial,
  testimonialOptions
);

cardsObserver.observe(cardsTarget);
testimonialObserver.observe(testimonialsTarget);
