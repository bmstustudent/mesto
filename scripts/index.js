const popup = document.querySelector('.popup')
const popupOpenButton = document.querySelector('.profile__button-edit')
const popupCloseButton = document.querySelector('.popup__button-close')

const formElement = popup.querySelector('.popup__form')

const nameInput = popup.querySelector('.popup__input_type_name');
const jobInput = popup.querySelector('.popup__input_type_job');

const profFormSubmitButton = popup.querySelector('.popup__button-save');
const profName = document.querySelector('.profile__name');
const profJob = document.querySelector('.profile__job');

const cardsList = document.querySelector('.cards__list');
const cardTemplateElement = document.querySelector('.card-template');

const popupAdd = document.querySelector('.popup-add');
const openPopupAddButton = document.querySelector('.profile__button-add');
const closePopupAddButton = popupAdd.querySelector('.popup-add__button-close');

const cardFormElement = popupAdd.querySelector('.popup-add__form');
const cardInputElement = cardFormElement.querySelector('#popup-add_name');
const cardInputLinkEl = cardFormElement.querySelector('#link');
const cardFormSubmitButton = cardFormElement.querySelector('.popup-add__button-save');

const popupFigure = document.querySelector('.popup-img');
const popupImgText = popupFigure.querySelector('.popup-img__name');
const popupImgFoto = popupFigure.querySelector('.popup-img__foto');
const popupImgCloseButton = popupFigure.querySelector('.popup-img__close');
const socialLike = document.querySelectorAll('.card__button-like');

initialCards.forEach(function(element) {
    generateCard(element.name, element.link);
});
const figureFoto = cardsList.querySelectorAll('.card__image');

const popupToggle = function(event) {
    if (!popup.classList.contains('popup_opened')) {
        nameInput.value = profName.textContent;
        jobInput.value = profJob.textContent;
    }
    popup.classList.toggle('popup_opened');
};

const popupFigureToggle = function() {
    popupFigure.classList.toggle('popup_opened');
}

const placePopupToggle = function() {
    popupAdd.classList.toggle('popup-add_opened');
    cardFormSubmitButton.setAttribute('disabled', true);
    cardFormSubmitButton.classList.add('popup-add_disabled');
    cardFormSubmitButton.classList.remove('popup__button-save');
}


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
    profJob.textContent = jobInput.value;
    popupToggle();
}

formElement.addEventListener('submit', formSubmitHandler);


function generateCard(name, link) {
    const card = cardTemplateElement.content.cloneNode(true);
    card.querySelector('.card__button-delete').addEventListener('click', deleteCard);
    card.querySelector('.card__title').textContent = name;
    card.querySelector('.card__image').alt = name;
    card.querySelector('.card__image').src = link;
    addCard(card);
}

function addCard(card) {
    cardsList.prepend(card);
}

function deleteCard(event) {
    const card = event.target.closest('.cards__item');
    card.remove();
}

figureFoto.forEach((activeFoto) => {
    activeFoto.addEventListener('click', (evt) => {
        const figureFotoTarget = evt.target;
        popupFigure.classList.toggle('popup_opened');
        popupImgFoto.src = figureFotoTarget.src;
        const figureCard = figureFotoTarget.closest('.cards__item');
        popupImgText.textContent = figureCard.querySelector('.card__title').textContent;
    });
});

socialLike.forEach((activButton) => {
    activButton.addEventListener('click', (evt) => {
        const socialLikeTarget = evt.target;
        socialLikeTarget.classList.toggle('.card__button-like_active');
    });
});

document.body.addEventListener('keyup', function(e) {
    const escCode = 27;
    if (e.keyCode === escCode) {
        popup.classList.remove('popup_opened');
        popupAdd.classList.remove('popup-add_opened');
        popupFigure.classList.remove('popup_opened');
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

popupAdd.addEventListener('click', closePlacePopupOverlay);
openPopupAddButton.addEventListener('click', placePopupToggle);
closePopupAddButton.addEventListener('click', placePopupToggle);

popupImgCloseButton.addEventListener('click', popupFigureToggle);
popupFigure.addEventListener('click', closeFigurePopupOverlay);