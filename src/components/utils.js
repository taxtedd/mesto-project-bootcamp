import {keyExitPopup} from './modal.js'
import {enableValidationData as parametrs} from './index.js'
import {toggleButtonState} from './validate.js'

const editPopup = document.querySelector('.popup_type_edit');
const addPopup = document.querySelector('.popup_type_add');
const imagePopup = document.querySelector('.popup_type_image');

const profileForm = document.forms.profileForm;
const nameInput = profileForm.elements.name;
const descriptionInput = profileForm.elements.description;

const addFrom = addPopup.querySelector('.popup__form');

const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

function setImagePopupFields(element) {
  imagePopup.querySelector('.popup__image').src = element.querySelector('.element__image').src;
  imagePopup.querySelector('.popup__image').alt = element.querySelector('.element__image').alt;
  imagePopup.querySelector('.popup__heading').textContent = element.querySelector('.element__title').textContent;
}

function setEditPopupFields() {
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
}

function openPopup(evt) {
  let popup = addPopup;

  if (evt.target.classList.contains('element__image')) {
    const element = evt.target.closest('.element');
    setImagePopupFields(element);
    popup = imagePopup;
  } else if (evt.target.classList.contains('profile__edit-button')) {
    setEditPopupFields();
    popup = editPopup;
  } else {
    addFrom.reset();

    const inputList = Array.from(addFrom.querySelectorAll(parametrs.inputSelector));
    const buttonElement = addFrom.querySelector(parametrs.submitButtonSelector);

    toggleButtonState(inputList, buttonElement, parametrs.inactiveButtonClass);
  }

  document.addEventListener('keydown', keyExitPopup);
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', keyExitPopup);
}

export {
  editPopup,
  addPopup,
  profileForm,
  nameInput,
  descriptionInput,
  openPopup,
  closePopup,
  profileName,
  profileDescription
}