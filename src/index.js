import './styles/index.css';






// import { initialCards } from './components/constants.js';
// import Card from './components/Card.js';
// import FormValidator from './components/FormValidator.js';

// import Section from './components/Section.js';
// import UserInfo from './components/UserInfo.js';
// import PopupWithForm from './components/PopupWithForm.js';
// import PopupWithImage from './components/PopupWithImage.js';
// const root = document.querySelector('.root');

// const profile = root.querySelector('.profile');

// const profName = profile.querySelector('.profile__name');
// const profText = profile.querySelector('.profile__job');
// const popupOpenButton = profile.querySelector('.profile__button-edit')
// const openPlacePopupButton = profile.querySelector('.profile__button-add');

// //popup-edit
// const popupProfile = document.querySelector('.popup[data-type="profile"]');
// const formProfile = popupProfile.querySelector('#form-profile');
// const nameInput = formProfile.querySelector('.popup__prof-name');
// const jobInput = formProfile.querySelector('.popup__prof-text');
// const popupCloseButton = popupProfile.querySelector('.popup__button-close')

// //popup-add
// const editPlacePopup = document.querySelector('.popup-mesto[data-type="add"]');
// const cardFormElement = editPlacePopup.querySelector('.popup-mesto__content');
// const cardInputElement = cardFormElement.querySelector('.popup-mesto__prof-name');
// const cardInputLinkEl = cardFormElement.querySelector('.popup-mesto__prof-text');
// const closePlacePopupButton = editPlacePopup.querySelector('.popup-mesto__close');
// const cardFormSubmitButton = cardFormElement.querySelector('.popup-mesto__button-save');
// const cardsList = document.querySelector('.element__list')

// //popup-img
// const popupFigure = document.querySelector('.popup-img[data-type="image"]');
// const popupZoom = document.querySelector('.popup-img__foto');
// const popupImgCloseButton = popupFigure.querySelector('.popup-img__close');

// function addPlaceValidator() {
//     const settingAddPlaceValidation = {
//         input: '.popup__input',
//         errorSelector: '.popup__error',
//         controlSelector: '.popup__control',
//         button: '.popup-mesto__button-save',
//     }

//     const addPlaceValidation = new FormValidator(settingAddPlaceValidation, '.popup-mesto__content')
//     addPlaceValidation.enableValidation()
//     return addPlaceValidation
// }

// function addCardValidator() {
//     const settingAddCardValidation = {
//         input: '.popup__input',
//         errorSelector: '.popup__error',
//         controlSelector: '.popup__control',
//         button: '.popup__button-save',
//     }

//     const addCardValidation = new FormValidator(settingAddCardValidation, '.popup__content')
//     addCardValidation.enableValidation()
//     return addCardValidation
// }

// addPlaceValidator()
// addCardValidator()

// //функция открытия/закрытия попап
// function togglePopup(popup) {
//     popup.classList.toggle('popup__opened');
//     const popupClosed = !popup.classList.contains('popup__opened');
//     document[popupClosed ? 'removeEventListener' : 'addEventListener']('keydown', escHandlerclosepopup);
// }

// //закрытие попапов на оверлей.
// export const closePopupOverlay = (event) => {
//     if (event.target === event.currentTarget) {
//         document.body.removeEventListener('keydown', escHandlerclosepopup);
//         togglePopup(event.target.closest('.popup__opened'));
//     }
// }

// //закрытие попапов по esc
// const escHandlerclosepopup = function(event) {
//     const openedPopup = document.querySelector('.popup__opened');
//     if (openedPopup && event.key === 'Escape') {
//         togglePopup(openedPopup);
//     }
// }

// export { escHandlerclosepopup };

// const popupToggleProf = function() {
//     nameInput.value = profName.textContent;
//     jobInput.value = profText.textContent;
//     togglePopup(popupProfile);
// }
// const saveProfile = function(event) {
//     event.preventDefault();
//     profName.textContent = nameInput.value;
//     profText.textContent = jobInput.value;
//     togglePopup(popupProfile);
// }

// formProfile.addEventListener('submit', saveProfile);

// function addCard(title, link) {
//     const templateSelector = '.element-template'
//     const card = new Card(title, link, templateSelector)
//     cardsList.prepend(card.generate())
// }

// const formElementHandler = e => {
//     e.preventDefault();
//     const title = cardInputElement.value;
//     const link = cardInputLinkEl.value;
//     cardFormElement.reset();
//     addCard(title, link)
//     togglePopup(editPlacePopup);
// }

// cardFormElement.addEventListener('submit', formElementHandler);

// initialCards.forEach(el => {
//     addCard(el.name, el.link)
// })

// popupOpenButton.addEventListener('click', () => { popupToggleProf(popupProfile) });
// openPlacePopupButton.addEventListener('click', () => { togglePopup(editPlacePopup) });
// popupZoom.addEventListener('click', () => { togglePopup(popupZoom) })

// popupCloseButton.addEventListener('click', () => { togglePopup(popupProfile) })
// closePlacePopupButton.addEventListener('click', () => { togglePopup(editPlacePopup) });
// popupImgCloseButton.addEventListener('click', () => { togglePopup(popupFigure) });

// document.querySelectorAll('.popup').forEach((popup) => {
//     popup.addEventListener('click', closePopupOverlay);
// });