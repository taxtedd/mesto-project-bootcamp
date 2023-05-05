import {
  editPopup,
  addPopup,
  closePopup
} from './utils.js'
import {addElement} from './card.js'

export const placeForm = document.forms.placeForm;
const titleInput = placeForm.elements.title;
const linkInput = placeForm.elements.link;

export const profileForm = document.forms.profileForm;
const nameInput = profileForm.elements.name;
const descriptionInput = profileForm.elements.description;

const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

export const imagePopup = document.querySelector('.popup_type_image');
const imageInput = imagePopup.querySelector('.popup__image');
const headingInput = imagePopup.querySelector('.popup__heading');

export function setImagePopupFields(element) {
  imageInput.src = element.querySelector('.element__image').src;
  imageInput.alt = element.querySelector('.element__image').alt;
  headingInput.textContent = element.querySelector('.element__title').textContent;
}

export function setEditPopupFields() {
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
}

export function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;

  closePopup(editPopup);
}

export function handlePlaceFormSubmit(evt) {
  evt.preventDefault();

  addElement({name: titleInput.value, link: linkInput.value});
  evt.target.reset();

  closePopup(addPopup);
}

export function exitPopup(evt) {
  if (evt.target.classList.contains('popup__exit-button')) {
    closePopup(evt.currentTarget);
  } else if (evt.target.classList.contains('popup')) {
    closePopup(evt.target);
  }
}

export function exitPopupWithKey(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  } 
}