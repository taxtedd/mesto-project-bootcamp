import {
  editPopup,
  addPopup,
  nameInput,
  descriptionInput,
  closePopup,
  profileName,
  profileDescription
} from './utils.js'
import {addElement} from './card.js'

const placeForm = document.forms.placeForm;
const titleInput = placeForm.elements.title;
const linkInput = placeForm.elements.link;

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;

  closePopup(editPopup);
}

function handlePlaceFormSubmit(evt) {
  evt.preventDefault();

  addElement({name: titleInput.value, link: linkInput.value});
  evt.target.reset();

  closePopup(addPopup);
}

function exitPopup(evt) {
  if (evt.target.classList.contains('popup__exit-button')) {
    closePopup(evt.currentTarget);
  } else if (evt.target.classList.contains('popup')) {
    closePopup(evt.target);
  }
}

function keyExitPopup(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  } 
}

export {
  handleProfileFormSubmit,
  handlePlaceFormSubmit,
  exitPopup,
  keyExitPopup,
  placeForm
}