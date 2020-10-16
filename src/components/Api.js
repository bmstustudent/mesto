export default class Api {
    constructor({ baseUrl, headers }) {
        this.baseUrl = baseUrl;
        this.headers = headers;
    }

    getUserInfo() {
        return fetch(`${this.baseUrl}users/me`, {
                headers: this.headers,
            })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`Ошибка: ${res.status}`)
            })
    }

    getCards() {
        return fetch(`${this.baseUrl}cards`, {
                headers: this.headers,
            })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`Ошибка: ${res.status}`)
            })
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
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`Ошибка: ${res.status}`)
            })
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
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`Ошибка: ${res.status}`)
            })
    }

    deleteCard(id) {
        return fetch(`${this.baseUrl}cards/${id}`, {
                method: 'DELETE',
                headers: this.headers,
            })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`Ошибка: ${res.status}`)
            })
    }

    likeCard(id) {
        return fetch(`${this.baseUrl}cards/likes/${id}`, {
                method: 'PUT',
                headers: this.headers,
            })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`Ошибка: ${res.status}`)
            })
    }

    dislikeCard(id) {
        return fetch(`${this.baseUrl}cards/likes/${id}`, {
                method: 'DELETE',
                headers: this.headers,
            })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`Ошибка: ${res.status}`)
            })
    }

    setAvatar(avatar) {
        return fetch(`${this.baseUrl}users/me/avatar`, {
                method: 'PATCH',
                headers: this.headers,
                body: JSON.stringify(avatar),
            })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`Ошибка: ${res.status}`)
            })
    }
}