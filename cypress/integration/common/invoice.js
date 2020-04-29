import { Then, When } from 'cypress-cucumber-preprocessor/steps'

const viewInvoice = '.btn-success'
const visaBookDetailWording = 'h3 span'
const firstName = '.confirmation-list li:nth-child(1) span:nth-child(2)'
const lastName = '.confirmation-list li:nth-child(2) span:nth-child(2)'
const phone = '.confirmation-list li:nth-child(3) span:nth-child(2)'
const fromCty = '.confirmation-list li:nth-child(4) span:nth-child(2)'
const toCty = '.confirmation-list li:nth-child(5) span:nth-child(2)'
const date = '.confirmation-list li:nth-child(7) span:nth-child(2)'

When(`I click view Invoice button`, () => {
    cy.get(viewInvoice)
    .click()
   })

Then(`I can see that I am in Visa Booking Detail page`, () => {
    cy.get(visaBookDetailWording).should(element => {
      expect(element.text()).to.contain('Booking Details')
    })
})

Then(`I can see my Invoice data First Name is (string)`, (name) => {
    cy.get(firstName).should(element => {
      expect(element.text()).to.contain(name)
    })
})

Then(`I can see my Invoice data Last Name is (string)`, (name) => {
    cy.get(lastName).should(element => {
      expect(element.text()).to.contain(name)
    })
})

Then(`I can see my Invoice data Phone Number is (string)`, (phoneNo) => {
    cy.get(phone).should(element => {
      expect(element.text()).to.contain(phoneNo)
    })
})

Then(`I can see my Invoice data From Country is (string)`, (country) => {
    cy.get(fromCty).should(element => {
      expect(element.text()).to.contain(country)
    })
})

Then(`I can see my Invoice data To Country is (string)`, (country) => {
    cy.get(toCty).should(element => {
      expect(element.text()).to.contain(country)
    })
})

Then(`I can see my Invoice data Date is (string)`, (dateVisa) => {
    cy.get(date).should(element => {
      expect(element.text()).to.contain(dateVisa)
    })
})

Then(`I can see my Invoice data From Country is (string) To Country is (string)`, (country1, country2) => {
    cy.get(fromCty).should(element => {
      expect(element.text()).to.contain(country1)
    })
    cy.get(toCty).should(element => {
        expect(element.text()).to.contain(country2)
      })
})