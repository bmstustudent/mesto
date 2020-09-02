const popup = document.querySelector('.popup');
const popupOpenButton = document.querySelector('.profile__button-edit')
const popupCloseButton = popup.querySelector('.popup__button-close')
const formElement = popup.querySelector('.popup__content');
const nameInput = popup.querySelector('.popup__prof-name');
const jobInput = popup.querySelector('.popup__prof-text');
const profFormSubmitButton = popup.querySelector('.popup__button-save');
const profName = document.querySelector('.profile__name');
const profText = document.querySelector('.profile__job');
const cardsList = document.querySelector('.element__list');
const cardTemplateElement = document.querySelector('.element-template');
const editPlacePopup = document.querySelector('.popup-mesto');
const openPlacePopupButton = document.querySelector('.profile__button-add');
const closePlacePopupButton = editPlacePopup.querySelector('.popup-mesto__close');
const cardFormElement = editPlacePopup.querySelector('.popup-mesto__content');
const cardInputElement = cardFormElement.querySelector('.popup-mesto__prof-name');
const cardInputLinkEl = cardFormElement.querySelector('.popup-mesto__prof-text');
const cardFormSubmitButton = cardFormElement.querySelector('.popup-mesto__button-save');
const popupFigure = document.querySelector('.popup-img');
const popupImgText = popupFigure.querySelector('.popup-img__name');
const popupImgFoto = popupFigure.querySelector('.popup-img__foto');
const popupImgCloseButton = popupFigure.querySelector('.popup-img__close');
const socialLike = document.querySelectorAll('.element__social-like');

initialCards.forEach(function(element) {
    generateCard(element.name, element.link);
});
const figureFoto = cardsList.querySelectorAll('.element__foto');

//Открывает 1 попап
const popupToggle = function(event) {
    if (!popup.classList.contains('popup__opened')) {
        nameInput.value = profName.textContent;
        jobInput.value = profText.textContent;
    }
    popup.classList.toggle('popup__opened');
};

const popupFigureToggle = function() {
    popupFigure.classList.toggle('popup__opened');
}

const placePopupToggle = function() {
    editPlacePopup.classList.toggle('popup-mesto__opened');
    cardFormSubmitButton.setAttribute('disabled', true);
    cardFormSubmitButton.classList.add('popup__but-disabled');
    cardFormSubmitButton.classList.remove('popup__button-save');
}

//закрытие попапов на оверлей.
const closePopupOverlay = function(event) {
    if (event.target !== event.currentTarget) { return }
    popupToggle();
}

const closePlacePopupOverlay = function(event) {
    if (event.target !== event.currentTarget) { return }
    placePopupToggle();
}

const closeFigurePopupOverlay = function(event) {
    if (event.target !== event.currentTarget) { return }
    popupFigureToggle();
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    profName.textContent = nameInput.value;
    profText.textContent = jobInput.value;
    popupToggle();
}

formElement.addEventListener('submit', formSubmitHandler);

function generateCard(name, link) {
    const card = cardTemplateElement.content.cloneNode(true);
    card.querySelector('.element__delete-but').addEventListener('click', deleteCard);
    card.querySelector('.element__text').textContent = name;
    card.querySelector('.element__foto').alt = name;
    card.querySelector('.element__foto').src = link;
    addCard(card);
}

function addCard(card) {
    cardsList.prepend(card);
}

function deleteCard(event) {
    const card = event.target.closest('.element__group');
    card.remove();
}

figureFoto.forEach((activeFoto) => {
    activeFoto.addEventListener('click', (evt) => {
        const figureFotoTarget = evt.target;
        popupFigure.classList.toggle('popup__opened');
        popupImgFoto.src = figureFotoTarget.src;
        const figureCard = figureFotoTarget.closest('.element__group');
        popupImgText.textContent = figureCard.querySelector('.element__text').textContent;
    });
});

socialLike.forEach((activButton) => {
    activButton.addEventListener('click', (evt) => {
        const socialLikeTarget = evt.target;
        socialLikeTarget.classList.toggle('element__social-likeactiv');
    });
});

document.body.addEventListener('keyup', function(e) {
    const escCode = 27;
    if (e.keyCode === escCode) {
        popup.classList.remove('popup__opened');
        editPlacePopup.classList.remove('popup-mesto__opened');
        popupFigure.classList.remove('popup__opened');
    };
}, false);

cardFormElement.addEventListener('submit', e => {
    e.preventDefault();
    const name = cardInputElement.value;
    const link = cardInputLinkEl.value;
    cardFormElement.reset();
    generateCard(name, link);
    placePopupToggle();

})

popupOpenButton.addEventListener('click', popupToggle)
popupCloseButton.addEventListener('click', popupToggle)
popup.addEventListener('click', closePopupOverlay);
editPlacePopup.addEventListener('click', closePlacePopupOverlay);
openPlacePopupButton.addEventListener('click', placePopupToggle);
closePlacePopupButton.addEventListener('click', placePopupToggle);
popupImgCloseButton.addEventListener('click', popupFigureToggle);
popupFigure.addEventListener('click', closeFigurePopupOverlay);