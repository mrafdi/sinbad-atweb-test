import { Then, When } from 'cypress-cucumber-preprocessor/steps'

const visaMenuBtn = '.main-menu-nav ul:nth-child(2) a'
const fromCtyContainer = '.gap-10 .col-md-4:nth-child(1) .chosen-single span'
const fromCtyField = '.gap-10 .col-md-4:nth-child(1) .chosen-search input'
const toCtyContainer = '.gap-10 .col-md-4:nth-child(2) .chosen-single span'
const toCtyField = '.gap-10 .col-md-4:nth-child(2) .chosen-search input'
const visaDateField = '.visadate'
const submitBtn = '.gap-10 .col-md-2:nth-child(4) .clear~button.btn-block'
const visaPageWording = '.text h5'
const firstNameField = 'input[name="first_name"]'
const lastNameField = 'input[name="last_name"]'
const emailField = 'input[name="email"]'
const emailConfirmField = 'input[name="confirmemail"]'
const phoneField = 'input[name="phone"]'
const bookingVisaBtn = 'button.completebook'
const visaSubmittedWording = 'h4.wow strong'

When(`I click Visa menu on profile`, () => {
    cy.get(visaMenuBtn)
    .click()
})

When(`I input {} in From Country field`, (country) => {
    cy.get(fromCtyContainer)
    .click()
    cy.get(fromCtyField)
    .type(country)
    .type('{enter}')
})

When(`I input {} in To Country field`, (country) => {
    cy.get(toCtyContainer)
    .click()
    cy.get(toCtyField)
    .type(country)
    .type('{enter}')
})

When(`I input {} in Visa Date field`, (date) => {
    cy.get(visaDateField)
    .type(date)
})

When(`I click the Submit button`, () => {
    cy.get(submitBtn)
    .click()
})

Then(`I can see that I am in Visa form page`, () => {
    cy.get(visaPageWording).should(element => {
      expect(element.text()).to.contain('To submit your visa for approval please fill-up the below form.')
    })
})

When(`I input the First Name field with {string}`, (name) => {
    cy.get(firstNameField)
    .type(name)
})

When(`I input the Last Name field with {string}`, (name) => {
    cy.get(lastNameField)
    .type(name)
})

When(`I input the Email field with {string}`, (email) => {
    cy.get(emailField)
    .type(email)
})

When(`I input the Email Confirmation field with {string}`, (email) => {
    cy.get(emailConfirmField)
    .type(email)
})

When(`I input the Phone field with {string}`, (phone) => {
    cy.get(phoneField)
    .type(phone)
})

When(`I click the Booking button`, () => {
    cy.get(bookingVisaBtn)
    .click()
})

Then(`I can see that my Visa is already submitted`, () => {
    cy.get(visaSubmittedWording).should(element => {
      expect(element.text()).to.contain('Visa Submitted')
    })
})