import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps'
import 'cypress-file-upload'

const destionationContainer = '#s2id_autogen1 .select2-choice'
const destinationField = '.select2-drop-active .select2-search .select2-input'
const addChildBtn = '.\30 1 .input-group .bootstrap-touchspin-up'
const searchBtn = '.gap-10 > .col-md-2:nth-child(4) > .btn-primary'
const cityResult = '.heading-title .text-primary'
const checkInField = 'input#checkin'
const checkOutField = 'input#checkout'
const highToLowRadioBtn = '.custom-radio div'
const topHotelDetailBtn = '#listing .loadAll:nth-child(1) .btn'
const topRoomBookBtn = '.room-item:nth-child(2) .btn'
const bookingInformationWording = '.panel-heading'
const kategoriTk3Dropdown = '.form-group #prod-subsubcategory'
const kategoriTk4Dropdown = '.form-group #prod-subsubsubcategory'

Given(`I go to PHPtravel homepage`, () => {
    cy.clearCookies()
    cy.visit(Cypress.env('PHPTRAVEL_URL'))
})

When(`I input {} in search destination field`, (city) => {
    cy.get(destionationContainer)
    .click()
    cy.get(destinationField)
    .type(city)
    .type('{enter}')
})

When(`I click the add Child button once`, () => {
    cy.get(addChildBtn)
    .click()
})

When(`I click the Search button`, () => {
    cy.get(searchBtn)
    .click()
})

Then(`I can see the result of Hotels list in {string}`, city => {
    cy.get(cityResult).should(element => {
      expect(element.text()).to.contain(city)
    })
})

When(`I input the Checkin date with {string}`, (date) => {
    cy.get(checkInField)
    .clear().type(date)
})

When(`I input the Checkout date with {string}`, (date) => {
    cy.get(checkOutField)
    .clear().type(date)
})

When(`I choose the filter High to Low price`, () => {
    cy.get(highToLowRadioBtn)
    .click()
})

When(`I click the top hotel detail button in the list`, () => {
    cy.get(topHotelDetailBtn)
      .click()
})

When(`I click the top room book button in the list`, () => {
  cy.get(topRoomBookBtn)
    .click()
})

Then(`I can see {string} in Booking page`, title => {
    cy.get(bookingInformationWording).should(element => {
      expect(element.text()).to.contain(title)
    })
})

When(`I fill in description field with {string} in Seller Panel add product page`, (keyword) => {
    cy.get(descriptionField)
      .type(keyword)
})

When(`I fill in notes field with {string} in Seller Panel add product page`, (keyword) => {
    cy.get(notesField)
      .type(keyword)
})

When(`I choose the option {string} for the Kategori Tingkat 1 dropdown`, (option) => {
  cy.get(kategoriTk1Dropdown)
    .select(option)
})

When(`I choose the option {string} for the Kategori Tingkat 2 dropdown`, (option) => {
  cy.get(kategoriTk2Dropdown)
    .select(option)
})

When(`I choose the option {string} for the Kategori Tingkat 3 dropdown`, (option) => {
  cy.get(kategoriTk3Dropdown)
    .select(option)
})

When(`I choose the option {string} for the Kategori Tingkat 4 dropdown`, (option) => {
  cy.get(kategoriTk4Dropdown)
    .select(option)
})

When(`I fill in harga field with {string} in Seller Panel add product page`, (keyword) => {
    cy.get(hargaField)
      .type(keyword)
})

When(`I fill in berat field with {string} in Seller Panel add product page`, (keyword) => {
    cy.get(beratField)
      .type(keyword)
})

When(`I fill in panjang field with {string} in Seller Panel add product page`, (keyword) => {
    cy.get(panjangField)
      .type(keyword)
})

When(`I fill in lebar field with {string} in Seller Panel add product page`, (keyword) => {
    cy.get(lebarField)
      .type(keyword)
})

When(`I fill in tinggi field with {string} in Seller Panel add product page`, (keyword) => {
    cy.get(tinggiField)
      .type(keyword)
})

When(`I click {string} button in Seller Panel add product page`, (wording) => {
    cy.get(tambahProdukBtn).should(element => {
      expect(element.text()).to.contain(wording)
    })
    .click()
    .wait(3000)
})

Then(`I can see the message {string} in a popup`, wording => {
    cy.get(messagePopup).should(element => {
        expect(element.text()).to.contain(wording)
      })
})

Then(`I can see that {string} is the name of the first product on the list`, wording => {
  cy.get(product1Name).should(element => {
      expect(element.text()).to.contain(wording)
    })
})

When(`I click options button for first product on Produk Sellerpanel`, () => {
  cy.get(optionProduct1Btn)
  .click()
})

When(`I click delete button for first product on Produk Sellerpanel`, () => {
  cy.get(deleteProduct1Btn)
  .click()
  .get(confirmDeleteProductBtn)
  .click()
})