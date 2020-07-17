const popup = document.querySelector('.popup-edit')
const popupOpenButton = document.querySelector('.profile__button-edit')
const popupCloseButton = popup.querySelector('.popup-edit__close')
let formElement = popup.querySelector('.popup-edit__form');
let nameInput = popup.querySelector('#name');
let jobInput = popup.querySelector('#about');
let profName = document.querySelector('.profile__name');
let profText = document.querySelector('.profile__job');
const cardsList = document.querySelector('.element__list');
const cardTemplateElement = document.querySelector('.template');
const popupAddCard = document.querySelector('.popup-save');
const popupAddCardOpenButton = document.querySelector('.profile__button-add');
const popupAddCardCloseButton = popupAddCard.querySelector('.popup-edit__close');
let cardFormElement = popupAddCard.querySelector('.popup-edit__form');
let cardInputElement = cardFormElement.querySelector('#title');
let cardInputLinkEl = cardFormElement.querySelector('#link');
let cardFormSubmitButton = cardFormElement.querySelector('.popup-edit__button');
//кнопка редактирования профиля 
const popupToggle = function(event) {
    if (!popup.classList.contains('popup-edit_opened')) {
        nameInput.value = profName.textContent;
        jobInput.value = profText.textContent;
    }
    popup.classList.toggle('popup-edit_opened');
};
//закрытие попап кликом по оверлей
const closePopupOverlay = function(event) {
        if (event.target !== event.currentTarget) { return }
        popupToggle()
    }
    //закрытие попап кликом по esc
const closeEditEsc = function() {
        if (event.keyCode === 27) {
            popup.classList.remove('popup-edit_opened');
        }
    }
    //сохранение данных
function formSubmitHandler(evt) {
    evt.preventDefault();
    profName.textContent = nameInput.value;
    profText.textContent = jobInput.value;
    popupToggle()
}

popupOpenButton.addEventListener('click', popupToggle)
popupCloseButton.addEventListener('click', popupToggle)
popup.addEventListener('click', closePopupOverlay)
popupOpenButton.addEventListener('keydown', closeEditEsc)
popup.addEventListener('keydown', closeEditEsc)
formElement.addEventListener('submit', formSubmitHandler);

function addCards(name, link) {
    const card = cardTemplateElement.content.cloneNode(true);

    card.querySelector('.element__delete').addEventListener('click', deleteCard);
    card.querySelector('.element__title').textContent = name;
    card.querySelector('.element__image').alt = name;
    card.querySelector('.element__image').src = link;
    cardsList.prepend(card);
}

function deleteCard(event) {
    const card = event.target.closest('.element__item');
    card.remove();
}

initialCards.forEach(function(element) {
    addCards(element.name, element.link)
});
//close Add
const popupAddCardToggle = function(event) {
        popupAddCard.classList.toggle('popup-edit_opened')
    }
    //close Add by overlay
const closeAddOverlay = function(event) {
        if (event.target !== event.currentTarget) { return }
        popupAddCardToggle()
    }
    //close Add by esc
const closeAddEsc = function() {
    if (event.keyCode === 27) {
        popupAddCard.classList.remove('popup-edit_opened');
    }
}

popupAddCardOpenButton.addEventListener('click', popupAddCardToggle);
popupAddCardCloseButton.addEventListener('click', popupAddCardToggle);
popupAddCard.addEventListener('click', closeAddOverlay)
popupAddCardOpenButton.addEventListener('keydown', closeAddEsc)
popupAddCard.addEventListener('keydown', closeAddEsc)

cardFormElement.addEventListener('submit', e => {
    e.preventDefault();
    const name = cardInputElement.value;
    const link = cardInputLinkEl.value;
    cardInputElement.value = '';
    cardInputLinkEl.value = '';
    addCards(name, link);
    popupaddCardToggle();
})

let like = document.querySelectorAll('.element__like');

like.forEach((activButton) => {
    activButton.addEventListener('click', (evt) => {
        const likeTarget = evt.target;
        likeTarget.classList.toggle('element__like-active');
    });
});

//popup zoom image
let figurePhoto = document.querySelectorAll('.element__image');
let popupFigure = document.querySelector('.popup-image');
let popupImageText = popupFigure.querySelector('.popup-image__title');
let popupImagePhoto = popupFigure.querySelector('.popup-image__photo');
const popupImageCloseButton = popupFigure.querySelector('.popup-image__close');

//закрыть картинку
const popupFigureToggle = function() {
        popupFigure.classList.toggle('popup-edit_opened')
    }
    //закрыть картинку по оверлей
const closeImageOverlay = function(event) {
    if (event.target !== event.currentTarget) { return }
    popupFigureToggle()
}

//close by esc
const closeImageEsc = function() {
    if (event.keyCode === 27) {
        popupFigure.classList.remove('popup-edit_opened');
    }
}

//close scroll
const closeImageScroll = function() {
    popupFigure.classList.remove('popup-edit_opened');
    console.log('скрол')
}

figurePhoto.forEach((activePhoto) => {
    activePhoto.addEventListener('click', (evt) => {
        const figurePhotoTarget = evt.target;
        popupFigure.classList.toggle('popup-edit_opened');
        popupImagePhoto.src = figurePhotoTarget.src;
        const figureCard = figurePhotoTarget.closest('.element__item');
        popupImageText.textContent = figureCard.querySelector('.element__title').textContent;
    });
});

popupImageCloseButton.addEventListener('click', popupFigureToggle);
popupFigure.addEventListener('click', closeImageOverlay);
popupFigure.addEventListener('keydown', closeImageEsc);
popupFigure.addEventListener('scroll', closeImageScroll);