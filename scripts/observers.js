const programsTarget = document.querySelector(".programs__group");
const testimonialsTarget = document.querySelector(".programs__testimonial");
const playlistsTarget = document.querySelector(".playlists__group");
const startTarget = document.querySelector(".start__content");
const programs = [...document.querySelectorAll(".programs__card")];
const user = document.querySelector(".programs__user");
const playlists = [...document.querySelectorAll(".playlists__card")];
const title = document.querySelector(".playlists__title");

const observerlOptions = {
  root: null,
  rootMargin: "0px 0px -200px 0px",
  threshold: 0,
};

const addAnimateToCards = (entries) => {
  if (entries[0].isIntersecting) {
    programs.forEach((card) => card.classList.add("animate"));
  }
};

const addAnimateToTestimonial = (entries) => {
  if (entries[0].isIntersecting) {
    testimonialsTarget.classList.add("animate");
    user.classList.add("animate");
  }
};

const addAnimateToPlaylists = (entries) => {
  if (entries[0].isIntersecting) {
    playlists.forEach((card) => card.classList.add("animate"));
    title.classList.add("animated");
  }
};

const addAnimateToStart = (entries) => {
  if (entries[0].isIntersecting) {
    startTarget.classList.add("animated");
  }
};

const programsObserver = new IntersectionObserver(
  addAnimateToCards,
  observerlOptions
);
const testimonialObserver = new IntersectionObserver(
  addAnimateToTestimonial,
  observerlOptions
);
const playlistsObserver = new IntersectionObserver(
  addAnimateToPlaylists,
  observerlOptions
);
const startObserver = new IntersectionObserver(
  addAnimateToStart,
  observerlOptions
);

programsObserver.observe(programsTarget);
testimonialObserver.observe(testimonialsTarget);
playlistsObserver.observe(playlistsTarget);
startObserver.observe(startTarget);
