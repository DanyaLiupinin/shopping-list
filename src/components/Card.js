class Card {
  constructor(product, amount, selector, transferCard, returnCard, deleteCard) {
    this._productName = product
    this._productAmount = amount
    this._selector = selector
    this._transferCard = transferCard
    this._returnCardBack = returnCard
    this._deleteCard = deleteCard
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._selector)
      .content
      .querySelector('.container__card')
      .cloneNode(true)

    return cardElement
  }

  generateCard() {
    this._card = this._getTemplate()
    this._product = this._card.querySelector('.container__card-product')
    this._amount = this._card.querySelector('.container__card-amount')

    this._product.textContent = this._productName
    this._amount.textContent = this._productAmount

    this._setEventListeners(this._card)

    return this._card
  }

  _obtainedProduct(card) {
    card.classList.add('container__card_type_obtained')
    card.querySelector('.container__card-amount').classList.add('container__card-amount_type_obtained')
    card.querySelector('.container__obtained-button').classList.add('container__obtained-button_inactive')
    card.querySelector('.container__return-button_inactive').classList.add('container__return-button')
    card.querySelector('.container__return-button_inactive').classList.remove('container__return-button_inactive')
    this._transferCard(card)
  }

  _returnCard (card) {
    card.classList.remove('container__card_type_obtained')
    card.querySelector('.container__card-amount').classList.remove('container__card-amount_type_obtained')
    card.querySelector('.container__obtained-button').classList.remove('container__obtained-button_inactive')
    card.querySelector('#returnCardButton').classList.add('container__return-button_inactive')
    this._returnCardBack(card)
  }

  _deleteCard (card) {
    this._deleteCard(card)
  }




  _setEventListeners(card) {

    card.querySelector('.container__obtained-button')
      .addEventListener('click', () => {
        this._obtainedProduct(card)
      })

    card.querySelector('#returnCardButton')
      .addEventListener('click', () => {
        this._returnCard(card)
      })

    card.querySelector('.container__delete-button')
      .addEventListener('click', () => {
        this._deleteCard(card)
      })

  }


}

export { Card }
