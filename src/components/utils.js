import {exitPopupWithKey} from './modal.js'

export function openPopup(popup) {
  document.addEventListener('keydown', exitPopupWithKey);
  popup.classList.add('popup_opened');
}

export function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', exitPopupWithKey);
}
