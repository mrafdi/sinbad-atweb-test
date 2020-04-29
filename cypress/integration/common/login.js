import { Then, Given, When } from 'cypress-cucumber-preprocessor/steps'

const myAccountBtn = '.dropdown-login #dropdownCurrency'
const loginMenuBtn = '.dropdown-login .active'
const emailField = 'input[type="email"]'
const passwordField = 'input[type="password"]'
const loginBtn = 'button[type="submit"]'
const profileName = '.text-align-left'
const errorMsg = 'div.toast-message'

When(`I go to PHPtravel website login page`, () => {
    cy.get(myAccountBtn)
    .click()
    cy.get(loginMenuBtn)
    .click()
})

When(`I login to PHPtravel website`, () => {
  cy.get(emailField)
  .type(Cypress.env('EMAIL_PHPTRAVEL'))
  // .type('{enter}')
  cy.get(passwordField)
    // .click()
    .type(Cypress.env('PASSWORD_PHPTRAVEL'))
    .get(loginBtn).click()
    .wait(3000)
})

Then(`I can see that I logged in as {string} in PHPtravel web`, name => {
    cy.get(profileName).should(element => {
      expect(element.text()).to.contain('Hi, '+name)
    })
})