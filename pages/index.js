const editPopup = document.querySelector('.popup_type_edit');
const addPopup = document.querySelector('.popup_type_add');
const exitButtons = document.querySelectorAll('.popup__exit-button');
const formEditElement = editPopup.querySelector('.popup__form');
const formAddElement = addPopup.querySelector('.popup__form');
const nameInput = formEditElement.querySelector('.popup__input_type_name');
const descriptionInput = formEditElement.querySelector('.popup__input_type_description');
const editButton = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const addButton = document.querySelector('.profile__add-button');
const elements = document.querySelector('.elements');

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

function addElement(place) {
  const elementTemplate = document.querySelector('#element-template').content;
  const element = elementTemplate.querySelector('.element').cloneNode(true);

  element.querySelector('.element__title').textContent = place.name;
  element.querySelector('.element__image').src = place.link;

  element.querySelector('.element__image').addEventListener('click', function (evt) {
    const imagePopup = document.querySelector('.popup_type_image');
    imagePopup.querySelector('.popup__image').src = place.link;
    imagePopup.querySelector('.popup__heading').textContent = place.name;
    openPopup(imagePopup);
  });
  element.querySelector('.element__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_active');
  });
  element.querySelector('.element__delete').addEventListener('click', function (evt) {
    element.remove();
  });

  elements.prepend(element);
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function handleEditFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;

  closePopup(editPopup);
}

function handleAddFormSubmit(evt) {
  const titleInput = formAddElement.querySelector('.popup__input_type_title');
  const linkInput = formAddElement.querySelector('.popup__input_type_link');

  evt.preventDefault();
  addElement({name: titleInput.value, link: linkInput.value});
  titleInput.value = '';
  linkInput.value = '';
  closePopup(addPopup);
}


editButton.addEventListener('click', function () { 
  openPopup(editPopup);

  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
});

addButton.addEventListener('click', () => openPopup(addPopup));

exitButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

formEditElement.addEventListener('submit', handleEditFormSubmit);

formAddElement.addEventListener('submit', handleAddFormSubmit);

initialCards.forEach(item => addElement(item));