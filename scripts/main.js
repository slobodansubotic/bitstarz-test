const infoButtons = [...document.querySelectorAll(".programs-card__info")];
const closeButtons = [...document.querySelectorAll(".programs-card__close")];
const playlistCovers = [...document.querySelectorAll(".playlists-card__cover")];
const cardInnerElements = [
  ...document.querySelectorAll(".programs-card__inner"),
];
const menu = document.querySelector(".navigation-menu__button");
const menuList = document.querySelector(".navigation__wrapper");

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

menu.onclick = () => {
  menu.classList.toggle("active");
  if (menuList.classList.contains("active")) {
    menuList.classList.add("closed");
  } else {
    menuList.classList.remove("closed");
  }
  menuList.classList.toggle("active");
};

// Added empty click event on covers so they can react to tap action on mobile devices.
// Neede for hover animations.
playlistCovers.forEach((cover) => (cover.onclick = () => {}));
