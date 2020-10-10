export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
    }

    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', () => this._handleEscClose());
    }

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', () => this._handleEscClose());
    }

    _handleEscClose() {
        if(event.key === 'Escape') {
            this.close();
        }
    }

    _handleOverlayClose() {
        if(event.target === event.currentTarget) {
            this.close();
        }
    }

    setEventListeners() {
        this._popup.querySelector('.popup__close').addEventListener('click', () => this.close());
        this._popup.addEventListener('mousedown', () => this._handleOverlayClose());
    }
}