export default class Api {
    constructor({ baseUrl, headers }) {
        this.baseUrl = baseUrl;
        this.headers = headers;
    }

    getUserInfo() {
        return fetch(`${this.baseUrl}users/me`, {
                headers: this.headers
            })
            .then(this._getResponseData)
    }

    getCards() {
        return fetch(`${this.baseUrl}cards`, {
                headers: this.headers,
            })
            .then(this._getResponseData)
    }

    setUserInfo(item) {
        return fetch(`${this.baseUrl}users/me`, {
                method: 'PATCH',
                headers: this.headers,
                body: JSON.stringify({
                    name: item.name,
                    about: item.about
                })
            })
            .then(this._getResponseData)
    }

    createCard(newCard) {
        return fetch(`${this.baseUrl}cards`, {
                method: 'POST',
                headers: this.headers,
                body: JSON.stringify({
                    name: newCard.name,
                    link: newCard.link,
                })
            })
            .then(this._getResponseData)
    }

    deleteCard(id) {
        return fetch(`${this.baseUrl}cards/${id}`, {
                method: 'DELETE',
                headers: this.headers,
            })
            .then(this._getResponseData)
    }

    likeCard(id) {
        return fetch(`${this.baseUrl}cards/likes/${id}`, {
                method: 'PUT',
                headers: this.headers,
            })
            .then(this._getResponseData)
    }

    dislikeCard(id) {
        return fetch(`${this.baseUrl}cards/likes/${id}`, {
                method: 'DELETE',
                headers: this.headers,
            })
            .then(this._getResponseData)
    }

    setAvatar(avatar) {
        return fetch(`${this.baseUrl}users/me/avatar`, {
                method: 'PATCH',
                headers: this.headers,
                body: JSON.stringify(avatar),
            })
            .then(this._getResponseData)
    }
    _getResponseData(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }
}