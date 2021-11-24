const modal = document.querySelector(".modal");
const modalOverlay = document.querySelector(".modal__overlay");
const modalUnderlay = document.querySelector(".modal__underlay");
const creditCardInput = document.querySelector(".credit-card");
const inputContainers = [...document.querySelectorAll(".input-animated")];
const inputs = [...document.querySelectorAll(".input-animated input")];
const form = document.querySelector(".modal-form__body");
const startButton = document.querySelector(".start__button");

let isValid = true;

const cardNumberInput = inputs[0];
const cardDateInput = inputs[1];
const cvvInput = inputs[2];
const fullName = inputs[3];
const regexVisa = new RegExp("^54");
const regexMastercard = new RegExp("^45");
const regexDate = new RegExp("^(0[1-9]|1[0-2])/?([0-9]{2})$");

const openModal = () => {
  if (!modal.classList.contains("active")) {
    modal.classList.remove("closed");
    modal.classList.add("active");
    modalUnderlay.classList.remove("closed");
    modalUnderlay.classList.add("active");

    lockScroll();
  } else {
    modal.classList.remove("active");
    modalUnderlay.classList.remove("active");
  }
};

const clearInputs = () => {
  inputs.forEach((input) => {
    input.value = "";
  });
  inputContainers.forEach((element) =>
    element.classList.remove("invalid", "active")
  );
};

const closeModal = () => {
  modal.classList.remove("active");
  modal.classList.add("closed");
  modalUnderlay.classList.add("closed");
  unlockScroll();
  clearInputs();
};

const validateRequired = (input, index) => {
  if (!input.validity.valid) {
    inputContainers[index].classList.add("invalid");
    isValid = false;
  } else {
    inputContainers[index].classList.remove("invalid");
    isValid = true;
  }
};

const handleCardNumberInput = () => {
  if (regexVisa.test(cardNumberInput.value)) {
    creditCardInput.classList.add("visa");
  } else if (regexMastercard.test(cardNumberInput.value)) {
    creditCardInput.classList.add("mastercard");
  } else {
    creditCardInput.classList.remove("visa", "mastercard");
  }
  formatNumber(cardNumberInput, 16);
  validateRequired(cardNumberInput, 0);
};

const formatString = (event) => {
  let code = event.keyCode;
  let allowedKeys = [8];

  if (allowedKeys.indexOf(code) !== -1) {
    return;
  }

  event.target.value = event.target.value
    .replace(
      /^([1-9]\/|[2-9])$/g,
      "0$1/" // 3 > 03/
    )
    .replace(
      /^(0[1-9]|1[0-2])$/g,
      "$1/" // 11 > 11/
    )
    .replace(
      /^([0-1])([3-9])$/g,
      "0$1/$2" // 13 > 01/3
    )
    .replace(
      /^(0?[1-9]|1[0-2])([0-9]{2})$/g,
      "$1/$2" // 141 > 01/41
    )
    .replace(
      /^([0]+)\/|[0]+$/g,
      "0" // 0/ > 0 and 00 > 0
    )
    .replace(
      /[^\d\/]|^[\/]*$/g,
      "" // To allow only digits and `/`
    )
    .replace(
      /\/\//g,
      "/" // Prevent entering more than 1 `/`
    );
};

const handleCardDateInput = (event) => {
  formatString(event);
  const currentValueYear =
    cardDateInput.value.split("/").length > 1
      ? cardDateInput.value.split("/")[1]
      : null;

  if (
    !currentValueYear ||
    parseInt(currentValueYear) < 21 ||
    currentValueYear.length > 2 ||
    !cardDateInput.value
  ) {
    inputContainers[1].classList.add("invalid");
    isValid = false;
  } else {
    inputContainers[1].classList.remove("invalid");
    isValid = true;
  }
};

const formatNumber = (element, maxLength) => {
  if (element.value.length > maxLength)
    element.value = element.value.slice(0, maxLength);
};

startButton.onclick = openModal;

modalOverlay.onclick = closeModal;

cardNumberInput.oninput = handleCardNumberInput;

cardDateInput.onkeyup = (event) => handleCardDateInput(event);

cvvInput.oninput = () => {
  formatNumber(cvvInput, 3);
  validateRequired(cvvInput, 2);
};

fullName.oninput = () => {
  validateRequired(fullName, 3);
};

inputs.forEach((input, index) => {
  input.onfocus = () => {
    inputContainers[index].classList.add("active");
  };
  input.onblur = () => {
    if (!input.value) {
      inputContainers[index].classList.remove("active");
    }
  };
});

form.onsubmit = (event) => {
  event.preventDefault();

  inputs.forEach((input, index) => {
    validateRequired(input, index);
  });

  isValid && closeModal();
};
