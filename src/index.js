import './styles/index.css';
import Card from './components/Card.js';
import Section from './components/Section.js';
import PopupWithImage from './components/PopupWithImage.js';
import PopupWIthForm from './components/PopupWithForm.js';;
import FormValidator from './components/FormValidator.js';
import UserInfo from './components/UserInfo.js';
import { cardsArray } from './utils/cards.js';
import { editButton, editForm, nameInput, jobInput, addButton, addForm, picturesTemplateSelector } from './utils/variables.js';

const validationParams = {
    formElement: '.popup__form',
    inputElement: '.popup__input',
    buttonElement: '.popup__submit',
    inactiveButtonClass: 'popup__submit_type_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorShowClass: 'popup__error_type_active',
    controlSelectorClass: '.popup__control',
    errorClass: '.popup__error'
};

const popupTypePicture = new PopupWithImage('.popup_type_picture');
popupTypePicture.setEventListeners();

function handleCardClick(name, link) {
    popupTypePicture.open(name, link);
}
const validAdd = new FormValidator(validationParams, addForm);
validAdd.enableValidation();

const validEdit = new FormValidator(validationParams, editForm);
validEdit.enableValidation();

const user = new UserInfo({ userNameSelector: '.profile__title', userInfoSelector: '.profile__subtitle' });

const cardsList = new Section({
    items: cardsArray,
    renderer: (item) => {
        const card = new Card(item, handleCardClick, picturesTemplateSelector);
        const cardElement = card.generateCard();
        cardsList.addAppend(cardElement);
    },
}, '.pictures__list')

cardsList.renderItems();

const popupTypeAdd = new PopupWIthForm({
    popupSelector: '.popup_type_add',
    handleFormSubmit: (item) => {
        const userCard = new Card(item, handleCardClick, picturesTemplateSelector);
        const cardElement = userCard.generateCard();
        cardsList.addItem(cardElement);
        popupTypeAdd.close();
    }
});

popupTypeAdd.setEventListeners();

const popupTypeEdit = new PopupWIthForm({
    popupSelector: '.popup_type_edit',
    handleFormSubmit: (item) => {
        user.setUserInfo(item);
        popupTypeEdit.close();
    }
});

popupTypeEdit.setEventListeners();

editButton.addEventListener('click', () => {
    const userInfo = user.getUserInfo();
    nameInput.value = userInfo.user;
    jobInput.value = userInfo.info;
    validEdit.updateErrorsAndButtonState(editForm);
    popupTypeEdit.open();
});

addButton.addEventListener('click', () => {
    validAdd.updateErrorsAndButtonState(addForm);
    popupTypeAdd.open();
});
// только учусь, поэтому проверил,что всё добавляется и сохраняется, но что бы удалить данные и снова открывать,пока для меня это не очевидно
// спасибо за ревью, очень много ДОпонял!!!