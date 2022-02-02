/// <reference types="cypress" />

import 'cypress-react-selector'
import { getReactFiber, getComponent } from './utils'

it('works', () => {
  cy.visit('/')
  cy.waitForReact(1000, '#root')

  cy.getReact('Example').getProps().should('have.property', 'initialCount', 0)

  // function component
  cy.getReact('Example').getCurrentState().its('baseState').should('eq', 0)
  cy.getByCy('add').click().click()
  cy.getReact('Example').getCurrentState().should('eq', 2)

  // class component
  // cy.getReact('Example').getCurrentState().should('have.property', 'count', 0)
  // cy.getByCy('add').click().click()
  // cy.getReact('Example').getCurrentState().should('have.property', 'count', 2)
})

it('sets state', () => {
  cy.visit('/')
  cy.waitForReact(1000, '#root')
  cy.getReact('Example').then((e) => {
    console.log(e)
    const fiber = getReactFiber(e[0].node)
    console.log(fiber)
    const compFiber = getComponent(fiber)
    console.log('compFiber', compFiber)

    // how do we make it work in a function component?
    // compFiber.memoizedState.baseState = 10
    // compFiber.memoizedState.memoizedState = 10
    // compFiber.pendingProps.memoizedState = 10

    // class component
    // compFiber.stateNode.setState({ count: 10 })
  })

  // cy.contains('[data-cy=count]', '10').should('be.visible')
})

// for function components, this depends on figuring out the previous test
it.skip('calls the components method', () => {
  cy.visit('/')
  cy.waitForReact(1000, '#root')
  cy.getByCy('add').click().click().click()
  cy.getReact('Example').then((e) => {
    console.log(e)
    const fiber = getReactFiber(e[0].node)
    console.log(fiber)
    const compFiber = getComponent(fiber)
    console.log('compFiber', compFiber)
    cy.log('calling **double()**')
    compFiber.stateNode.double()
  })

  cy.contains('[data-cy=count]', '6').should('be.visible')
})
