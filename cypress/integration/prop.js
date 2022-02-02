/// <reference types="cypress" />

import 'cypress-react-selector'
import spok from 'cy-spok'

// The plugin cypress-react-selector provides two high-level commands for finding components.
// If you need to find the DOM element by React component prop or state, use the cy.react command.
// If you want to find and access the React component instance, use the cy.getReact command.

it('uses prop to find the component', () => {
  cy.visit('/')
  // find the React component
  cy.waitForReact(1000, '#root')
  cy.react('Example', { props: { initialCount: 0 } })
    .should('be.visible')
    .contains('button', 'Click me')
    .click()
    .click()

  cy.getReact('Example')
    .its(0)
    .should(
      spok({
        props: {
          initialCount: 0,
        },
      }),
    )
})
