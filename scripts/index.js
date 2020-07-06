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
const popupmesto = document.querySelector('.popup-addCard');
const popupmestoOpenButton = document.querySelector('.profile__button-add');
const popupmestoCloseButton = popupmesto.querySelector('.popup-edit__close');
let cardFormElement = popupmesto.querySelector('.popup-edit__form');
let cardInputElement = cardFormElement.querySelector('#name');
let cardInputLinkEl = cardFormElement.querySelector('#link');
let cardFormSubmitButton = cardFormElement.querySelector('.popup-edit__button');




const popupToggle = function(event) {
    if (!popup.classList.contains('popup-edit_opened')) {
        nameInput.value = profName.textContent;
        jobInput.value = profText.textContent;
    }
    popup.classList.toggle('popup-edit_opened');
};

const closePopupOverlay = function(event) {
    if (event.target !== event.currentTarget) { return }
    popupToggle()
}

popupOpenButton.addEventListener('click', popupToggle)
popupCloseButton.addEventListener('click', popupToggle)
popup.addEventListener('click', closePopupOverlay)

function formSubmitHandler(evt) {
    evt.preventDefault();
    profName.textContent = nameInput.value;
    profText.textContent = jobInput.value;
    popupToggle()
}

formElement.addEventListener('submit', formSubmitHandler);

const initialCards = [{
        name: 'Карачаево-Черкесия',
        link: 'https://images.unsplash.com/photo-1575631687630-f58400f0964f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=708&q=80'
    },
    {
        name: 'Красногорск',
        link: 'https://images.unsplash.com/photo-1574000526946-201a0d954015?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80'
    },
    {
        name: 'Домбай',
        link: 'https://images.unsplash.com/photo-1575280043234-4de3c0adca3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80'
    },
    {
        name: 'Верхняя-Теберда',
        link: 'https://images.unsplash.com/photo-1541073063895-612bfad8f9c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=707&q=80'
    },
    {
        name: 'Адлер',
        link: 'https://images.unsplash.com/photo-1537632602334-5e553e8aa31c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80'
    },
    {
        name: 'Зеленоград',
        link: 'https://images.unsplash.com/photo-1536577301209-d0f0cfaa5166?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80'
    }
];

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

const popupmestoToggle = function() {
    popupmesto.classList.toggle('popup-edit_opened')
}

popupmestoOpenButton.addEventListener('click', popupmestoToggle);
popupmestoCloseButton.addEventListener('click', popupmestoToggle);

cardFormElement.addEventListener('submit', e => {
    e.preventDefault();
    const name = cardInputElement.value;
    const link = cardInputLinkEl.value;
    cardInputElement.value = '';
    cardInputLinkEl.value = '';
    addCards(name, link);
    popupmestoToggle();
})



let socialLike = document.querySelectorAll('.element__like');

socialLike.forEach((activButton) => {
    activButton.addEventListener('click', (evt) => {
        const socialLikeTarget = evt.target;
        socialLikeTarget.classList.toggle('element__like_active');
    });
});

let figureFoto = document.querySelectorAll('.element__image');
let popupFigure = document.querySelector('.popup-image');
let popupimgText = popupFigure.querySelector('.popup-image__name');
let popupimgFoto = popupFigure.querySelector('.popup-image__foto');
const popupimgCloseButton = popupFigure.querySelector('.popup-edit__close');



figureFoto.forEach((activeFoto) => {
    activeFoto.addEventListener('click', (evt) => {
        const figureFotoTarget = evt.target;
        popupFigure.classList.toggle('popup-edit__opened');
        popupimgFoto.src = figureFotoTarget.src;
        const figureCard = figureFotoTarget.closest('.element__item');
        popupimgText.textContent = figureCard.querySelector('.element__title').textContent;
    });
});

const popupFigureToggle = function() {
    popupFigure.classList.toggle('popup-edit_opened')
}

popupimgCloseButton.addEventListener('click', popupFigureToggle);