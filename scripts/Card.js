import escHandlerclosepopup from './index.js';

const popupFigure = document.querySelector('.popup-img[data-type="image"]');
const popupZoom = document.querySelector('.popup-img__foto');
const popupImgText = popupFigure.querySelector('.popup-img__name');


export default class Card {
    constructor(title, imgLink, template) {
        this._title = title
        this._imgLink = imgLink
        this._template = template
        this._card = document.querySelector(this._template).content.cloneNode(true);
        this._photo = this._card.querySelector('.element__foto')
    }

    _deleteCardHandler(event) {
        const card = event.target.closest('.element__group');
        card.remove();
    }

    _photoViewHandler() {
        document.body.addEventListener('keydown', escHandlerclosepopup);


        // Открытие popup
        popupFigure.classList.toggle('popup__opened');

        popupZoom.src = this._imgLink;
        popupImgText.textContent = this._title

    }

    _likeHandler(event) {
        const socialLikeTarget = event.target;
        socialLikeTarget.classList.toggle('element__social-likeactiv');
    }

    _handlerInit(card) {
        // Delete
        card.querySelector('.element__delete-but')
            .addEventListener('click', this._deleteCardHandler.bind(this));

        // Like
        card.querySelector('.element__social-like')
            .addEventListener('click', this._likeHandler.bind(this))

        // Photo View
        this._photo
            .addEventListener('click', this._photoViewHandler.bind(this))

        return card
    }

    generate() {
        this._card = this._handlerInit(this._card)
        this._card.querySelector('.element__text').textContent = this._title;
        this._photo.alt = this._title;
        this._photo.src = this._imgLink;
        return this._card
    }
}