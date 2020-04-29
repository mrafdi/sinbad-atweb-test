import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps'

const destinationContainer = '.col-md-3:nth-child(1) .select2-chosen'
const destinationField = '.select2-drop-active .select2-search .select2-input'
const addChildBtn = '.01 .input-group .bootstrap-touchspin-up'
const searchBtn = '.gap-10 > .col-md-2:nth-child(4) > .btn-primary'
const cityResult = '.heading-title .text-primary'
const checkInField = 'input#checkin'
const checkOutField = 'input#checkout'
const highToLowRadioBtn = '.custom-radio div'
const topHotelDetailBtn = '#listing .loadAll:nth-child(1) .btn'
const topRoomBookBtn = '.room-item:nth-child(2) .btn'
const bookingInformationWording = '.panel-heading'

Given(`I go to PHPtravel homepage`, () => {
    cy.clearCookies()
    cy.visit(Cypress.env('PHPTRAVEL_URL'))
    cy.wait(5000)
})

When(`I input {} in search destination field`, (city) => {
    cy.get(destinationContainer)
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