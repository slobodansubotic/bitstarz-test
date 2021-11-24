const infoButtons = [...document.querySelectorAll(".programs-card__info")];
const closeButtons = [...document.querySelectorAll(".programs-card__close")];
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