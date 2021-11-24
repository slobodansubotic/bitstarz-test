const infoButtons = [...document.querySelectorAll(".programs-card__info")];
const closeButtons = [...document.querySelectorAll(".programs-card__close")];
const cardInnerElements = [
  ...document.querySelectorAll(".programs-card__inner"),
];
const menu = document.querySelector(".navigation-menu__button");
const menuList = document.querySelector(".navigation__wrapper");
const startButton = document.querySelector(".start__button");
const modal = document.querySelector(".modal");
const modalOverlay = document.querySelector(".modal__overlay");
const modalUnderlay = document.querySelector(".modal__underlay");
const creditCardInput = document.querySelector(".credit-card");
const inputContainers = [...document.querySelectorAll(".input-animated")];
const inputs = [...document.querySelectorAll(".input-animated input")];
const placeholders = [
  ...document.querySelectorAll(".input-animated__placeholder"),
];
const form = document.querySelector(".modal-form__body");

const cardNumberInput = inputs[0];
const regexVisa = new RegExp("^54");
const regexMastercard = new RegExp("^45");

const closeModal = () => {
  modal.classList.remove("active");
  modal.classList.add("closed");
  modalUnderlay.classList.add("closed");
};

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

modalOverlay.onclick = closeModal;

cardNumberInput.onkeyup = () => {
  if (regexVisa.test(cardNumberInput.value)) {
    creditCardInput.classList.add("visa");
  } else if (regexMastercard.test(cardNumberInput.value)) {
    creditCardInput.classList.add("mastercard");
  } else {
    creditCardInput.classList.remove("visa", "mastercard");
  }

  console.log(!(cardNumberInput.value.toString().length > 16));
  (cardNumberInput.value.toString().length > 16)
    ? inputContainers[0].classList.add("invalid")
    : inputContainers[0].classList.remove("invalid");
};

inputs.forEach((input, index) => {
  input.onfocus = () => {
    placeholders[index].classList.add("active");
    input.classList.add("active");
  };
  input.onblur = () => {
    if (!input.value) {
      placeholders[index].classList.remove("active");
      input.classList.remove("active");
    }
  };
});

form.onsubmit = (event) => {
  event.preventDefault();

  let isValid = true;

  inputs.forEach((input, index) => {
    if (!input.validity.valid) {
      inputContainers[index].classList.add("invalid");
      isValid = false;
    } else {
      inputContainers[index].classList.remove("invalid");
    }
  });

  isValid && closeModal();
};
