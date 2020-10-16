import '../pages/index.css';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWIthForm from '../components/PopupWithForm.js';;
import FormValidator from '../components/FormValidator.js';
import PopupWithSubmit from '../components/PopupWithSubmit.js';
import UserInfo from '../components/UserInfo.js';
import { editButton, editForm, nameInput, jobInput, addButton, addForm, picturesTemplateSelector, avatarImg, avatarForm, userName, userAbout, token, url, validationParams, allSavedSubmits } from '../utils/variables.js';
import Api from '../components/Api.js';

function handleCardClick(name, link) {
    popupTypePicture.open(name, link);
}

let currentUserId = null;

function handleLikeClick(card, data) {
    const promise = card.isLiked() ? api.dislikeCard(data._id) : api.likeCard(data._id);
    promise
        .then((data) => {
            card.setLike(data);
        })
        .catch((err) => {
            console.log(`${err}`);
        });
}

const popupTypeDelete = new PopupWithSubmit('.popup_type_prevent');
popupTypeDelete.setEventListeners();

function handleCardDelete(card) {
    popupTypeDelete.setFormSubmitHandler(() => {
        api.deleteCard(card._id)
            .then(() => {
                card.deleteCard();

                popupTypeDelete.close();
            })
            .catch((err) => {
                console.log(`${err}`);
            });
    });
    popupTypeDelete.open();
}

function renderLoading(isLoading) {
    if (isLoading) {
        Array.from(allSavedSubmits).forEach((submit) => {
            submit.value = "Сохранение...";
        })
    } else {
        Array.from(allSavedSubmits).forEach((submit) => {
            submit.value = "Сохранить";
        })
    }
}

function newCardMaker(data, currentUserId, cardsList) {
    const newCard = new Card(data,
        handleCardClick, {
            handleLikeClick: () => handleLikeClick(newCard, data),
            handleCardDelete: () => handleCardDelete(newCard)
        },
        currentUserId,
        picturesTemplateSelector);
    const cardElement = newCard.generateCard();
    newCard.setLike(data);
    cardsList.addInitialItem(cardElement);
}

const validAdd = new FormValidator(validationParams, addForm);
validAdd.enableValidation();

const validEdit = new FormValidator(validationParams, editForm);
validEdit.enableValidation();

const validAvatar = new FormValidator(validationParams, avatarForm);
validAvatar.enableValidation();

const popupTypePicture = new PopupWithImage('.popup_type_picture');
popupTypePicture.setEventListeners();

const api = new Api({
    baseUrl: url,
    headers: {
        authorization: token,
        'Content-Type': 'application/json',
    }
})

const user = new UserInfo({ userNameElement: userName, userInfoElement: userAbout });

const popupTypeEdit = new PopupWIthForm({
    popupSelector: '.popup_type_edit',
    handleFormSubmit: (item) => {
        renderLoading(true);
        api.setUserInfo(item)
            .then((data) => {
                user.setUserInfo(data);
                popupTypeEdit.close();
            })
            .catch((err) => {
                console.log(`${err}`);
            })
            .finally(() => {
                renderLoading(false);
            })
    }
});

popupTypeEdit.setEventListeners();

editButton.addEventListener('click', () => {
    validEdit.updateErrorsAndButtonState(editForm);

    const userData = user.getUserInfo();

    nameInput.value = userData.name;
    jobInput.value = userData.about;
    popupTypeEdit.open();
});

const cardsList = new Section({
    renderer: (item) => {
        newCardMaker(item, currentUserId, cardsList);
    },
}, '.pictures__list');

const popupTypeAdd = new PopupWIthForm({
    popupSelector: '.popup_type_add',
    handleFormSubmit: (item) => {
        renderLoading(true);
        api.createCard(item)
            .then((data) => {
                newCardMaker(data, currentUserId, cardsList);
                popupTypeAdd.close();
            })
            .catch((err) => {
                console.log(`${err}`);
            })
            .finally(() => {
                renderLoading(false);
            })
    }
});

popupTypeAdd.setEventListeners();

addButton.addEventListener('click', () => {
    validAdd.updateErrorsAndButtonState(addForm);
    popupTypeAdd.open();
});

const popupTypeAvatar = new PopupWIthForm({
    popupSelector: '.popup_type_avatar',
    handleFormSubmit: (item) => {
        renderLoading(true);
        api.setAvatar(item)
            .then((data) => {
                avatarImg.style.backgroundImage = `url(${data.avatar})`;
                popupTypeAvatar.close();
            })
            .catch((err) => {
                console.log(`${err}`)
            })
            .finally(() => {
                renderLoading(false);
            })
    }
});

popupTypeAvatar.setEventListeners();

avatarImg.addEventListener('click', () => {
    validAvatar.updateErrorsAndButtonState(avatarForm);
    popupTypeAvatar.open();
});

Promise.all([api.getCards(), api.getUserInfo()])
    .then(([cards, userData]) => {
        user.setUserInfo(userData);
        avatarImg.style.backgroundImage = `url(${userData.avatar})`;
        currentUserId = userData._id;

        cardsList.renderItems(cards);
    })
    .catch((err) => {
        console.log(`${err}`);
    });