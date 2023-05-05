import {exitPopupWithKey} from './modal.js'

export const editPopup = document.querySelector('.popup_type_edit');
export const addPopup = document.querySelector('.popup_type_add');

export function openPopup(popup) {
  document.addEventListener('keydown', exitPopupWithKey);
  popup.classList.add('popup_opened');
}

export function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', exitPopupWithKey);
}
