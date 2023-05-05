import '../pages/index.css';

import {
  openPopup,
  editPopup,
  addPopup
} from './utils.js'
import {
  elements,
  addElement,
  elementsAddEventListener
} from './card.js'
import {
  profileForm,
  handleProfileFormSubmit,
  handlePlaceFormSubmit,
  exitPopup,
  placeForm,
  setEditPopupFields
} from './modal.js'
import {
  enableValidation,
  toggleButtonState
} from './validate.js'

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export const enableValidationData = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

const popups = document.querySelectorAll('.popup');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');

const editPopupSubmitButton = editPopup.querySelector(enableValidationData.submitButtonSelector);
const addPopupSubmitButton = addPopup.querySelector(enableValidationData.submitButtonSelector);

const addForm = addPopup.querySelector('.popup__form');

const editInputList = Array.from(editPopup.querySelectorAll(enableValidationData.inputSelector));
const addInputList = Array.from(addPopup.querySelectorAll(enableValidationData.inputSelector));

popups.forEach((popup) => popup.addEventListener('click', exitPopup));
editButton.addEventListener('click', () => {
  setEditPopupFields();
  toggleButtonState(editInputList, editPopupSubmitButton, enableValidationData.inactiveButtonClass); 
  openPopup(editPopup);
});
addButton.addEventListener('click', () => {
  addForm.reset();
  toggleButtonState(addInputList, addPopupSubmitButton, enableValidationData.inactiveButtonClass);
  openPopup(addPopup);
});
profileForm.addEventListener('submit', handleProfileFormSubmit);
placeForm.addEventListener('submit', handlePlaceFormSubmit);
elements.addEventListener('click', elementsAddEventListener);

enableValidation(enableValidationData);

initialCards.forEach(item => addElement(item));