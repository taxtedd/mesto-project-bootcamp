function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

function toggleButtonState(inputList, buttonElement, inactiveButtonClass) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(inactiveButtonClass);
    buttonElement.disabled = false;
  }
}

function showInputError(formElement, inputElement, errorMessage, parametrs) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.add(parametrs.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(parametrs.errorClass);
}

function hideInputError(formElement, inputElement, parametrs) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.remove(parametrs.inputErrorClass);
  errorElement.classList.remove(parametrs.errorClass);
  errorElement.textContent = '';
}

function isValid(formElement, inputElement, parametrs) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, parametrs);
  } else {
    hideInputError(formElement, inputElement, parametrs);
  }
}

function setEventListeners(formElement, parametrs) {
  const inputList = Array.from(formElement.querySelectorAll(parametrs.inputSelector));
  const buttonElement = formElement.querySelector(parametrs.submitButtonSelector);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement, parametrs);
      toggleButtonState(inputList, buttonElement, parametrs.inactiveButtonClass);
    });
  });
}

function enableValidation(parametrs){
  const formList = Array.from(document.querySelectorAll(parametrs.formSelector));
  formList.forEach((formElement) => {setEventListeners(formElement, parametrs)});
}

export {enableValidation, toggleButtonState}