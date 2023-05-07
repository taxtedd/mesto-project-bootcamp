import {openPopup} from './utils.js'
import {
  imagePopup,
  setImagePopupFields
} from './modal.js'
import { 
  deleteCard,
  addLike,
  deleteLike
} from './api.js';
import { thisUser } from './index.js'

export const elements = document.querySelector('.elements');
const elementTemplate = document.querySelector('#element-template').content;

function createCard(card) {
  const cardElement = elementTemplate.querySelector('.element').cloneNode(true);

  cardElement._id = card._id;
  cardElement.querySelector('.element__title').textContent = card.name;
  cardElement.querySelector('.element__image').src = card.link;
  cardElement.querySelector('.element__image').alt = card.name;
  cardElement.querySelector('.element__like-counter').textContent = String(card.likes.length);
  
  if (thisUser._id != card.owner._id) {
    const button = cardElement.querySelector('.element__delete');
    button.remove();
  }

  const iLiked = card.likes.find((userInformation) => userInformation._id === thisUser._id);
  if (iLiked) {  
    const like = cardElement.querySelector('.element__like');
    like.classList.add('element__like_active');
  }

  return cardElement;
}

export function addElement(card) {
  const element = createCard(card);
  elements.prepend(element);
}

function likeElement(element) {
  const likeContainer = element.closest('.element__like-container');
  const likeCounter = likeContainer.querySelector('.element__like-counter');
  const cardElement = element.closest('.element');


  if (!element.classList.contains('element__like_active')) {
    addLike(cardElement)
      .then(card => {
        element.classList.add('element__like_active');
        likeCounter.textContent = card.likes.length;
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    deleteLike(cardElement)
      .then(card => {
        element.classList.remove('element__like_active');
        likeCounter.textContent = card.likes.length;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

function deleteElement(button) {
  const element = button.closest('.element');
  
  deleteCard(element)
    .then(() => {
      element.remove();
    })
    .catch((err) => {
      console.log(err);
    });
}

export function elementsAddEventListener(evt) {
  if (evt.target.classList.contains('element__like')) {
    likeElement(evt.target);
  } else if (evt.target.classList.contains('element__delete')) {
    deleteElement(evt.target);
  } else if (evt.target.classList.contains('element__image')) {
    const element = evt.target.closest('.element');
    setImagePopupFields(element);
    openPopup(imagePopup);
  }
}