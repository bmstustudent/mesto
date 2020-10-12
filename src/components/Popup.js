export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._closeBtn = document.querySelector('.popup__close')
    }

    open() {
        this._popup.classList.add('popup_opened');
        // document.addEventListener('keydown', (event) => this._handleEscClose(event));
    }

    close() {
        this._popup.classList.remove('popup_opened');
        // document.removeEventListener('keydown', (event) => this._handleEscClose(event));
    }

    _handleEscClose(event) {
        if (event.key === 'Escape') {
            this.close();
        }
    }

    _handleOverlayClose(event) {
        if (event.target !== event.currentTarget) {
            return
        }
        this.close();
    }

    setEventListeners() {
        this._popup.querySelector('.popup__close').addEventListener('click', (event) => this.close(event));
        this._popup.addEventListener('mousedown', (event) => this._handleOverlayClose(event));
        document.addEventListener('keydown', (event) => this._handleEscClose(event));
    }
}