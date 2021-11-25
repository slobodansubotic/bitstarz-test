let scrollPosition = 0;

const lockScroll = () => {
  scrollPosition = window.pageYOffset;
  // On older iOS page flashes when scroll locks, so this adds a delay for that until animation is finished.
  setTimeout(() => {
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = "100%";
  }, 300)
};

const unlockScroll = () => {
  document.body.style.removeProperty("overflow");
  document.body.style.removeProperty("position");
  document.body.style.removeProperty("top");
  document.body.style.removeProperty("width");
  window.scrollTo(0, scrollPosition);
};
