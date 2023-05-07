import '../pages/index.css';

import {
  openPopup,
} from './utils.js'
import {
  elements,
  elementsAddEventListener,
  addElement
} from './card.js'
import {
  profileForm,
  handleProfileFormSubmit,
  handlePlaceFormSubmit,
  handleAvatarFormSubmit,
  exitPopup,
  placeForm,
  setEditPopupFields,
  editPopup,
  addPopup,
  avatarPopup,
  avatarForm,
  setProfileFields
} from './modal.js'
import {
  enableValidation,
  toggleButtonState
} from './validate.js'
import {
  getInitialCards,
  getUserInfo
} from './api.js'

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
const avatarButton = document.querySelector('.profile__image-button');

const editPopupSubmitButton = editPopup.querySelector(enableValidationData.submitButtonSelector);
const addPopupSubmitButton = addPopup.querySelector(enableValidationData.submitButtonSelector);
const avatarPopupSubmitButton = avatarPopup.querySelector(enableValidationData.submitButtonSelector);

const addForm = addPopup.querySelector('.popup__form');

const editInputList = Array.from(editPopup.querySelectorAll(enableValidationData.inputSelector));
const addInputList = Array.from(addPopup.querySelectorAll(enableValidationData.inputSelector));
const avatarInputList = Array.from(avatarPopup.querySelectorAll(enableValidationData.inputSelector));

export let thisUser = {};

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

avatarButton.addEventListener('click', () => {
  toggleButtonState(avatarInputList, avatarPopupSubmitButton, enableValidationData.inactiveButtonClass); 
  openPopup(avatarPopup);
});

profileForm.addEventListener('submit', handleProfileFormSubmit);

placeForm.addEventListener('submit', handlePlaceFormSubmit);

avatarForm.addEventListener('submit', handleAvatarFormSubmit);

elements.addEventListener('click', elementsAddEventListener);

enableValidation(enableValidationData);

Promise.all([
getUserInfo(), 
getInitialCards() ])
  .then(([user, initialCards])=>{
    setProfileFields(user.name, user.about, user.avatar);
    thisUser = user;

    for (let i = initialCards.length - 1; i>=0; i--) {
      addElement(initialCards[i]);
    }
  }) 
  .catch((err)=>{
  console.log(err);
   }) 