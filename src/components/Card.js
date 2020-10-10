export default class Card {
    constructor(data, handleCardClick, cardSelector) {
        this._name = data.name;
        this._link = data.link;
        this._handleCardClick = handleCardClick;
        this._cardSelector = cardSelector;
    }

    _getTemplate() {
        const cardElement = document.querySelector(this._cardSelector).content.querySelector('.pictures__item').cloneNode(true);

        return cardElement;
    }

    generateCard() {
        this._element = this._getTemplate();
        const picturesImage = this._element.querySelector('.pictures__image');
        this._setEventListeners();

        this._element.querySelector('.pictures__title').textContent = this._name;
        picturesImage.src = this._link;
        picturesImage.alt = this._name;

        return this._element;
    }

    _likeCard() {
        this._element.querySelector('.pictures__like').classList.toggle('pictures__like_active');
    }

    _deleteCard() {
        this._element.remove();
        this._element = null;
    }

    _setEventListeners() {
        this._element.querySelector('.pictures__delete').addEventListener('click', () => this._deleteCard());
        this._element.querySelector('.pictures__like').addEventListener('click', () => this._likeCard());
        this._element.querySelector('.pictures__image').addEventListener('click', () => this._handleCardClick());
    }
}