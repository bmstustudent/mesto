export default class FormValidator {
    constructor(settings) {
        this.form = document.querySelector(settings.form)
        this.input = document.querySelectorAll(settings.input)
        this.errorSelector = document.querySelectorAll(settings.errorSelector)
        this.controlSelector = document.querySelectorAll(settings.controlSelector)
        this.button = document.querySelector(settings.button)
        this.input.forEach((input, index) => {
            this._checkInputValidity(input, index);
            this._toggleButtonState();
        })
    }

    _setEventListener() { //функция слушателя инпутов
        this.input.forEach((input, index) => {
            input.addEventListener('input', () => {
                this._checkInputValidity(input, index);
                this._toggleButtonState();
            });
        })
    }

    _checkInputValidity(input, index) { //выбора валидации'
        if (!input.validity.valid) {
            this._showInputError(input, index);
        } else {
            this._hideInputError(input, index);
        }
    }

    _toggleButtonState() {
        if (this.form.checkValidity()) {
            this.button.removeAttribute('disabled');
            this.button.classList.remove('popup__but-disabled');
            this.button.classList.add('popup__button-save');
        } else {
            this.button.setAttribute('disabled', true);
            this.button.classList.add('popup__but-disabled');
            this.button.classList.remove('popup__button-save');
        }
    }

    _showInputError(input, index) { //выводит ошибку валидации
        input.classList.add('form__input_type_error');
        this.errorSelector[index].textContent = input.validationMessage;
        this.errorSelector[index].classList.add('form__input-error_active');
    }

    _hideInputError(input, index) { //убирает ошибку валиадации
        input.classList.remove('form__input_type_error');
        this.errorSelector[index].classList.remove('form__input-error_active');
        this.errorSelector[index].textContent = '';
    }

    enableValidation() {

        this.form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        this._setEventListener();
    }
}