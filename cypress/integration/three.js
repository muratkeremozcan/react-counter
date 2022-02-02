/// <reference types="cypress" />

import 'cypress-react-selector'

it('checks the state', () => {
  cy.visit('/')
  cy.contains('[data-cy=count]', '0')
  cy.getByCy('add').click().click().click()
  cy.contains('[data-cy=count]', '3')

  // find the React component
  cy.waitForReact(1000, '#root')

  // equivalent

  // function component
  cy.getReact('Example').getCurrentState().should('eq', 3)

  // class component
  // cy.getReact('Example').getCurrentState().should('have.property', 'count', 3)
  // cy.getReact('Example').getCurrentState().should('deep.include', {
  //   count: 3,
  // })
  // cy.getReact('Example', { state: { count: 3 } })
})
