/// <reference types="cypress" />

import { getReactFiber, getComponent } from './utils'

// the unknown is something like stateNode in function components
it.skip('calls Example double()', () => {
  cy.visit('/')
  cy.contains('[data-cy=count]', '0')
  cy.getByCy('add').click().click()
  cy.contains('[data-cy=count]', '2')
  cy.get('.Example').then((el$) => {
    const fiber = getReactFiber(el$[0])
    console.log(fiber)
    const component = getComponent(fiber)
    console.log(component.stateNode)
    cy.log('calling **double()**')
    component.stateNode.double()
  })
  cy.contains('[data-cy=count]', '4')
})
