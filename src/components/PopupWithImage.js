import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector){
        super(popupSelector);
        this._popupImage = this._popup.querySelector('.popup__image');
        this._popupCaption = this._popup.querySelector('.popup__caption');
    }

    open() {
        super.open();
        const picturesElement = event.target.closest('.pictures__image');
        this._popupImage.src = picturesElement.src;
        this._popupImage.alt = picturesElement.alt;
        this._popupCaption.textContent = picturesElement.alt;
    }

    close() {
        super.close();
        this._popupImage.src = '';
        this._popupImage.alt = '';
        this._popupCaption.textContent = '';
    }
}