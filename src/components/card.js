import {openPopup} from './utils.js'

const elements = document.querySelector('.elements');
const elementTemplate = document.querySelector('#element-template').content;

function createCard(place) {
  
  const cardElement = elementTemplate.querySelector('.element').cloneNode(true);

  cardElement.querySelector('.element__title').textContent = place.name;
  cardElement.querySelector('.element__image').src = place.link;
  cardElement.querySelector('.element__image').alt = place.name;
  
  return cardElement;
}

function addElement(place) {
  const element = createCard(place);
  elements.prepend(element);
}

function likeElement(element) {
  element.classList.toggle('element__like_active');
}

function deleteElement(button) {
  const element = button.closest('.element');
  element.remove();
}

function elementsAddEventListener(evt) {
  if (evt.target.classList.contains('element__like')) {
    likeElement(evt.target);
  } else if (evt.target.classList.contains('element__delete')) {
    deleteElement(evt.target);
  } else if (evt.target.classList.contains('element__image')) {
    openPopup(evt);
  }
}

export {
  elements,
  addElement,
  elementsAddEventListener
}