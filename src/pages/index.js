import './style.css'
import '../vendor/normalize.css'
import { cards } from '../utils/constants.js'
// import { Template } from 'webpack'
import { Card } from '../components/Card.js'
import { Section } from '../components/Section'
const mainForm = document.querySelector('.container__form')
// const inputList = mainForm.querySelectorAll('.container__input')
const inputProduct = mainForm.querySelector('.container__input_type_product')
const inputAmount = mainForm.querySelector('.container__input_type_amount')
const productContainer = '.container__column_type_desired'
const obtainedContainer = '.container__column_type_obtained'

mainForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const card = createCard(inputProduct.value, inputAmount.value)
  addCard(card);
  inputProduct.value = ''
  inputAmount.value = ''
})

function createCard (product, amount) {

  const newCard = new Card(product, amount, '#card-template', transferCard, addCard)

  const card = newCard.generateCard()

  return card
}

function addCard (card) {
  container.addItem(card, productContainer)
}


const container = new Section(
  {
    renderer: (item) => {
      const card = createCard(item.product, item.amount)
      container.addItem(card, productContainer);
    },
  },
);

function transferCard (card) {
  container.addItem(card, obtainedContainer)
}

// добавление начального массива
container.renderItems(cards)
