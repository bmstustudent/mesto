import initialCards from './utils.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';

const root = document.querySelector('.root');

const profile = root.querySelector('.profile');

const profName = profile.querySelector('.profile__name');
const profText = profile.querySelector('.profile__job');
const popupOpenButton = profile.querySelector('.profile__button-edit')
const openPlacePopupButton = profile.querySelector('.profile__button-add');

const elementEL = root.querySelector('.element');
const cardsList = document.querySelector('.element__list');
const cardTemplateElement = document.querySelector('.element-template');
const socialLike = document.querySelectorAll('.element__social-like');
const escCode = 27;
const formElement = root.querySelector('.popup__content');

//popup-edit
const popupProfile = document.querySelector('.popup[data-type="profile"]');
const formProfile = popupProfile.querySelector('#form-profile');
const nameInput = formProfile.querySelector('.popup__prof-name');
const jobInput = formProfile.querySelector('.popup__prof-text');
const popupCloseButton = popupProfile.querySelector('.popup__button-close')
const profFormSubmitButton = popupProfile.querySelector('.popup__button-save');

//popup-add
const editPlacePopup = document.querySelector('.popup-mesto[data-type="add"]');
const formPlace = editPlacePopup.querySelector('#form-mesto');
const cardInputElement = formPlace.querySelector('.popup-mesto__prof-name');
const cardInputLinkEl = formPlace.querySelector('.popup-mesto__prof-text');
const closePlacePopupButton = editPlacePopup.querySelector('.popup-mesto__close');
const cardFormSubmitButton = formPlace.querySelector('.popup-mesto__button-save');

//popup-img
const popupFigure = document.querySelector('.popup-img[data-type="image"]');
const imageZoom = document.querySelector('.popup-img__foto');
const popupImgText = popupFigure.querySelector('.popup-img__name');
const popupImgFoto = popupFigure.querySelector('.popup-img__foto');
const popupImgCloseButton = popupFigure.querySelector('.popup-img__close');


initialCards.forEach(el => {
    addCard(el.title, el.link)
});
// const figureFoto = cardsList.querySelectorAll('.element__foto');

//функция открытия/закрытия попап
function togglePopup(popup) {
    popup.classList.toggle('popup__opened')
}




//закрытие попапов на оверлей.
function closePopupOverlay(popup) {
    if (event.target !== event.currentTarget) { return }
    togglePopup(event.target.closest('.popup__opened'));
}

const popupToggleProf = function(event) {
    nameInput.value = profName.textContent;
    jobInput.value = profText.textContent;
    togglePopup(popupProfile);
}
const saveProfile = function(event) {
    event.preventDefault();
    profName.textContent = nameInput.value;
    profText.textContent = jobInput.value;
    togglePopup(popupProfile);
}

formProfile.addEventListener('submit', saveProfile);

const placePopupToggle = function() {
    editPlacePopup.classList.toggle('popup__opened');
    cardFormSubmitButton.setAttribute('disabled', true);
    cardFormSubmitButton.classList.add('popup__but-disabled');
    cardFormSubmitButton.classList.remove('popup__button-save');
    addPlaceValidator()
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    profName.textContent = nameInput.value;
    profText.textContent = jobInput.value;
    togglePopup(editPlacePopup);
}

formElement.addEventListener('submit', formSubmitHandler);

// function generateCard(name, link) {
//     const card = cardTemplateElement.content.cloneNode(true);
//     card.querySelector('.element__delete-but').addEventListener('click', deleteCard);
//     card.querySelector('.element__text').textContent = name;
//     card.querySelector('.element__foto').alt = name;
//     card.querySelector('.element__foto').src = link;
//     addCard(card);
// }

document.body.addEventListener('keyup', function(e) {
    const openedPopup = document.querySelector('.popup__opened');
    if (e.keyCode === escCode) {
        togglePopup(openedPopup)
    }
}, false)


function addCard(title, link) {
    const templateSelector = '.element-template'
    const card = new Card(title, link, templateSelector)
    const cardsList = document.querySelector('.element__list')
    cardsList.prepend(card.generate())
}

const formElementHandler = e => {
    e.preventDefault();
    const title = cardInputElement.value;
    const link = cardInputLinkEl.value;
    cardFormElement.reset();
    addCard(title, link)
    togglePopup();
}

// function deleteCard(event) {
//     const card = event.target.closest('.element__group');
//     card.remove();
// }

// figureFoto.forEach((activeFoto) => {
//     activeFoto.addEventListener('click', (evt) => {
//         const figureFotoTarget = evt.target;
//         popupFigure.classList.toggle('popup__opened');
//         popupImgFoto.src = figureFotoTarget.src;
//         const figureCard = figureFotoTarget.closest('.element__group');
//         popupImgText.textContent = figureCard.querySelector('.element__text').textContent;
//     })
// })

// socialLike.forEach((activButton) => {
//     activButton.addEventListener('click', (evt) => {
//         const socialLikeTarget = evt.target;
//         socialLikeTarget.classList.toggle('element__social-likeactiv');
//     })
// })


formPlace.addEventListener('submit', e => {
    e.preventDefault();
    const name = cardInputElement.value;
    const link = cardInputLinkEl.value;
    generateCard(name, link);
    formPlace.reset();
    placePopupToggle();
})

popupOpenButton.addEventListener('click', () => { popupToggleProf(popupProfile) });
openPlacePopupButton.addEventListener('click', () => { togglePopup(editPlacePopup) });
imageZoom.addEventListener('click', () => { togglePopup(imageZoom) })

popupCloseButton.addEventListener('click', () => { togglePopup(popupProfile) })
closePlacePopupButton.addEventListener('click', () => { togglePopup(editPlacePopup) });
popupImgCloseButton.addEventListener('click', () => { togglePopup(popupFigure) });

popupProfile.addEventListener('click', () => { closePopupOverlay(popupProfile) })
editPlacePopup.addEventListener('click', () => { closePopupOverlay(editPlacePopup) })
popupFigure.addEventListener('click', () => { closePopupOverlay(popupFigure) })



function addPlaceValidator() {
    const settingAddPlaceValidation = {
        form: '.popup-mesto__content',
        input: '.popup__input',
        errorSelector: '.popup__error',
        controlSelector: '.popup__control',
        button: '.popup-mesto__button-save',
    }

    const addPlaceValidation = new FormValidator(settingAddPlaceValidation)
    addPlaceValidation.enableValidation()
}


function addCardValidator() {
    const settingAddCardValidation = {
        form: '.popup__content',
        input: '.popup__input',
        errorSelector: '.popup__error',
        controlSelector: '.popup__control',
        button: '.popup__button-save',
    }

    const addCardValidation = new FormValidator(settingAddCardValidation)
    addCardValidation.enableValidation()
}