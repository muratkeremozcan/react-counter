// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('getByCy', (selector, ...args) =>
  cy.get(`[data-cy="${selector}"]`, ...args),
)

Cypress.Commands.add('getByCyLike', (selector, ...args) =>
  cy.get(`[data-cy*=${selector}]`, ...args),
)

// https://stackoverflow.com/questions/29321742/react-getting-a-component-from-a-dom-element-for-debugging/39165137#39165137
export const getReactFiber = (el) => {
  const key = Object.keys(el).find((k) => {
    return (
      k.startsWith('__reactFiber$') || // react 17+
      k.startsWith('__reactInternalInstance$') // react <17
    )
  })
  if (!key) {
    return
  }
  return el[key]
}

// react 16+
export const getComponent = (fiber) => {
  let parentFiber = fiber.return
  while (typeof parentFiber.type == 'string') {
    parentFiber = parentFiber.return
  }
  return parentFiber
}

Cypress.Commands.add('getComponent', { prevSubject: 'element' }, ($el) => {
  const fiber = getReactFiber($el[0])
  if (!fiber) {
    throw new Error('Could not find React Fiber')
  }
  const component = getComponent(fiber)
  if (!component) {
    throw new Error('Could not find React Component')
  }
  if (!component.stateNode) {
    throw new Error('Could not find React Component stateNode')
  }
  return component.stateNode
})
