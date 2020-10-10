export default class UserInfo {
    constructor({ userNameSelector, userInfoSelector }) {
        this._userNameElement = document.querySelector(userNameSelector);
        this._userInfoElement = document.querySelector(userInfoSelector);
    }

    getUserInfo() {
        return { 
            user: this._userNameElement.textContent,
            info: this._userInfoElement.textContent 
        };
    }

    setUserInfo(data) {
        this._userNameElement.textContent = data.user;
        this._userInfoElement.textContent = data.info;
    }
}