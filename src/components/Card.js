export default class Card {
    constructor(data, handleCardClick, { handleLikeClick, handleCardDelete }, currentId, cardSelector) {
        this._name = data.name;
        this._link = data.link;
        this._handleCardClick = handleCardClick;
        this._handleLikeClick = handleLikeClick;
        this._cardSelector = cardSelector;
        this._currentId = currentId;
        this._ownerId = data.owner._id;
        this._id = data._id;
        this._likes = data.likes;
        this._handleCardDelete = handleCardDelete;
    }

    _getTemplate() {
        const cardElement = document.querySelector(this._cardSelector).content.querySelector('.pictures__item').cloneNode(true);

        return cardElement;
    }

    _getView() {
        if (this._ownerId === this._currentId) {
            this._element.querySelector('.pictures__delete').classList.add('pictures__delete_show');
        }
    }

    generateCard() {
        this._element = this._getTemplate();
        const picturesImage = this._element.querySelector('.pictures__image');
        this._setEventListeners();

        this._element.querySelector('.pictures__title').textContent = this._name;
        picturesImage.src = this._link;
        picturesImage.alt = this._name;

        this._element.querySelector('.pictures__like-counter').textContent = this._likes.length;

        this._getView();

        return this._element;
    }

    isLiked() {
        return this._isLiked;
    }

    setLike(data) {
        this._isLiked = data.likes.filter((item) => { return item._id == this._currentId; }).length > 0; // проверяем что лайк есть и он мой
        this._element.querySelector('.pictures__like-counter').textContent = data.likes.length;
        if (this._isLiked) {
            this._element.querySelector('.pictures__like').classList.add('pictures__like_active');
        } else {
            this._element.querySelector('.pictures__like').classList.remove('pictures__like_active');
        }
    }

    deleteCard() {
        this._element.remove();
        this._element = null;
    }

    _setEventListeners() {
        this._element.querySelector('.pictures__delete').addEventListener('click', () => this._handleCardDelete());
        this._element.querySelector('.pictures__like').addEventListener('click', () => this._handleLikeClick());
        this._element.querySelector('.pictures__image').addEventListener('click', () => this._handleCardClick(this._name, this._link));
    }
}