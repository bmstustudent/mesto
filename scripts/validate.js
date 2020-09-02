const showInputError = (form, input, errorSelector, controlSelector, errorMessage) => { //выводит ошибку валидации
    const errorElement = input.closest(controlSelector).querySelector(errorSelector);
    input.classList.add('form__input_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('form__input-error_active');
};

const hideInputError = (form, input, errorSelector, controlSelector) => { //убирает ошибку валиадации
    const errorElement = input.closest(controlSelector).querySelector(errorSelector);
    input.classList.remove('form__input_type_error');
    errorElement.classList.remove('form__input-error_active');
    errorElement.textContent = '';
};

const checkInputValidity = (form, input, errorSelector, controlSelector) => { //выбора валидации
    if (!input.validity.valid) {
        showInputError(form, input, errorSelector, controlSelector, input.validationMessage);
    } else {
        hideInputError(form, input, errorSelector, controlSelector);
    }
};

const setEventListeners = (form, controlSelector, inputSelector, errorSelector) => { //функция слушателя инпутов
    const inputList = Array.from(form.querySelectorAll(inputSelector));
    const buttonElement = form.querySelector('.popup__button-save');

    inputList.forEach((input) => {
        input.addEventListener('input', function() {
            checkInputValidity(form, input, errorSelector, controlSelector);
            toggleButtonState(form, buttonElement)
        });
    });
};

function enableValidation({ formSelector, controlSelector, inputSelector, errorSelector }) { //функция слушателя submit 
    let formList = Array.from(document.querySelectorAll('.form'));
    formList.forEach((form) => {
        form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        setEventListeners(form, controlSelector, inputSelector, errorSelector);
    });
}

enableValidation({
    formSelector: '.form',
    controlSelector: '.popup__control',
    inputSelector: '.popup__input',
    errorSelector: '.popup__error',
});

function toggleButtonState(form, buttonElement) {
    if (form.checkValidity()) {
        buttonElement.removeAttribute('disabled');
        buttonElement.classList.remove('popup__but-disabled');
        buttonElement.classList.add('popup__button-save');
    } else {
        buttonElement.setAttribute('disabled', true);
        buttonElement.classList.add('popup__but-disabled');
        buttonElement.classList.remove('popup__button-save');
    }
};