const checkFlexGap = () => {
  // create flex container with row-gap set
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  // create two, elements inside it
  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  // append to the DOM (needed to obtain scrollHeight)
  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1; // flex container should be 1px high from the row-gap
  flex.parentNode.removeChild(flex);

  return isSupported;
};

const gapSupported = checkFlexGap()

if (!gapSupported) {
  const cards = document.querySelector(".programs__group");
  const buttonsGroup = document.querySelector(".hero-content__buttons");
  cards.classList.add("no-gap");
  buttonsGroup.classList.add('no-gap')
}

const infoButtons = [...document.querySelectorAll(".programs-card__info")];
const closeButtons = [...document.querySelectorAll(".programs-card__close")];
const cardInnerElements = [
  ...document.querySelectorAll(".programs-card__inner"),
];

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
