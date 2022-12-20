class Section {

  constructor({ renderer }, /*containerSelector*/) {

    this._renderer = renderer // функция отрисовки элементов

    //this._container = document.querySelector(containerSelector)
  }

  renderItems(items) { // отрисовываем карточки
    items.forEach(item => {
      this._renderer(item)
    })
  }


  addItem(element, containerSelector) { // добавляем на страницу
    this._container = document.querySelector(containerSelector)
    this._container.append(element)
  }

  removeItem(element, containerSelector) {
    this._container = document.querySelector(containerSelector)
    this._container.remove(element)
  }

}

export { Section }
