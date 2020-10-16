import Api from "./Api";

export default class Section {
    constructor({ renderer }, containerSelector) {
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    renderItems(items) {
        items.reverse().forEach(item => this._renderer(item));
    }

    addInitialItem(element) {
        this._container.prepend(element);
    }
}