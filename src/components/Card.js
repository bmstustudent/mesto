import { escHandlerclosepopup } from './index.js';
import { popupFigure } from './constants.js';
import { popupZoom } from './constants.js';
import { popupImgText } from './constants.js';
import { closePopupOverlay } from "./index.js";

export default class Card {
    constructor(title, imgLink, template) {
        this._title = title
        this._imgLink = imgLink
        this._card = document.querySelector(template).content.cloneNode(true);
        this._photo = this._card.querySelector('.element__foto');
        this._closeBtn = document.querySelector('.popup-img__close');
    }

    _deleteCardHandler(event) {
        const card = event.target.closest('.element__group');
        card.remove();
    }

    _photoViewCloseHandler() {
        popupFigure.classList.remove('popup__opened');
    }

    _photoViewHandler() {
        document.body.addEventListener('keydown', escHandlerclosepopup);
        popupFigure.addEventListener('keydown', event => {
            closePopupOverlay(event, this._photoViewCloseHandler)
        })

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