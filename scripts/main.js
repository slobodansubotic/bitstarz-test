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

const menu = document.querySelector(".navigation-menu__button");
const menuList = document.querySelector(".navigation__wrapper");

menu.onclick = () => {
  menu.classList.toggle("active");

  if (menuList.classList.contains("active")) {
    menuList.classList.add("closed");
  } else {
    menuList.classList.remove("closed");
  }

  menuList.classList.toggle("active");
};

const startButton = document.querySelector(".start__button");
const modal = document.querySelector(".modal");
const modalOverlay = document.querySelector(".modal__overlay");
const modalUnderlay = document.querySelector(".modal__underlay");

startButton.onclick = () => {
  if (!modal.classList.contains("active")) {
    modal.classList.remove("closed");
    modal.classList.add("active");
    modalUnderlay.classList.remove("closed");
    modalUnderlay.classList.add("active");
  } else {
    modal.classList.remove("active");
    modalUnderlay.classList.remove("active");
  }
};

modalOverlay.onclick = () => {
  modal.classList.remove("active");
  modal.classList.add("closed");
  modalUnderlay.classList.add("closed");
};
