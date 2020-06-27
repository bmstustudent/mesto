const popup = document.querySelector('.popup-edit')
const popupOpenButton = document.querySelector('.profile__button-edit')
const popupCloseButton = popup.querySelector('.popup-edit__close')
let formElement = popup.querySelector('.popup-edit__form');
let nameInput = popup.querySelector('#name');
let jobInput = popup.querySelector('#about');
let profName = document.querySelector('.profile__name');
let profText = document.querySelector('.profile__job');


const popupToggle = function(event) {
    if (!popup.classList.contains('popup-edit_opened')) {
        nameInput.value = profName.textContent;
        jobInput.value = profText.textContent;
    }
    popup.classList.toggle('popup-edit_opened');
};

const closePopupOverlay = function(event) {
    if (event.target !== event.currentTarget) { return }
    popupToggle()
}

popupOpenButton.addEventListener('click', popupToggle)
popupCloseButton.addEventListener('click', popupToggle)
popup.addEventListener('click', closePopupOverlay)

function formSubmitHandler(evt) {
    evt.preventDefault();
    profName.textContent = nameInput.value;
    profText.textContent = jobInput.value;
    popupToggle()
}

formElement.addEventListener('submit', formSubmitHandler);