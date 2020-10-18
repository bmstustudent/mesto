<h1 align="center">Mesto</h1>
<img src="./gif/mesto_header.png" width="100%" alt="место фото" href="https://bmstustudent.github.io/mesto/index.html" target= blank> 

[Ссылка на сам проект](https://bmstustudent.github.io/mesto/index.html)

## Макет предоставлен Yandex-praktikum:
[Макет 4](https://www.figma.com/file/StZjf8HnoeLdiXS7dYrLAh/JavaScript.-Sprint-4)
[Макет 5](https://www.figma.com/file/nlYpT4VhFiwimn2YlncrcF/JavaScript.-Sprint-5?node-id=0%3A1)
[Макет 6](https://www.figma.com/file/XNaGNEZD5NEjeyJzAT4gMb/JavaScript.-Sprint-6)
[Макет 9](https://www.figma.com/file/hhhIavVTeuilfPPZ6sbifl/JavaScript.-Sprint-9?node-id=0%3A1)

## Фотографии брал с сайта
[Unsplash](https://unsplash.com/)
## Использованы :
 - HTML5, CSS3, JS
 - Использована методология БЭМ

## Проектная работа 4:
### Вёрстка: 
- добавлен попап редактирования профиля
- предусмотренно переполнение содержимого в блоке
### JavaScript:
- реализованно открытие и закрытие попапа
- поля формы заполненны значениями, которые отображаются на странице
- реализованно редактирование имени и информации о себе

## Проектная работа 5:
- при загрузке на странице есть 6 карточек, которые добавляет JavaScript
- реализованна форма добавления карточки
- возможность ставить лайк карточке
- удаление карточки
- реализованно открытие попапа с картинкой (zoom)

## Проектная работа 6:

### Реализованна возможность:
- валидация формы «Редактировать профиль»
- валидация формы «Новое место»
- закрытие попапа кликом на оверлей
- закрытие попапа нажатием на Esc

## Проектная работа 7:

### Создание класса Card
- принимает в конструктор её данные и селектор её template-элемента;
- содержит приватные методы, которые работают с разметкой, устанавливают слушателей событий;
- содержит приватные методы для каждого обработчика;
- содержит один публичный метод, который возвращает полностью работоспособный и наполненный данными элемент карточки.

### Создание класса FormValidator:
- принимает в конструктор объект настроек с селекторами и классами формы;
- принимает вторым параметром элемент той формы, которая валидируется;
- имеет приватные методы, которые обрабатывают форму: проверяют валидность поля, изменяют состояние кнопки сабмита, устанавливают все обработчики;
- имеет один публичный метод enableValidation, который включает валидацию формы.

### Разбивка JavaScript на модули:
- классы Card и FormValidator экспортируются из соответствующих файлов, импортируются в index.js и используются в нём
- отдельные js-файлы подключены в index.html как модули

## Проектная работа 8:

### Рефакторинг кода:
- создание класса Section, который отвечает за отрисовку элементов на странице.
- создание класса Popup, который отвечает за открытие и закрытие попапа.
- создание класса PopupWithImage, который наследует от Popup. Этот класс перезаписывает родительский метод open. В методе open класса PopupWithImage нужно вставлять в попап картинку и атрибут src изображения и подпись к картинке.
- создание класса UserInfo: отвечает за управление отображением информации о пользователе на странице.

### Настроена сборка Вебпаком:
![alt pic](https://github.com/bmstustudent/mesto/blob/master/build_webpack.png)

# Пример, как работает открыть/закрыть popup:
![alt gif](https://github.com/bmstustudent/mesto/blob/master/gif/mesto_animation.gif)

