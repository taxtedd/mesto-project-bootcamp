import {
  closePopup
} from './utils.js'
import { 
  addElement 
} from './card.js'
import { 
  updateUserInfo,
  addCard,
  updateUserAvatar
} from './api.js';

export const editPopup = document.querySelector('.popup_type_edit');
export const addPopup = document.querySelector('.popup_type_add');

export const avatarPopup = document.querySelector('.popup_type_avatar');
export const avatarForm = document.forms.avatarForm;
const avatarInput = avatarForm.elements.link;

export const placeForm = document.forms.placeForm;
const titleInput = placeForm.elements.title;
const linkInput = placeForm.elements.link;

export const profileForm = document.forms.profileForm;
const nameInput = profileForm.elements.name;
const descriptionInput = profileForm.elements.description;

const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const profileAvatar = document.querySelector('.profile__image');

export const imagePopup = document.querySelector('.popup_type_image');
const imageInput = imagePopup.querySelector('.popup__image');
const headingInput = imagePopup.querySelector('.popup__heading');

const placeButton = placeForm.querySelector('.popup__save-button');
const profileButton = profileForm.querySelector('.popup__save-button');
const avatarButton = avatarForm.querySelector('.popup__save-button');

export function setImagePopupFields(element) {
  imageInput.src = element.querySelector('.element__image').src;
  imageInput.alt = element.querySelector('.element__image').alt;
  headingInput.textContent = element.querySelector('.element__title').textContent;
}

export function setEditPopupFields() {
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
}

export function setProfileFields(name, description, link=profileAvatar.src){
  profileName.textContent = name;
  profileDescription.textContent = description;
  profileAvatar.src = link;
}

export function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  renderLoading(true, profileButton);

  updateUserInfo({name: nameInput.value, about: descriptionInput.value})
    .then(user => {
      setProfileFields(user.name, user.about);
      closePopup(editPopup);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false, profileButton);
    });
}

export function handlePlaceFormSubmit(evt) {
  evt.preventDefault();

  renderLoading(true, placeButton);

  addCard({name: titleInput.value, link: linkInput.value})
    .then(card => {
      addElement(card);
      evt.target.reset();
      closePopup(addPopup);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false, placeButton);
    });
}

export function handleAvatarFormSubmit(evt) {
  evt.preventDefault();

  renderLoading(true, avatarButton);

  updateUserAvatar(avatarInput.value)  
    .then(image => {
      profileAvatar.src = image.avatar;
      evt.target.reset();
      closePopup(avatarPopup);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false, avatarButton);
    })
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

function renderLoading(isLoading, button) {
  if (isLoading) {
    console.log(button.textContent);
    button.textContent = "Сохранение...";
  } else {
    button.textContent = "Сохранить";
  }
}