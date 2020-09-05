const root = document.querySelector('.root');

const profile = root.querySelector('.profile');
const profName = profile.querySelector('.profile__name');
const profText = profile.querySelector('.profile__job');
const popupOpenButton = profile.querySelector('.profile__button-edit')
const openPlacePopupButton = profile.querySelector('.profile__button-add');

const elementEL = root.querySelector('.element');
const cardsList = document.querySelector('.element__list');
const cardTemplateElement = document.querySelector('.element-template');
const socialLike = document.querySelectorAll('.element__social-like');

//popup-edit
const popupProfile = document.querySelector('.popup[data-type="profile"]');
const formElement = popupProfile.querySelector('.popup__content');
const nameInput = formElement.querySelector('.popup__prof-name');
const jobInput = formElement.querySelector('.popup__prof-text');
const popupCloseButton = popupProfile.querySelector('.popup__button-close')
const profFormSubmitButton = popupProfile.querySelector('.popup__button-save');

//popup-add
const editPlacePopup = document.querySelector('.popup-mesto[data-type="add"]');
const cardFormElement = editPlacePopup.querySelector('.popup-mesto__content');
const cardInputElement = cardFormElement.querySelector('.popup-mesto__prof-name');
const cardInputLinkEl = cardFormElement.querySelector('.popup-mesto__prof-text');
const closePlacePopupButton = editPlacePopup.querySelector('.popup-mesto__close');
const cardFormSubmitButton = cardFormElement.querySelector('.popup-mesto__button-save');

//popup-img
const popupFigure = document.querySelector('.popup-img[data-type="image"]');
const popupImgText = popupFigure.querySelector('.popup-img__name');
const popupImgFoto = popupFigure.querySelector('.popup-img__foto');
const popupImgCloseButton = popupFigure.querySelector('.popup-img__close');

initialCards.forEach(function(element) {
    generateCard(element.name, element.link);
});
const figureFoto = cardsList.querySelectorAll('.element__foto');

//функция открытия попап
function togglePopup(popup) {
    popup.classList.toggle('popup__opened');
}

//функция закрытия попап (кнопкой)
function closePopupToggle(popup) {
    popup.classList.remove('popup__opened');
}

//закрытие попапов на оверлей.
function closePopupOverlay(popup) {
    if (event.target !== event.currentTarget) { return }
    popup.classList.remove('popup__opened')
}

const popupToggleProf = function(event) {
    nameInput.value = profName.textContent;
    jobInput.value = profText.textContent;
    togglePopup(popupProfile)
};

const placePopupToggle = function() {
    editPlacePopup.classList.toggle('popup__opened');
    cardFormSubmitButton.setAttribute('disabled', true);
    cardFormSubmitButton.classList.add('popup__but-disabled');
    cardFormSubmitButton.classList.remove('popup__button-save');
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    profName.textContent = nameInput.value;
    profText.textContent = jobInput.value;
    popupToggle(editPlacePopup);
}

formElement.addEventListener('submit', formSubmitHandler);

function generateCard(name, link) {
    const card = cardTemplateElement.content.cloneNode(true);
    card.querySelector('.element__delete-but').addEventListener('click', deleteCard);
    card.querySelector('.element__text').textContent = name;
    card.querySelector('.element__foto').alt = name;
    card.querySelector('.element__foto').src = link;
    addCard(card);
}

function addCard(card) {
    cardsList.prepend(card);
}

function deleteCard(event) {
    const card = event.target.closest('.element__group');
    card.remove();
}

figureFoto.forEach((activeFoto) => {
    activeFoto.addEventListener('click', (evt) => {
        const figureFotoTarget = evt.target;
        popupFigure.classList.toggle('popup__opened');
        popupImgFoto.src = figureFotoTarget.src;
        const figureCard = figureFotoTarget.closest('.element__group');
        popupImgText.textContent = figureCard.querySelector('.element__text').textContent;
    });
});

socialLike.forEach((activButton) => {
    activButton.addEventListener('click', (evt) => {
        const socialLikeTarget = evt.target;
        socialLikeTarget.classList.toggle('element__social-likeactiv');
    });
});

const escCode = 27;
document.body.addEventListener('keyup', function(e) {
    if (e.keyCode === escCode) {
        popupProfile.classList.remove('popup__opened');
        editPlacePopup.classList.remove('popup__opened');
        popupFigure.classList.remove('popup__opened');
    };
}, false);

cardFormElement.addEventListener('submit', e => {
    e.preventDefault();
    const name = cardInputElement.value;
    const link = cardInputLinkEl.value;
    generateCard(name, link);
    cardFormElement.reset();
    popupToggle(editPlacePopup);
})

popupOpenButton.addEventListener('click', () => { popupToggleProf(popupProfile) });
openPlacePopupButton.addEventListener('click', () => { togglePopup(editPlacePopup) });
popupFigure.addEventListener('click', () => { togglePopup(popupFigure) })

popupCloseButton.addEventListener('click', () => { closePopupToggle(popupProfile) });
closePlacePopupButton.addEventListener('click', () => { closePopupToggle(editPlacePopup) });
popupImgCloseButton.addEventListener('click', () => { closePopupToggle(popupImgCloseButton) });

popupProfile.addEventListener('click', () => { closePopupOverlay(popupProfile) })
editPlacePopup.addEventListener('click', () => { closePopupOverlay(editPlacePopup) })
popupFigure.addEventListener('click', () => { closePopupOverlay(popupFigure) })