import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector, popupImage) {
        super(popupSelector);
        this._popupImage = popupImage;
        this._popupCaption = this._popup.querySelector('.popup__caption');
    }

    open(name, link) {
        super.open();
        this._name = name;
        this._link = link;
        this._popupImage.querySelector('.popup__caption').textContent = this._name;
        this._popupImage.querySelector('.popup__image').src = this._link;
    }

    close() {
        super.close();
        this._popupImage.src = '';
        this._popupImage.alt = '';
        this._popupCaption.textContent = '';
    }
}