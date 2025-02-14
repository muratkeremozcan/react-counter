/// <reference types="cypress" />

it('counts', () => {
  cy.visit('/')
  cy.contains('[data-cy=count]', '0')
  cy.getByCy('add').click().click()
  cy.contains('[data-cy=count]', '2')
  cy.contains('button', 'Double').click()
  cy.contains('[data-cy=count]', '4')
})
